import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function download({ fileUrl, fileName }: { fileUrl: string, fileName: string }) {
  const res = await fetch(fileUrl);
  const blob = await res.blob();
  const file = new File([blob], `${fileName}.pdf`, { type: "application/pdf" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
