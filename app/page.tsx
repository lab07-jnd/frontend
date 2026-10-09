
"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [esqueceuSenha, setEsqueceuSenha] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (esqueceuSenha) {
      alert("Recuperação de senha ainda não integrada.");
      return;
    }

    console.log("Login:", { email });
    alert("Login pronto para integração com a API!");
  }

  return (
    <main className="min-h-screen bg-[#f8f9ff] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl min-h-[550px] bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* LADO ESQUERDO */}
        <section className="hidden md:flex bg-[#00375E] text-white p-12 flex-col justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={32} />
            <h1 className="text-2xl font-bold">Gestão de Empresas</h1>
          </div>

          <div className="animate-[fadeIn_0.8s_ease-out]">
            <UsersRound
              size={65}
              className="mb-8 text-blue-200"
            />

            <h2 className="text-4xl font-bold leading-tight">
              Gestão de pessoas,
              <br />
              simplificada.
            </h2>

            <p className="mt-5 text-blue-100 text-sm leading-7">
              Organize sua equipa, acompanhe processos
              e tenha todas as informações num só lugar.
            </p>
          </div>

          <p className="text-xs text-blue-200">
            © Gestão De Empresas. Todos os direitos reservados.
          </p>
        </section>

        {/* LADO DIREITO */}
        <section className="flex flex-col justify-center px-7 py-12 sm:px-12">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#00375E]">
              {esqueceuSenha
                ? "Recuperar senha"
                : "Bem-vindo de volta!"}
            </h2>

            <p className="text-gray-500 mt-3 text-sm">
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
                className="block text-sm font-medium text-[#00375E] mb-2"
              >
                E-mail
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#00375E] focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>

            {/* SENHA */}
            {!esqueceuSenha && (
              <div>
                <label
                  htmlFor="senha"
                  className="block text-sm font-medium text-[#00375E] mb-2"
                >
                  Senha
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="senha"
                    type={mostrarSenha ? "text" : "password"}
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite sua senha"
                    className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#00375E] focus:ring-2 focus:ring-blue-100 transition-all"
                  />

                  <button
                    type="button"
                    aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00375E] cursor-pointer"
                  >
                    {mostrarSenha
                      ? <EyeOff size={19} />
                      : <Eye size={19} />}
                  </button>
                </div>
              </div>
            )}

            {!esqueceuSenha && (
              <div className="flex items-center justify-between gap-2">
                <label className="flex items-center gap-2 text-sm text-gray-500">
                  <input type="checkbox" className="accent-[#00375E]" />
                  Lembrar-me
                </label>

                <button
                  type="button"
                  onClick={() => setEsqueceuSenha(true)}
                  className="text-sm text-[#00375E] hover:underline cursor-pointer"
                >
                  Esqueceu sua senha?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#00375E] text-white py-3 rounded-lg font-semibold hover:bg-[#005184] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {esqueceuSenha ? "Recuperar senha" : "Entrar"}
              <ArrowRight size={18} />
            </button>

            {esqueceuSenha && (
              <button
                type="button"
                onClick={() => setEsqueceuSenha(false)}
                className="w-full text-sm text-[#00375E] hover:underline cursor-pointer"
              >
                Voltar ao login
              </button>
            )}
          </form>

          <p className="mt-10 text-center text-xs text-gray-400">
            Acesso seguro • Painel de Gestão de Empresas • Todos os direitos reservados
          </p>
        </section>
      </div>
    </main>
  );
}
