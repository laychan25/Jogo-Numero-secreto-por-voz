function verificaSeOChuteEvalido(chute){
   const numero= + chute

   if(chuteInvalido(numero)){
    elementoChute.innerHTML += '<div> Valor invalido </div>'
    return
   }

   if(chuteMaiorQuePermitido(numero)){
    elementoChute.innerHTML +=`<div> Valor invalido: fale um numero entre ${menorValor} e ${maiorValor} </div>`
    return
   }

   if(numero=== numeroSecreto){
    document.body.innerHTML = `
        <h2>Voce acertou!</h2>
        <h3> O numero secreto era ${numeroSecreto} </h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
   }else if(numero> numeroSecreto){
    elementoChute.innerHTML += `
    <div>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i></div> 
    `
   }else{
    elementoChute.innerHTML+=`
    <div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></div>
    `

   }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function chuteMaiorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor

}

document.body.addEventListener('click', e =>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload()
    }
})