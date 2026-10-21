"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdGridView, MdOutlineHistory, MdOutlineEditNote, MdDomain, MdGroups,
  MdFactCheck, MdBarChart, MdSettingsSuggest, MdOutlineSchedule,
  MdOutlineVerifiedUser, MdUnfoldMore,
} from "react-icons/md";

const menu = [
  {
    group: "Colaborador",
    items: [
      { name: "Dashboard Colaborador", href: "/dashboard", Icon: MdGridView },
      { name: "Histórico de Ponto", href: "/history", Icon: MdOutlineHistory },
      { name: "Solicitar Ajuste / Justificativa", href: "/adjustment", Icon: MdOutlineEditNote },
    ],
  },
  {
    group: "Gestão & Operação",
    items: [
      { name: "Painel Gestor / RH", href: "/manager", Icon: MdDomain },
      { name: "Colaboradores", href: "/collaborators", Icon: MdGroups },
      { name: "Aprovações", href: "/approvals", Icon: MdFactCheck, badge: 5 },
      { name: "Relatórios", href: "/reports", Icon: MdBarChart },
      { name: "Configurações da Empresa", href: "/settings", Icon: MdSettingsSuggest },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 flex-col justify-between bg-[#00355f] text-xs font-medium tracking-[0.24px] text-[#D0E4FF]">
      <div className="p-3">
        <div className="mb-3 flex items-center gap-2 px-1">
          <span className="grid size-8 place-items-center rounded-lg bg-white/10">
            <MdOutlineSchedule size={16} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-white">PontoFlow</p>
            <p className="text-[10px] uppercase text-[#D0E4FF]/60">Gestão & Ponto</p>
          </div>
          <span className="ml-auto size-1.5 rounded-full bg-emerald-400" />
        </div>

        <button className="mb-5 flex w-full items-center justify-between rounded bg-white/10 px-2 py-1.5 text-white">
          Acme Corp Matriz <MdUnfoldMore size={14} />
        </button>

        {menu.map(({ group, items }) => (
          <section key={group} className="mb-4">
            <h2 className="mb-1 px-2 text-[10px] uppercase text-[#D0E4FF]/60">{group}</h2>
            {items.map(({ name, href, Icon, badge }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 rounded px-2 py-1.5 hover:bg-white/10 ${pathname === href ? "bg-white/10" : ""
                  }`}
              >
                <Icon size={14} />
                {name}
                {badge && (
                  <span className="ml-auto rounded-full bg-emerald-900 px-1.5 text-[10px] text-emerald-300">
                    {badge}
                  </span>
                )}
              </Link>
            ))}
          </section>
        ))}
      </div>

      <footer className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-[11px]">
        <span className="flex items-center gap-1.5">
          <MdOutlineVerifiedUser size={12} /> Portaria 671 MTE
        </span>
        <span className="rounded bg-emerald-300 px-1.5 py-0.5 text-[10px] font-bold text-emerald-950">
          REP-P
        </span>
      </footer>
    </aside>
  );
}