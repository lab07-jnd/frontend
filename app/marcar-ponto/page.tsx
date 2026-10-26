"use client";

import { BadgeCheck, Clock2, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const ScorePoint = () => {
  const [hour, setHour] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hourFormatted = hour
    ? hour.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    : null;

  const points = {
    "clock-in": { label: "Entrada", hora: "08:00" },
    "clock-out": { label: "Saída", hora: "12:00" },
    "clock-in-2": { label: "Retorno", hora: "13:00" },
    "clock-out-2": { label: "Saída", hora: "17:00" },
  };

  return (
    <div className="w-full px-4">
      <div className="p-6 pb-4 flex justify-between">
        <h1 className="flex items-center gap-2 text-[#0B1C30] font-semibold text-lg">
          <Clock2 /> Terminal REP-P Certificado
        </h1>

        <div className="flex items-center gap-2 text-[#006C49] bg-[#D4FEEB] font-medium p-2 rounded-full">
          <MapPin /> Geolocalização Ativa (±3m)
        </div>
      </div>

      <div className="bg-[#EFF4FF] w-full py-6 text-center">
        <h1 className="text-[#00375E] font-black text-5xl">
          {hourFormatted ?? "--:--:--"}
        </h1>
        <p className="font-semibold text-[#42474E] mt-2">
          Sincronizado via NTP.br • Fuso Horário GMT- 03:00
        </p>
      </div>

      <div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold text-[#42474E]">Registros do Dia</p>
          <p className="font-semibold text-[#42474E]">4 Batidas Previstas</p>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {Object.entries(points).map(([chave, dados]) => (
            <div
              key={chave}
              className="bg-[#EFF4FF] p-2.5 rounded-lg mt-2 flex gap-2 flex-col items-center justify-between"
            >
              <p className="font-semibold text-[#42474E]">{dados.label}</p>
              <p className="font-semibold text-[#0B1C30]">{dados.hora}</p>
              <BadgeCheck />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScorePoint;
