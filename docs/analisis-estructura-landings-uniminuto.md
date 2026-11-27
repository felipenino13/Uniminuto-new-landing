# Comparación de estructura de landings de UNIMINUTO

## Alcance

Se eligieron dos maestrías virtuales del [inventario de landings](landings-uniminuto.md), una por versión, para comparar la organización de la información dentro del mismo tipo de programa.

| Versión en el inventario | Programa | Fuente |
| --- | --- | --- |
| Nueva | Maestría en Inteligencia Artificial | [Abrir landing](https://uvd.uniminuto.edu/boletin/maestria-en-inteligencia-artificial/) |
| Antigua | Maestría en Gerencia de Proyectos | [Abrir landing](https://uvd.uniminuto.edu/boletin/maestria-en-gerencia-de-proyectos/) |

Consulta del 20 de noviembre de 2026. El análisis se basa en el HTML público y registra los bloques, su orden y sus enlaces. La revisión de campos, clics, comportamiento en móvil y flujo de envío del formulario queda pendiente. Las diferencias también pueden deberse al programa. Para atribuirlas a una versión, hace falta contrastarlas con otras páginas del inventario.

## Orden de lectura

| Orden | Nueva · Inteligencia Artificial | Antigua · Gerencia de Proyectos |
| --- | --- | --- |
| 1 | Menú con accesos a aprendizaje, programa y financiación, más un botón de inscripción. | Franja promocional y menú con accesos a razones para elegir UNIMINUTO, perfil y proceso de inscripción, más un botón de inscripción. |
| 2 | Cabecera con nombre del programa, registro y ficha académica. | Cabecera con nombre, modalidad, precios, subsidio, ficha académica y formulario. |
| 3 | Bloque independiente con introducción del programa y formulario. | Bloque introductorio con imagen y descripción del programa. |
| 4 | «Lo que aprenderás», con contenidos y áreas de formación. | «¿Por qué UNIMINUTO?», con argumentos institucionales. |
| 5 | «Conoce el programa», con perfil, plan de estudios, requisitos y ruta de admisión. | «Lo que serás», con el perfil de salida. |
| 6 | «¿Por qué estudiar con nosotros?», con argumentos del programa y de UNIMINUTO Virtual. | Razones para estudiar la maestría y botón que lleva al formulario. |
| 7 | «Inversión y financiamiento», con precios, descuento, aliados y botón de inscripción. | Bloque de subsidios, aliados y posibles descuentos adicionales. |
| 8 | «Solicita información», con un botón que vuelve al formulario. | «Conoce tu plan de estudios», con un resumen y enlace al PDF. |
| 9 | Pie institucional y controles flotantes para WhatsApp y volver arriba. | Proceso de inscripción en cuatro pasos. |
| 10 | — | Carrusel de testimonios. |
| 11 | — | Oferta de formación adicional y botón de contacto. |
| 12 | — | Pie institucional y control para volver arriba. |

## Bloques compartidos y cambios de presentación

| Bloque compartido | Nueva | Antigua |
| --- | --- | --- |
| Navegación interna | Prioriza qué se aprende, qué incluye el programa y cuánto cuesta. | Prioriza los argumentos institucionales, el perfil y el proceso de inscripción. |
| Ficha académica | Presenta SNIES, resolución, vigencia, modalidad, duración, créditos y área. Incluye el título otorgado como campo propio. | Presenta modalidad, duración, créditos, área, SNIES, resolución y vigencia junto con el precio. |
| Formulario y botones de contacto | El formulario de RD Station se ubica debajo de la cabecera y comparte espacio con la introducción. Los botones de inscripción apuntan a `#default-form`. | El formulario de RD Station está dentro de la cabecera. Los botones de contacto apuntan a `#formPrograma`. |
| Introducción académica | Aparece junto al formulario. «Lo que aprenderás» amplía la descripción en un bloque propio. | El bloque que sigue a la cabecera incluye ejemplos de lo que se aprenderá. Los beneficios del programa se amplían más abajo. |
| Perfil del egresado | Es un panel dentro de «Conoce el programa». | Tiene una sección propia, «Lo que serás». |
| Argumentos del programa y de la institución | Los agrupa en una sección con dos subsecciones. | Los distribuye en dos secciones, con el perfil entre ambas. |
| Plan de estudios | Muestra asignaturas agrupadas en acordeones y permite descargar el PDF. | Incluye un resumen de áreas temáticas y enlaza al PDF para consultar el plan completo. |
| Admisión | Integra una ruta breve de dos pasos dentro de «Conoce el programa», junto con un panel de requisitos. | Presenta una sección de cuatro pasos que va del registro a la matrícula e indica cargar documentos. |
| Precio, subsidio y financiación | Reúne precios y financiación en una sección avanzada de la página. | Muestra precios y subsidio desde la cabecera y desarrolla las opciones de financiación más abajo. |
| Pie institucional | Incluye datos legales y una descripción de la oferta académica. | Incluye datos legales e información institucional. |

## Bloques propios de cada ejemplo

### Nueva · Inteligencia Artificial

- «Lo que aprenderás» como sección independiente. La antigua sí incorpora contenidos de aprendizaje en su introducción y en otros bloques.
- «Conoce el programa» como explorador de cuatro paneles. El panel con la lista de requisitos de admisión y las asignaturas desplegables dentro de la landing son diferencias de contenido y presentación.
- Bloque final «Solicita información», dedicado a llevar al visitante de vuelta al formulario.
- Enlace flotante directo a WhatsApp en el HTML. La antigua contiene referencias a WhatsApp en scripts, cuyo funcionamiento queda por verificar.

### Antigua · Gerencia de Proyectos

- Franja promocional de inscripción sobre el menú.
- Testimonio estudiantil presentado en un carrusel.
- Bloque de formación complementaria que anuncia acceso a cursos certificados.
- Apartado sobre posibles descuentos adicionales dentro de la sección financiera. Ambas páginas presentan un subsidio de matrícula.

## Puntos para una segunda revisión

1. **Formulario de la nueva.** El identificador del contenedor de RD Station contiene `ms-innovaciones-pastorales`. Verificar que el programa asociado y la atribución de los registros correspondan a Inteligencia Artificial.
2. **Anclas de la antigua.** Dos elementos del HTML comparten el ID `formPrograma`. Comprobar a cuál desplaza cada botón y si el formulario queda accesible en escritorio y móvil.
3. **Recorrido de inscripción.** Verificar los campos que carga RD Station, la validación de los enlaces a WhatsApp y el destino después de un envío, incluida la posible relación con la Thank You Page del inventario.
4. **Patrones por versión.** Repetir el registro en otros programas y distinguir entre presencia del contenido, posición en la página y forma de acceso. Esto permitirá identificar patrones de versión y diferencias propias de cada programa.
