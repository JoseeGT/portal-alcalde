export const prerender = false;

// Importamos la instancia de la base de datos de Firebase
import { db } from '../../lib/firebase/server';

export const POST = async ({ request }) => {
  const formData = await request.formData();

  const votara = formData.get('votara')?.toString();
  const calificacion_gestion = formData.get('calificacion_gestion')?.toString();
  
  const apoyara_reeleccion = formData.get('apoyara_reeleccion')?.toString();
  const sugerencia = formData.get('sugerencia')?.toString();

  if (!votara || !calificacion_gestion) {
    return new Response("Faltan campos requeridos (votará, calificación)", { status: 400 });
  }

  try {
    const docRef = await db.collection("opiniones").add({
      votara,
      calificacion_gestion,
      apoyara_reeleccion: apoyara_reeleccion || null,
      sugerencia: sugerencia || null,
      fecha: new Date(),
    });
    
    console.log("Documento guardado con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al añadir el documento: ", e);
    return new Response("Error al guardar la opinión", { status: 500 });
  }

  return new Response("Opinión recibida. ¡Gracias!", { status: 200 });
};  