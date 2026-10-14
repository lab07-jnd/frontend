"use client";

import { InputHTMLAttributes, ReactNode, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: ReactNode;
}

export function Input({ label, icon, id, type, ...props }: InputProps) {
    const [show, setShow] = useState(false);
    const isPassword = type === "password";

    return (
        <div className="flex flex-col gap-2">
            {label && <label htmlFor={id} className="text-sm font-medium text-[#00375E]">{label}</label>}
            <div className="relative">
                {icon && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>}
                <input
                    id={id}
                    type={isPassword && show ? "text" : type}
                    className="w-full rounded-lg border border-gray-900 py-3 pl-12 pr-12 text-gray-900 outline-none focus:border-[#00375E] focus:ring-2 focus:ring-blue-100 transition-all"
                    {...props}
                />
                {isPassword && (
                    <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#00375E] cursor-pointer">
                        {show ? <EyeOff size={19} /> : <Eye size={19} />}
                    </button>
                )}
            </div>
        </div>
    );
}