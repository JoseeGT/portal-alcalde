// src/scripts/initAOS.js
import AOS from 'aos';
// No necesitas importar 'aos/dist/aos.css' aquí si ya lo tienes en tu <head> o global.css

export function initializeAOS() {
    AOS.init({
        duration: 800,
        once: true,
        // Añade aquí cualquier otra opción de AOS que quieras
    });
    console.log('AOS initialized!'); // Para depuración
}