//  !alert("teste") Exercícios de Repetição. LOOP 
// var nome = 'Gustavo';
// var local = 'Rua Senac';
// var separador = '___________________';
// var imagem = 'Imagem';
// primeiro i corresponde o número inicial no loop, o segundo i é a quantidade final que para a repetição, i++ é pra somar mais um.
// for (let i = 1; i <= 10; i++) {
//     document.write(nome + "<br>");
//     document.write(local + "<br>");
//     document.write(imagem + "<br>");
//     document.write(separador + "<br><br>");
// }
// var valor = Number(prompt('Digite o valor:: '));
// let i = 1;
// while( i <= 10){
//     document.write(valor*i+'<br>');
//     i++;
// }
// var resposta = prompt('Você é bonito?::');
// let i = 'sim';
// while( i =='sim'){
//     reposta = prompt('Você tem certeza?');
//     i = resposta;
// }

// var produto = 'Geladeira';
// var valor = 100;
// document.write(valor+'<br>');
// for(let i=1; i<=12; i++){
//     valor = valor*2;
//     document.write(valor+'<br>');
// }


// var nome = prompt('Digite aqui');

// for(let i=1; i<=12; i++){
//     document.write(nome+'<br>');
// }

// let i =1;
// while( i<=12){
//     document.write(nome+'<br>');
//     i++;
// }

// DOM

const botao = document.querySelector('#botao');

botao.style.fontSize = '30px';

const body = document.querySelector('body');
botao.addEventListener('click',()=> body.style.background = 'black')

