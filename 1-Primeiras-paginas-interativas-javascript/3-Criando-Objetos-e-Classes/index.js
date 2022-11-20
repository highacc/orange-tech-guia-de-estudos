//# Entendendo Objetos e Classes no Javascript
//##Objetos são declarados com {}

const olavo = {
    nome: 'Olavo de Souto',
    idade: 33,

    //Metodo - uma função dentro de um objeto
    descrever: function () {
        //Sinal de Crase `` é usado para que se possa acessar parametros do javascript na string a partir do metodo ${parametro}
        // this é usado para que se possa acessar parametros de escopo locais do javascript, no caso como a função está dentro do objeto, o this vai substituir o nome do objet, no so this.nome é igual a olavo.nome 
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
};

// Chamando a função do objeto
//olavo.descrever();
// mesmo criando o Objeto com const é possível manipular os componentes internos do objeto, pois o javascript trava apenas o fato de ser um objeto e não seu conteúdo
olavo.altura = 1.73;

//console.log(olavo);

delete olavo.altura;

//console.log(olavo);


//Classes

class Pessoa {
    nome;
    idade;
    // o Metodo constructor cria uma obrigatoriedade mostrando como deve ser preenchida a classe
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
};

// const vitor = new Pessoa();
// vitor.nome = 'Vitor';
// vitor.idade = 25;

//console.log(vitor);
//vitor.descrever();

//Utilizando o constructor
const renan = new Pessoa('Renan', 30);
console.log(renan);
renan.descrever();