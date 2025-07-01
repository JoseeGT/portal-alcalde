// ==========================================================
// CÓDIGO FINAL Y CORRECTO para: src/pages/api/proyectos.js
// ==========================================================
import proyectos from '../../data/proyectos.json';

// ¡ESTA LÍNEA ES LA SOLUCIÓN!
// Le dice a Astro que este endpoint es dinámico y debe ejecutarse en cada solicitud,
// incluso si el resto del sitio es estático.
export const prerender = false;

// Usamos la firma más robusta para asegurar la compatibilidad.
export async function GET({ url }) {
  
  const comunidadId = url.searchParams.get('comunidad');

  if (!comunidadId) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  const proyectosFiltrados = proyectos.filter(p => p.comunidad === comunidadId);

  return new Response(JSON.stringify(proyectosFiltrados), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}