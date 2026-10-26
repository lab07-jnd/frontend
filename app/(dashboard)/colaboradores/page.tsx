"use client";

import React, { useState } from "react";
import {
  Search,
  Download,
  UserPlus,
  MoreVertical,
  LayoutDashboard,
  Clock,
  FileText,
  Users,
  CheckSquare,
  BarChart3,
  Settings,
  ChevronDown,
  Filter,
  X,
  Bell,
  UserCheck,
  Calendar,
  Wallet,
  Building2,
} from "lucide-react";
import Modal from "@/components/modal";
import CollaboratorForm from "@/components/collaborators/collaboratorForm";

// Interface do Colaborador
export interface Colaborador {
  id: string;
  nome: string;
  fotoUrl?: string;
  matricula: string;
  cpf: string;
  cargo: string;
  setor: string;
  modeloJornada: string;
  horario: string;
  status: "Ativo" | "Em Férias" | "Afastado (Médico)" | "Inativo";
  saldoBancoHoras: string;
  saldoPositivo: boolean;
  ultimoRegistro: {
    tipo: string;
    detalhe: string;
  };
}

const COLABORADORES_MOCK: Colaborador[] = [
  {
    id: "1",
    nome: "Carlos Eduardo Silveira",
    matricula: "#40921",
    cpf: "***.482.108-**",
    cargo: "Analista de Sistemas Sênior",
    setor: "Tecnologia • Core Platform",
    modeloJornada: "40h Híbrido",
    horario: "09:00 - 18:00 (1h int.)",
    status: "Ativo",
    saldoBancoHoras: "+14h 45m",
    saldoPositivo: true,
    ultimoRegistro: {
      tipo: "17:14 Saída",
      detalhe: "Hoje • Reconhecimento Facial",
    },
  },
  {
    id: "2",
    nome: "Mariana Lopes Costa",
    matricula: "#38840",
    cpf: "***.192.741-**",
    cargo: "Gerente de Produto",
    setor: "Produto • Mobile Experience",
    modeloJornada: "40h Híbrido",
    horario: "08:30 - 17:30 (1h int.)",
    status: "Ativo",
    saldoBancoHoras: "-02h 10m",
    saldoPositivo: false,
    ultimoRegistro: {
      tipo: "16:50 Em andamento",
      detalhe: "Retorno Intervalo • Web",
    },
  },
  {
    id: "3",
    nome: "Rodrigo Albuquerque",
    matricula: "#41203",
    cpf: "***.914.331-**",
    cargo: "Especialista DevOps",
    setor: "Infraestrutura & Cloud",
    modeloJornada: "44h Remoto",
    horario: "Escala 5x2 Flexível",
    status: "Em Férias",
    saldoBancoHoras: "00h 00m",
    saldoPositivo: true,
    ultimoRegistro: {
      tipo: "18/10/2024",
      detalhe: "Retorno previsto: 07/11",
    },
  },
  {
    id: "4",
    nome: "Beatriz Mendes Ferreira",
    matricula: "#32901",
    cpf: "***.002.812-**",
    cargo: "Coordenadora de RH",
    setor: "Recursos Humanos • DHO",
    modeloJornada: "40h Presencial",
    horario: "08:00 - 17:00 (1h int.)",
    status: "Ativo",
    saldoBancoHoras: "+06h 30m",
    saldoPositivo: true,
    ultimoRegistro: {
      tipo: "17:02 Saída",
      detalhe: "Hoje • Terminal Biométrico",
    },
  },
  {
    id: "5",
    nome: "Lucas Takahashi",
    matricula: "#45112",
    cpf: "***.547.889-**",
    cargo: "Desenvolvedor Frontend",
    setor: "Tecnologia • Design System",
    modeloJornada: "40h Híbrido",
    horario: "10:00 - 19:00 (1h int.)",
    status: "Afastado (Médico)",
    saldoBancoHoras: "+01h 15m",
    saldoPositivo: true,
    ultimoRegistro: {
      tipo: "21/10/2024",
      detalhe: "Atestado 5 dias protocolado",
    },
  },
];

