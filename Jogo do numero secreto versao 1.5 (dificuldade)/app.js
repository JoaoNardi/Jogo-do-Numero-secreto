let listaDeNumeroSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNúmeroAleatorio();
let tentativas = 1


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}


function mensagemDificuldade(){
    exibirTextoNaTela(`h1`, 'Jogo do número secreto');
    exibirTextoNaTela(`p`, 'Escolha um número uma dificuldade');
}

function mensagemInicial(){
    exibirTextoNaTela(`h1`, 'Jogo do número secreto');
    exibirTextoNaTela(`p`, `Escolha um número entre 1 e ${numeroLimite}`);
}

mensagemDificuldade()

console.log(numeroSecreto)
function verificarChute() {
    let palpite = document.querySelector('input').value;
    if(palpite == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if(palpite > numeroSecreto){
        exibirTextoNaTela('p', 'O número é menor');
        } else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
         tentativas++
         limparCampo();
    }
}
function gerarNúmeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdDeElementosNaLista = listaDeNumeroSorteados.length;
if (qtdDeElementosNaLista == numeroLimite){
    listaDeNumeroSorteados = [];
}

    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNúmeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    palpite = document.querySelector('input');
    palpite.value = ``
}

function reiniciarJogo(){
    numeroSecreto = gerarNúmeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

document.getElementById('dificuldade').addEventListener('change', function() {
    numeroLimite = parseInt(this.value);
    numeroSecreto = gerarNúmeroAleatorio(); 
    console.log('Novo limite de número:', numeroLimite);
    tentativas = 1; 
    mensagemInicial(); 
});
console.log(`${numeroSecreto}`)