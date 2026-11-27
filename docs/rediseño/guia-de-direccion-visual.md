# Guía de dirección visual · Estudia Ahora

Diseño entrega el key visual de campaña. V02 muestra cómo llevarlo a una landing de programa. Cada adaptación conserva la dirección visual y cambia el modelo y los elementos gráficos según el programa. [Originales de campaña](../../key-visual/) · [Guía de diseño UX](guia-de-diseno-ux.md)

## Traducir el key visual a la landing

| Pieza | Referencia en V02 | Criterio de adaptación |
| --- | --- | --- |
| Modelo e imagen del hero | La imagen se integra al fondo azul oscuro con bordes difuminados. En escritorio ancho ocupa el espacio entre la oferta y el formulario. | Encuadrar al modelo para que rostro, postura y elementos relevantes sigan reconocibles con el recorte. Conservar el tratamiento de luz y color del key visual. Revisar que la imagen deje espacio a la oferta y al formulario. |
| Sello «Estudia Ahora» | V02 lo coloca sobre el área de la imagen central desde 1200 px. | Usar el recurso de campaña y cuidar que se lea sobre el fondo. Comprobar que queda separado del formulario y del texto comercial. |
| Perfil de egreso y aprendizajes | V02 combina fotografías temáticas, fondos e iconos. | Escoger imágenes que permitan reconocer el ámbito del programa. Reservar los iconos para identificar conceptos y mantener un tratamiento coherente entre ellos. |
| Financiación y formación adicional | Las secciones usan fondos de campaña y piezas de apoyo. | Usar los fondos para dar continuidad visual. Mantener el precio y sus condiciones en texto de la página. Cuando una gráfica incluya cifras, comprobar que coincidan con el texto. |
| Testimonios | V02 muestra retratos pequeños junto a cada cita. | Usar retratos autorizados que correspondan a la persona citada. Mantener encuadres y tamaños consistentes con las tarjetas. |

[Imágenes y sello de V02](../../prototipo-gerencia-proyectos/public/landing/) · [Estilos de campaña](../../prototipo-gerencia-proyectos/app/campana-v02.css)

## Preparar y revisar las piezas

El [fondo compartido de Formación adicional](../../prototipo-gerencia-proyectos/public/landing/fondo-formacion-fragmentos.webp) usa paneles azules y fragmentos de vidrio hacia los bordes. El centro oscuro queda despejado para el texto y la pieza del beneficio. La fragmentación y los destellos dan continuidad al key visual sin incorporar dígitos al fondo.

En Derecho, [matrícula y financiación](../../prototipo-gerencia-proyectos/public/landing/derecho/fondo-financiacion-explosion.webp) usa un fondo propio con explosiones laterales, haces azules diagonales y chispas cálidas. El centro de bajo contraste queda detrás del encabezado y las tarjetas. El recorte favorece los puntos de estallido y parte del suelo reflectante.

1. **Inventariar las piezas.** Identificar cuáles vienen del key visual, qué modelo y gráficos cambian, y dónde aparece cada recurso en la página.
2. **Revisar en contexto.** Probar el recorte y el contraste sobre la landing con el título y precio reales. Revisar el hero estrecho y el de tres columnas. En V02, por debajo de 1200 px la oferta y el formulario funcionan con el fondo y la jerarquía de texto, mientras la pieza central queda oculta.
3. **Preparar los archivos para web.** Ajustar dimensiones al espacio de uso, conservar transparencia donde haga falta y comprobar el peso y la nitidez en el navegador. Guardar los originales con el material de campaña y las piezas que sirve la app en `public/landing/`.
4. **Revisar el significado.** Usar texto alternativo si la imagen aporta información. Para fondos y ornamentos, mantenerlos fuera de la lectura asistida. Confirmar que el nombre, la oferta y el acceso al formulario se entienden aun si la imagen tarda en cargar.

Revisar la nitidez del rostro al tamaño de publicación y en pantallas de alta densidad. Si una exportación se ve pixelada, partir del archivo original de Diseño y comprobar qué resolución termina sirviendo la landing. En el hero de Derecho, exportar el key visual a su resolución nativa permite conservar el modelo y el encuadre de campaña con más detalle.

En el piloto de Derecho, el key visual ocupa todo el fondo del encabezado y el hero. El modelo queda entre la oferta y el formulario, con el rostro por debajo del menú y espacio para ver los destellos y reflejos de la escena. El sello va sobre la oferta. Usar degradados localizados para sostener el contraste del menú y del texto.

La ficha académica de Derecho prolonga ese fondo hasta los reflejos del suelo. Los créditos, la duración y el registro se leen sobre placas oscuras translúcidas con líneas finas. La ficha concentra esos datos dentro del hero para evitar repetirlos bajo el texto de la oferta. En pantallas estrechas las placas se apilan sobre el degradado.

## Desglose del key visual de Derecho

La pieza original es horizontal, de 2664 × 1990 px. El análisis describe lo visible y las decisiones de cámara y luz que sugiere la imagen. La pieza final no permite determinar la lente, la apertura, el obturador ni el esquema de iluminación exactos. [Pieza original de Derecho](../../key-visual/UNIM_OCT_EstuAhoCRIS/UNIM_OCT_EstuAhoCRIS/Links/Abogado%20atravesando%20una%20explosi%C3%B3n%20digital.png)

