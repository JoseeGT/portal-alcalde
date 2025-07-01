import type { APIRoute } from 'astro';

export const prerender = false;
// Solo necesitamos 'db' de nuestro archivo de configuración
import { db } from '../../lib/firebase/server';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const votara = formData.get('votara')?.toString();
  const calificacion_gestion = formData.get('calificacion_gestion')?.toString();
  const apoyara_reeleccion = formData.get('apoyara_reeleccion')?.toString();
  const sugerencia = formData.get('sugerencia')?.toString();

  if (!votara || !calificacion_gestion || !apoyara_reeleccion) {
    return new Response("Faltan campos requeridos", { status: 400 });
  }

  try {
    // ---- CAMBIO CLAVE AQUÍ ----
    // En lugar de addDoc(collection(...)), usamos el método .add()
    // directamente sobre la referencia a la colección.
    const docRef = await db.collection("opiniones").add({
      votara,
      calificacion_gestion,
      apoyara_reeleccion,
      sugerencia,
      fecha: new Date(), // Guardamos la fecha del envío
    });
    // ---- FIN DEL CAMBIO ----
    
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Response("Error al guardar la opinión", { status: 500 });
  }

  return new Response("Opinión recibida. ¡Gracias!", { status: 200 });
};