# Guía de diseño UX · Plantilla V02

V02 es la referencia de diseño para las landings de programas de UNIMINUTO Virtual. Gerencia de Proyectos es el primer caso y está en revisión. La experiencia debe permitir que el aspirante entienda la oferta, resuelva sus dudas y encuentre el formulario de asesoría desde el hero. [Brief](brief.md) · [Matriz de contenido](matriz-de-contenido.md) · [Guía de comunicación](guia-de-comunicacion.md)

## Composición y recorrido

| Bloque | Referencia de V02 | Criterio para adaptar la plantilla |
| --- | --- | --- |
| Navegación | Logo y menú desplegable por debajo de 1200 px. Desde 1200 px, enlaces visibles y acceso al formulario. | Conservar los accesos a perfil, plan, inscripción y beneficios institucionales. Comprobar que cada enlace lleva al contenido esperado. |
| Hero y captación | Nombre, modalidad y precio con subsidio, junto al formulario de muestra. El acceso principal lleva al mismo formulario. | Mantener el formulario de RD Station dentro del hero en todos los tamaños. Dar prioridad al nombre, la modalidad y el precio. Revisar cómo se ajustan nombres largos y ofertas de longitud variable. |
| Ficha académica y franja | Créditos, duración y registro en un bloque posterior al hero, seguido de una franja que vuelve al formulario. | Conservar la ficha y el retorno al formulario. V02 sirve de referencia para su ubicación actual. El brief plantea incluir duración y créditos también en el hero como ajuste a evaluar. |
| Perfil de egreso y aprendizajes | Perfil con texto e imagen, seguido de tarjetas con icono y una idea por tarjeta. | Dar más espacio a las capacidades que a los elementos decorativos. Permitir que los títulos y descripciones se extiendan sin recortarse. |
| Información académica | Tres pestañas para plan de estudios, requisitos y ruta de admisión. El plan incluye desplegables por componente y acceso al PDF. | Conservar la estructura y los accesos directos. Dejar visible la pestaña activa y permitir encontrar el PDF sin desplegar todo el plan. |
| Financiación | Tarjeta destacada con matrícula subsidiada, precio por periodo y condiciones, junto a las alternativas de financiación. | Dar prioridad al importe y su unidad. Mantener las condiciones junto al precio para que puedan leerse como parte de la oferta. |
| Beneficios institucionales, testimonios y formación adicional | Tarjetas de beneficios y testimonios, bloque de formación con imagen y acceso al formulario. | Conservar todos los bloques. Probar la composición con citas reales de distinta extensión y verificar que la gráfica de formación coincide con los datos del texto. |
| Pie institucional | Logo, identificación institucional e información legal. | Mantener una lectura clara del texto legal, incluso en pantallas estrechas. |

[Composición de V02](../../prototipo-gerencia-proyectos/app/landing.tsx) · [Cabecera, ficha y tarjetas](../../prototipo-gerencia-proyectos/app/components/contenido-v02.tsx) · [Pestañas académicas](../../prototipo-gerencia-proyectos/app/components/programa-v02.tsx)

## Adaptación a pantallas

Formación adicional es un bloque común de la plantilla. Reutilizar el componente de V02 con su texto, fondo, imagen y botón de regreso al formulario. [Componente compartido](../../prototipo-gerencia-proyectos/app/components/formacion-adicional.tsx)

- **Hasta 800 px.** V02 apila la oferta y el formulario. La imagen central y el sello del hero se reservan para pantallas anchas. En una nueva landing, revisar cuánto hay que desplazarse para llegar al primer campo con el nombre y precio reales.
- **De 801 a 1199 px.** La oferta y el formulario quedan en paralelo. El menú sigue siendo desplegable. Revisar que los campos y el título tengan ancho suficiente.
- **Desde 1200 px.** El hero se organiza en tres columnas con oferta, imagen de campaña y formulario. La navegación se expande. Probar el recorte del modelo y la ubicación del sello con los gráficos de cada programa.
- **Durante el desplazamiento.** En móvil, «Solicitar información» aparece al pasar el formulario. «Volver arriba» aparece al pasar el hero. Comprobar que ambos controles dejan espacio a los bordes del dispositivo y que la barra fija no cubre contenido ni controles. [Acciones flotantes](../../prototipo-gerencia-proyectos/app/components/acciones-flotantes-v02.tsx)

