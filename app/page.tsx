"use client";

import { useState } from "react";
import { Lock, Mail, ArrowRight, ShieldCheck, UsersRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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
            <UsersRound size={65} className="mb-8 text-blue-200" />

            <h2 className="text-4xl font-bold leading-tight">
              Gestão de pessoas,
              <br />
              simplificada.
            </h2>

            <p className="mt-5 text-blue-100 text-sm leading-7">
              Organize sua equipe, acompanhe processos
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
              {esqueceuSenha ? "Recuperar senha" : "Bem-vindo de volta!"}
            </h2>

            <p className="text-gray-500 mt-3 text-sm">
              {esqueceuSenha
                ? "Informe o seu e-mail para recuperar o acesso."
                : "Entre com suas credenciais para continuar."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              id="email"
              label="E-mail"
              type="email"
              icon={<Mail size={19} />}
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {!esqueceuSenha && (
              <>
                <Input
                  id="senha"
                  label="Senha"
                  type="password"
                  icon={<Lock size={19} />}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />

                <div className="flex items-center justify-between gap-2">
                  <label className="flex items-center gap-2 text-sm text-gray-500">
                    <input type="checkbox" className="accent-[#00375E]" />
                    Lembrar-me
                  </label>

                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setEsqueceuSenha(true)}
                  >
                    Esqueceu sua senha?
                  </Button>
                </div>
              </>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              rightIcon={<ArrowRight size={18} />}
            >
              {esqueceuSenha ? "Recuperar senha" : "Entrar"}
            </Button>

            {esqueceuSenha && (
              <Button
                type="button"
                variant="link"
                className="w-full"
                onClick={() => setEsqueceuSenha(false)}
              >
                Voltar ao login
              </Button>
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