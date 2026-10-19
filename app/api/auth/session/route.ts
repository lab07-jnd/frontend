import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email ||
      !password
    ) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
      return NextResponse.json(
        { error: "API não configurada" },
        { status: 503 }
      );
    }

    const apiResponse = await fetch(`${apiUrl}/auth/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });

    if (!apiResponse.ok) {
      return NextResponse.json(
        { error: "Não foi possível iniciar sessão" },
        { status: apiResponse.status }
      );
    }

    const data: unknown = await apiResponse.json();

    if (
      typeof data !== "object" ||
      data === null ||
      !("token" in data) ||
      typeof data.token !== "string" ||
      !data.token
    ) {
      return NextResponse.json(
        { error: "Token inválido na resposta da API" },
        { status: 502 }
      );
    }

    const response = NextResponse.json({
      message: "Login realizado com sucesso",
    });

    response.cookies.set("auth_token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Erro de comunicação com a API" },
      { status: 502 }
    );
  }
}