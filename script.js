document.addEventListener("DOMContentLoaded", function () {
    // Guardamos la última posición de scroll para comparar
    let lastScrollTop = 0;
    const header = document.querySelector("header"); // Seleccionamos el header

    // Evento que se ejecuta cuando el usuario hace scroll
    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Obtenemos la posición actual del scroll
        
        if (currentScroll > lastScrollTop) {
            // Si el scroll va hacia abajo, ocultamos el header
            header.classList.add("hidden");
        } else {
            // Si el scroll va hacia arriba, mostramos el header
            header.classList.remove("hidden");
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ajustamos la última posición para la siguiente comparación
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.remove("transparent");
        header.classList.add("scrolled");
      } else {
        header.classList.add("transparent");
        header.classList.remove("scrolled");
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtener la posición del destino
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.offsetTop;
        
        // Obtener la posición actual de la ventana
        const startPosition = window.pageYOffset;
        
        // Establecer la duración de la animación (en milisegundos)
        const duration = 300;
        
        let startTime = null;

        function animationScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Normaliza el tiempo de progreso

            // Calcula el desplazamiento con una aceleración (ease-in)
            const distance = startPosition + (targetPosition - startPosition) * easeIn(progress);

            window.scrollTo(0, distance);

            // Si el desplazamiento no ha terminado, sigue animando
            if (timeElapsed < duration) {
                requestAnimationFrame(animationScroll);
            }
        }

        // Función para crear el efecto de aceleración (ease-in)
        function easeIn(t) {
            return t * t; // Esto crea la aceleración (t se va incrementando de manera cuadrática)
        }

        // Inicia la animación
        requestAnimationFrame(animationScroll);
    });
});

document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      const offset = 100; // Altura de tu header
  
      if (targetSection) {
        const elementPosition = targetSection.offsetTop;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    });
  });
  