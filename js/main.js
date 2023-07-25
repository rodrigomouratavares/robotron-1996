//buscando pelo data atribute.
const controle = document.querySelectorAll("[data-controle]")

//criando um evento para todos os elementos via foreach. 
//O forEach() é muito simples de ser utilizado, toda vez ele é usado temos um elemento e um índice
//O elemento é aquilo que foi clicado e o índice é o indíce do array. Então controle.forEach() faz algo.
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        //aqui está sendo passado dois parametros. O texto html onde iremos puxar pelo - e o parentNode, onde vai pegar o elemento pai.
       manipulaDados (evento.target.dataset.controle, evento.target.parentNode)
    })

} )



// Na função manipula dados, passamos a operação e o controle cujo vai ser necessário da classe pai para que não procure no documento todo, e sim em cada elemento pai.

function manipulaDados(operacao, controle) {
const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
        
    } else {peca.value = parseInt(peca.value) + 1
    }
}

