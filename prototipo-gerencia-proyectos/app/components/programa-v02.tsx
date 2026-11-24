"use client";

import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";

const pestanas = [
  { id: "tab-plan", destino: "plan-de-estudios", titulo: "Plan de estudios" },
  { id: "requisitos-admision", destino: "requisitos-admision", titulo: "Requisitos de admisión" },
  { id: "linea-tiempo", destino: "linea-tiempo", titulo: "Ruta de admisión" },
] as const;

const componentes = [
  { titulo: "Fundamentación", creditos: 12, temas: ["Estrategia y prospectiva", "Dirección de equipos de proyecto", "Modelos de organización y gestión", "Dirección del talento humano"] },
  { titulo: "Profundización", creditos: 18, temas: ["Diseño y formulación de proyectos", "Finanzas de proyectos", "Administración de portafolios", "Control y seguimiento de la ejecución", "Evaluación de resultados y cierre", "Asignatura electiva"] },
  { titulo: "Investigación", creditos: 12, temas: ["Bases de la investigación", "Diseño de un estudio", "Análisis de información", "Producción de conocimiento"] },
];

const documentos = [
  "Copia del documento de identidad ampliada al 150 %.",
  "Soporte de afiliación a EPS o Sisbén.",
  "Acta de grado de pregrado.",
];

const pasos = [
  { titulo: "Regístrate como aspirante", descripcion: "Crea tu cuenta en la plataforma de admisiones de UNIMINUTO." },
  { titulo: "Carga tus documentos", descripcion: "Diligencia la solicitud y adjunta los documentos requeridos en PDF." },
  { titulo: "Organiza el pago de la matrícula", descripcion: "Revisa los medios de pago y las opciones de financiación disponibles." },
  { titulo: "Completa tu matrícula", descripcion: "Una vez matriculado, podrás iniciar tus clases según el calendario académico." },
];

const pdf = "https://www.uniminuto.edu/sites/default/files/programas/2025-07/Maestr%C3%ADa%20en%20gerencia%20de%20proyectos%20Uniminuto.pdf";
const estiloEnlace = "mt-5 inline-flex min-h-11 items-center rounded-lg px-4 py-2 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114fa9]";

