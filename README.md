# Reto-Hackeando-el-Futuro-de-una-Pyme

---

## Requisitos cumplidos

### HTML
- Estructura semántica completa (`header`, `nav`, `main`, `section`, `article`, `footer`).
- Tres páginas: **Historia**, **Servicios** y **Contacto (Información)**.
- Cada sección documenta la historia del "incidente".

### CSS
- Diseño fuera de lo común con paleta cálida (naranja, café, crema).
- Efecto **glitch** en el título principal y como nombre del negocio
- Animaciones: brillo en el banner, latido del logo, hovers en botones, tarjetas y enlaces.
- Totalmente **responsive** (se adapta a celular).

### JavaScript
- **Pantalla de error inicial** que simula un fallo de conexión y se recupera al hacer clic.
- **Easter egg**: escribe la palabra `hack` con el teclado para descubrir un código de descuento.
- **Chatbot** ("Cáceres-Bot") que responde preguntas sobre servicios, horarios, entrega y ubicación.

### Extra
- **Modo oscuro y modo claro** con variables CSS.
- *API de WhatsApp* (wa.me) para el envío de pedidos

---

## Cómo usarlo

1. Clona o descarga este repositorio.
2. Abre `index.html` en cualquier navegador.
3. Pasa la pantalla de error haciendo clic en **"Reintentar conexión"**.
4. Navega entre las secciones con el menú superior.

No se necesita instalación, servidor ni dependencias locales. 

---

## Funcionalidades destacadas

### Pantalla de error inicial
Al entrar al sitio por primera vez, se muestra una pantalla con el mensaje **"SISTEMA COMPROMETIDO"** y un botón para "reintentar conexión". Al hacer clic, simula los pasos de reconexión y entra al sitio real.

### Chatbot
El bot responde a palabras clave relacionadas con:
- Horario de atención
- Servicios
- Ubicación
- Historia del incidente

### Carrito de compras
- Agrega productos desde el catálogo.
- Guarda el contenido en `localStorage`.
- Genera un pedido automático por WhatsApp con el detalle y el total.

### Easter egg
Si escribes la palabra `hack` con el teclado en cualquier parte del sitio, aparece un código de descuento (`6DEJULIO`).

### Modo oscuro / claro
Cambia entre los dos modos con el botón en el menú superior. La preferencia se guarda en `localStorage`.

---

## Tecnologías usadas

- **HTML5** semántico
- **CSS** con variables, flexbox, grid y animaciones
- **JavaScript** 

---

## Autor

**Estudiante:** *Benson Ho Chen*
**Asignatura:** *Lenguaje de Programación III*
**Institución:** *Universidad Autónoma de Santo Domingo*
**Año:** 2026

Este proyecto es una práctica académica. La historia del "borrado digital" es ficticia y forma parte de la narrativa del reto. El negocio **Col. Cáceres** es real y se ubica en Santo Domingo Este, San Isidro, Carretera Mella.
