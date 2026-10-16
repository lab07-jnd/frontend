
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (senha.length < 8) {
      setErro("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    // A integração com o Node.js será feita depois.
    alert("Formulário validado! Falta conectar à API.");
  }

  return (
    <main className="min-h-screen bg-bg-app flex items-center justify-center p-4">
      <div className="w-full max-w-5xl min-h-[550px] bg-surface-card rounded-2xl shadow-card border border-border-subtle overflow-hidden grid md:grid-cols-2">

        {/* PAINEL ESQUERDO */}
        <section className="hidden md:flex bg-sidebar text-white p-12 flex-col justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={32} className="text-brand-primary-light" />
            <h1 className="text-2xl font-bold">PontoFlow</h1>
          </div>

          <div>
            <UsersRound
              size={65}
              className="mb-8 text-brand-primary-light"
            />

            <h2 className="text-4xl font-bold leading-tight">
              Comece agora.
              <br />
              Simplifique sua gestão.
            </h2>

            <p className="mt-5 text-gray-200 text-sm leading-7">
              Crie sua conta e tenha acesso a uma plataforma
              moderna para gerir pessoas, equipas e registos
              de ponto.
            </p>
          </div>

          <p className="text-xs text-gray-300">
            © PontoFlow. Todos os direitos reservados.
          </p>
        </section>

        {/* FORMULÁRIO */}
        <section className="flex flex-col justify-center px-7 py-10 sm:px-12">

          <h2 className="text-3xl font-bold text-text-primary">
            Crie sua conta
          </h2>

          <p className="text-text-secondary mt-3 mb-7 text-sm">
            Preencha os dados para começar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NOME */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-text-primary mb-2">
                Nome completo
              </label>

              <div className="relative">
                <User size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  id="nome"
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Digite seu nome"
                  className="w-full pl-12 pr-4 py-3 border border-border-subtle bg-surface-card text-text-primary rounded-lg outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-light"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                E-mail
              </label>

              <div className="relative">
                <Mail size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-12 pr-4 py-3 border border-border-subtle bg-surface-card text-text-primary rounded-lg outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-light"
                />
              </div>
            </div>

            {/* SENHA */}
            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-text-primary mb-2">
                Senha
              </label>

              <div className="relative">
                <Lock size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  id="senha"
                  type={mostrarSenha ? "text" : "password"}
                  required
                  minLength={8}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Mínimo de 8 caracteres"
                  className="w-full pl-12 pr-12 py-3 border border-border-subtle bg-surface-card text-text-primary rounded-lg outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-light"
                />

                <button
                  type="button"
                  aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary cursor-pointer"
                >
                  {mostrarSenha ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* CONFIRMAR SENHA */}
            <div>
              <label htmlFor="confirmarSenha" className="block text-sm font-medium text-text-primary mb-2">
                Confirmar senha
              </label>

              <div className="relative">
                <Lock size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <input
                  id="confirmarSenha"
                  type={mostrarSenha ? "text" : "password"}
                  required
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  placeholder="Repita sua senha"
                  className="w-full pl-12 pr-4 py-3 border border-border-subtle bg-surface-card text-text-primary rounded-lg outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-light"
                />
              </div>
            </div>

            {/* ERRO */}
            {erro && (
              <p role="alert" className="text-red-600 text-sm">
                {erro}
              </p>
            )}

            {/* BOTÃO CRIAR CONTA */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-sidebar text-white py-3 rounded-lg font-semibold hover:bg-sidebar-hover hover:-translate-y-0.5 hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              Criar conta
              <UserPlus size={18} />
            </button>

            {/* VOLTAR AO LOGIN */}
            <p className="text-center text-sm text-text-secondary">
              Já tem uma conta?{" "}
              <Link href="/" className="text-sidebar font-semibold hover:underline">
                Entrar
              </Link>
            </p>

          </form>
        </section>
      </div>
    </main>
  );
}
