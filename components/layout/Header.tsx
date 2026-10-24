"use client";

import { useState } from "react";
import { MdSearch, MdNotificationsNone, MdChevronRight, MdPerson } from "react-icons/md";
import Input from "@/components/ui/Input";

type Props = { name: string; role: string };

const modes = ["Gestor", "Colaborador"];

export default function Header({ name, role }: Props) {
    const [mode, setMode] = useState("Gestor");

    return (
        <header className="flex h-16 items-center gap-8 border-b border-slate-100 bg-[#f9f9ff] px-8 text-sm">
            <p className="flex items-center gap-0.5 text-xs font-semibold">
                <span className="text-slate-900">Controle Empresarial</span>
                <MdChevronRight size={14} className="text-slate-700" />
                <span className="text-[#00355f]">Visão Geral</span>
            </p>

            <Input
                icon={<MdSearch size={16} className="text-slate-500" />}
                placeholder="Buscar colaborador, folha ou evento..."
                className="w-96"
            />

            <div className="ml-auto flex items-center gap-5">
                <div className="flex rounded-lg bg-[#dce9ff] p-1">
                    {modes.map((m) => (
                        <button
                            key={m}
                            onClick={() => setMode(m)}
                            className={`rounded-md px-3 py-1 font-medium text-[#00355f] ${mode === m ? "bg-white shadow-sm" : ""}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>

                <span className="h-6 w-px bg-slate-300" />

                <span className="relative">
                    <MdNotificationsNone size={22} className="text-slate-600" />
                    <span className="absolute right-0.5 top-0.5 size-2 rounded-full bg-red-500" />
                </span>

                <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-[#00355f] text-white">
                        <MdPerson size={20} />
                    </span>
                    <div className="leading-tight">
                        <p className="font-bold text-slate-900">{name}</p>
                        <p className="text-slate-600">{role}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}