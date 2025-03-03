document.addEventListener('DOMContentLoaded', function() {
    // Entry Animation
    const pandaSomni = document.querySelector('.panda-somni');
    const moon = document.querySelector('.moon');

    pandaSomni.addEventListener('animationend', function() {
        pandaSomni.style.animation = 'bounce 1s ease';
    });

    // Smooth Scroll for About Section
    const aboutSection = document.querySelector('.about');
    window.addEventListener('scroll', function() {
        if (window.scrollY >= aboutSection.offsetTop - window.innerHeight / 2) {
            aboutSection.style.animation = 'starConnect 2s forwards';
        }
    });
});