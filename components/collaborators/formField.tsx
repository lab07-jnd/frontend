import { InputHTMLAttributes, ReactNode } from "react";
import Input from "@/components/ui/Input";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: ReactNode;
  error?: string;
};

export default function FormField({ label, error, ...props }: Props) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold">
      {label}
      <Input {...props} className={error ? "ring-1 ring-red-500" : ""} />
      {error && <span className="text-xs font-normal text-red-500">{error}</span>}
    </label>
  );
}