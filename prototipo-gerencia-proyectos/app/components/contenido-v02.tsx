export const anchoContenidoV02 = "w-full max-w-[1520px] px-5 min-[1200px]:px-8";

const enlaces = [
  { href: "#lo-que-seras", texto: "Perfil de egreso" },
  { href: "#plan-de-estudios", texto: "Plan de estudios" },
  { href: "#linea-tiempo", texto: "Proceso de inscripción" },
  { href: "#por-que-uniminuto", texto: "¿Por qué UNIMINUTO?" },
];

const programa = {
  nombre: "Gerencia de Proyectos",
  duracion: 4,
  creditos: 42,
  snies: "118026",
  matricula: "$5.801.700",
  precioOficial: "$7.583.800",
  subsidio: "23,5 %",
};

const fichaDelPrograma = [
  { etiqueta: "Créditos académicos", cifra: programa.creditos, valor: "créditos académicos" },
  { etiqueta: "Duración", cifra: programa.duracion, valor: "semestres de duración" },
  {
    etiqueta: "Código SNIES",
    valor: `SNIES ${programa.snies}`,
    detalle: [
      "Resolución 11548 del 11/06/2025",
      "Vigencia del registro: 7 años",
    ],
  },
];

export function MatriculaSubsidiadaV02() {
  return (
    <article className="flex min-w-0 flex-col items-center justify-center rounded-2xl border border-[#ffe986] bg-linear-to-br from-[#ffe45b] to-[#ffc928] px-4 py-6 text-center text-[#09152e] shadow-[0_12px_30px_#02081750] sm:px-5">
      <p className="rounded-full bg-[#09152e]/10 px-3 py-1 text-xs font-bold tracking-wide uppercase">
        Subsidio del {programa.subsidio}
      </p>
      <h3 className="mt-3 text-base leading-tight font-bold">
        Matrícula con subsidio
      </h3>
      <p className="mt-1 text-[clamp(1.75rem,3vw,2.75rem)] leading-none font-extrabold tracking-tight tabular-nums">
        {programa.matricula}
      </p>
      <p className="mt-1 text-xs font-medium">Por periodo académico</p>
      <p className="mt-3 text-sm leading-snug">
        Valor oficial: <s className="font-semibold">{programa.precioOficial}</s>
      </p>
      <a href="#formPrograma" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#09152e] px-4 py-2 text-sm font-bold text-white hover:bg-[#17355c]">
        Solicitar información
      </a>
      <p className="mt-2 text-xs leading-snug">
        Subsidio sujeto a condiciones de UNIMINUTO.
      </p>
    </article>
  );
}

