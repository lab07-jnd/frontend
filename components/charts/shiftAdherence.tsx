"use client";

import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartCard, Legend } from "./chartCard";

const data = [
  { dia: "01 Out", presenca: 94, atrasos: 2.0 },
  { dia: "08 Out", presenca: 92, atrasos: 1.5 },
  { dia: "15 Out", presenca: 97, atrasos: 1.2 },
  { dia: "22 Out", presenca: 96, atrasos: 1.6 },
  { dia: "Hoje", presenca: 98, atrasos: 1.0 },
];

export function ShiftAdherence() {
  return (
    <ChartCard
      label="Tendência quinzenal"
      title="Aderência ao Turno & Pontualidade"
      aside={
        <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-semibold text-blue-900">
          97.8% Média
        </span>
      }
      footer={
        <div className="flex gap-6">
          <Legend color="#00704a" text="Índice de Presença (98%)" />
          <Legend color="#b91c1c" text="Atrasos (Média 1.8/dia)" />
        </div>
      }
    >
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="presenca" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00704a" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#00704a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="dia" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} padding={{ left: 16, right: 16 }} />
          <YAxis yAxisId="p" hide domain={[80, 100]} />
          <YAxis yAxisId="a" hide domain={[0, 10]} />
          <Area yAxisId="p" dataKey="presenca" stroke="#00704a" strokeWidth={2} fill="url(#presenca)" />
          <Line yAxisId="a" dataKey="atrasos" stroke="#b91c1c" strokeWidth={2} strokeDasharray="4 4" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}