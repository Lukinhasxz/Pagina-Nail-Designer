
// animiando letras main
const elementoLetreiro = document.querySelector('.animar-letreiro')

const fraseLetreito = 'Beleza em suas mãos💅'

let indiceLetreiro = 0

function animarLetreiro() {

    if(indiceLetreiro < fraseLetreito.length) {
        elementoLetreiro.textContent += fraseLetreito[indiceLetreiro]
        indiceLetreiro++
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