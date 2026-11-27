# Brief de rediseño · Maestría en Gerencia de Proyectos

**Estado** · V02 es la versión más avanzada y está en proceso de aprobación. Su estructura y contenido son la base de este brief. El objetivo comercial y la ubicación del formulario ya están definidos. [Prototipo V02](../../prototipo-gerencia-proyectos/app/v02/page.tsx)

**Alcance** · Gerencia de Proyectos es el primer caso. V02 será la plantilla para todos los programas y las futuras landings que el equipo reciba para publicar.

## Objetivo y audiencia

Generar leads para la Maestría en Gerencia de Proyectos. La landing ayuda al aspirante a entender la oferta y a dejar sus datos para que el equipo de ventas lo contacte, resuelva sus dudas y dé seguimiento comercial.

**Audiencia inicial por validar.** Profesionales que buscan asumir o fortalecer responsabilidades de dirección de proyectos y necesitan saber si pueden compatibilizar el estudio con su trabajo. Confirmar con el equipo de ventas cuáles son los perfiles y las dudas más frecuentes.

**Acción principal.** Solicitar asesoría dejando los datos en el formulario del hero para que el equipo de ventas se ponga en contacto. El formulario real se incrusta mediante un script de RD Station. Sus campos vienen definidos desde el CRM. El rediseño debe prever espacio para el formulario completo y puede trabajar el texto que lo acompaña en la landing.

## Oferta del hero

**Maestría en Gerencia de Proyectos** · 100 % virtual · 4 semestres · 42 créditos académicos.

V02 presenta **$5.801.700 por periodo académico con subsidio del 23,5 %**, frente a un valor oficial de **$7.583.800**. El detalle «por periodo académico» y la condición del subsidio aparecen en el bloque de financiación. La propuesta del brief es incluir esa unidad junto al importe en el hero y confirmar la vigencia de la oferta antes de publicar. [Cabecera y oferta de V02](../../prototipo-gerencia-proyectos/app/components/contenido-v02.tsx)

## Estructura de referencia de V02

La [matriz de contenido](matriz-de-contenido.md) detalla el contenido actual de cada bloque, qué se reutiliza y qué se valida antes de publicar.

| Orden | Bloque | Qué resuelve |
| --- | --- | --- |
| 1 | Navegación y hero | Accesos a perfil de egreso, plan, inscripción y beneficios institucionales. El hero presenta la oferta y lleva el formulario en el mismo bloque. El prototipo muestra una maqueta deshabilitada. La landing publicada usará el formulario incrustado de RD Station. |
| 2 | Ficha académica y franja de inscripción | Reúne duración, créditos y registro del programa (SNIES 118026). La franja devuelve al formulario. |
| 3 | Qué podrás hacer al graduarte | Explica el perfil de egreso y cómo aplicar la formación profesionalmente. |
| 4 | Lo que aprenderás | Resume los aprendizajes del programa. |
| 5 | Conoce el programa | Agrupa plan de estudios, requisitos y ruta de admisión en pestañas. Incluye acceso al PDF del plan. |
| 6 | Financiación | Amplía el precio subsidiado, sus condiciones y las opciones de financiación. |
| 7 | ¿Por qué UNIMINUTO? | Presenta acreditación, experiencia en educación virtual y acompañamiento académico. |
| 8 | Testimonios y formación adicional | Aporta ejemplos de experiencia estudiantil y presenta el acceso a cursos certificados. V02 usa testimonios ficticios de muestra. |
| 9 | Pie institucional | Reúne la identificación y la información legal de UNIMINUTO. |

V02 incluye un acceso flotante al formulario en móvil al pasar ese bloque y una acción para volver arriba después del hero. [Estructura de la landing](../../prototipo-gerencia-proyectos/app/landing.tsx) · [Pestañas académicas](../../prototipo-gerencia-proyectos/app/components/programa-v02.tsx)

## Uso como plantilla

