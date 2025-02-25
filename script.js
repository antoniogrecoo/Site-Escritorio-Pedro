function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function() {
    let botao = document.getElementById("botao-flutuante");

    // Remove o botão após 2 segundos
    setTimeout(() => {
        botao.style.animation = "fadeOut 0.5s ease-in-out";
        setTimeout(() => botao.style.display = "none", 500); // Remove o botão após o fade-out
    }, 2000);
});
