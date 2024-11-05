// // alert("teste")
/*
 var elementosPagina = {
     titulo: 'Escolha sua cor favorita',
     paragrafo: 'Quando o prompt abrir, digite uma cor',
     linha: '--------------'
 }

 var dadosUsuario = {
     nome: prompt('Digite seu nome::'),
     cor: prompt('Digite sua cor favorita::')
 }

 document.write(` Olá ${dadosUsuario.nome}, seja bem vindo! `)

 if (dadosUsuario.cor == 'azul' || dadosUsuario.cor == 'Azul') {
     document.write(`Ótima escolha de cor`);
 }else if (dadosUsuario.cor == 'vermelho' || dadosUsuario.cor == 'Vermelho') {
     document.write(`Boa segunda opção de cor`);
 }else if (dadosUsuario.cor == 'laranja' || dadosUsuario.cor == 'Laranja') {
     document.write(`Boa terceira opção de cor`);
 }else {
     document.write(`Péssima escolha de cor`);
}
     
    
var dadosLocadora= {
    nome: prompt(`Nome do filme`),
    genero: prompt(`Gênero??`)
}

if (dadosLocadora.genero == 'terror' || dadosLocadora.genero == 'Terror'){
    document.write(`BUHHHHH`);
}else if (dadosLocadora.genero == 'ação' || dadosLocadora.genero == 'Ação'){
    document.write(`BORA PRA LUTA`);
}else if (dadosLocadora.genero == 'Romance' || dadosLocadora.genero == 'romance'){
    document.write(`LOVE LOVE`);
}else{
    document.write(`Não temos esse Gênero`)
}
    

var listaConvidados = {
    nome1: 'joao',
    nome2: 'gabriel',
    nome3: 'joana'
}
var nomeUsuario = prompt(`Digite seu nome`);

if (nomeUsuario == listaConvidados.nome1 || nomeUsuario == listaConvidados.nome2 || nomeUsuario == listaConvidados.nome3){
    document.write(`Pode entrar`);
}else{
    document.write(`Não`);
}



function soma (valor1, valor2){
    
    document.write(valor1+valor2 + '<br>')
}
soma(10, 23);
soma(1,2)



function separacao(texto, simbolo) {

    document.write('<br>');
    document.write('--------------------------');
    document.write(texto);
    document.write(simbolo);
    document.write('<br>');

}

document.write('<h1> Temporal no fim de semana </h1>');
document.write('<p> Nesse fds caira um baita toró na região de SP, que será muito devastador.');

separacao('', '@@');

document.write('<p> Na região da penha não caiu uma gota de agua, fazendo com que o evento ocorresse normalmente.</p>');

separacao('Pular linha', '@@');

document.write('<p> Todos alunos do programador Web compareceram no Casa Aberta as 7h da manhã felizes e empolgados. </p>');

separacao('', '@@');

*/

function dadosFeed(nome, data, local) {

    document.write(`<br><br><strong> ${nome} </strong>`);
    document.write(`<br> ${data}`);
    document.write(`/ ${local}`);
}

document.write('<h3>Feed de amigos</h3>');

dadosFeed('Gustavo', '22/03/2024', 'avn.Marechal');

document.write('<br><br><strong>Nome do amigo</strong>');
document.write('<br>Data da publicação do amigo');
document.write(' / Localização ');

document.write('<br> <br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');

document.write('<br><br><strong>Nome do amigo</strong>');
document.write('<br>Data da publicação do amigo');
document.write(' / Localização ');

document.write('<br> <br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');


document.write('<br><br><strong>Nome do amigo</strong>');
document.write('<br>Data da publicação do amigo');
document.write(' / Localização ');

document.write('<br> <br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');
document.write('<br>--------------------');
