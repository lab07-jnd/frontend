import StatCard from "@/components/ui/StatCard";

const stats = [
  { label: "Total de colaboradores", value: "148" },
  { label: "Pontos batidos hoje", value: "139/142" },
  { label: "Em férias / afastados", value: "6" },
  { label: "Saldo de horas líquido", value: "+342h 15m" },
];

export default function CollaboratorsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Quadro de Colaboradores</h2>
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}