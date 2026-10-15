/* Pantalla de error  */
const btnRecuperar = document.getElementById('btn-recuperar');
const pantallaError = document.getElementById('pantalla-error');
const contenido = document.getElementById('contenido');

if (pantallaError && btnRecuperar && contenido) {
    btnRecuperar.addEventListener('click', () => {
        btnRecuperar.disabled = true;
        btnRecuperar.textContent = 'Reintentando conexión...';

        setTimeout(() => {
            btnRecuperar.textContent = 'Estableciendo conexión segura...';

            setTimeout(() => {
                btnRecuperar.textContent = 'Cargando sitio...';

                setTimeout(() => {
                    pantallaError.classList.add('oculto');
                    contenido.classList.remove('oculto');
                    contenido.classList.add('encendiendo');
                }, 600);
            }, 700);
        }, 800);
    });
}

/* Modo oscuro / claro */
const btnModo = document.getElementById('btn-modo');
if (btnModo) {
    if (localStorage.getItem('modo') === 'claro') {
        document.body.classList.add('claro');
        btnModo.textContent = 'Modo Claro';
    }

    btnModo.addEventListener('click', () => {
        document.body.classList.toggle('claro');
        const claro = document.body.classList.contains('claro');
        btnModo.textContent = claro ? 'Modo Claro' : 'Modo Oscuro';
        localStorage.setItem('modo', claro ? 'claro' : 'oscuro');
    });
}

/* Easter egg: escribir "hack" con el teclado */
let buffer = '';
document.addEventListener('keydown', (e) => {
    buffer = (buffer + e.key.toLowerCase()).slice(-10);
    if (buffer.includes('hack')) {
        const egg = document.getElementById('easter-egg');
        if (egg && egg.classList.contains('oculto')) {
            egg.classList.remove('oculto');
            buffer = '';
            setTimeout(() => egg.classList.add('oculto'), 10000);
        }
    }
});

/* Chatbot */
const chatToggle = document.getElementById('chat-toggle');
const chatVentana = document.getElementById('chat-ventana');
const chatInput = document.getElementById('chat-input');
const chatMensajes = document.getElementById('chat-mensajes');

if (chatToggle) {
    chatToggle.addEventListener('click', () => {
        chatVentana.classList.toggle('oculto');
        if (!chatVentana.classList.contains('oculto')) chatInput.focus();
    });

    document.getElementById('chat-cerrar').addEventListener('click', () => {
        chatVentana.classList.add('oculto');
    });

    document.getElementById('chat-enviar').addEventListener('click', enviarMensaje);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') enviarMensaje();
    });
}

function enviarMensaje() {
    const texto = chatInput.value.trim();
    if (!texto) return;
    agregarMensaje(texto, 'user');
    chatInput.value = '';
    setTimeout(() => agregarMensaje(respuestaBot(texto), 'bot'), 500);
}

function agregarMensaje(texto, tipo) {
    const div = document.createElement('div');
    div.className = 'msg ' + tipo;
    div.textContent = texto;
    chatMensajes.appendChild(div);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
}

function respuestaBot(input) {
    const t = input.toLowerCase();
    if (/(hola|buenas|saludos)/.test(t)) return "Hola, bienvenido al Col. Cáceres. ¿En qué te ayudo?";
    if (/(horario|abren|cierran|hora)/.test(t)) return "Abrimos de 7:30 AM a 10:00 PM todos los días.";
    if (/(entrega|domicilio|delivery|envío)/.test(t)) return "Sí, hacemos entregas a domicilio en casas cercanas.";
    if (/(dirección|dónde|ubicación|llegar)/.test(t)) return "Estamos en San Isidro, Carretera Mella. Mira el mapa en Contacto.";
    if (/(agua|botellón)/.test(t)) return "El botellón de agua está a RD$60.";
    if (/(whatsapp|wsp|número|numero|teléfono|telefono|llamar|contacto)/.test(t)) return "Llámanos al 849-620-9966 o por WhatsApp wa.me/18496209966.";
    if (/(pedido|pedir|comprar|carrito)/.test(t)) return "Agrega productos al carrito y pide por WhatsApp desde ahí.";
    if (/(hackeo|incidente|usb|misterio)/.test(t)) return "Sí, fuimos víctimas de un borrado digital. Lee la historia en Inicio.";
    if (/(gracias)/.test(t)) return "Con gusto. ¿Algo más?";
    if (/(servicio|servicios)/.test(t)) return "Ofrecemos entregas a domicilio y llenado de botellón de agua, más información en nuestro número de WhatsApp";   
    if (/(adiós|adios|chao|chau|bye|bai|)/.test(t)) return "Hasta pronto.";
    return "No estoy seguro. Pregúntame por servicios, horarios, entrega o ubicación.";
}

/* Carrito */
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const carritoPanel = document.getElementById('carrito-panel');
const carritoItems = document.getElementById('carrito-items');
const carritoTotal = document.getElementById('carrito-total');
const cartCount = document.getElementById('cart-count');

function actualizarCarrito() {
    carritoItems.innerHTML = '';
    let total = 0;
    carrito.forEach((item, i) => {
        total += item.precio * item.cantidad;
        const div = document.createElement('div');
        div.className = 'item-carrito';
        div.innerHTML =
            '<span>' + item.nombre + ' x' + item.cantidad + '</span>' +
            '<span>RD$' + (item.precio * item.cantidad) + '</span>' +
            '<button data-i="' + i + '">X</button>';
        carritoItems.appendChild(div);
    });
    carritoTotal.textContent = 'Total: RD$' + total;
    cartCount.textContent = carrito.reduce((s, i) => s + i.cantidad, 0);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

document.querySelectorAll('.btn-agregar').forEach(btn => {
    btn.addEventListener('click', () => {
        const p = btn.closest('.producto');
        const nombre = p.dataset.nombre;
        const precio = parseInt(p.dataset.precio);
        const existe = carrito.find(i => i.nombre === nombre);
        if (existe) existe.cantidad++;
        else carrito.push({ nombre, precio, cantidad: 1 });
        actualizarCarrito();
    });
});

if (carritoItems) {
    carritoItems.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            carrito.splice(e.target.dataset.i, 1);
            actualizarCarrito();
        }
    });

    document.getElementById('btn-carrito').addEventListener('click', () => {
        carritoPanel.classList.toggle('oculto');
    });

    document.getElementById('carrito-cerrar').addEventListener('click', () => {
        carritoPanel.classList.add('oculto');
    });

    document.getElementById('carrito-whatsapp').addEventListener('click', () => {
        if (carrito.length === 0) return;
        let msg = 'Hola, quiero hacer este pedido:%0A';
        carrito.forEach(i => {
            msg += '- ' + i.nombre + ' x' + i.cantidad + ' (RD$' + (i.precio * i.cantidad) + ')%0A';
        });
        const total = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
        msg += 'Total: RD$' + total;
        window.open('https://wa.me/18496209966?text=' + msg);
    });

    actualizarCarrito();
}