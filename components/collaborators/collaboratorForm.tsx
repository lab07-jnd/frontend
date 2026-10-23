"use client";

import { SyntheticEvent } from "react";
import FormField from "@/components/collaborators/formField";
import { createCollaborator, CollaboratorPayload } from "@/services/collaborators";

export default function CollaboratorForm() {
    async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget)) as CollaboratorPayload;
        await createCollaborator(data);
    }

    return (
        <div className="flex justify-center py-8">
            <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-xl flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
                <header>
                    <h1 className="text-2xl font-bold">New collaborator</h1>
                    <p className="text-sm text-slate-500">Fill in the data to register a new employee.</p>
                </header>

                <fieldset className="flex flex-col gap-4 rounded-xl border border-slate-200 p-5">
                    <legend className="px-2 text-sm font-semibold text-blue-600">Personal data</legend>
                    <FormField label="Full name" name="name" required />
                    <div className="grid grid-cols-2 gap-4">
                        <FormField label="CPF" name="cpf" placeholder="000.000.000-00" required />
                        <FormField label="Registration number" name="registrationNumber" required />
                    </div>
                    <FormField label="E-mail" name="email" type="email" required />
                </fieldset>

                <fieldset className="flex flex-col gap-4 rounded-xl border border-slate-200 p-5">
                    <legend className="px-2 text-sm font-semibold text-blue-600">Job data</legend>
                    <div className="grid grid-cols-2 gap-4">
                        <FormField label="Role" name="role" required />
                        <FormField label="Department" name="department" required />
                    </div>
                    <label className="flex flex-col gap-1 text-sm font-semibold">
                        Status
                        <select
                            name="status"
                            className="rounded-lg bg-[#e7eeff] px-3 py-2.5 text-xs font-normal outline-none"
                        >
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                        </select>
                    </label>
                </fieldset>

                <button
                    type="submit"
                    className="self-end rounded-lg bg-blue-600 px-8 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                    Save
                </button>
            </form>
        </div>
    );
}