document.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");

    // Altura total da página (inclui o scroll)
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Distância do topo da página que foi rolada
    const scrollTop = window.scrollY;

    // Calcula a largura da barra em porcentagem
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    // Ajusta a largura da barra
    progressBar.style.width = `${scrollPercentage}%`;
});
