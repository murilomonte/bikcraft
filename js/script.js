// Ativar links do menu
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link) {
    const url = window.location.href
    const href = link.href
    // Se a string href estiver dentro da string url
    if (url.includes(href)) {
        // Adiciona a classe ativoP
        link.classList.add("ativo")
    }
}

links.forEach(ativarLink)

// Ativar itens do orçamento
// Classe que retorna em forma de array os parâmetros da URL
const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if (elemento) {
        elemento.checked = true
    }
}

parametros.forEach(ativarProduto)

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)

// Galeria de Bicicleta
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event) {
    const img = event.currentTarget
    // Retorna true se a janela estiver com menos de 1000px
    const media = window.matchMedia('(min-width: 1000px)').matches
    if (media) {
        galeriaContainer.prepend(img)
        // Pega o respectivo elemento e coloca como primeiro filho da tag
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria)

// Animação

if (window.SimpleAnime) {
    new SimpleAnime()
}