document.addEventListener('DOMContentLoaded', function() {
    // Efecto smooth scroll para los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cambiar el header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(0, 104, 71, 0.95)';
            header.style.padding = '0.5rem 2rem';
        } else {
            header.style.backgroundColor = '#006847';
            header.style.padding = '1rem 2rem';
        }
    });

    // Simular carga de noticias (podrías reemplazar esto con una API real)
    function cargarMasNoticias() {
        const noticiasGrids = document.querySelectorAll('.noticias-grid');
        
        noticiasGrids.forEach(grid => {
            // Simular carga de 2 noticias más
            for (let i = 0; i < 2; i++) {
                const nuevaNoticia = document.createElement('article');
                nuevaNoticia.innerHTML = `
                    <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Noticia adicional">
                    <div class="contenido">
                        <h3>Nueva noticia cargada dinámicamente</h3>
                        <p class="fecha">Hoy</p>
                        <p class="resumen">Esta noticia fue cargada mediante JavaScript para simular carga dinámica de contenido.</p>
                        <a href="#" class="leer-mas">Leer más</a>
                    </div>
                `;
                grid.appendChild(nuevaNoticia);
            }
        });
    }

    // Botón para cargar más noticias (podrías agregarlo en el HTML)
    const botonCargarMas = document.createElement('button');
    botonCargarMas.textContent = 'Cargar más noticias';
    botonCargarMas.style.display = 'block';
    botonCargarMas.style.margin = '2rem auto';
    botonCargarMas.style.padding = '0.8rem 1.5rem';
    botonCargarMas.style.backgroundColor = '#006847';
    botonCargarMas.style.color = 'white';
    botonCargarMas.style.border = 'none';
    botonCargarMas.style.borderRadius = '4px';
    botonCargarMas.style.cursor = 'pointer';
    botonCargarMas.addEventListener('click', cargarMasNoticias);
    
    document.querySelector('main').appendChild(botonCargarMas);

    // Formulario de suscripción
    const formularioSuscripcion = document.querySelector('.widget form');
    if (formularioSuscripcion) {
        formularioSuscripcion.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            if (email) {
                alert(`¡Gracias por suscribirte con el correo ${email}!`);
                this.querySelector('input').value = '';
            } else {
                alert('Por favor ingresa tu correo electrónico');
            }
        });
    }

    // Mostrar año actual en el footer
    const year = new Date().getFullYear();
    document.querySelector('.footer-bottom p').textContent = `© ${year} Noticias Nicaragua. Todos los derechos reservados.`;
});