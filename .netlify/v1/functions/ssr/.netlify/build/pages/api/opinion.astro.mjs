import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCqpc6Prm5q1ZnF\nLg5gHILRhlVoi+hu1DNE2horFNUQHI7uvMcySEY6Qwu+r3laWTUE9MUzsb6v24zc\nJn7T0ZlsZIBKWR/53VmZIyatioWO5xiTWrkEALBNRAP/lPDMQB9aDckDNjfXnEm0\noO5cTIiLKdYeQJfZpHFpZ/Muab/KZGOzzsguAvNPQV7ccvneNH/8N/qK4ajRGVhY\nW3p7IXCkzsDZFhuIehlbmT6O+7KfPQsO4pwTiQVn2paGZpQvaXYpQ+eSLYwGlwNv\nj6h6a0G1euwIXKXS0ClnWEzVN5Tv37p/tpIbPp9Vg+SERSRuvY+nxDkcOBGzwYCI\nK1yuTaMfAgMBAAECggEAC8/zZvW7lfCYNtJz00pV8dv7IIQCwF02+U6hnhbQks9v\nQ25U2ZGwLstCTl5GJ69iIKgy2Fu25+RqMTkG8XGiTaL9UGgv8vNUBuosfLnIefZc\nOKMAiJrlmUuafUAZlQHhSbIHlo3TuryKS5MSPNhdYUixliGBgWLFKPc1maJfUMqa\nNPLUQAs1AU4XpovJm4A0ocUe7c7sR7lbRKtte1y9uOhujxfBqVq5PedNYCRQXbhg\nLOFgK+3d5EwUCps/v9ou1nAhWp0cByGowBZmSu1yxESIjFfAETiIa0E3cbInnKtD\nGidKcU6RvMUkEB7xusIWqiapfoCk99BDv5H8p6AvJQKBgQDb6tSdsP82SdGwysQj\n/7yaXhrcsjbuTfkVTMCCKK1p6H+HImaCSf/0eF9kKCVTHmAr2uM4RSfG/dUVgonH\nTQ6O508R/+egaxtKSVeCQnoWgLwoWmKSchvo36c3vF4Vzh8Znw/oD8Z8/YC5Xchy\nJKsW0yBxLyZcRkYa/cUFCUC5EwKBgQDGpYIY8gbsiRzl3yb/N3/C+GOsK3W03F08\neDlrkP6d0lZPNmZr1sNbrNLoLI+/vqtjPNOC/tLoAj8LbimVQ/wd0duQmUXMq2Lm\ncxks4xzHc6YkfoeU+TteXavLfM/UWlTxRLzdTpfuPRoBH2BZJRd/rGoD9aOOhU+h\netb3XeZbRQKBgEYNS6TfmKwmX5E9RbVh5SYXC995NV47oDhUto2/f13ZHaZiIt0l\nzU6GeXxh/WG4r1HI69Ak10Lf4Fx1tIWz2gtTSzCkn5fOBmdnbWSk4FcCsuz3vaaA\nirtnYtCyRBYWDnoO3PZC8CsoZTSm1w7k90rR/eeP6VxDVlmKtJOiGufZAoGBAKXq\nyb4yMQxR/bwWZkkXPvRHaWD9r8PPp2SBelxY8AI8E/D3nBaIfAXPVR2tUqeyBw7N\nWFD6rIgykBvo+Hx/G06A4SZmjwFDSUj4a9etHnWNKAElWfNZNHg+PuaoqiJRDM+0\nPRePtKC9kkHLxjrPG1B9XtNN0T2SJY/XvUNBv80NAoGBAIMhQEFFOWMgrkbdF/3n\n6KrgXhIamQys5bSApwOFShroU0Ozf5gpbwK9tjpBBQ2CmTqvMx2lkiI2KTPV6kma\nDkKbfWPWT/D+JfxkA+eAq4BcZNsWaBWmTVfRye6QovR0miFXZfJzzyIw3nBsbyZU\nY/nE4s4FyCxk4fTilvVeOVbb\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n");
try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: "alcaldia-gonzalo",
        clientEmail: "firebase-adminsdk-fbsvc@alcaldia-gonzalo.iam.gserviceaccount.com",
        privateKey
      })
    });
  }
} catch (error) {
  console.error("Firebase admin initialization error", error);
}
const db = getFirestore();

const prerender = false;
const POST = async ({ request }) => {
  const formData = await request.formData();
  const votara = formData.get("votara")?.toString();
  const calificacion_gestion = formData.get("calificacion_gestion")?.toString();
  const apoyara_reeleccion = formData.get("apoyara_reeleccion")?.toString();
  const sugerencia = formData.get("sugerencia")?.toString();
  if (!votara || !calificacion_gestion || !apoyara_reeleccion) {
    return new Response("Faltan campos requeridos", { status: 400 });
  }
  try {
    const docRef = await db.collection("opiniones").add({
      votara,
      calificacion_gestion,
      apoyara_reeleccion,
      sugerencia,
      fecha: /* @__PURE__ */ new Date()
      // Guardamos la fecha del envío
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    return new Response("Error al guardar la opinión", { status: 500 });
  }
  return new Response("Opinión recibida. ¡Gracias!", { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
