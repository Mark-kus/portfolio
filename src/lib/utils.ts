import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  const [year, month] = dateString.split("-").map(Number);
  const date = new Date(year, (month || 1) - 1);
  return date.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
}

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Presente";
  return `${start} – ${end}`;
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}