La [guía de comunicación](guia-de-comunicacion.md) define el recorrido narrativo y los criterios editoriales para adaptar los textos a cada programa.

La [guía de diseño UX](guia-de-diseno-ux.md) recoge la composición, las interacciones y los criterios de revisión visual de V02.

La [guía de dirección visual](guia-de-direccion-visual.md) detalla cómo adaptar el key visual. El [índice de rediseño](README.md) reúne los documentos de la plantilla.

- **Base común.** Por ahora, todas las landings deben incluir todos los bloques de V02 enumerados arriba, incluidos financiación, testimonios y formación adicional. El formulario de generación de leads va dentro del hero en móvil y escritorio. La ficha de entrada presenta nombre, modalidad, precio, duración y créditos según la oferta de cada programa.
- **Contenido por programa.** Completar la ficha académica, las condiciones de la oferta, el perfil de egreso, los aprendizajes, el plan, la ruta de admisión y los recursos visuales con el material aprobado para esa landing. Las cifras y testimonios de Gerencia de Proyectos corresponden a este primer caso.
- **Identidad visual compartida.** Diseño entrega el key visual de «Estudia Ahora» como punto de partida. A partir de ese material se preparan las piezas para cada landing, adaptando el modelo y los elementos gráficos al programa y siguiendo la dirección visual aplicada en V02. [Originales de campaña](../../key-visual/)
- **Captación.** Todas las landings usan el mismo formulario incrustado de RD Station. Cada landing está asociada a un único programa y envía automáticamente su valor mediante JavaScript. El visitante no selecciona el programa. Los campos se administran desde RD Station. Al preparar una nueva landing, comprobar que la solicitud llega al CRM con el valor del programa correspondiente.
- **Después del envío.** Cuando el formulario se envía correctamente, todas las landings redirigen a la misma página de agradecimiento, con contenido genérico para todos los programas. Comprobar la redirección y que el lead llegue a RD Station con el programa correcto.

## Recorrido y dirección visual

El [wireframe del hero](wireframe-hero.html) documenta la composición actual de V02 en móvil y escritorio, incluida la ficha académica posterior.

1. **Partir del hero de V02.** Mantener el formulario en el hero en móvil y escritorio, donde el equipo reporta buenos resultados. En móvil, presentar el nombre y los cuatro datos prioritarios en un bloque compacto antes del formulario. V02 ubica duración y créditos en la ficha posterior. Llevarlos también al hero es el ajuste propuesto en este brief.
2. **Probar el recorrido con aspirantes.** Pedirles que expliquen qué ofrece la maestría, encuentren los requisitos y digan qué esperan que ocurra al pulsar el botón principal. Usar sus respuestas para ajustar la jerarquía antes de diseñar en alta fidelidad.
3. **Aplicar el visual compartido de «Estudia Ahora».** Tomar V02 como referencia al incorporar la persona y los elementos gráficos de cada programa. Revisar legibilidad en móvil, contraste y visibilidad de la acción principal.

## Cómo evaluar el resultado

El [protocolo de revisión y medición](protocolo-de-revision-y-medicion.md) detalla las pruebas de publicación y cómo interpretar las señales de captación.

Seguiremos las **solicitudes de asesoría recibidas por visita** como métrica principal. Levantar la línea base con sesiones y envíos atribuibles a la landing. Usar los inicios y errores de formulario para localizar dificultades, y revisar con ventas qué proporción de solicitudes pudo contactar. Las capturas de Clarity muestran interacción alrededor del formulario y de los accesos académicos. [Lectura de Clarity](../mejoras.md#qué-muestran-los-mapas)

## Pendientes de validación

- Confirmar la vigencia de los valores y del subsidio, y revisar las condiciones de financiación antes de publicar.
- Revisar el texto que acompaña al formulario.
- Confirmar la cifra de cursos certificados, que difiere entre texto e imagen, y contar con testimonios reales autorizados para la sección de testimonios. [Observaciones de contenido](../mejoras.md)
