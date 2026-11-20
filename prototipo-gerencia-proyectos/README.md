# Prototipo de la Maestría en Gerencia de Proyectos

Maqueta local en Next.js (App Router), TypeScript y Tailwind CSS de la [landing antigua de UNIMINUTO Virtual](https://uvd.uniminuto.edu/boletin/maestria-en-gerencia-de-proyectos/). Conserva los textos, las imágenes y el orden de las secciones como base para comparar cambios futuros.

## Ejecutar en local

Desde esta carpeta, con Node.js 20.9 o superior:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abre [el prototipo base](http://localhost:3000/) o [la variante V02](http://localhost:3000/v02).

## Editar la maqueta

- `app/landing.tsx` contiene la estructura compartida y los textos de la landing antigua.
- `app/components/contenido-v02.tsx` contiene los accesos del encabezado y las secciones resumidas de la variante.
- `app/landing-original.css` conserva los estilos de la referencia.
- `app/globals.css` carga Tailwind, las fuentes locales y los estilos de la cabecera.
- `app/components/formulario.tsx` reproduce el bloque de captación como una maqueta con campos deshabilitados.
- `public/landing/` contiene los recursos gráficos de la landing de referencia.

En el prototipo base los controles son estáticos. V02 activa los enlaces de navegación y el PDF oficial del plan de estudios. Ambas rutas comparten la misma maqueta del formulario deshabilitado, sin integraciones ni envíos.

## Comprobar la compilación

```powershell
npm.cmd run build
npm.cmd run typecheck
```
