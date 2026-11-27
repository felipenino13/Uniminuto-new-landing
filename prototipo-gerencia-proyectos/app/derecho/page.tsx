import type { Metadata } from "next";
import Image from "next/image";
import { FormacionAdicional } from "../components/formacion-adicional";
import { AccionesFlotantesV02 } from "../components/acciones-flotantes-v02";
import { anchoContenidoV02, BeneficiosV02, CabeceraProgramaV02, FichaProgramaV02, MatriculaSubsidiadaV02, NavegacionV02 } from "../components/contenido-v02";
import { Formulario } from "../components/formulario";
import { ProgramaV02 } from "../components/programa-v02";
import { TestimoniosV02 } from "../components/testimonios-v02";
import { aprendizajesDerecho, beneficiosDerecho, imagenPerfil, ofertaDerecho, planDerecho, testimoniosDerecho } from "./contenido";

export const metadata: Metadata = {
  title: "Derecho Virtual | UNIMINUTO · Piloto V02",
  description: "Conoce el pregrado virtual en Derecho, sus opciones de matrícula y su plan de estudios.",
  robots: { index: false, follow: false },
};

export default function Derecho() {
  return (
    <div className="landing-v02 landing-derecho">
      <main>
        <section id="banner-v02" className="seccion-banner cabecera-campana relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden overflow-hidden min-[1200px]:block"
          >
            <div className="absolute top-[27%] left-[52.5%] aspect-[2664/1990] w-[max(116%,1600px)] translate-x-[-45.5%] translate-y-[-43.5%]">
              <Image src="/landing/derecho/hero-key-visual.webp" alt="" fill unoptimized />
            </div>
            <div className="absolute inset-0 [background:linear-gradient(90deg,#050c22e8,#050c22d6_34%,transparent_51%,transparent_66%,#050c225e),linear-gradient(180deg,#050c22b8,transparent_21%,transparent_82%,#050c2270)]" />
          </div>
          <nav id="inicio" tabIndex={-1} className="navbar relative z-30" aria-label="Navegación del programa">
            <div className={`contenedor-nav ${anchoContenidoV02}`}>
              <img className="logoUNI min-[1200px]:w-[245px] min-[1400px]:w-[339px]" src="/landing/logo-uniminuto.png" alt="UNIMINUTO" />
              <NavegacionV02 />
            </div>
          </nav>
          <div className={`contenido-banner relative pb-8 max-[800px]:pt-6 min-[801px]:gap-5 min-[1200px]:grid min-[1200px]:grid-cols-[minmax(0,1.32fr)_minmax(0,0.7fr)_minmax(0,1fr)] min-[1200px]:pt-12 min-[1200px]:pb-14 ${anchoContenidoV02}`}>
            <CabeceraProgramaV02 oferta={ofertaDerecho} mostrarSello notaPrecio="Valor de referencia. Consulta vigencia y condiciones." />
            <div id="formPrograma" tabIndex={-1} className="columna-derecha-banner scroll-mt-5 shadow-[0_16px_48px_#020817b0] ring-1 ring-blue-200/25 min-[1200px]:col-start-3 min-[1200px]:w-full min-[1200px]:min-w-0">
              <div className="contenedor-formulario-embebido">
                <div className="wrapper-formulario-externo">
                  <p className="bg-[#e7effb] px-5 py-2 text-sm text-[#212844]">Vista previa del formulario de asesoría.</p>
                  <Formulario />
                </div>
              </div>
            </div>
          </div>
          <FichaProgramaV02 oferta={ofertaDerecho} integrada />
        </section>
        <div className="bg-[#ffdd33] px-5 py-3 text-center text-sm font-semibold text-[#09152e]">
          ¿Tienes dudas sobre el pregrado? <a href="#formPrograma" className="font-bold underline underline-offset-4">Solicita asesoría</a>
        </div>

        <section id="lo-que-seras" className="seccion-lo-que-seras scroll-mt-5">
          <div className="fondo-perfil-campana" aria-hidden="true">
            <Image
              src="/landing/derecho/fondo-hero-sin-personaje.webp"
              alt=""
              fill
              unoptimized
              className="object-cover object-[65%_65%] opacity-75 md:object-[center_65%]"
            />
          </div>
          <div className="contenedor-imagen">
            <div className="contenido-superior">
              <h2 className="titulo-imagen">Qué podrás hacer al graduarte</h2>
              <p className="texto-imagen">Analiza un problema jurídico y explica qué opciones tiene cada persona.</p>
            </div>
          </div>
          <div className="contenedor-cards">
            <div className="cardUNI">
              <div className="texto-card">Podrás interpretar normas, sustentar argumentos y formular alternativas ante conflictos. La formación integra investigación y ética para que puedas orientar decisiones y defender derechos con criterio profesional.</div>
              <div className="imagen-card overflow-hidden">
                <Image src={imagenPerfil} alt="Dos personas revisan documentos en una mesa de trabajo." fill sizes="(max-width: 640px) 90vw, 460px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <BeneficiosV02 tipo="programa" contenido={aprendizajesDerecho} />
        <ProgramaV02 contenido={planDerecho} />

        <section id="dinero" className="dinero relative isolate">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <Image
              src="/landing/derecho/fondo-financiacion-explosion.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[58%_68%] md:object-[center_68%]"
            />
            <div className="absolute inset-0 bg-[#050c22]/25 max-sm:bg-[#050c22]/55" />
          </div>
          <h2>Matrícula y opciones de financiación</h2>
          <p>Consulta las condiciones del subsidio y las alternativas disponibles para el periodo en el que quieres ingresar.</p>
          <div className="contenedor-dinero">
            <MatriculaSubsidiadaV02 oferta={ofertaDerecho} periodo="Valor de referencia · confirma el periodo con un asesor" />
            <div className="item-dinero flex flex-col justify-center">
              <h3>Organiza el pago de tu matrícula</h3>
              <p>UNIMINUTO anuncia opciones de financiación de hasta el 100 %. Confirma con un asesor los requisitos y las alternativas aplicables a tu caso.</p>
            </div>
          </div>
        </section>

        <BeneficiosV02 tipo="institucion" contenido={beneficiosDerecho} />

        <section className="testimoniales">
          <div className="testimoniales__contenido">
            <h2 className="testimoniales__titulo-seccion">Experiencias de estudiantes</h2>
            <p className="mt-2 text-center text-sm font-semibold text-[#334866]">Vista previa con testimonios ficticios y retratos generados.</p>
            <TestimoniosV02 testimonios={testimoniosDerecho} />
          </div>
        </section>

        <FormacionAdicional />
      </main>
      <footer className="footer">
        <div className="footer__franja"><img src="/landing/logo-uniminuto.png" className="footer__logo" alt="UNIMINUTO" /></div>
        <div className="footer__copy">
          <p className="footer__texto-copy">Corporación Universitaria Minuto de Dios · UNIMINUTO<br />Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.</p>
        </div>
      </footer>
      <AccionesFlotantesV02 />
    </div>
  );
}
