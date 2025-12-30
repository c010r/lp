document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const sections = document.querySelectorAll('.section');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '10px 50px';
            nav.style.background = 'hsla(240, 10%, 4%, 0.95)';
        } else {
            nav.style.padding = '20px 50px';
            nav.style.background = 'var(--glass-bg)';
        }
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});
