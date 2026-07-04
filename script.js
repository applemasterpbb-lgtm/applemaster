// ================================
// APPLE MASTER - SCRIPT.JS
// ================================

// Pesquisa de produtos
const pesquisa = document.getElementById("pesquisa");
const cards = document.querySelectorAll(".card");

if (pesquisa) {
    pesquisa.addEventListener("keyup", () => {

        const texto = pesquisa.value.toLowerCase();

        cards.forEach(card => {

            const nome = card.querySelector("h3").textContent.toLowerCase();

            if (nome.includes(texto)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// Botão Comprar
const botoes = document.querySelectorAll(".card button");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const nome = botao.parentElement.querySelector("h3").innerText;

        const numero = "5583991086647"; // ALTERE PARA SEU WHATSAPP

        const mensagem = `Olá! Tenho interesse no ${nome}. Gostaria de mais informações.`;

        const link =
            `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(link, "_blank");

    });

});

// Animação ao aparecer na tela
const elementos = document.querySelectorAll(".card, .vantagens div");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

elementos.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.6s";

    observador.observe(item);

});

// Cabeçalho muda ao rolar
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.background = "#111";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

    } else {

        header.style.background = "#000";
        header.style.boxShadow = "none";

    }

});

// Efeito de zoom nas imagens
cards.forEach(card => {

    const img = card.querySelector("img");

    card.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";
        img.style.transition = ".4s";

    });

    card.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// Ano automático no rodapé
const footer = document.querySelector("footer");

if (footer) {

    const ano = new Date().getFullYear();

    footer.innerHTML += `<p style="margin-top:20px;">© ${ano} Apple Master - Todos os direitos reservados.</p>`;

}

console.log("Apple Master carregado com sucesso!");