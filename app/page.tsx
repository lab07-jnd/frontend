"use client";

import { useState } from "react";
import { authApi } from "@/services/authApi";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  UsersRound,
  LoaderCircle,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [esqueceuSenha, setEsqueceuSenha] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (esqueceuSenha) {
      alert("Recuperação de senha ainda não integrada.");
      return;
    }

    try {
      const response = await authApi.post<{ token: string }>("/auth/signIn", {
        email: email,
        password: senha,
      });

      const token = response.data.token;

      if (!token) {
        throw new Error("Token JWT não recebido.");
      }

      console.log("Login realizado com sucesso!");
      alert("Login realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Não foi possível iniciar sessão.");
    }
  }

  return (
    <main className="min-h-screen bg-bg-app flex items-center justify-center p-4">
      <div className="w-full max-w-5xl min-h-[550px] bg-surface-card rounded-2xl shadow-card border border-border-subtle overflow-hidden grid md:grid-cols-2">
        {/* LADO ESQUERDO - PAINEL INSTITUCIONAL */}
        <section className="hidden md:flex bg-sidebar text-white p-12 flex-col justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={32} className="text-brand-primary-light" />
            <h1 className="text-2xl font-bold">PontoFlow</h1>
          </div>

          <div className="animate-[fadeIn_0.8s_ease-out]">
            <UsersRound size={65} className="mb-8 text-brand-primary-light" />

            <h2 className="text-4xl font-bold leading-tight">
              Gestão de pessoas,
              <br />
              simplificada.
            </h2>

            <p className="mt-5 text-gray-200 text-sm leading-7">
              Organize sua equipe, acompanhe registros de ponto e tenha todas as
              informações num só lugar.
            </p>
          </div>

          <p className="text-xs text-gray-300">
            © PontoFlow. Todos os direitos reservados.
          </p>
        </section>

        {/* LADO DIREITO - FORMULÁRIO */}
        <section className="flex flex-col justify-center px-7 py-12 sm:px-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-text-primary">
              {esqueceuSenha ? "Recuperar senha" : "Bem-vindo de volta!"}
            </h2>

            <p className="text-text-secondary mt-3 text-sm">
              {esqueceuSenha
                ? "Informe o seu e-mail para recuperar o acesso."
                : "Entre com suas credenciais para continuar."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                E-mail
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                />

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-12 pr-4 py-3 border border-border-subtle bg-surface-card text-text-primary rounded-lg outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-light transition-all"
                />
              </div>
            </div>

            {/* SENHA */}
            {!esqueceuSenha && (
              <div>
                <label
                  htmlFor="senha"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Senha
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                  />

                  <input
                    id="senha"
                    type={mostrarSenha ? "text" : "password"}
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite sua senha"
                    className="w-full pl-12 pr-12 py-3 border border-border-subtle bg-surface-card text-text-primary rounded-lg outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-light transition-all"
                  />

                  <button
                    type="button"
                    aria-label={
                      mostrarSenha ? "Ocultar senha" : "Mostrar senha"
                    }
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary cursor-pointer"
                  >
                    {mostrarSenha ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>
            )}

            {!esqueceuSenha && (
              <div className="flex items-center justify-between gap-2">
                <label className="flex items-center gap-2 text-sm text-text-secondary">
                  <input type="checkbox" className="accent-sidebar" />
                  Lembrar-me
                </label>

                <button
                  type="button"
                  onClick={() => setEsqueceuSenha(true)}
                  className="text-sm text-sidebar hover:underline cursor-pointer"
                >
                  Esqueceu sua senha?
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              {/* BOTÃO ENTRAR */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-sidebar text-white py-3 rounded-lg font-semibold hover:bg-sidebar-hover hover:-translate-y-0.5 hover:shadow-card transition-all duration-300 cursor-pointer"
              >
                {esqueceuSenha ? "Recuperar senha" : "Entrar"}
                <ArrowRight size={18} />
              </button>

              {/* BOTÃO CRIAR CONTA */}
              {!esqueceuSenha && (
                <button
                  type="button"
                  disabled={loadingRegister}
                  onClick={() => {
                    setLoadingRegister(true);
                    window.location.href = "/register";
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-sidebar text-white py-3 rounded-lg font-semibold hover:bg-sidebar-hover hover:-translate-y-0.5 hover:shadow-card transition-all duration-300 cursor-pointer disabled:cursor-wait"
                >
                  {loadingRegister ? (
                    <>
                      <LoaderCircle
                        size={20}
                        className="animate-spin text-blue-300"
                      />
                      <span>A abrir...</span>
                    </>
                  ) : (
                    <>
                      <span>Crie sua conta</span>
                      <UsersRound size={18} />
                    </>
                  )}
                </button>
              )}
            </div>

            {esqueceuSenha && (
              <button
                type="button"
                onClick={() => setEsqueceuSenha(false)}
                className="w-full text-sm text-sidebar hover:underline cursor-pointer mt-2"
              >
                Voltar ao login
              </button>
            )}
          </form>

          <p className="mt-10 text-center text-xs text-text-secondary">
            Acesso seguro • Painel PontoFlow • Todos os direitos reservados
          </p>
        </section>
      </div>
    </main>
  );
}