export function FichaProgramaV02() {
  return (
    <section
      aria-label="Información general del programa"
      className="border-b border-[#cbdcf2] bg-white py-7 text-[#09152e] sm:py-9"
    >
      <dl className={`mx-auto grid gap-y-3 md:grid-cols-3 ${anchoContenidoV02}`}>
        {fichaDelPrograma.map(({ etiqueta, cifra, valor, detalle }) => (
          <div
            key={etiqueta}
            className="border-[#cbdcf2] max-md:not-first:border-t max-md:not-first:pt-3 md:not-first:border-l md:not-first:pl-3 lg:not-first:pl-4"
          >
            <dt className="sr-only">{etiqueta}</dt>
            <dd className="flex h-full flex-col justify-center gap-2 text-sm font-bold">
              <span className="flex items-baseline gap-2">
                {cifra && (
                  <span className="text-4xl leading-none font-extrabold tracking-tight tabular-nums text-[#114fa9] lg:text-5xl">
                    {cifra}
                  </span>
                )}{" "}
                <span>{valor}</span>
              </span>
              {detalle && (
                <div className="space-y-1 text-xs leading-relaxed font-normal text-[#334866]">
                  {detalle.map((linea) => <p key={linea}>{linea}</p>)}
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function CabeceraProgramaV02() {
  return (
    <div className="columna-izquierda-banner ml-0 max-[800px]:pb-6 min-[1200px]:w-full min-[1200px]:min-w-0 min-[1200px]:pb-0">
      <h1>
        <span className="block text-base font-semibold text-blue-100 sm:text-xl">
          Maestría en
        </span>{" "}
        <span className="mt-1 block text-[clamp(1.85rem,5.75vw,3.75rem)] leading-[1.06] font-extrabold tracking-[-0.045em] text-white min-[801px]:text-[clamp(2.5rem,3.6vw,3.75rem)]">
          {programa.nombre}
        </span>
      </h1>
      <p className="mt-3 flex w-fit items-center gap-1.5 rounded-full border border-blue-200/25 bg-blue-100/8 px-2 py-1 text-xs font-semibold text-blue-50 min-[410px]:px-2.5">
        <i className="fas fa-laptop text-blue-200" aria-hidden="true" />
        100 % virtual
      </p>
      <p className="mt-3 text-base leading-snug text-blue-50/90 sm:text-lg">
        Prepárate para gerenciar
      </p>
      <div className="mt-5 mb-4">
        <p className="text-sm font-semibold">Matrícula con subsidio</p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-[28px] leading-tight font-bold text-white">
            {programa.matricula}
          </span>
          <span className="rounded bg-[#d5002d] px-2 py-0.5 text-sm font-bold whitespace-nowrap text-white">
            <span className="sr-only">Subsidio del </span>
            <span aria-hidden="true">−</span>
            {programa.subsidio}
          </span>
        </p>
        <p className="mt-1 text-sm text-white/70">
          <span className="sr-only">Antes del subsidio: </span>
          <s>{programa.precioOficial}</s>
        </p>
      </div>

      <AccesosV02 />
    </div>
  );
}

const beneficios = {
  institucion: {
    id: "por-que-uniminuto",
    titulo: "¿Por qué UNIMINUTO?",
    items: [
      {
        icono: "trophy",
        titulo: "Reconocimiento de Alta Calidad",
        texto:
          "UNIMINUTO Virtual hace parte de la sede Bogotá, acreditada en Alta Calidad.",
      },
      {
        icono: "clock",
        titulo: "Experiencia en educación virtual",
        texto: "Más de 20 años de experiencia y más de 100.000 graduados.",
      },
      {
        icono: "laptop",
        titulo: "Acompañamiento académico",
        texto:
          "Laboratorios, simuladores y consejeros académicos durante tu formación.",
      },
      {
        icono: "divide",
        titulo: "Matrícula con subsidio",
        texto:
          "Accede a un valor de matrícula reducido desde el primer semestre, sujeto a condiciones.",
      },
    ],
  },
  programa: {
    id: "beneficios-del-programa",
    titulo: "Lo que aprenderás",
    items: [
      {
        icono: "heartbeat",
        titulo: "Dirige con estrategia",
        texto:
          "Toma decisiones y alcanza objetivos con criterios de eficiencia.",
      },
      {
        icono: "chart-line",
        titulo: "Domina el ciclo de un proyecto",
        texto:
          "Trabaja desde la formulación hasta la ejecución y la evaluación.",
      },
      {
        icono: "network-wired",
        titulo: "Decide con datos",
        texto:
          "Aplica analítica para interpretar el mercado y afrontar desafíos.",
      },
      {
        icono: "store",
        titulo: "Lidera equipos",
        texto:
          "Gestiona proyectos en tecnología, salud, infraestructura y otros sectores.",
      },
    ],
  },
};

function EnlacesDelMenu() {
  return enlaces.map(({ href, texto }) => (
    <li key={href}>
      <a
        className="flex min-h-11 items-center px-2 text-sm font-medium text-white hover:underline"
        href={href}
      >
        {texto}
      </a>
    </li>
  ));
}

export function NavegacionV02() {
  return (
    <>
      <ul className="ml-auto hidden list-none items-center gap-2 min-[1200px]:flex">
        <EnlacesDelMenu />
        <li>
          <a href="#formPrograma" className="inline-flex min-h-10 items-center rounded-md border border-blue-200/35 px-3 text-sm font-semibold text-white hover:border-blue-100 hover:bg-blue-200/10">
            Solicitar información
          </a>
        </li>
      </ul>
      <details className="relative z-10 text-white min-[1200px]:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-md border border-white/40 px-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
          Menú
        </summary>
        <ul className="absolute top-full right-0 mt-2 w-57 list-none rounded-md border border-white/30 bg-[#182643] p-2 shadow-lg">
          <EnlacesDelMenu />
        </ul>
      </details>
    </>
  );
}

function AccesosV02() {
  return (
    <div className="max-w-xl text-sm">
      <a
        href="#formPrograma"
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#ffdd33] px-4 font-bold text-[#07142e] shadow-[0_6px_24px_#ffdd3330] hover:bg-[#ffe677]"
      >
        Solicitar información
      </a>
    </div>
  );
}

export function BeneficiosV02({ tipo }: { tipo: keyof typeof beneficios }) {
  const { id, titulo, items } = beneficios[tipo];

  return (
    <section
      id={id}
      tabIndex={-1}
      className="beneficios-campana scroll-mt-5"
    >
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center">{titulo}</h2>
        <ul className="mt-7 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icono, titulo, texto }) => (
            <li
              key={titulo}
              className="ventaja-campana grid grid-cols-[2.5rem_1fr] items-start gap-3 p-4 lg:grid-cols-1 lg:p-5"
            >
              <div className="icono-campana grid size-10 place-items-center rounded-lg">
                <i className={`fas fa-${icono}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold">{titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed">{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
