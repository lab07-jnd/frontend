export default function StatCard({ label, valor }: { label: string; valor: string }) {
    return (
        <div className="rounded-lg border bg-white p-4">
            <p className="text-xs text-slate-500">{label}</p>
            <p className="text-xl font-bold text-slate-900">{valor}</p>
        </div>
    );
}