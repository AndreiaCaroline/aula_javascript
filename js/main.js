alert("Meu primeiro js");

//soma
var nome = "Andréia"
var idade = 22;
var idade2 = 10;
alert("Bem vinda," + nome + " / " + "Sua idade é: " + idade)

alert(idade + idade2)

// Concatena
var idade3 = "22"
var idade4 = "10"

alert(idade3 + idade4)

console.log(nome);
console.log(idade + idade2)

var frase = "Brasil é o melhor time"
    // Replace troca a palavra Brasil por Japão ou Inglaterra
console.log(frase.replace("Brasil", "Japão"))
alert(frase.replace("Brasil", "Inglaterra"))

// Aumenta a frase p/ maiuscula "BRASIL É O MELHOR TIME"
console.log(frase.toUpperCase())

// Array
var lista = ["maça", "pera", "laranja"];
console.log(lista[0])
alert(lista[0])

//adicionar elemento na lista
lista.push("uva")
console.log(lista)

//retira o ultimo elemento da lista
lista.pop();
console.log(lista)

// tamanho da lista
console.log(lista.length)

// elementos ao contrario
console.log(lista.reverse)

// converto de array p/ String
console.log(lista.toString)

// ao inves de virgula ser - altera um elemento 
console.log(lista.join("-"))

//dicionario
var fruta = { nome: "maça", cor: "vermelho" }
console.log(fruta.nome)
alert(fruta.cor)

// lista de dicionarios
var frutas = [{ nome: "maças", cor: "vermelho" }, { nome: "uvas", cor: "roxo" }]
console.log(frutas)
alert(frutas[1].nome)

// condicionamento
// prompt exibe uma caixa com pergunta
var numero = prompt("Qual sua idade?")
if (numero >= 18) {
    alert("maior de idade")
} else {
    alert("menor de idade")
}

//laços de repetição 0 a 5
var count = 5
while (count <= 5) {
    console.log(count)
    count++ //recebe ele mesmo mais 1
}

var digito
for (let digito = 0; digito <= 5; digito++) {
    alert(digito)
}

// data
var d = new Date();
alert(d)

// data do mes ---12
var i = new Date();
alert(i.getMonth() + 1)
alert(i.getDay() + 1)
alert(i.getMinutes() + 1)

// funções
function soma(n1, n2) {
    return n1 + n2
}

alert(soma(5, 10))

// função trocando japão por Brasil
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"))

// função com variavel global
var validar

function validaIdade(idadeNumero) {
    if (idadeNumero >= 18) {
        validar = true;
    } else {
        validar = false;
    }

    return validar
}

var idadeNumero = prompt("Qual sua idade:")
console.log(validaIdade(idadeNumero))

// manipulando elementos da página
function botao() {
    alert("Obrigada por clicar")
    document.getElementById("agradecimento")
    console.log(document.getElementById("agradecimento")) // trás todo o elemento html

    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>" // injeta um html/texto dentro
}

// redirecionando para outra página
function redirecionar() {
    window.open("https://www.devmedia.com.br/")
}

// onmouseover - troca o texto ao passar o mouse
function trocar(elemento) {
    alert("trocar texto")

    // document.getElementById("mousemove").innerHTML = " obrigada por passar o mouse"
    elemento.innerHTML = " obrigada por passar o mouse"
}


// Onmouseout -- tirar o mouse volta ao que era antes
function voltar(elemento) {
    //Das duas formas dão no mesmo
    //  document.getElementById("mousemove").innerHTML = " passe o mouse aqui"
    elemento.innerHTML = " passe o mouse aqui"
}

// onload- carrega a página
function load(params) {
    alert("página carregada")
}

// onchange -- usado para combo de opções para quando trocar o valor ser possivel pegar
function funcaoChange(elemento) {
    console.log(elemento.value)
}