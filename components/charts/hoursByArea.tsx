"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartCard, Legend } from "./chartCard";

const data = [
  { area: "Engenharia", previsto: 2100, realizado: 2250 },
  { area: "RH / DP", previsto: 1400, realizado: 1450 },
  { area: "Comercial", previsto: 1900, realizado: 2000 },
  { area: "Operações", previsto: 2200, realizado: 2400 },
];

export function HoursByArea() {
  return (
    <ChartCard
      label="Distribuição de carga horária"
      title="Horas Trabalhadas vs. Previstas por Área"
      aside={
        <div className="flex flex-col gap-1">
          <Legend color="#1f4e79" text="Previsto CLT" />
          <Legend color="#00704a" text="Realizado Efetivo" />
        </div>
      }
      footer="Operações apresenta o maior índice de HE acumulado (+31h nesta quinzena)."
    >
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="area" axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11 }} />
          <Bar dataKey="previsto" fill="#1f4e79" radius={[4, 4, 0, 0]} />
          <Bar dataKey="realizado" fill="#00704a" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}