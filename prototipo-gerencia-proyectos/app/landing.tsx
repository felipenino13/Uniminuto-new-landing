import Image from "next/image";
import { Fragment } from "react";
import { Formulario } from "./components/formulario";
import { ProgramaV02 } from "./components/programa-v02";
import { AccionesFlotantesV02 } from "./components/acciones-flotantes-v02";
import {
  anchoContenidoV02,
  BeneficiosV02,
  CabeceraProgramaV02,
  FichaProgramaV02,
  MatriculaSubsidiadaV02,
  NavegacionV02,
} from "./components/contenido-v02";

const imagenCampana = "/landing/imagen-programa-campana.png";

function FranjaInscripcion({ conEnlace = false }: { conEnlace?: boolean }) {
  const llamado = "inscríbete hoy y da un paso hacia el futuro!";

  return (
    <div className="bg-[#ffdd33]">
      <div className={conEnlace ? `top-bar max-[800px]:py-2 ${anchoContenidoV02}` : "contenedor-nav top-bar"}>
        <p className={conEnlace ? "top-bar-text w-auto text-center font-mono uppercase max-[800px]:text-xs" : "top-bar-text"}>
          ¡No dejes pasar esta oportunidad,{" "}
          {conEnlace ? (
            <a href="#formPrograma" className="font-bold underline decoration-2 underline-offset-4">
              {llamado}
            </a>
          ) : (
            <span className="font-bold">{llamado}</span>
          )}
        </p>
      </div>
    </div>
  );
}

function PlanDeEstudiosBase() {
  return (
    <section className="seccion-plan">
      <div className="columna-plan-izquierda">
        <h2 className="titulo-plan">Conoce tu plan de estudios</h2>
        <p className="parrafo-plan">
          Explora un programa diseñado para la ejecución efectiva de grandes
          ideas.
          <span className="font-semibold">
            Estudiarás liderazgo, gestión de riesgos, metodologías ágiles,
            finanzas y dirección de equipos.
          </span>{" "}
          Desde el inicio, te formarás en lo que realmente hace que un
          proyecto avance.
        </p>
        <div className="boton-contenedor-plan">
          {" "}
          <span className="boton-plan">Plan de estudios</span>{" "}
        </div>
      </div>

      <div className="columna-derecha-plan">
        <img
          width="100%"
          src="/landing/imagen-plan-estudios.png"
          alt="Imagen principal"
        />
      </div>
    </section>
  );
}

