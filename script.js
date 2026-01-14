document.addEventListener('DOMContentLoaded', function () {

    // --- I18N (Traducción) ---
    const translations = {
        es: {
            pageTitle: "Portafolio | Janky Liendo",
            navHome: "Home",
            navAbout: "Sobre mí",
            navTech: "Tecnologías",
            navPortfolio: "Portafolio",
            navContact: "Contacto",
            profileTitle: "Hola, Soy",
            profileDescription: "Soy un desarrollador web motivado y apasionado Ingeniero de Sistemas, con muchas ganas de aprender y crecer en el desarrollo web.",
            downloadCV: "Descargar CV",
            aboutMeTitle: "Sobre Mí",
            aboutMeP1: "¡Hola! Soy Janky Liendo, un desarrollador web Profesional. Como Ingeniero de Sistemas, me especializo en la creación de experiencias web dinámicas y funcionales. Mi caja de herramientas incluye HTML, CSS y JavaScript, junto con frameworks modernos como React y Angular para el frontend.",
            aboutMeP2: "En el backend, tengo experiencia trabajando con Python y gestionando bases de datos con SQL. Además, he desarrollado proyectos utilizando WordPress, lo que me ha dado una visión completa del ciclo de vida del desarrollo web. Me entusiasma aplicar mis habilidades en proyectos desafiantes y colaborar con equipos que impulsen la innovación. ¡Explora mis proyectos y conectemos!",
            technologiesTitle: "Tecnologías",
            projectsTitle: "Proyectos",
            project1Title: "Carta de Presentación",
            project2Title: "Personajes de Marvel",
            project3Title: "Caja de Conversación",
            project4Title: "Mejores Personajes",
            project5Title: "Portada de KFC",
            project6Title: "Series de Netflix",
            viewProject: "Ver Proyecto",
            contactTitle: "Contacto",
            contactSubTitle: "Hablemos.",
            contactDescription: "Si tienes alguna pregunta, una propuesta de proyecto o simplemente quieres saludar, no dudes en enviarme un mensaje. ¡Siempre estoy abierto a nuevas oportunidades y colaboraciones!",
            formName: "Tu Nombre",
            formEmail: "Tu Email",
            formMessage: "Tu Mensaje",
            formSubmit: "Enviar Mensaje",
            formSending: "Enviando...",
            footerText: "© 2024 Janky Liendo. Creado con pasión y código.",
            modalSuccess: "¡Correo enviado con éxito! Gracias por contactarme.",
            modalError: "Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.",
            modalUnavailable: "El servicio de correo no está disponible.",
            modalClose: "Cerrar",
            typingWords: ["Tu mejor opcion.", "un Desarrollador.", "un Creador."],
            altJankyPhoto: "Foto de Janky Liendo",
            altWebDevIllustration: "Ilustración de desarrollo web",
            altProject1: "Proyecto 1",
            altProject2: "Proyecto 2",
            altProject3: "Proyecto 3",
            altProject4: "Proyecto 4",
            altProject5: "Proyecto 5",
            altProject6: "Proyecto 6",
        },
        en: {
            pageTitle: "Portfolio | Janky Liendo",
            navHome: "Home",
            navAbout: "About me",
            navTech: "Technologies",
            navPortfolio: "Portfolio",
            navContact: "Contact",
            profileTitle: "Hello, I'm",
            profileDescription: "I am a motivated web developer and passionate Systems Engineering, eager to learn and grow in web development.",
            downloadCV: "Download CV",
            aboutMeTitle: "About Me",
            aboutMeP1: "Hi! I'm Janky Liendo, a professional web developer. As a Systems Engineering, I specialize in creating dynamic and functional web experiences. My toolbox includes HTML, CSS, and JavaScript, along with modern frameworks like React and Angular for the frontend.",
            aboutMeP2: "On the backend, I have experience working with Python and managing databases with SQL. Additionally, I have developed projects using WordPress, which has given me a comprehensive view of the web development lifecycle. I am excited to apply my skills to challenging projects and collaborate with teams that drive innovation. Explore my projects and let's connect!",
            technologiesTitle: "Technologies",
            projectsTitle: "Projects",
            project1Title: "Cover Letter",
            project2Title: "Marvel Characters",
            project3Title: "Conversation Box",
            project4Title: "Best Characters",
            project5Title: "KFC Cover",
            project6Title: "Netflix Series",
            viewProject: "View Project",
            contactTitle: "Contact",
            contactSubTitle: "Let's Talk.",
            contactDescription: "If you have any questions, a project proposal, or just want to say hello, feel free to send me a message. I'm always open to new opportunities and collaborations!",
            formName: "Your Name",
            formEmail: "Your Email",
            formMessage: "Your Message",
            formSubmit: "Send Message",
            formSending: "Sending...",
            footerText: "© 2024 Janky Liendo. Created with passion and code.",
            modalSuccess: "Email sent successfully! Thank you for contacting me.",
            modalError: "There was an error sending the email. Please try again.",
            modalUnavailable: "The email service is not available.",
            modalClose: "Close",
            typingWords: ["Your best opction.", "a Developer.", "a Creator."],
            altJankyPhoto: "Photo of Janky Liendo",
            altWebDevIllustration: "Web development illustration",
            altProject1: "Project 1",
            altProject2: "Project 2",
            altProject3: "Project 3",
            altProject4: "Project 4",
            altProject5: "Project 5",
            altProject6: "Project 6",
        }
    };

    const languageSelect = document.getElementById('language-select');
    let currentLang = localStorage.getItem('language') || 'es';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        const placeholders = document.querySelectorAll('[data-translate-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        const altTexts = document.querySelectorAll('[data-translate-alt]');
        altTexts.forEach(el => {
            const key = el.getAttribute('data-translate-alt');
            if (translations[lang][key]) {
                el.alt = translations[lang][key];
            }
        });
        
        // Update typing effect words
        if (typingTextElement) {
            typingWords = translations[lang].typingWords;
            wordIndex = 0;
            charIndex = 0;
            isDeleting = false;
        }
    }

    languageSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
    
    // --- THEME SWITCHER (MODO CLARO/OSCURO) ---
    const themeSwitcherDesktop = document.getElementById('theme-switcher-desktop');
    const themeSwitcherMobile = document.getElementById('theme-switcher-mobile');
    const themeIconDesktop = document.getElementById('theme-icon-desktop');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    const body = document.body;

    function setIcon(isLight) {
        const iconClass = isLight ? 'bi-sun-fill' : 'bi-moon-stars-fill';
        if (themeIconDesktop) themeIconDesktop.className = `bi ${iconClass}`;
        if (themeIconMobile) themeIconMobile.className = `bi ${iconClass}`;
    }

    function toggleTheme() {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        setIcon(isLight);
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        body.classList.add('light-mode');
        setIcon(true);
    } else {
        setIcon(false);
    }

    if (themeSwitcherDesktop) themeSwitcherDesktop.addEventListener('click', toggleTheme);
    if (themeSwitcherMobile) themeSwitcherMobile.addEventListener('click', toggleTheme);


    // --- NAVEGACIÓN MÓVIL ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('bi-list');
            menuToggle.querySelector('i').classList.toggle('bi-x');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.add('bi-list');
                menuToggle.querySelector('i').classList.remove('bi-x');
            });
        });
    }

    // --- HEADER CON SCROLL ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- ANIMACIÓN DE SCROLL (REVEAL) ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    // --- EFECTO DE ESCRITURA (TYPING) ---
    const typingTextElement = document.querySelector('.typing-text');
    let typingWords = translations[currentLang].typingWords;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout;

    function type() {
        clearTimeout(typeTimeout); // Clear previous timeout
        const currentWord = typingWords[wordIndex];
        if (isDeleting) {
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeTimeout = setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % typingWords.length;
        }

        const typeSpeed = isDeleting ? 100 : 200;
        typeTimeout = setTimeout(type, typeSpeed);
    }
    if (typingTextElement) {
        type();
    }


    // --- NAVEGACIÓN ACTIVA AL SCROLLEAR ---
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            let sectionId = current.getAttribute('id');
            
            const activeLink = document.querySelector('.nav-ul a[href*=' + sectionId + ']');
            if(activeLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-ul a').forEach(link => link.classList.remove('active-link'));
                    activeLink.classList.add('active-link');
                }
            }
        });
    });

    // --- HACER CLICABLES LAS TARJETAS DE PROYECTO ---
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const link = item.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
    });

    // --- FORMULARIO DE CONTACTO CON EMAILJS Y MODAL ---
    (function() {
        if(typeof emailjs !== 'undefined') {
            emailjs.init("PsmMepGi8NRf9cvAc"); 
        }
    })();

    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('feedback-modal');
    const modalIcon = document.getElementById('modal-icon');
    const modalMessage = document.getElementById('modal-message');
    const modalClose = document.getElementById('modal-close');

    function showModal(success, messageKey) {
        if(modal && modalIcon && modalMessage){
            modalIcon.className = success ? 'bi bi-check-circle-fill modal-icon success' : 'bi bi-x-circle-fill modal-icon error';
            modalMessage.textContent = translations[currentLang][messageKey];
            modal.classList.add('show');
        }
    }

    if(modalClose) {
        modalClose.addEventListener('click', () => modal.classList.remove('show'));
    }
    if(modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const submitButton = this.querySelector('.enviar');
            submitButton.textContent = translations[currentLang].formSending;
            submitButton.disabled = true;

            if(typeof emailjs !== 'undefined') {
                emailjs.sendForm('Developer-web', 'template_kgci70l', this) // Reemplaza con tu Service ID y Template ID
                    .then(function() {
                        showModal(true, 'modalSuccess');
                        contactForm.reset();
                    }, function(error) {
                        showModal(false, 'modalError');
                        console.log('FAILED...', error);
                    }).finally(() => {
                        submitButton.textContent = translations[currentLang].formSubmit;
                        submitButton.disabled = false;
                    });
            } else {
                showModal(false, 'modalUnavailable');
                submitButton.textContent = translations[currentLang].formSubmit;
                submitButton.disabled = false;
            }
        });
    }

    // --- INITIALIZE LANGUAGE ---
    languageSelect.value = currentLang;
    setLanguage(currentLang);
});

