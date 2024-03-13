// criar  uma variavel para inserir um titulo 
//let titulo = document.querySelector('h1');
// agora colocar texto dentro da variavel 
//titulo.innerHTML = 'Jogo do número secreto';
//selecionar o paragrafo com uma variavel 
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10'


// as 4 linas acima pode ser substituida por uma função, sendo a exibirTextoNaTela, pois se houver muitas vezes essa repetição fica mais facil e legivel o código

// colocar a lista antes de gerar o numero aleatorio
let listaNumerosSorteados = [];
let numeroMaximo = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


//chamar a função para que ela rode 
mensagemInicial();

function exibirTextoNaTela(tag,texto){
    //seleciona a tag
    let campo = document.querySelector(tag);
    //dentro do HTML pega a variavel campo (que está com a tag selecionada e atribui um texto )
    campo.innerHTML = texto;
    //tag script no html(line seven)....dá a possibilidade de que o computador fale o que está escrito 
    //no primeiro parametro dizer o que quer que fale, e no segundo o idioma (assim como na documentação)- entre chaves é a velocidade da fala
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})

    
}

function limparCampo(){
    chute = document.querySelector('input');
    //.value mostra que quer pegar o valor 
    chute.value='';
}
//essa função não precisa chamar, pois vai rodar quando clicar no botão 
function reiniciarJogo(){
    numeroAleatorio= gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    mensagemInicial();
    //para que o botão volta a ficar desabilitado 
    // seleciona o botão pelo id - set atributo é para adicionar o atributo e devemos colocar como verdadeiro
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número de 1 a ${numeroMaximo}`);
}

function verificarChute() {
    //.value mostra que quer pegar o valor 
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa=tentativas > 1? 'tentativas':'tentativa';
        let mensagemtentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemtentativa);     
// nesse momento o boão de NOVO JOGO deve ficar ativado 
//para selecionar o botão pelo ID se usa o getElementByID(pegar elemento pelo ID) e para especificar qual ID deseja pegar deve abrir parenteses e colocar o nome do ID. mostra como vai acessar o elemento . removeattribute(para remover um atributo) e entre parenteses o nome do atributo , sendo eles que estão no htmml 
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else {
        if (chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo ){
        listaNumerosSorteados =[];
    }
    
    //includes verifica se o numero está dentro da lista, basicamente( lista de numerossorteados tem o numero escolhido?) dentro dos parenteses colocamos o que queromos que ele veja se possui na lista
    if (listaNumerosSorteados.includes(numeroSorteado)){
        //recurssão...quando uma função por algum motivo chama ela novamente
        return gerarNumeroAleatorio();
    }else{
        // para adicionar algo na lista se usa o PUSH, e entre parenteses o que quer  colocar na lista
        
        console.log(listaNumerosSorteados);
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}


