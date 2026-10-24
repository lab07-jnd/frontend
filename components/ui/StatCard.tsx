type Props = { label: string; value: string };

export default function StatCard({ label, value }: Props) {
    return (
        <div className="rounded-lg border bg-white p-4">
            <p className="text-xs text-slate-500">{label}</p>
            <p className="text-xl font-bold text-slate-900">{value}</p>
        </div>
    );
}