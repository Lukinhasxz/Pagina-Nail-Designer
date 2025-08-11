
// animando letras main
const elementoLetreiro = document.querySelector('.animar-letreiro')

const fraseLetreito = 'Beleza em suas mãos💅'

let indiceLetreiro = 0

function animarLetreiro() {

    if(indiceLetreiro < fraseLetreito.length) {
        elementoLetreiro.textContent += fraseLetreito[indiceLetreiro]
        indiceLetreiro++
    } else {
        clearInterval(intervalo)
    }
}

const intervalo = setInterval(animarLetreiro, 100)

// animando pagina cm scroll
function animandoObjetos() {

    const objetosAnimados = document.querySelectorAll('.animar')

    objetosAnimados.forEach(objeto => {
        const topoObjetos = objeto.getBoundingClientRect().top
        const alturaTela = window.innerHeight

        if(topoObjetos < alturaTela) {
            objeto.classList.add('mostrar')
        }
    })
}

window.addEventListener('DOMContentLoaded', animandoObjetos)
window.addEventListener('scroll', animandoObjetos)

//FORMULARIO AGENDAMENTO ZAP

document.getElementById("form-agendamento").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let servico = document.getElementById("servico").value;
  let comentarios = document.getElementById("comentarios").value;

  let mensagem = `Olá! Quero agendar um serviço.%0A📧 Email: ${email}%0A💅 Serviço: ${servico}%0A📝 Comentários: ${comentarios}`;
  
  let telefone = "5531992549653"; // número da profissional no formato internacional
  let url = `https://wa.me/${telefone}?text=${mensagem}`;

  window.open(url, "_blank");
});