## Identidad visual

Diseño entrega el key visual de «Estudia Ahora». Usar la aplicación de V02 como referencia para mantener la familia visual al adaptar el modelo y los gráficos a otros programas.

- **Tipografía y jerarquía.** Montserrat es la familia de referencia. Priorizar el nombre del programa en el hero, usar encabezados que distingan cada sección y dar peso visual al precio manteniendo legibles sus condiciones.
- **Color y superficies.** V02 usa un fondo azul oscuro en el hero, superficies claras para la lectura y amarillo para destacar acciones y la tarjeta de matrícula. Revisar el contraste sobre cada fondo y conservar el significado visual de los botones.
- **Esquinas en Derecho.** Las tarjetas y los paneles usan esquinas rectas para acompañar el carácter angular del key visual. Los botones conservan su redondeo.
- **Encabezado integrado.** El piloto de Derecho usa un solo fondo para la navegación y el hero. Revisar que el logo y los enlaces mantengan contraste sobre el degradado y que el menú desplegable se lea sobre su propia superficie.
- **Piezas gráficas.** Revisar el encuadre del modelo, la posición del sello y el espacio que ocupa el fondo. Mantener la oferta y la información académica en texto legible cuando la pieza gráfica se recorte u oculte.

[Estilos de campaña](../../prototipo-gerencia-proyectos/app/campana-v02.css) · [Fuentes globales](../../prototipo-gerencia-proyectos/app/globals.css) · [Originales del key visual](../../key-visual/) · [Recursos del prototipo](../../prototipo-gerencia-proyectos/public/landing/)

Consulta la [guía de dirección visual](guia-de-direccion-visual.md) para preparar encuadres, fondos y piezas de campaña.

## Ritmo y continuidad entre programas

- Alternar bloques de lectura breve, tarjetas y contenido en pestañas siguiendo el orden de V02. Usar títulos que permitan retomar la lectura al saltar desde el menú.
- Mantener el mismo comportamiento de pestañas, desplegables y accesos de regreso al formulario entre programas. Comprobar que el cambio de sección deja claro dónde está la persona.
- Cuando una transición aporte orientación, mantenerla breve y respetar la preferencia de movimiento reducido. Comprobar que el desplazamiento suave actual pueda evitarse cuando esa preferencia esté activa. Es un punto de revisión de V02.
- Revisar la continuidad con un nombre largo, una oferta distinta y testimonios de diferente extensión. Mantener el orden y la jerarquía cuando cambien la cantidad de texto y las imágenes.

## Interacciones y estados

Las pestañas de V02 muestran una selección activa, admiten navegación con flechas, Inicio y Fin, y se sincronizan con el ancla. Al adaptar la plantilla, comprobar que el foco sea visible, que el menú y los desplegables sean operables con teclado y que los enlaces se distingan como acciones. Las imágenes decorativas deben quedar fuera de la lectura asistida.

El prototipo muestra un formulario deshabilitado. En publicación, todas las landings usan el mismo formulario incrustado de RD Station y envían por JavaScript el valor específico de su programa. Los campos se administran en RD Station. Con el formulario real, revisar cómo se ve mientras carga, cómo comunica errores, qué ocurre durante el envío y si la confirmación lleva a la página de agradecimiento común. [Maqueta del formulario](../../prototipo-gerencia-proyectos/app/components/formulario.tsx)

## Revisión antes de publicar

Para registrar las pruebas y revisar los resultados después del lanzamiento, usa el [protocolo de revisión y medición](protocolo-de-revision-y-medicion.md).

- [ ] El hero permite identificar el programa, la modalidad, el precio y el acceso a asesoría en móvil y escritorio.
- [ ] Los textos y las piezas reales del programa caben sin recortes ni desbordamiento horizontal. Revisar anchos a ambos lados de 800 y 1200 px.
- [ ] El recorrido se puede completar con teclado. Se distinguen el foco, la pestaña activa, los enlaces y los controles sobre fondos claros y oscuros.
- [ ] Los accesos directos y flotantes llegan al destino previsto sin cubrir el formulario ni el contenido.
- [ ] Una prueba controlada confirma que RD Station recibe el programa correcto y que el aspirante llega a la página de agradecimiento común.