export default function FuncionariosPage() {
  const [busca, setBusca] = useState("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const colaboradoresFiltrados = COLABORADORES_MOCK.filter((c) => {
    const termo = busca.toLowerCase();
    return (
      c.nome.toLowerCase().includes(termo) ||
      c.cpf.includes(termo) ||
      c.matricula.toLowerCase().includes(termo) ||
      c.cargo.toLowerCase().includes(termo)
    );
  });

  const handleIsOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <main className="p-8 space-y-6">
      {/* Título e Botões de Ação */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-blue-900 tracking-wider uppercase">
            <span>GESTÃO & OPERAÇÃO</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400 font-normal">
              Conformidade Portaria 671 MTE
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mt-0.5">
            Quadro de Colaboradores
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Gestão centralizada de contratos ativos, parametrização de jornadas
            e conformidade de registros do ponto eletrónico.
          </p>
        </div>

        <div className="flex gap-2.5">
          <button className="flex items-center gap-2 px-3.5 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 shadow-xs">
            <Download className="w-4 h-4" /> Exportar Relatório
          </button>
          <button
            onClick={handleIsOpenModal}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#133254] hover:bg-[#0a2540] shadow-xs"
          >
            <UserPlus className="w-4 h-4" /> + Adicionar Novo Colaborador
          </button>
        </div>
      </div>

      {/* 2. Dashboard de Cards de Métricas (Métricas de RH) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-slate-500">
              Total Colaboradores
            </span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              148
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
              ↗ 100% regularizados
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-slate-500">
              Pontos Batidos Hoje
            </span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              139 / 142
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              97.8% de assiduidade
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <UserCheck className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-slate-500">
              Em Férias / Afastados
            </span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">
              6{" "}
              <span className="text-xs font-normal text-slate-500">
                colaboradores
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              4 férias, 2 atestados
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-slate-500">
              Saldo de Horas Líquido
            </span>
            <div className="text-2xl font-extrabold text-emerald-600 mt-1">
              +342h 15m
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              Fechamento em 12 dias
            </span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Wallet className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 3. Barra de Pesquisa, Filtros Dropdown e Tags */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por nome, CPF, e-mail corporativo ou matrícula..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2.5">
            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg px-3 py-2 focus:outline-none">
              <option>Setor: Todos</option>
              <option>Tecnologia</option>
              <option>Produto</option>
              <option>Recursos Humanos</option>
            </select>

            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg px-3 py-2 focus:outline-none">
              <option>Status: Todos</option>
              <option>Ativo</option>
              <option>Em Férias</option>
              <option>Afastado</option>
            </select>

            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-lg px-3 py-2 focus:outline-none">
              <option>Jornada: Todas</option>
              <option>40h Híbrido</option>
              <option>44h Remoto</option>
              <option>40h Presencial</option>
            </select>

            <button className="p-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-500 hover:text-slate-700">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tags de Filtros Aplicados */}
        <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Filtros aplicados:</span>
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1.5">
              Unidade: Matriz SP{" "}
              <X className="w-3 h-3 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </span>
            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1.5">
              Status: Ativo & Férias{" "}
              <X className="w-3 h-3 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </span>
          </div>
          <span className="text-slate-400 text-[11px]">
            Sincronizado via REP-P Cloud há 2 min
          </span>
        </div>
      </div>

      {/* Tabela de Colaboradores */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase text-slate-400 tracking-wider">
              <tr>
                <th className="p-4 w-10">
                  <input type="checkbox" className="rounded border-slate-300" />
                </th>
                <th className="p-4">COLABORADOR</th>
                <th className="p-4">CARGO / SETOR</th>
                <th className="p-4">MODELO & TURNO</th>
                <th className="p-4">STATUS</th>
                <th className="p-4">SALDO BANCO</th>
                <th className="p-4">ÚLTIMO REGISTRO</th>
                <th className="p-4 text-right">AÇÕES</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {colaboradoresFiltrados.map((colaborador) => (
                <tr
                  key={colaborador.id}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300"
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0">
                        {colaborador.nome
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">
                          {colaborador.nome}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Mat: {colaborador.matricula} • CPF: {colaborador.cpf}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-800">
                      {colaborador.cargo}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {colaborador.setor}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-800">
                      {colaborador.modeloJornada}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {colaborador.horario}
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        colaborador.status === "Ativo"
                          ? "bg-emerald-100 text-emerald-700"
                          : colaborador.status === "Em Férias"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {colaborador.status}
                    </span>
                  </td>
                  <td className="p-4 font-bold">
                    <span
                      className={
                        colaborador.saldoPositivo
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }
                    >
                      {colaborador.saldoBancoHoras}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-800">
                      {colaborador.ultimoRegistro.tipo}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {colaborador.ultimoRegistro.detalhe}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isOpenModal}
        onRequestClose={handleIsOpenModal}
        title="Novo Colaborador"
      >
        <CollaboratorForm />
      </Modal>
    </main>
  );
}
