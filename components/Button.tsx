import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-sidebar text-white hover:bg-sidebar-hover focus:ring-2 focus:ring-brand-primary/20",
  secondary:
    "bg-brand-primary-light text-brand-primary hover:bg-brand-primary/10 focus:ring-2 focus:ring-brand-primary/20",
  outline:
    "border border-border-subtle bg-surface-card text-text-primary hover:bg-bg-app focus:ring-2 focus:ring-border-subtle",
  danger:
    "bg-danger-bg text-danger-text hover:bg-red-200 focus:ring-2 focus:ring-danger-text/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-medium rounded-md",
  md: "px-4 py-2.5 text-sm font-semibold rounded-lg",
  lg: "px-6 py-3.5 text-base font-semibold rounded-lg",
};

export function Button({
  
  variant = "primary",
  size = "md",
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-200 outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-inherit",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}