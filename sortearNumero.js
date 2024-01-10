const maiorValor= 100
const menorValor= 1
const numeroSecreto=  gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor +1)
}

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerHTML= menorValor
const elementoMaior= document.getElementById('maior-valor');
elementoMaior.innerHTML= maiorValor
console.log(numeroSecreto)






//<div>Voce disse:</div>
//<span class="box">20</span>
//<div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></div> 