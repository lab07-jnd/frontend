import type { ReactNode } from "react";

export function Legend({ color, text }: { color: string; text: string }) {
    return (
        <span className="flex items-center gap-2 text-[10px] text-slate-600">
            <i className="h-2 w-2 rounded-sm" style={{ background: color }} />
            {text}
        </span>
    );
}

type Props = {
    label: string;
    title: string;
    aside?: ReactNode;
    footer?: ReactNode;
    children: ReactNode;
};

export function ChartCard({ label, title, aside, footer, children }: Props) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{label}</p>
            <div className="mb-4 mt-1 flex items-start justify-between gap-4">
                <h2 className="max-w-48 text-base font-semibold leading-snug text-slate-900">{title}</h2>
                {aside}
            </div>
            {children}
            {footer && <div className="mt-3 text-xs text-slate-600">{footer}</div>}
        </section>
    );
}