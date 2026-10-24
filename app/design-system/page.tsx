"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Mail, Clock, CheckCircle2 } from "lucide-react";

export default function DesignSystemShowcase() {
  return (
    <main className="min-h-screen bg-bg-app p-8 space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-text-primary">
          PontoFlow - Design System Showcase
        </h1>
        <p className="text-text-secondary mt-1">
          Galeria de testes dos componentes atómicos reutilizáveis.
        </p>
      </div>

      {/* SECÇÃO 1: BADGES */}
      <Card>
        <CardHeader>
          <CardTitle>1. Badges de Status</CardTitle>
          <CardDescription>
            Utilizados para sinalizar o estado das marcações de ponto.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Badge variant="success">Presencial</Badge>
          <Badge variant="warning">Ajuste Pendente</Badge>
          <Badge variant="danger">Falta Unificada</Badge>
          <Badge variant="info">Atestado em Análise</Badge>
        </CardContent>
      </Card>

      {/* SECÇÃO 2: BOTÕES */}
      <Card>
        <CardHeader>
          <CardTitle>2. Botões</CardTitle>
          <CardDescription>Variantes de botões para ações principais e secundárias.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button variant="primary">Registar Ponto</Button>
          <Button variant="secondary">Ver Relatório</Button>
          <Button variant="outline">Cancelar</Button>
          <Button variant="danger">Excluir Registo</Button>
        </CardContent>
      </Card>

      {/* SECÇÃO 3: INPUTS E FORMULÁRIO EXEMPLO */}
      <Card>
        <CardHeader>
          <CardTitle>3. Inputs de Texto & Form Sub-componentes</CardTitle>
          <CardDescription>Exemplo de campos com ícones e estados de validação.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1 text-sm font-semibold">
            E-mail do Colaborador
            <Input
              placeholder="colaborador@empresa.com"
              icon={<Mail size={18} />}
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-semibold">
            Horário de Entrada
            <Input
              placeholder="08:00"
              icon={<Clock size={18} />}
              className="ring-1 ring-red-500"
            />
            <span className="text-xs font-normal text-red-500">
              Horário fora do limite permitido
            </span>
          </label>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Limpar</Button>
          <Button variant="primary">
            <CheckCircle2 size={18} />
            Guardar Alterações
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}