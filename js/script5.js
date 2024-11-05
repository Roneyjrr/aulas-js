/* Funções do seleção no DOM

-GetElementById('parâmetro')
Seleciona UM ELEMENTO através do ID.

-querySelector('parametro')
Seleciona UM ELEMENTO através de um seletor.

-querySelectorAll('parametro')
Seleciona VÁRIOS ELEMENTOS através de um seletores;

*/

/*Exemplos: acessando/manipulando o DOM */
const subtitulo = document.getElementById("subtitulo-dom");
const titulo = document.querySelector("h1");
const variosElementos = document.querySelectorAll("h3, a, hr");
const descricaoDom = document.querySelector(".descricao-dom");

console.log(subtitulo);
console.log(titulo);
console.log(variosElementos[3]);

//Modificando elementos
//Alteração de conteúdo textual e/ou tags
titulo.innerHTML = "<i>Olá JavaScript!</i>";

//CSS inline
subtitulo.style.backgroundColor = "gray";

//CSS através de classes via JS
descricaoDom.classList.add("destaque");

//Manipulação de Eventos//
const pagina = document.querySelector("body");
const exemplo1 = document.querySelector("#exemplo1");
const mensagem = document.querySelector("#mensagem");

//Ouvinte de Evento// Usamos o Event Listener para monitorar a ocorrência de algum evento (no caso "click") e a partir da ocorrência, executar ações na função callback. O innerHTML mostra o texto.
exemplo1.addEventListener("click", function () {
    pagina.style.fontFamily = "verdana";
    mensagem.innerHTML = "<i>Fonte alterada com sucesso :)</i>";
    titulo.setAttribute("hidden", true);
});

//Ouvinte de evento para teclado//
document.addEventListener("keydown", function (event) {
    //Detectando se uma determinada tecla (R) foi pressionada
    if (event.code == "KeyR") {
        pagina.style.fontFamily = "times";
        mensagem.innerHTML = "";
        titulo.removeAttribute("hidden");

    }
});

//Exemplo2: Modo noturno

const botao = document.querySelector("#exemplo2");
botao.addEventListener("click", function (event) {
    pagina.classList.toggle("modo-noturno");
    //programe aqui uma condicional que verifique se a classe "modo-noturno" está aplicada a página, e se estiver o texto no botao deverá mudar para "Desativar". Caso contrário deverá mostrar "Ativar"

    if (f){

    }
});