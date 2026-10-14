import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger-ghost" | "link";
type Size = "xs" | "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

const variants: Record<Variant, string> = {
    primary: "bg-[#00375E] text-white hover:bg-[#005184] hover:-translate-y-0.5 hover:shadow-lg",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
    "danger-ghost": "bg-transparent text-red-600 hover:bg-red-50",
    link: "bg-transparent text-sm text-[#00375E] hover:underline",
};

const sizes: Record<Size, string> = {
    xs: "h-6 px-2 text-xs gap-1",
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-4 text-base gap-2",
};

export function Button({
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    className = "",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`inline-flex cursor-pointer items-center justify-center rounded-lg font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${variant === "link" ? "" : sizes[size]} ${className}`}
            {...props}
        >
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    );
}