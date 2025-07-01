import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

const privateKey = import.meta.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: import.meta.env.FIREBASE_PROJECT_ID,
        clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    });
  }
} catch (error) {
  console.error("Firebase admin initialization error", error);
}

export const db = getFirestore();