"use client";

import { SyntheticEvent } from "react";
import FormField from "@/components/collaborators/formField";
import {
  createCollaborator,
  CollaboratorPayload,
} from "@/services/collaborators";

export default function CollaboratorForm() {
  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as CollaboratorPayload;
    await createCollaborator(data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl flex-col gap-5 rounded-2xl"
    >
      <fieldset className="flex flex-col gap-4 rounded-xl border border-slate-200 p-5">
        <legend className="px-2 text-sm font-semibold text-blue-600">
          Dados pessoais
        </legend>
        <FormField label="Nome completo" name="name" required />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="CPF"
            name="cpf"
            placeholder="000.000.000-00"
            required
          />
          <FormField
            label="Número de matrícula"
            name="registrationNumber"
            required
          />
        </div>
        <FormField label="E-mail" name="email" type="email" required />
      </fieldset>

      <fieldset className="flex flex-col gap-4 rounded-xl border border-slate-200 p-5">
        <legend className="px-2 text-sm font-semibold text-blue-600">
          Dados profissionais
        </legend>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Cargo" name="role" required />
          <FormField label="Departamento" name="department" required />
        </div>
        <label className="flex flex-col gap-1 text-sm font-semibold">
          Situação
          <select
            name="status"
            className="rounded-lg bg-[#e7eeff] px-3 py-2.5 text-xs font-normal outline-none"
          >
            <option value="ACTIVE">Ativo</option>
            <option value="INACTIVE">Inativo</option>
          </select>
        </label>
      </fieldset>

      <button
        type="submit"
        className="self-end rounded-lg bg-blue-600 px-8 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Salvar
      </button>
    </form>
  );
}
