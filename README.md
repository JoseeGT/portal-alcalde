# Portal Web para la Campaña - Alcaldía del Municipio Libertador

![Captura de pantalla del sitio web]([./public/portada.jpg])

Este proyecto es el portal web oficial para la campaña de reelección de Gonzalo "Chacho" Díaz a la alcaldía del Municipio Libertador (Palo Negro), Estado Aragua. El sitio está diseñado para mostrar los logros de la gestión, presentar al candidato y, fundamentalmente, para interactuar con la comunidad a través de un formulario de opinión.

**[Ver el sitio en vivo]([Pega aquí el enlace a tu sitio desplegado en Vercel o Netlify])**

---

## 🚀 Características Principales

* **Componentes Reutilizables:** Construido con Astro para un rendimiento óptimo y un código modular.
* **Diseño Responsivo:** Totalmente adaptable a dispositivos móviles y de escritorio gracias a Tailwind CSS.
* **Formulario de Opinión Interactivo:** Permite a los ciudadanos enviar sus opiniones, calificaciones y sugerencias.
* **Backend sin Servidor:** Los datos del formulario se envían y almacenan de forma segura utilizando una API Route de Astro y **Cloud Firestore** de Firebase.


---

## 🛠️ Tecnologías Utilizadas

* **Framework:** [Astro](https://astro.build/)
* **Estilos CSS:** [Tailwind CSS](https://tailwindcss.com/)
* **Base de Datos:** [Firebase (Cloud Firestore)](https://firebase.google.com/)
* **Despliegue:** [Netlify](https://www.netlify.com/)
* **Entorno de Ejecución:** [Node.js](https://nodejs.org/)

---

## 🔧 Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### 1. Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### 2. Clonar el Repositorio

```bash
git clone [Pega aquí el enlace a tu repositorio de GitHub]
cd portal-alcalde
```

### 3. Instalar Dependencias

```bash
npm install
```

### 4. Configurar Variables de Entorno

Este proyecto necesita credenciales de Firebase para conectar con la base de datos.

1.  Crea un archivo llamado `.env` en la raíz del proyecto.
2.  Copia el contenido del archivo `.env.example` (si no lo tienes, usa esta plantilla) y pégalo en tu nuevo archivo `.env`.
3.  Rellena los valores con tus propias credenciales de Firebase.

**Contenido del archivo `.env`:**
```env
# Credenciales del Service Account de Firebase Admin
FIREBASE_PROJECT_ID="tu-project-id-de-firebase"
FIREBASE_CLIENT_EMAIL="tu-client-email-de-firebase"
FIREBASE_PRIVATE_KEY="tu-clave-privada-de-firebase"
```


### 5. Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

¡Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver el proyecto en funcionamiento!

---



