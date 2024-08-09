// Seleciona os elementos necessários
const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-fundo");

// Função para mostrar o formulário
function mostrarForm() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

// Função para esconder o formulário
function esconderForm() {
    form.style.left = "-300px";
    form.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

// Adiciona o evento de clique para esconder o formulário quando a máscara de fundo é clicada
mascara.addEventListener('click', esconderForm);


let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll(".carrossel-item");
    const totalSlides = slides.length;

    // Verifica se o índice está fora dos limites
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // Calcula o deslocamento baseado no índice do slide
    const offset = -slideIndex * 100;
    document.querySelector(".carrossel-imagens").style.transform = `translateX(${offset}%)`;
}

function moverSlide(n) {
    mostrarSlide(slideIndex + n);
}

// Inicializa o carrossel
mostrarSlide(slideIndex);

