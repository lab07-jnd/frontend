"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Clock, FileText, Building2, Users, CheckSquare, BarChart3, Settings } from "lucide-react";

const menu = [
  {
    grup: "Colaborador",
    itens: [
      { name: "Dashboard Colaborador", href: "/dashboard", icone: LayoutDashboard },
      { name: "Histórico de Ponto", href: "/historico", icone: Clock },
      { name: "Solicitar Ajuste", href: "/ajuste", icone: FileText },
    ],
  },
  {
    grup: "Gestão & Operação",
    itens: [
      { name: "Painel Gestor / RH", href: "/gestor", icone: Building2 },
      { name: "Colaboradores", href: "/collaborators", icone: Users },
      { name: "Aprovações", href: "/aprovacoes", icone: CheckSquare },
      { name: "Relatórios", href: "/relatorios", icone: BarChart3 },
      { name: "Configurações", href: "/configuracoes", icone: Settings },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col justify-between bg-[#0a3a5c] text-white">
      <div className="p-4">
        <h1 className="mb-6 font-bold">PontoFlow</h1>
        {menu.map(({ grup, itens }) => (
          <section key={grup} className="mb-4">
            <h2 className="mb-2 text-xs uppercase text-white/50">{grup}</h2>
            {itens.map(({ name, href, icone: Icone }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded px-3 py-2 text-sm hover:bg-white/10 ${pathname === href ? "bg-white/15" : ""
                  }`}
              >
                <Icone size={16} />
                {name}
              </Link>
            ))}
          </section>
        ))}
      </div>
      <footer className="border-t border-white/10 p-4 text-xs">Portaria 671 MTE</footer>
    </aside>
  );
}