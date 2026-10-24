import { NextResponse, type NextRequest } from "next/server";

const COOKIE = "TOKEN_APLICACAO_FRONTEND";

function expirado(token: string) {
  try {
    const payload = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const { exp } = JSON.parse(atob(payload));
    return exp ? exp * 1000 < Date.now() : false;
  } catch {
    return true;
  }
}

export function proxy(req: NextRequest) {
  const token = req.cookies.get(COOKIE)?.value;
  const logado = !!token && !expirado(token);
  const publica = ["/login", "/register"].includes(req.nextUrl.pathname);

  if (!logado && !publica) return NextResponse.redirect(new URL("/login", req.url));
  if (logado && publica) return NextResponse.redirect(new URL("/collaborators", req.url));
  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"] };