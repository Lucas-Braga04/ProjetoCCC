const scrollButton = document.getElementById('scrollButton');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Altura em pixels a partir da qual o botão deve aparecer
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}