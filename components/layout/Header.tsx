

type Props = { nome: string; cargo: string };

export default function Header({ nome, cargo }: Props) {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <input placeholder="Buscar colaborador..." className="w-72 rounded border px-3 py-1.5 text-sm" />
            <span className="text-sm">{nome} · {cargo}</span>
        </header>
    );
}