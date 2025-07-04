       // Carrusel de imágenes mejorado
        let currentSlide = 0;
        const slidesContainer = document.querySelector('.slides');
        const slidesCount = document.querySelectorAll('.slide').length / 2; // Only count original slides
        let slideInterval;
        
        function startSlider() {
            slideInterval = setInterval(nextSlide, 5000);
        }
        
        function nextSlide() {
            currentSlide++;
            if (currentSlide >= slidesCount) {
                slidesContainer.style.transition = 'none';
                currentSlide = 0;
                slidesContainer.style.transform = `translateX(0%)`;
                slidesContainer.offsetHeight;
                slidesContainer.style.transition = 'transform 1s ease-in-out';
            } else {
                updateSlider();
            }
        }
        
        function updateSlider() {
            const offset = -currentSlide * (100 / slidesCount);
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }
        
        // Función para mostrar secciones
        function showSection(sectionId) {
            // Ocultar todas las secciones
            document.querySelectorAll('.about-section, .author-section, .main-content').forEach(section => {
                section.style.display = 'none';
            });
            
            // Mostrar/ocultar el carrusel según la sección
            const headerSlider = document.getElementById('header-slider');
            if (sectionId === 'home') {
                headerSlider.style.display = 'block';
                startSlider();
            } else {
                headerSlider.style.display = 'none';
                clearInterval(slideInterval);
            }
            
            // Mostrar la sección seleccionada
            if (sectionId === 'home') {
                document.getElementById('home-section').style.display = 'block';
            } else if (sectionId === 'reflexiones') {
                document.getElementById('reflexiones-section').style.display = 'block';
            } else {
                document.getElementById(sectionId + '-section').style.display = 'block';
            }
            
            // Desplazamiento suave
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            return false;
        }
        
        // Función para mostrar información de autor
        function showAuthor(authorId) {
            // Ocultar todas las secciones
            document.querySelectorAll('.about-section, .author-section, .main-content').forEach(section => {
                section.style.display = 'none';
            });
            
            // Ocultar el carrusel
            document.getElementById('header-slider').style.display = 'none';
            clearInterval(slideInterval);
            
            // Mostrar la sección del autor seleccionado
            document.getElementById(authorId + '-section').style.display = 'block';
            
            // Desplazamiento suave
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            return false;
        }
        
        // Mostrar la sección de inicio por defecto
        window.onload = function() {
            document.getElementById('home-section').style.display = 'block';
            startSlider();
            
            // Agregar efecto de aparición gradual
            const elements = document.querySelectorAll('.post, .author');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 150 * index);
            });
        };