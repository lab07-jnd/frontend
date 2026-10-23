export type CollaboratorPayload = {
  registrationNumber: string;
  name: string;
  cpf: string;
  email: string;
  role: string;
  department: string;
  status: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export async function createCollaborator(data: CollaboratorPayload) {
  const res = await fetch(`${API_URL}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create collaborator");
  return res.json();
}