import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, leftIcon, rightIcon, className, id, ...props }, ref) => {
    // Se nenhum ID for passado, cria um padrão com base no label para acessibilidade
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-text-secondary pointer-events-none flex items-center justify-center">
              {leftIcon}
            </div>
          )}

          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full rounded-lg border bg-surface-card px-4 py-2.5 text-sm text-text-primary outline-none transition-all duration-200 placeholder:text-text-secondary/60",
              "border-border-subtle focus:border-brand-primary focus:ring-2 focus:ring-brand-primary-light",
              leftIcon && "pl-11",
              rightIcon && "pr-11",
              error && "border-danger-text focus:border-danger-text focus:ring-red-100",
              "disabled:cursor-not-allowed disabled:opacity-60 bg-surface-card",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3.5 text-text-secondary flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p className="text-xs text-danger-text font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";