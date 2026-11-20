import type { Metadata } from "next";
import { Landing } from "../landing";

export const metadata: Metadata = {
  title: "Maestría en Gerencia de Proyectos | Prototipo V02",
};

export default function VersionDos() {
  return (
    <div className="landing-v02">
      <Landing version="v02" />
    </div>
  );
}