| Elemento | Cómo aparece en el original | Qué efecto produce |
| --- | --- | --- |
| Personaje y vestuario | Hombre adulto joven de pelo oscuro, con traje azul marino, camisa blanca, corbata burdeos y zapatos oscuros. Lleva bajo el brazo un objeto plano plateado que parece un portátil cerrado. | El traje y la postura lo sitúan en un contexto profesional. La camisa separa el torso del fondo oscuro y la corbata introduce un acento cálido moderado. |
| Pose y mirada | Avanza en una zancada hacia cámara. Una pierna y la suela del zapato se proyectan al primer plano, la otra queda flexionada atrás. El torso gira y la cabeza mira hacia arriba y a la izquierda del encuadre. | La zancada da dirección y velocidad. La mirada fuera de cámara sugiere que el personaje reacciona a algo dentro de la escena. |
| Escena y fondo | Espacio oscuro y amplio, con formas arquitectónicas apenas visibles, bruma azul, dos puntos de luz al fondo a la derecha y un suelo oscuro, brillante y reflectante. El estallido se concentra detrás del personaje. | La bruma separa los planos y deja áreas relativamente tranquilas. El suelo prolonga los destellos y da una superficie sobre la cual se entiende la zancada. |
| Cámara y perspectiva | Plano de cuerpo entero en contrapicado pronunciado, con el punto de vista cerca del suelo. La suela próxima a cámara se ve grande frente al resto del cuerpo. Las líneas del piso y los reflejos dirigen la vista hacia la zona de avance. | La perspectiva recuerda a un gran angular cercano y acentúa la escala del personaje. El reflejo alargado amplía la profundidad. |
| Encuadre | El rostro está aproximadamente al 45 % del ancho y al 44 % de la altura, medidos desde la esquina superior izquierda. El pie adelantado entra en el tercio inferior. Hay aire oscuro arriba y a ambos lados, y una franja amplia de reflejos abajo. | La acción se concentra cerca del centro sin agotar el espacio del fondo. El recorte web puede mover al personaje dentro del hero conservando parte de la escena. |
| Luz del modelo | La cara y la camisa siguen legibles en medio de sombras densas. Se perciben luces frías en los contornos del traje y acentos cálidos alrededor de la cabeza, el hombro y el mazo. | El contraste entre luz sobre el rostro, contornos fríos y estallido posterior separa al modelo del entorno. Los acentos cálidos atraen la mirada hacia la cara y el símbolo jurídico. |
| Luces del entorno | Los focos azul blanco de la derecha tienen halos que se disuelven en la bruma. Una franja fría cerca del suelo y varios destellos cortos iluminan el plano medio. | Los halos sugieren luz dispersa en el aire. Las distintas alturas de luz dan volumen al espacio y continuidad a los reflejos del suelo. |
| Mazo | Un mazo de juez, de madera oscura con una banda dorada, flota por encima y a la derecha de la cabeza. | Identifica el programa por asociación con el ámbito jurídico. El brillo cálido le da presencia aun entre los efectos azules. |
| Dígitos y fragmentos | Dígitos segmentados, sobre todo azul eléctrico y algunos ámbar, se distribuyen sobre una diagonal detrás del modelo. Partículas, piezas oscuras y fragmentos reflectantes salen del núcleo en varias direcciones. Las piezas más cercanas se ven grandes y desenfocadas. | Los dígitos aportan el lenguaje digital de campaña. La variación de tamaño, brillo y nitidez hace que la explosión parezca extenderse a través de varios planos. |
| Estelas y reflejos | Rayos finos se abren hacia arriba y a la izquierda. Las chispas blancas y cálidas salpican el núcleo. El piso estira los reflejos azules, blancos y ámbar hacia la parte inferior. | Las diagonales sugieren velocidad y expansión. Los reflejos conectan los elementos flotantes con el suelo y continúan el movimiento de la imagen fuera del núcleo. |
| Paleta | Azul noche y negro azulado como base. Azul cobalto y cian eléctrico en la bruma, los dígitos y las estelas. Blanco frío en picos de luz, ámbar y dorado en destellos y mazo, burdeos en la corbata y tonos de piel relativamente cálidos. | La base oscura sostiene la atmósfera cinematográfica. Los azules construyen la escena digital y los acentos cálidos distinguen al personaje y la señal jurídica. |

### Capas de referencia para una adaptación

De atrás hacia delante, la composición se puede planear como ambiente oscuro y focos lejanos, suelo con reflejos, núcleo digital y mazo, personaje, y fragmentos desenfocados en primer plano. Es un orden de análisis para reproducir la profundidad visual. La relación entre capas importa tanto como cada recurso. La cara y la silueta necesitan espacio frente al núcleo luminoso. Los elementos cercanos pueden transmitir velocidad aunque parte de ellos quede fuera del recorte.

Para llevar la pieza al hero, conservar el rostro, la dirección de la zancada y una porción del suelo con reflejos. Usar el mazo para identificar Derecho y mantener suficiente aire alrededor para que se reconozca. En el piloto, el sello amarillo, el menú, la oferta y el formulario se agregan en la landing. Revisar los degradados detrás del texto en el recorte final y dejar visible la escena entre la oferta y el formulario.

El [fondo de Derecho sin personaje](../../prototipo-gerencia-proyectos/public/landing/derecho/fondo-hero-sin-personaje.webp) se usa en «Qué podrás hacer al graduarte». Los efectos y el mazo quedan hacia los laterales. El centro de bajo contraste da espacio al título y a la tarjeta.

## Video y audio cuando el contenido lo requiera

Si se incorpora un testimonio en video, definir qué experiencia concreta aporta, usar reproducción iniciada por la persona y ofrecer controles, subtítulos y una alternativa textual. Comprobar que la pieza y su portada mantienen el ritmo de lectura y que la carga del video deja disponible el formulario. La guía se aplica cuando exista material audiovisual para publicar.
