//alert('Teste de integração');


var nome = 'Gustavo'; //string
let idade = 44; //number
const cpf = '1245213456'; //string
var vivo = true; // bolean ( sim ou nao, verdadeiro ou falso)

var nomes = ['Roney', 'Gustavo'];
document.write( nomes[1] );

var dadosUsuario = {
    //nome: 'Gustavo',
    //idade: 44,
    //cpf: '1245213456',
    //vivo: true,
}
document.write(dadosUsuario.vivo);




var usuario = {
    nome: 'Gustavo',
    idade: 44
}
console.log('Olá ' + usuario.nome + ' tenho ' + usuario.idade + ' anos');
console.log(`Olá ${usuario.nome} tenho ${usuario.idade} anos` ) 

var valor = 10 * 5;
console.log( valor);


var valor = 15;
document.write( Math.pow(valor, 5) );




document.write( usuario.senha == bancoUsuario.senha ? 'v' : 'f')

if (6 > 10){
    document.write('verdadeiro')
    }
    else if(6 > 5){
        document.write('falso')
    }
    else {
        document.write('menor do que tudo')
    }


        if (usuario.senha == bancoUsuario.senha) {
    document.write(`Seja bem vindo`);
}else if(usuario.idade >= 18){
    document.write('Pode entrar');
}else{
    document.write('Não vai entrar não'); 
}



var usuario = {
    email: 'profe.gustavo@gmail.com',
    senha: 'abc123',
    idade: prompt('Qual sua idade? ')
}

var bancoUsuario = {
    email: 'profe.gustavo@gmail.com',
    senha: '123'
}


if (usuario.idade <10){
    document.write('Turma Infantil');
}else if(usuario.idade <18){
    document.write('Turma Juvenil');
}else{
    document.write('Turma Adulta');
} 

