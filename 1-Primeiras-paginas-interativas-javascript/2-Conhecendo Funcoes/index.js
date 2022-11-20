// # Conhecendo Funções Javascript
// ## O Poder das Funções na Qualidade do Seu Código

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
};

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
};

function main () {
    const peso = 125;
    const altura = 1.73;
    
    const imc = calcularImc( peso, altura);
    console.log(classificarImc(imc));
}

main();