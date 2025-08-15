document.addEventListener("DOMContentLoaded", function() {
    // Formulario de registro (si existe en la página)
    const form = document.querySelector("#register form");
    const mensaje = document.getElementById("mensaje-exito");
    if (form && mensaje) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            mensaje.style.display = "block";
            form.reset();
        });
    }

    // Chatbot
    const toggleBtn = document.getElementById('erc-chatbot-toggle');
    const chatWindow = document.getElementById('erc-chatbot-window');
    const chatForm = document.getElementById('erc-chatbot-form');
    const chatInput = document.getElementById('erc-chatbot-input');
    const chatMessages = document.getElementById('erc-chatbot-messages');

    if (toggleBtn && chatWindow) {
        toggleBtn.onclick = function() {
            // Alterna la visibilidad del chatbot
            chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'block' : 'none';
        };
    }

    if (chatForm && chatInput && chatMessages) {
        chatForm.onsubmit = function(e) {
            e.preventDefault();
            var msg = chatInput.value.trim();
            if (!msg) return;
            addErcMessage('Tú', msg);
            chatInput.value = '';
            setTimeout(function() {
                addErcMessage('Energías Renovable del Caribe', ercBotReply(msg));
            }, 600);
        };

        function addErcMessage(sender, text) {
            var div = document.createElement('div');
            div.innerHTML = `<strong>${sender}:</strong> ${text}`;
            div.style.marginBottom = '8px';
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function ercBotReply(msg) {
            msg = msg.toLowerCase();
            if (msg.includes('hola') || msg.includes('buenas')) {
                return '¡Hola! Soy el asistente de Energías Renovable del Caribe. ¿En qué puedo ayudarte?';
            }
            if (msg.includes('contacto') || msg.includes('correo') || msg.includes('teléfono')) {
                return 'Puedes contactarnos al correo torresjherson93@gmail.com o al teléfono +57 302 4373719.';
            }
            if (msg.includes('servicio') || msg.includes('beneficio')) {
                return 'Ofrecemos servicios de energía solar y eólica, capacitación y apoyo a comunidades rurales. ¿Te gustaría saber más?';
            }
            if (msg.includes('recursos') || msg.includes('solar') || msg.includes('eólica')) {
                return 'La Guajira cuenta con recursos eólicos y solares excepcionales para la generación de energía limpia.';
            }
            if (msg.includes('simulador') || msg.includes('costos')) {
                return 'Puedes usar nuestro simulador de costos en la sección "Simulador de costos" del menú principal.';
            }
            return 'No entendí tu pregunta, ¿puedes reformularla o preguntar sobre energía renovable, servicios, contacto o recursos?';
        }
    }
});