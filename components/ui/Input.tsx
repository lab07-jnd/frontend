import { InputHTMLAttributes, ReactNode } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { icon?: ReactNode };

export default function Input({ icon, className = "", ...props }: Props) {
  return (
    <div className={`flex items-center gap-2 rounded-lg bg-[#e7eeff] px-3 py-2.5 ${className}`}>
      {icon}
      <input className="w-full bg-transparent text-xs outline-none placeholder:text-slate-500" {...props} />
    </div>
  );
}