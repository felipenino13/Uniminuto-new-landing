const enlaces = [
  { href: "#por-que-uniminuto", texto: "¿Por qué UNIMINUTO?" },
  { href: "#lo-que-seras", texto: "Lo que serás" },
  { href: "#plan-de-estudios", texto: "Plan de estudios" },
  { href: "#linea-tiempo", texto: "Proceso de inscripción" },
];

const programa = {
  nombre: "Gerencia de Proyectos",
  duracion: "4 semestres",
  creditos: "42 créditos",
  snies: "118026",
  matricula: "$5.801.700",
};

const datosDelPrograma = [
  { icono: "laptop", texto: "100 % virtual" },
  { icono: "calendar", texto: programa.duracion },
  { icono: "book", texto: programa.creditos },
];

const fichaDelPrograma = [
  { etiqueta: "Créditos académicos", valor: `${programa.creditos} académicos`, icono: "book" },
  { etiqueta: "Duración", valor: `${programa.duracion} de duración`, icono: "calendar" },
  { etiqueta: "Código SNIES", valor: `SNIES ${programa.snies}`, icono: "shield" },
];

export function FichaProgramaV02() {
  return (
    <section
      aria-labelledby="ficha-programa"
      className="border-b border-[#cbdcf2] bg-white px-5 py-7 text-[#09152e] sm:px-8 sm:py-9"
    >
      <div className="mx-auto grid max-w-[1300px] items-center gap-5 lg:grid-cols-[1.25fr_3.75fr]">
        <div>
          <p className="text-xs font-bold tracking-wide text-[#334866] uppercase">
            Información general
          </p>
          <h2 id="ficha-programa" className="mt-2 max-w-[23ch] text-xl leading-tight font-extrabold tracking-tight sm:text-2xl">
            Maestría en {programa.nombre}
          </h2>
        </div>
        <dl className="grid grid-cols-2 gap-y-4 sm:grid-cols-4">
          {fichaDelPrograma.map(({ etiqueta, valor, icono }) => (
            <div key={etiqueta} className="border-l border-[#cbdcf2] px-3 lg:px-4">
              <dt className="sr-only">{etiqueta}</dt>
              <dd className="flex flex-col items-start gap-2 text-sm font-bold">
                <i className={`fas fa-${icono} text-lg text-[#114fa9]`} aria-hidden="true" />
                {valor}
              </dd>
            </div>
          ))}
          <div className="flex flex-col justify-center gap-1 border-l border-[#cbdcf2] px-3 lg:px-4">
            <dt className="text-xs font-medium text-[#334866]">
              Matrícula con subsidio
            </dt>
            <dd className="text-xl leading-tight font-extrabold tracking-tight text-[#114fa9] sm:text-2xl">
              {programa.matricula}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function CabeceraProgramaV02() {
  return (
    <div className="columna-izquierda-banner max-[800px]:pb-6 min-[1200px]:ml-0 min-[1200px]:w-full min-[1200px]:min-w-0 min-[1200px]:pb-0">
      <p className="mb-3 font-mono text-xs font-semibold tracking-[0.16em] text-[#ffdd33] uppercase">
        Este minuto cuenta.
      </p>
      <h1>
        <span className="block text-base font-semibold text-blue-100 sm:text-xl">
          Maestría en
        </span>{" "}
        <span className="mt-1 block text-[clamp(1.85rem,5.75vw,3.75rem)] leading-[1.06] font-extrabold tracking-[-0.045em] text-white min-[801px]:text-[clamp(2.5rem,3.6vw,3.75rem)]">
          {programa.nombre}
        </span>
      </h1>
      <p className="mt-3 text-base leading-snug text-blue-50/90 sm:text-lg">
        Lidera equipos y gestiona proyectos de principio a fin.
      </p>
      <div className="mt-5 mb-4">
        <p className="text-sm font-semibold">Matrícula con subsidio</p>
        <p className="text-[28px] leading-tight font-bold text-white">
          {programa.matricula}
        </p>
        <p className="mt-1 text-sm text-white/85">
          Antes del subsidio: $7.583.800{" "}
          <span className="block font-bold text-[#ffdd33] min-[410px]:inline">
            <span className="hidden min-[410px]:inline" aria-hidden="true">
              ·{" "}
            </span>
            Subsidio del 23,5 %
          </span>
        </p>
      </div>

      <AccesosV02 />

      <div className="space-y-1 text-xs leading-relaxed text-white/85">
        <p>
          Área de conocimiento: economía, administración, finanzas y afines.
        </p>
        <p>SNIES {programa.snies}</p>
        <p>Registro calificado: Resolución 11548 del 11/06/2025</p>
        <p>Vigencia del registro: 7 años</p>
      </div>
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
    titulo: "¿Por qué estudiar Gerencia de Proyectos?",
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
    <div className="mb-5 max-w-xl text-sm">
      <a
        href="#formPrograma"
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#ffdd33] px-4 font-bold text-[#07142e] shadow-[0_6px_24px_#ffdd3330] hover:bg-[#ffe677]"
      >
        Solicitar información
      </a>
      <ul aria-label="Datos del programa" className="mt-3 flex list-none flex-wrap gap-1.5 min-[410px]:gap-2">
        {datosDelPrograma.map(({ icono, texto }) => (
          <li
            key={texto}
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/25 bg-blue-100/8 px-2 py-1 text-xs font-semibold text-blue-50 min-[410px]:px-2.5"
          >
            <i className={`fas fa-${icono} text-blue-200`} aria-hidden="true" />
            {texto}
          </li>
        ))}
      </ul>
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
        <h2>{titulo}</h2>
        <ul className="mt-7 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icono, titulo, texto }) => (
            <li key={titulo} className="ventaja-campana grid grid-cols-[2.5rem_1fr] items-start gap-3 p-4 lg:grid-cols-1 lg:p-5">
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
