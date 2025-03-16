document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.volume = 0.5; // volume
    audio.muted = true; // muted

    window.addEventListener('click', () => {
        if (audio.paused) {
            audio.muted = false; // Unmute
            audio.play().catch(err => console.warn('Autoplay blocked:', err));
        }
    });

    if (sessionStorage.getItem('musicTime')) {
        audio.currentTime = parseFloat(sessionStorage.getItem('musicTime'));
    }

    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('musicTime', audio.currentTime);
    });
});
