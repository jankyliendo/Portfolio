document.addEventListener('DOMContentLoaded', () => {
    // --- DATOS MOCK ---
    const mockChatData = {
        1: { name: "Janky Liendo", avatar: "janky.png", messages: [{ text: "Hola Janky", isSelf: false }, { text: "¿Todo listo?", isSelf: true }] },
        2: { name: "Maria Garcia", avatar: null, messages: [{ text: "Archivos recibidos.", isSelf: false }] },
        3: { name: "Soporte Técnico", avatar: null, messages: [{ text: "¿En qué puedo ayudarte?", isSelf: false }] }
    };

    // --- REFERENCIAS DOM ---
    const menuWindow = document.getElementById('menuWindow');
    const historyWindow = document.getElementById('historyWindow');
    const msgContainer = document.getElementById('messageContainer');
    const currentNameEl = document.getElementById('currentName');
    const currentAvatarEl = document.getElementById('currentAvatar');
    const messageInput = document.getElementById('messageInput');

    // --- CONTROL DE VENTANAS ---
    function toggleWindow(windowEl) {
        // Cerrar la otra ventana si está abierta para evitar solapamiento excesivo
        if (windowEl === menuWindow && historyWindow.classList.contains('active')) {
            historyWindow.classList.remove('active');
        } else if (windowEl === historyWindow && menuWindow.classList.contains('active')) {
            menuWindow.classList.remove('active');
        }
        windowEl.classList.toggle('active');
    }

    // Listeners de botones de esquina
    document.getElementById('mainMenuBtn').addEventListener('click', () => toggleWindow(menuWindow));
    document.getElementById('historyBtn').addEventListener('click', () => toggleWindow(historyWindow));
    
    // Listeners de botones de cerrar dentro de las ventanas
    document.getElementById('closeMenuBtn').addEventListener('click', () => menuWindow.classList.remove('active'));
    document.getElementById('closeHistoryBtn').addEventListener('click', () => historyWindow.classList.remove('active'));

    // --- LÓGICA DE CHAT ---
    function loadChat(chatId) {
        const data = mockChatData[chatId];
        if (!data) return;
        currentNameEl.textContent = data.name;
        currentAvatarEl.src = data.avatar || 'https://via.placeholder.com/40?text=' + data.name.charAt(0);
        msgContainer.innerHTML = '';
        data.messages.forEach(msg => addMessageToDOM(msg.text, msg.isSelf));
        msgContainer.scrollTop = msgContainer.scrollHeight;
        
        // Opcional: cerrar historial al seleccionar en móviles
        if (window.innerWidth < 768) historyWindow.classList.remove('active');
    }

    function addMessageToDOM(text, isSelf) {
        const div = document.createElement('div');
        div.className = `msg ${isSelf ? 'self' : ''}`;
        div.innerHTML = `<p>${text}</p>`;
        msgContainer.appendChild(div);
    }

    // --- EVENTOS ---
    document.getElementById('sendBtn').addEventListener('click', () => {
        const text = messageInput.value.trim();
        if (text) {
            addMessageToDOM(text, true);
            messageInput.value = '';
            msgContainer.scrollTop = msgContainer.scrollHeight;
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('sendBtn').click();
    });

    document.querySelectorAll('#chatHistoryList li').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('#chatHistoryList li').forEach(li => li.classList.remove('active'));
            this.classList.add('active');
            loadChat(this.dataset.chatId);
        });
    });

    document.querySelectorAll('#mainMenu li').forEach(item => {
        item.addEventListener('click', function() {
             document.querySelectorAll('#mainMenu li').forEach(li => li.classList.remove('active'));
             this.classList.add('active');
             // Opcional: cerrar menú al seleccionar
             if (window.innerWidth < 768) menuWindow.classList.remove('active');
        });
    });

    // Carga inicial
    loadChat(1);
});