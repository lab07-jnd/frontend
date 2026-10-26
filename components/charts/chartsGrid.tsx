import { HoursByArea } from "./hoursByArea";
import { ShiftAdherence } from "./shiftAdherence";

export function ChartsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <HoursByArea />
      <ShiftAdherence />
    </div>
  );
}