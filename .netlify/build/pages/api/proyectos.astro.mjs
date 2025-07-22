import { t as todosLosProyectos } from '../../chunks/proyectos_58l2pTzC.mjs';
export { renderers } from '../../renderers.mjs';

// ==========================================================
// CÓDIGO FINAL Y CORRECTO para: src/pages/api/proyectos.js
// ==========================================================

// ¡ESTA LÍNEA ES LA SOLUCIÓN!
// Le dice a Astro que este endpoint es dinámico y debe ejecutarse en cada solicitud,
// incluso si el resto del sitio es estático.
const prerender = false;

// Usamos la firma más robusta para asegurar la compatibilidad.
async function GET({ url }) {
  
  const comunidadId = url.searchParams.get('comunidad');

  if (!comunidadId) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  const proyectosFiltrados = todosLosProyectos.filter(p => p.comunidad === comunidadId);

  return new Response(JSON.stringify(proyectosFiltrados), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
