# Instrucciones para agentes

## Alcance

- Usa `/` como referencia de la landing anterior y `/v02` para iterar la propuesta. Si el encargo es sobre V02, limita el cambio a esa versión. Si modificas código compartido, comprueba las dos rutas.
- El formulario compartido está deshabilitado por diseño. Activa la captación o conecta servicios externos solo si el encargo lo pide.
- Consulta [las propuestas de mejora](docs/mejoras.md) si una decisión depende de Clarity. Las capturas muestran señales de interacción. Para medir conversiones hacen falta datos de envíos confirmados.

## Dónde editar

- Trabaja en [el prototipo](prototipo-gerencia-proyectos/README.md). `app/landing.tsx` compone ambas rutas. Los componentes específicos de V02 están en `app/components/` y sus estilos de campaña en `app/campana-v02.css`.
- Los recursos que sirve la aplicación van en `prototipo-gerencia-proyectos/public/landing/`. Los originales de campaña viven en `key-visual/` y las capturas de investigación en `docs/heatmaps/`.

## Verificación

- Desde `prototipo-gerencia-proyectos/`, ejecuta `npm.cmd ci` si necesitas instalar las dependencias. Para cambios de aplicación, ejecuta `npm.cmd run build` y luego `npm.cmd run typecheck`.
- Para cambios visuales o de interacción, revisa la ruta afectada en móvil y escritorio. Comprueba los controles que tocaste, como anclas, pestañas o acciones flotantes.
- Al mover documentación o recursos, comprueba sus enlaces relativos.
