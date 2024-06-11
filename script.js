// ACOMODAÇÕES

function expandCard(card) {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
}

function collapseCard(card) {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
}

// CARROSSEL 1 - SURF
var slides = ["surf3.jpg", "surf4.jpg", "surf5.jpg", "surf6.jpg", "surfkids.jpg", "surf2.jpg"];
var tam = slides.length;
var sliderAtual = 0;
var tempoSlider;

function trocaAutomatica() {
    sliderAtual++;
    if (sliderAtual >= tam) {
        sliderAtual = 0;
    }
    document.querySelector(".carrossel1").style.backgroundImage = `url('${slides[sliderAtual]}')`;
}

function iniciarSlider() {
    document.querySelector(".carrossel1").style.backgroundImage = `url('${slides[sliderAtual]}')`;
    tempoSlider = setInterval(trocaAutomatica, 5000);
}

function parar() {
    clearInterval(tempoSlider);
}

function troca(dir) {
    sliderAtual += dir;
    if (sliderAtual < 0) {
        sliderAtual = tam - 1;
    } else if (sliderAtual >= tam) {
        sliderAtual = 0;
    }
    document.querySelector('.carrossel1').style.backgroundImage = `url('${slides[sliderAtual]}')`;
    clearInterval(tempoSlider);
    iniciarSlider();
}

// CARROSSEL 2 - YOGA
var slides2 = ["yoga2.png", "yoga1.png", "yoga4.jpg"];
var tam2 = slides2.length;
var sliderAtual2 = 0;
var tempoSlider2;

function trocaAutomatica2() {
    sliderAtual2++;
    if (sliderAtual2 >= tam2) {
        sliderAtual2 = 0;
    }
    document.querySelector(".carrossel2").style.backgroundImage = `url('${slides2[sliderAtual2]}')`;
}

function iniciarSlider2() {
    document.querySelector(".carrossel2").style.backgroundImage = `url('${slides2[sliderAtual2]}')`;
    tempoSlider2 = setInterval(trocaAutomatica2, 5000);
}

function parar2() {
    clearInterval(tempoSlider2);
}

function troca2(dir2) {
    sliderAtual2 += dir2;
    if (sliderAtual2 < 0) {
        sliderAtual2 = tam2 - 1;
    } else if (sliderAtual2 >= tam2) {
        sliderAtual2 = 0;
    }
    document.querySelector('.carrossel2').style.backgroundImage = `url('${slides2[sliderAtual2]}')`;
    clearInterval(tempoSlider2);
    iniciarSlider2();
}

// CARROSSEL 3 - TRILHAS
var slides3 = ["cachoeira1.jpg", "cachoeira2.jpg", "cachoeira3.png", "cachoeira4.png", "cachoeira5.png"];
var tam3 = slides3.length;
var sliderAtual3 = 0;
var tempoSlider3;

function trocaAutomatica3() {
    sliderAtual3++;
    if (sliderAtual3 >= tam3) {
        sliderAtual3 = 0;
    }
    document.querySelector(".carrossel3").style.backgroundImage = `url('${slides3[sliderAtual3]}')`;
}

function iniciarSlider3() {
    document.querySelector(".carrossel3").style.backgroundImage = `url('${slides3[sliderAtual3]}')`;
    tempoSlider3 = setInterval(trocaAutomatica3, 5000);
}

function parar3() {
    clearInterval(tempoSlider3);
}

function troca3(dir3) {
    sliderAtual3 += dir3;
    if (sliderAtual3 < 0) {
        sliderAtual3 = tam3 - 1;
    } else if (sliderAtual3 >= tam3) {
        sliderAtual3 = 0;
    }
    document.querySelector('.carrossel3').style.backgroundImage = `url('${slides3[sliderAtual3]}')`;
    clearInterval(tempoSlider3);
    iniciarSlider3();
}

// CARROSSEL 4 - ESPORTES AQUATICOS
var slides4 = ["aquaticos2.jpg", "aquaticos1.jpg", "aquaticos3.jpg", "aquaticos4.jpg", "aquaticos5.jpg", "aquaticos6.jpg"];
var tam4 = slides4.length;
var sliderAtual4 = 0;
var tempoSlider4;

function trocaAutomatica4() {
    sliderAtual4++;
    if (sliderAtual4 >= tam4) {
        sliderAtual4 = 0;
    }
    document.querySelector(".carrossel4").style.backgroundImage = `url('${slides4[sliderAtual4]}')`;
}

function iniciarSlider4() {
    document.querySelector(".carrossel4").style.backgroundImage = `url('${slides4[sliderAtual4]}')`;
    tempoSlider4 = setInterval(trocaAutomatica4, 5000);
}

function parar4() {
    clearInterval(tempoSlider4);
}

function troca4(dir4) {
    sliderAtual4 += dir4;
    if (sliderAtual4 < 0) {
        sliderAtual4 = tam4 - 1;
    } else if (sliderAtual4 >= tam4) {
        sliderAtual4 = 0;
    }
    document.querySelector('.carrossel4').style.backgroundImage = `url('${slides4[sliderAtual4]}')`;
    clearInterval(tempoSlider4);
    iniciarSlider4();
}


// RESERVE JA 

function calcularTotal() {
    const noites = parseFloat(document.getElementById('noites').value) || 0;
    const precoPorNoite = parseFloat(document.getElementById('precoPorNoite').textContent) || 0;
    const totalCost = noites * precoPorNoite;
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
}

document.getElementById('noites').addEventListener('input', calcularTotal);

document.getElementById('quarto').addEventListener('change', function() {
    const quartoSelecionado = this.value;
    let preco;

    switch (quartoSelecionado) {
        case 'Suíte Praia de Itaúna':
            preco = 800;
            break;
        case 'Suíte Vista Oceânica':
            preco = 1800;
            break;
        case 'Suíte Vila dos Pescadores':
            preco = 750;
            break;
        case 'Suíte Vila':
            preco = 600;
            break;
        case 'Suíte WSL':
            preco = 600;
            break;
        case 'Suíte Brisa do Mar':
            preco = 800;
            break;
        default:
            preco = 0;
            break;
    }

    document.getElementById('precoPorNoite').textContent = preco.toFixed(2);
    calcularTotal(); 
});

document.getElementById('nivel').addEventListener('change', function() {
    const quantidadeHospedes = this.value;
    document.getElementById('quantidadeHospedes').textContent = quantidadeHospedes;
});


calcularTotal();
;


// formulario contato 

function enviarFormulario(event) {
    event.preventDefault()

    // Exibe o pop-up de confirmação
    alert("Formulário enviado com sucesso!")

    // Limpa o formulário
    document.getElementById("formulario").reset()
}


// FORMULARIO RESERVE JA 

function enviarFormularioReserva(event) {
    event.preventDefault()
    
    alert("Reserva efetuada com sucesso: ")

    
    document.getElementById("formulario1").reset()
    document.getElementById("formulario2").reset()
}


document.getElementById("formulario1").addEventListener("submit", enviarFormularioReserva)
document.getElementById("formulario2").addEventListener("submit", enviarFormularioReserva)