export function ProgramaV02() {
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    function sincronizarAncla() {
      const indice = pestanas.findIndex(({ destino }) => window.location.hash === `#${destino}`);
      if (indice !== -1) setActiva(indice);
    }

    sincronizarAncla();
    window.addEventListener("hashchange", sincronizarAncla);
    return () => window.removeEventListener("hashchange", sincronizarAncla);
  }, []);

  function activar(indice: number) {
    setActiva(indice);
    window.history.replaceState(window.history.state, "", `#${pestanas[indice].destino}`);
  }

  function navegarConTeclado(event: KeyboardEvent<HTMLButtonElement>, indice: number) {
    const destinos: Record<string, number> = {
      ArrowLeft: (indice + pestanas.length - 1) % pestanas.length,
      ArrowRight: (indice + 1) % pestanas.length,
      Home: 0,
      End: pestanas.length - 1,
    };
    const siguiente = destinos[event.key];
    if (siguiente === undefined) return;
    event.preventDefault();
    activar(siguiente);
    document.getElementById(pestanas[siguiente].id)?.focus();
  }

  return (
    <section id="plan-de-estudios" aria-labelledby="titulo-programa-v02" tabIndex={-1} className="scroll-mt-5 bg-[#f2f7ff] px-5 py-12 text-[#09152e] sm:py-16">
      <div className="mx-auto max-w-[1100px]">
        <h2 id="titulo-programa-v02" className="text-center text-[clamp(1.75rem,3vw,2.65rem)] leading-tight font-extrabold tracking-tight">
          Conoce el programa
        </h2>
        <div role="tablist" aria-label="Información del programa" className="mt-6 grid grid-cols-3 gap-1 border-b border-[#cbdcf2] sm:flex sm:justify-center sm:gap-4">
          {pestanas.map(({ id, titulo }, indice) => (
            <button
              key={id}
              id={id}
              type="button"
              role="tab"
              aria-selected={activa === indice}
              aria-controls={`panel-${id}`}
              tabIndex={activa === indice ? 0 : -1}
              onClick={() => activar(indice)}
              onKeyDown={(event) => navegarConTeclado(event, indice)}
              className="min-h-12 cursor-pointer scroll-mt-5 rounded-t-md border-b-[3px] border-transparent px-1 py-2 text-xs font-semibold text-[#334866] hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-[#114fa9] aria-selected:border-[#ffcf00] aria-selected:bg-white aria-selected:text-[#09152e] sm:px-4 sm:text-sm"
            >
              {titulo}
            </button>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-[#cbdcf2] bg-white p-4 shadow-[0_12px_35px_#102b5510] sm:p-7">
          <div role="tabpanel" id="panel-tab-plan" aria-labelledby="tab-plan" hidden={activa !== 0} tabIndex={0}>
            <h3 className="text-xl font-extrabold">Plan de estudios</h3>
            <p className="mt-1 text-sm text-[#334866]">42 créditos · 4 semestres · Modalidad virtual</p>
            <div className="mt-5 grid items-start gap-5 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-2">
                {componentes.map(({ titulo, creditos, temas }, indice) => (
                  <details key={titulo} name="componentes-plan-v02" open={indice === 0} className="group rounded-xl border border-[#cbdcf2] border-t-[3px] border-t-[#ffcf00]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-3 text-sm font-bold marker:content-none [&::-webkit-details-marker]:hidden">
                      <span>{titulo} <span className="ml-1 font-normal text-[#334866]">· {creditos} créditos</span></span>
                      <span aria-hidden="true"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span>
                    </summary>
                    <ul className="divide-y divide-[#e6eef9] border-t border-[#e6eef9] px-3 py-1 text-sm text-[#334866]">
                      {temas.map((tema) => <li key={tema} className="py-2">{tema}</li>)}
                    </ul>
                  </details>
                ))}
              </div>
              <Image
                src="/landing/plan-estudios-gerencia-v02.png"
                alt="Un equipo organiza tareas y revisa el cronograma y los riesgos de un proyecto."
                width={1536}
                height={1024}
                sizes="(max-width: 1023px) 90vw, 470px"
                className="h-auto w-full rounded-xl"
              />
            </div>
            <a href={pdf} target="_blank" rel="noopener noreferrer" className={`${estiloEnlace} border border-[#09152e] bg-transparent text-[#09152e] hover:bg-[#edf5ff]`}>
              Abrir plan de estudios (PDF)
            </a>
          </div>
          <div role="tabpanel" id="panel-requisitos-admision" aria-labelledby="requisitos-admision" hidden={activa !== 1} tabIndex={0}>
            <h3 className="text-xl font-extrabold">Requisitos de admisión</h3>
            <p className="mt-2 text-[#334866]">Prepara estos documentos para cargarlos en PDF en la plataforma de admisiones.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#334866]">
              {documentos.map((documento) => <li key={documento}>{documento}</li>)}
            </ul>
          </div>
          <div role="tabpanel" id="panel-linea-tiempo" aria-labelledby="linea-tiempo" hidden={activa !== 2} tabIndex={0}>
            <h3 className="text-xl font-extrabold">Ruta de admisión</h3>
            <ol className="mt-4 grid list-none gap-3 sm:grid-cols-2">
              {pasos.map(({ titulo, descripcion }, indice) => (
                <li key={titulo} className="rounded-xl border border-[#cbdcf2] bg-[#f8faff] p-4">
                  <span className="mb-2 inline-grid size-7 place-items-center rounded-md bg-[#114fa9] text-sm font-bold text-white">{indice + 1}</span>
                  <h4 className="font-bold">{titulo}</h4>
                  <p className="mt-1 text-sm text-[#334866]">{descripcion}</p>
                </li>
              ))}
            </ol>
            <a href="#formPrograma" className={`${estiloEnlace} bg-[#09152e] text-white hover:bg-[#114fa9]`}>Solicitar información</a>
          </div>
        </div>
      </div>
    </section>
  );
}