export function Landing({ version }: { version: "base" | "v02" }) {
  const v02 = version === "v02";
  const EnfasisTestimonio = v02 ? "b" : Fragment;
  return (
    <>
      {!v02 && <FranjaInscripcion />}

      <nav id={v02 ? "inicio" : undefined} tabIndex={v02 ? -1 : undefined} className={v02 ? "navbar border-b border-[#69aaff]/30 bg-[#050e26]" : "navbar border-b-[3px] border-[#ffdd33] bg-[#182643]"}>
        <div className={v02 ? `contenedor-nav ${anchoContenidoV02}` : "contenedor-nav"}>
          <img
            className={v02 ? "logoUNI min-[1200px]:w-[245px] min-[1400px]:w-[339px]" : "logoUNI"}
            src="/landing/logo-uniminuto.png"
            alt="Logo UNIMINUTO"
          />
          {v02 ? (
            <NavegacionV02 />
          ) : (
            <>
              <button
                type="button"
                disabled
                className="navbar-toggler"
                aria-label="Menú"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="ml-auto hidden p-3 min-[992px]:block">
                <ul className="flex list-none items-center">
                  <li className="nav-item">
                    <span className="nav-link linkUNI">
                      ¿Por qué UNIMINUTO?
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link linkUNI">Lo que serás</span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link linkUNI">
                      Proceso de inscripción
                    </span>
                  </li>
                </ul>
              </div>
              <div className="cta-menu-container">
                <div>
                  <span className="cta-menu boton-ancla">
                    Inscríbete sin costo
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      <main>
        <section id={v02 ? "banner-v02" : undefined} className={v02 ? "seccion-banner cabecera-campana" : "seccion-banner"}>
          <section
            className={
              v02
                ? `contenido-banner relative pb-8 max-[800px]:pt-6 min-[801px]:gap-5 min-[1200px]:grid min-[1200px]:grid-cols-[minmax(0,1.32fr)_minmax(0,0.7fr)_minmax(0,1fr)] min-[1200px]:pt-12 min-[1200px]:pb-14 ${anchoContenidoV02}`
                : "contenido-banner"
            }
          >
            {v02 ? (
              <CabeceraProgramaV02 />
            ) : (
              <div className="columna-izquierda-banner">
                <div className="etiqueta-virtual">100% virtual</div>
                <span className="titulo-programa font-semibold">Maestría</span>
                <h1 className="titulo-banner">
                  {" "}
                  <span className="texto-destacado">
                    Estudia tu Maestría en Gerencia de Proyectos
                  </span>
                  <br />
                  <span className="subtitulo">en UNIMINUTO Virtual</span>{" "}
                </h1>

                <div className="precio-men">
                  Precio Ministerio Educación Nacional ${" "}
                  <span className="line-through decoration-white decoration-2">
                    7.583.800
                  </span>
                </div>
                <div className="subsidio">
                  Subsidio{" "}
                  <span className="font-bold text-[#ffdd33]">23.50%</span>
                </div>
                <div className="precio-subsidiado mb-[25px]!">
                  Precio Subsidiado{" "}
                  <span className="text-[28px]/[0.5] font-bold text-[#33ff44]">
                    5.801.700
                  </span>
                </div>
                <div className="info-programa">4 Semestres | 42 Créditos</div>
                <div className="area-conocimiento mb-[25px]!">
                  Áreas de conocimiento:{" "}
                  <span className="font-semibold">
                    Economía, administración, finanzas y afines.
                  </span>
                </div>
                <div className="codigo-snies">Cód. SNIES: 118026</div>
                <div className="resolucion-registro">
                  Resolución registro calificado : 11548 11/06/2025
                </div>
                <div className="vigencia-registro">
                  Vigencia registro: 7 años
                </div>
              </div>
            )}
            {v02 && (
              <div className="pointer-events-none relative hidden self-stretch min-[1200px]:block">
                <div className="imagen-cabecera-campana absolute -inset-y-5 -right-16 -left-4 overflow-hidden">
                  <Image
                    src={imagenCampana}
                    alt=""
                    fill
                    sizes="(max-width: 1199px) 1px, (min-width: 1520px) 420px, 30vw"
                    loading="eager"
                    className="object-cover object-center"
                  />
                </div>
                <img
                  src="/landing/sello-estudia-ahora.svg"
                  alt=""
                  width={686}
                  height={414}
                  className="absolute right-[-2.5rem] bottom-[8%] z-20 h-auto w-[clamp(8.5rem,12.75vw,11.75rem)]"
                />
              </div>
            )}
            <div
              id="formPrograma"
              className={
                v02
                  ? "columna-derecha-banner scroll-mt-5 rounded-lg shadow-[0_16px_48px_#020817b0] ring-1 ring-blue-200/25 min-[1200px]:w-full min-[1200px]:min-w-0 min-[1200px]:justify-self-end"
                  : "columna-derecha-banner"
              }
              tabIndex={v02 ? -1 : undefined}
            >
              <div className="contenedor-formulario-embebido">
                <div className="wrapper-formulario-externo">
                  <Formulario />
                </div>
              </div>
            </div>
          </section>
        </section>

        {v02 ? (
          <>
            <FichaProgramaV02 />
            <FranjaInscripcion conEnlace />
          </>
        ) : <div>
          <img
            alt=""
            src="/landing/Vector-1.png"
            width="100%"
            className="bg-[#182643] pt-4"
          />
        </div>}

        {!v02 && (
          <section className="seccion-formulario">
            <div className="columna-derecha-formulario">
              <img
                src="/landing/imagen-programa.png"
                alt="Banner UNIMINUTO"
                className="imagen-banner"
              />
            </div>
            <div className="columna-formulario-izquierda">
              <h2 className="titulo-formulario">
                Estudia la Maestría en Gerencia de Proyectos y lidera la
                transformación en cualquier industria
              </h2>
              <p className="parrafo-formulario">
                El mundo necesita líderes que hagan que las cosas pasen. Con
                nuestra maestría diriges equipos y transformas realidades.
                <span className="font-semibold">
                  Aprenderás metodologías ágiles y gestión de alto impacto.
                </span>
              </p>
            </div>
          </section>
        )}

        {!v02 && (
          <section id="por-que-uniminuto" className="seccion-caracteristicas">
            <h2 className="titulo-iconos">¿Por qué UNIMINUTO?</h2>
            <div className="contenedor-iconos">
              <div className="columna-icono">
                <div className="circulo-icono">
                  {" "}
                  <i className="fas fa-trophy" aria-hidden="true" />{" "}
                </div>
                <h3 className="titulo-columna">
                  Reconocimiento de Alta Calidad
                </h3>
                <p className="texto-columna">
                  UNIMINUTO Virtual hace parte de la sede Bogotá,{" "}
                  <span className="font-semibold">
                    acreditada en Alta Calidad por el Ministerio de Educación
                    Nacional.
                  </span>{" "}
                  Un sello que solo reciben las mejores instituciones del país.
                  Estudia en una universidad con prestigio, respaldo y
                  estándares académicos superiores
                </p>
              </div>
              <div className="columna-icono">
                <div className="circulo-icono">
                  {" "}
                  <i className="fas fa-clock" aria-hidden="true" />{" "}
                </div>
                <h3 className="titulo-columna">
                  20 años formando profesionales reales
                </h3>
                <p className="texto-columna">
                  En UNIMINUTO tenemos{" "}
                  <span className="font-semibold">
                    más de 20 años de experiencia y más de 100.000 graduados
                  </span>
                  , sabemos lo que se necesita para avanzar. Nuestra educación
                  virtual responde a los retos del día a día, y prepara para el
                  mundo laboral de hoy.{" "}
                </p>
              </div>
              <div className="columna-icono">
                <div className="circulo-icono">
                  {" "}
                  <i className="fas fa-laptop" aria-hidden="true" />{" "}
                </div>
                <h3 className="titulo-columna">
                  Acompañamiento real, virtualidad con experiencia
                </h3>
                <p className="texto-columna">
                  <span className="font-semibold">
                    Contamos con laboratorios de inmersión, simuladores
                    prácticos y consejeros académicos
                  </span>{" "}
                  que te guían paso a paso para que no te rindas en el camino.
                  Nuestra modalidad está pensada para adaptarse a tu vida, sea
                  que trabajes, tengas familia o necesites estudiar a tu propio
                  ritmo.
                </p>
              </div>
              <div className="columna-icono">
                <div className="circulo-icono">
                  {" "}
                  <i className="fas fa-divide" aria-hidden="true" />{" "}
                </div>
                <h3 className="titulo-columna">
                  Empieza a estudiar con precio reducido
                </h3>
                <p className="texto-columna">
                  La educación no puede ser un privilegio. Por eso,{" "}
                  <span className="font-semibold">
                    subsidiamos hasta el 27% del valor de tu matrícula desde el
                    primer semestre
                  </span>
                  . Así puedes empezar tu carrera pagando menos, sin que el
                  dinero se vuelva una barrera para avanzar.
                </p>
              </div>
            </div>
          </section>
        )}

        <section id="lo-que-seras" className="seccion-lo-que-seras">
          {v02 && (
            <div className="fondo-perfil-campana" aria-hidden="true">
              <Image
                src="/landing/fondo-perfil-gerencia-v02.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center max-sm:object-[20%_center]"
              />
            </div>
          )}
          <div className="contenedor-imagen">
            {!v02 && (
              <img
                src="/landing/imagen-lo-que-seras.png"
                alt="Fondo decorativo"
                className="imagen-fondo"
              />
            )}

            <div className="contenido-superior">
              <h2 className="titulo-imagen">
                {v02 ? "Qué podrás hacer al graduarte" : "Lo que serás"}
              </h2>
              <p className="texto-imagen">
                Domina las etapas para crear y ejecutar un proyecto ganador
              </p>
            </div>
          </div>
          <div className="contenedor-cards">
            <div className="cardUNI">
              <div className="texto-card">
                <p>
                  <span className="font-semibold">
                    Serás capaz de liderar proyectos complejos con enfoque
                    estratégico.
                  </span>{v02 && " "}
                  También gestionarás recursos, equipos y tiempos para alcanzar
                  objetivos en cualquier sector. Tu perfil será clave en
                  organizaciones que buscan transformar ideas en resultados.
                </p>
              </div>
              <div className="imagen-card">
                {" "}
                {v02 ? (
                  <Image
                    src="/landing/perfil-gerencia-v02.png"
                    alt="Una gerente de proyectos revisa el cronograma y los recursos con su equipo."
                    fill
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1000px) 48vw, 470px"
                  />
                ) : (
                  <img
                    src="/landing/imagen-cards.png"
                    alt="Imagen relacionada"
                  />
                )}{" "}
              </div>
            </div>
          </div>
        </section>

        {v02 ? (
          <>
            <BeneficiosV02 tipo="programa" />
            <ProgramaV02 />
          </>
        ) : (
          <section className="seccion-por-que">
            <h2 className="titulo-por-que">
              ¿Por qué estudiar Maestría en Gerencia de Proyectos?
            </h2>
            <div className="contenedor-por-que">
              <div className="columna-por-que">
                <div className="circulo-por-que">
                  {" "}
                  <i className="fas fa-heartbeat" aria-hidden="true" />
                </div>
                <h3 className="titulo-columna-por-que">
                  Prepárate para dirigir con estrategia y alcanzar objetivos
                </h3>
                <p className="texto-columna-por-que">
                  Aprende a tomar decisiones estratégicas y alcanza metas bajo
                  estándares de eficiencia. Desde startups innovadoras hasta
                  grandes corporaciones y proyectos institucionales.
                </p>
              </div>
              <div className="columna-por-que">
                <div className="circulo-por-que">
                  {" "}
                  <i className="fas fa-chart-line" aria-hidden="true" />
                </div>
                <h3 className="titulo-columna-por-que">
                  Convierte desafíos en resultados exitosos
                </h3>
                <p className="texto-columna-por-que">
                  Desde la formulación hasta la evaluación, dominarás el ciclo
                  completo de un proyecto.Desarrollarás una visión y la
                  ejecución exitosa en organizaciones de todo tipo.
                </p>
              </div>
              <div className="columna-por-que">
                <div className="circulo-por-que">
                  {" "}
                  <i className="fas fa-network-wired" aria-hidden="true" />
                </div>
                <h3 className="titulo-columna-por-que">
                  Toma decisiones que lleven proyectos al éxito
                </h3>
                <p className="texto-columna-por-que">
                  Interpreta el mercado, usa analítica y entiende los desafíos
                  actuales para aplicar estrategias que potencien el proyecto al
                  que te enfrentes.
                </p>
              </div>
              <div className="columna-por-que">
                <div className="circulo-por-que">
                  {" "}
                  <i className="fas fa-store" aria-hidden="true" />
                </div>
                <h3 className="titulo-columna-por-que">Sé un líder global</h3>
                <p className="texto-columna-por-que">
                  Estás entrando en una de las profesiones con más demanda del
                  mercado. Con esta maestría podrás liderar proyectos complejos
                  en sectores como tecnología, salud, infraestructura o
                  servicios. Aprenderás a formar estratégicamente a tus equipos
                  para potenciar sus habilidades.
                </p>
              </div>
            </div>
            <div className="boton-contenedor-por-que">
              {" "}
              <span className="boton-por-que">Empieza tu carrera</span>{" "}
            </div>
          </section>
        )}

        <section id="dinero" className={v02 ? "dinero relative isolate" : "dinero"}>
          {v02 && (
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
              <Image
                src="/landing/fondo-financiacion-v02.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-bottom max-sm:object-[76%_bottom]"
              />
              <div className="absolute inset-0 bg-[#050c22]/35" />
            </div>
          )}
          <h2>Estudiar sin que el dinero sea un problema</h2>
          <p>
            {v02
              ? "Conoce el subsidio de matrícula y las opciones de financiación para iniciar tu maestría."
              : "Subsidios, aliados estratégicos y descuentos adicionales: todo para que puedas comenzar sin que el dinero sea un obstáculo."}
          </p>
          <div className="contenedor-dinero">
            {v02 ? (
              <MatriculaSubsidiadaV02 />
            ) : (
              <div className="item-dinero">
                <h3>Matrícula con precio subsidiado</h3>
                <p>
                  Desde tu primer semestre accedes a un{" "}
                  <span className="font-semibold">
                    valor de matrícula reducido gracias al subsidio que otorga
                    UNIMINUTO
                  </span>{" "}
                  según tu sede y situación socioeconómica.
                </p>
              </div>
            )}
            {v02 ? (
              <div className="item-dinero flex flex-col justify-center">
                <h3>Financiación de hasta el 100 % de tus estudios</h3>
                <p>
                  Tenemos convenios con aliados como{" "}
                  <strong>Cooperativa Minuto de Dios y Fincomercio</strong>{" "}
                  que te ofrecen facilidades de pago.
                </p>
              </div>
            ) : (
              <>
                <div className="item-dinero">
                  <h3>Financiación con condiciones preferenciales</h3>
                  <p>
                    <span className="font-semibold">
                      Tenemos convenios con aliados como Cooperativa Minuto de
                      Dios y Fincomercio
                    </span>{" "}
                    que te ofrecen facilidades de pago pensadas para estudiantes
                    UNIMINUTO
                  </p>
                </div>
                <div className="item-dinero">
                  <h3>Podrías acceder a descuentos adicionales</h3>
                  <p>
                    <span className="font-semibold">
                      Dependiendo de tu perfil, puedes aplicar a beneficios o
                      convenios{" "}
                    </span>
                    institucionales especiales que te ayudan a pagar aún menos.
                  </p>
                </div>
              </>
            )}
          </div>
          {!v02 && (
            <div className="boton-contenedor-dinero">
              {" "}
              <span className="boton-dinero">Quiero más información</span>{" "}
            </div>
          )}
        </section>

        {v02 ? <BeneficiosV02 tipo="institucion" /> : <PlanDeEstudiosBase />}

        {!v02 && (
          <section id="linea-tiempo" className="linea-tiempo">
            <div className="linea-tiempo__contenido">
              <h2 className="linea-tiempo__titulo-seccion">
                Así de fácil es empezar a estudiar con nosotros
              </h2>
              <p className="linea-tiempo__parrafo-seccion">
                {" "}
                <span className="font-semibold">
                  El proceso de inscripción a UNIMINUTO es 100% virtual, gratuito
                  y muy sencillo.
                </span>
                <br />
                Desde el primer momento te acompañamos para que empieces tu
                carrera sin enredos.{" "}
              </p>
              <div className="linea-tiempo__contenedor-columnas">
                <div className="linea-tiempo__columna">
                  <div className="linea-tiempo__encabezado">
                    {" "}
                    <span className="linea-tiempo__circulo">1</span>{" "}
                    <span className="linea-tiempo__raya"></span>{" "}
                  </div>
                  <h3 className="linea-tiempo__titulo-columna">
                    Regístrate como aspirante
                  </h3>
                  <p className="linea-tiempo__texto-columna">
                    {" "}
                    Deja tus datos en nuestra plataforma de admisiones y crea tu
                    cuenta. Este es el primer paso para empezar tu camino
                    profesional.{" "}
                  </p>
                </div>
                <div className="linea-tiempo__columna">
                  <div className="linea-tiempo__encabezado">
                    {" "}
                    <span className="linea-tiempo__circulo">2</span>{" "}
                    <span className="linea-tiempo__raya"></span>{" "}
                  </div>
                  <h3 className="linea-tiempo__titulo-columna">
                    Sube tus documentos
                  </h3>
                  <p className="linea-tiempo__texto-columna">
                    {" "}
                    Diligencia el formulario y carga los documentos necesarios
                    para que podamos admitir tu ingreso.{" "}
                  </p>
                </div>
                <div className="linea-tiempo__columna">
                  <div className="linea-tiempo__encabezado">
                    {" "}
                    <span className="linea-tiempo__circulo">3</span>{" "}
                    <span className="linea-tiempo__raya"></span>{" "}
                  </div>
                  <h3 className="linea-tiempo__titulo-columna">
                    Paga tu matrícula o accede a financiación
                  </h3>
                  <p className="linea-tiempo__texto-columna">
                    {" "}
                    Elige el método de pago que más te convenga: online, bancos
                    autorizados o con ayuda de nuestros aliados financieros.{" "}
                  </p>
                </div>
                <div className="linea-tiempo__columna">
                  <div className="linea-tiempo__encabezado">
                    {" "}
                    <span className="linea-tiempo__circulo">4</span>{" "}
                    <span className="linea-tiempo__raya"></span>{" "}
                  </div>
                  <h3 className="linea-tiempo__titulo-columna">
                    ¡Ya eres parte de UNIMINUTO
                  </h3>
                  <p className="linea-tiempo__texto-columna">
                    {" "}
                    Después de completar tu matrícula, estarás listo para comenzar
                    tus clases. Así de rápido y sin complicaciones.{" "}
                  </p>
                </div>
              </div>
              <div className="linea-tiempo__contenedor-boton">
                <button type="button" disabled className="linea-tiempo__boton">
                  Comienza tu camino
                </button>{" "}
              </div>
            </div>
          </section>
        )}

        <section className="testimoniales">
          <div className="testimoniales__contenido">
            <h2 className="testimoniales__titulo-seccion">
              Nuestros estudiantes opinan
            </h2>
            <div className="testimoniales__slider">
              <button
                type="button"
                disabled
                className="testimoniales__flecha testimoniales__flecha--izquierda"
                aria-label="Testimonio anterior"
              >
                &#10094;
              </button>
              <div className="testimoniales__tarjetas">
                <div className="testimoniales__tarjeta activa">
                  <div className="testimoniales__encabezado">
                    <div className="testimoniales__imagen">
                      <img
                        width="100%"
                        src="/landing/imagen-testominio.png"
                        alt=""
                      />
                    </div>
                    <div className="testimoniales__info">
                      <h3 className="testimoniales__nombre">
                        Génesis Piñeros{" "}
                      </h3>
                      <p className="testimoniales__campo">
                        Estudiar en UNIMINUTO Virtual fue un viaje
                        transformador. 
                      </p>
                    </div>
                  </div>
                  <p className="testimoniales__descripcion">
                    {" "}
                    Como mamá, trabajadora y cabeza de familia, siempre me
                    enfrenté al reto de encontrar tiempo para todo. Pero
                    UNIMINUTO me brindó la flexibilidad que necesitaba con sus
                    horarios flexibles, lo que me permitió{" "}
                    <EnfasisTestimonio>
                      estudiar sin poner en pausa mi rol en casa o en el trabajo
                    </EnfasisTestimonio>
                    . Además, no solo me ayudaron a{" "}
                    <EnfasisTestimonio>
                      superar las barreras financieras con sus subsidios y
                      alivios
                    </EnfasisTestimonio>
                    , sino que me dieron la oportunidad de
                    soñar y crecer. No se trataba solo de obtener un título,
                    sino de desarrollar mi potencial y construir un futuro mejor
                    para mí y mi familia. Uniminuto me abrió las puertas a{" "}
                    <EnfasisTestimonio>
                      nuevas oportunidades laborales
                    </EnfasisTestimonio>
                    , me permitió estudiar sin
                    afectar mi situación financiera y, lo más importante, me
                    ayudó a creer en mí misma y en mis sueños. 
                    <br />
                    <br />
                    Hoy, gracias a ellos, soy la profesional que
                    siempre quise ser.{" "}
                  </p>
                </div>
              </div>
              <button
                type="button"
                disabled
                className="testimoniales__flecha testimoniales__flecha--derecha"
                aria-label="Testimonio siguiente"
              >
                &#10095;
              </button>
            </div>
            <div className="testimoniales__puntos"></div>
          </div>
        </section>

        <section className={v02 ? "seccion-formacion relative isolate" : "seccion-formacion"}>
          {v02 && (
            <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
              <Image
                src="/landing/fondo-formacion-v02.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-right"
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
      </main>
      <footer className="footer">
        <div className="footer__franja">
          {" "}
          <img
            src="/landing/logo-uniminuto.png"
            alt="Logo UNIMINUTO"
            className="footer__logo"
          />{" "}
        </div>
        <div className="footer__copy">
          <p className="footer__texto-copy">
            Todos los derechos Reservados. UNIMINUTO 2020©
            <br />
            Institución de Educación Superior sujeta a inspección y vigilancia
            por el Ministerio de Educación Nacional
            <br />
            Personería jurídica: Resolución 10345 del 1 de agosto de 1990 MEN
            <br />
            CORPORACIÓN UNIVERSITARIA MINUTO DE DIOS
          </p>
        </div>
      </footer>

      {v02 ? <AccionesFlotantesV02 /> : (
        <div className="back-to-top">
          <img src="/landing/back-to-top.svg" width="40" alt="" />
        </div>
      )}
    </>
  );
}
