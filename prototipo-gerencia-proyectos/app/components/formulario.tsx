const inputClass =
  "block h-[30px] w-full min-w-0 rounded-full border border-[#c8c8c8] bg-white px-2.5 text-sm text-[#555]";

const ciudades = [
  "Selecciona tu ciudad",
  "Bogotá D.C.",
  "Soacha",
  "Zipaquirá",
  "Medellín",
  "Bello",
  "Envigado",
  "Itagüí",
  "Rionegro",
  "Barranquilla",
  "Soledad",
  "Malambo",
  "Bucaramanga",
  "Floridablanca",
  "Barrancabermeja",
  "Cali",
  "Palmira",
  "Buenaventura",
  "Otra",
];

function Selector({
  etiqueta,
  opciones,
}: {
  etiqueta: string;
  opciones: string[];
}) {
  return (
    <label className="block min-w-0">
      {etiqueta}
      <select className={inputClass} disabled>
        {opciones.map((opcion) => (
          <option key={opcion}>{opcion}</option>
        ))}
      </select>
    </label>
  );
}

export function Formulario() {
  return (
    <section
      aria-labelledby="solicita-informacion"
      className="superficie-campana rounded-lg bg-[#c3cee0] px-5 py-4 text-[#212844]"
    >
      <h2 id="solicita-informacion" className="text-center text-xl font-bold">
        Solicita más información
      </h2>
      <fieldset
        disabled
        className="mt-[17px] grid min-w-0 grid-cols-2 gap-x-2.5 gap-y-2.5 text-[11px] font-bold"
      >
        <label>
          Nombre completo*
          <input className={inputClass} type="text" />
        </label>
        <label>
          Teléfono Celular*
          <input className={inputClass} type="tel" />
        </label>
        <label>
          Email*
          <input className={inputClass} type="email" />
        </label>
        <Selector
          etiqueta="Tu tipo de documento*"
          opciones={[
            "",
            "Cédula de Ciudadanía",
            "Tarjeta de Identidad",
            "Cédula de Extranjería",
            "Pasaporte",
            "Contraseña",
          ]}
        />
        <label className="col-span-2">
          Número de documento*
          <input className={inputClass} type="text" />
        </label>
        <Selector etiqueta="Tu ciudad*" opciones={ciudades} />
        <Selector
          etiqueta="Tu nivel de formación actual*"
          opciones={["", "Bachillerato", "Pregrado", "Otro"]}
        />
        <Selector
          etiqueta="Horario preferido para contacto*"
          opciones={[
            "7_am_a_12_pm",
            "de_12_pm_a_2_pm",
            "de_2_pm_a_6_pm",
            "de_6_pm_a_8_pm",
          ]}
        />
        <Selector
          etiqueta="Medio principal para contactar*"
          opciones={["", "WhatsApp", "Llamada", "Correo"]}
        />
        <label className="col-span-2">
          <input type="checkbox" className="mr-1" />
          Al hacer click en ‘Solicito Información’, autorizo ser contactado para
          recibir información sobre mi inscripción y programas educativos. Nos
          comprometemos a no utilizar su información de contacto para enviar
          spam. Consulta nuestras Políticas.
        </label>
        <p className="col-span-2 pl-4 underline">
          Consulta aquí nuestras políticas
        </p>
        <button
          type="button"
          className="col-span-2 mx-auto mt-2 min-h-[43px] w-full max-w-[231px] rounded-[10px] bg-[#327ab8] px-2.5 text-base text-white"
        >
          Quiero más información
        </button>
      </fieldset>
    </section>
  );
}
