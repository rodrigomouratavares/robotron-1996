const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

//criando um evento para todos os elementos via foreach. 
//O forEach() é muito simples de ser utilizado, toda vez ele é usado temos um elemento e um índice
//O elemento é aquilo que foi clicado e o índice é o indíce do array. Então controle.forEach() faz algo.
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        console.log(evento.target.textContent)
    })

} )



somar.addEventListener("click",()  => {manipulaDados("somar")});

subtrair.addEventListener("click",()  => {manipulaDados("subtrair")});


function manipulaDados(operacao) {
    if(operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1
        
    } else braco.value = parseInt(braco.value) + 1
    
}