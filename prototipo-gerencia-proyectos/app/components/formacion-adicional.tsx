import Image from "next/image";

export function FormacionAdicional({ v02 = true }: { v02?: boolean }) {
  return (
    <section className={v02 ? "seccion-formacion relative isolate" : "seccion-formacion"}>
      {v02 && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src="/landing/fondo-formacion-fragmentos.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[68%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-[#050c22]/25 max-sm:bg-[#050c22]/55" />
        </div>
      )}
      <div className="columna-formacion-izquierda">
        <h2 className="titulo-formacion">
          Formación recargada, para que vayas más allá
        </h2>
        <p className="parrafo-formacion">
          Acceso exclusivo a más de 5.000 cursos certificados
          <br />
          <br />
          <span className="font-normal">
            Al matricularte, recibirás acceso durante 4 meses a una
            plataforma de formación adicional donde podrás aprender de
            manera virtual sobre temas como
          </span>{" "}
          marketing digital, liderazgo,{" "}
          <span className="font-normal">
            diseño, innovación, negocios y mucho más. A tu ritmo. A tu
            manera. Desde cualquier lugar.
          </span>
          <br />
          <br />
          Este beneficio viene incluido con tu matrícula. ¡Una oportunidad
          única para potenciar tu perfil profesional desde el día uno!
        </p>
        <div className="boton-formacion">
          {v02 ? (
            <a href="#formPrograma" className="boton-formacion-campana">
              Solicitar información
            </a>
          ) : (
            <button type="button" disabled>
              Quiero más información
            </button>
          )}{" "}
        </div>
      </div>

      <div className="columna-derecha-formacion">
        <img
          src="/landing/imagen-formacion.png"
          alt="Imagen principal"
          width="100%"
        />
      </div>
    </section>
  );
}
