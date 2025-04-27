// Script principal para o site de vestibulares

document.addEventListener('DOMContentLoaded', function() {
    // Navegação responsiva para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Destacar link ativo na navegação
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        }
    });
    
    // Animação suave ao rolar para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Fechar menu móvel após clicar
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});
