//Exercicio 1
let operacao;
let a = 5;
let b = 7;
switch (operacao) {
    case "adição":
        console.log(a + b);
        break;
    case "subtração":
        console.log(a - b);
        break;
    case "multiplicação":
        console.log(a * b);
        break;
    case "divisão":
        console.log(a / b);
        break;
    case "modulo":
        console.log(a % b);
        break;
}

//Exercicio 2
let num1;
let num2;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//Exercicio 3
let n1;
let n2;
let n3;

if (n1 > n2 && n1 > n3) {
    console.log(n1);
} else if (n2 > n1 && n2 > n3) {
    console.log(n2);
} else {
    console.log(n3);
}

//Exercicio 4
let constante;

switch(constante){
    case "tenho a chave":
        console.log("positive");
        break;
    case "não tenho a chave":
        console.log("negative");
        break;
    default:
        console.log("zero");
        break;
}

//Exercicios 5
let angA;
let angB;
let angC;

if (angA < 0 || angB < 0 || angC < 0){
    console.log('ERROR: Numero inválido, os ângulos devem ser positivos')
} else if (angA + angB + angC === 180) {
    console.log(true);
} else {
    console.log(false)
}

//Exercicio 6
let peca;

switch(peca) {
    case "rei":
        console.log(peca + ' -> ' + "1 casa em qualquer direção");
        break;
    case "dama":
        console.log(peca + ' -> ' + "linha reta pelas fileiras, colunas, diagonais");
        break;
    case "bispo":
        console.log(peca + ' -> ' + "movimentação na diagonal");
        break;
    case "cavalo":
        console.log(peca + ' -> ' + "movimentação em L");
        break;
    case "torre":
        console.log(peca + ' -> ' + "movimentação em linha reta na horizontal e vertical");
        break;
    case "peão":
        console.log(peca + ' -> ' + "movimentação apenas para frente(vertical)");
        break;
    default:
        console.log("ERRO: peça inválida");
        break;
}

//Exercicio 7
let nota;

if (nota < 0 || nota > 100) {
    console.log('Nota ultrapassa ou não atinge os limites de avaliação');
} else if (nota >= 90){
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60) {
    console.log('D');
} else if (nota >= 50) {
    console.log('E');
} else {
    console.log('F');
}

//exercicio 8
let number1;
let number2;
let number3;
 
if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

//Exercicio 9
let number4;
let number5;
let number6;

if (number4 % 2 !== 0 || number5 % 2 !== 0 || number6 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

//Exercicio 10
let custoProduto;
let valorVenda;
let impostoCusto = custoProduto * 0.2;
let quantidadeVenda;

if (custoProduto <= 0 || valorVenda <= 0) {
    console.log('ERRO: valores de entrada menores que 0, sem lucro obtido');
} else {
    let valorCustoTotal = custoProduto + impostoCusto;
    let lucro = valorVenda - valorCustoTotal;
    let lucroTotal = lucro * quantidadeVenda;
    console.log(lucroTotal);
}

//Exercicio 11
let salarioBruto = 1800;
let salarioBase;
let salarioLiquido;
let parcela;

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto >= 2594.92 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);
} else {
    salarioBase = salarioBruto - 570.88
}

if (salarioBase <= 1903.98) {
    console.log('isento de imposto de renda, salário liguido de ' + salarioBase)
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    parcela = (0.075 * salarioBase) - 142.80
    salarioLiquido = salarioBase - parcela
    console.log('Seu salario liquido é de ' + 'R$' + salarioLiquido)
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    parcela = (0.15 * salarioBase) - 354.80
    salarioLiquido = salarioBase - parcela
    console.log('Seu salario liquido é de ' + 'R$' + salarioLiquido)
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    parcela = (0.225 * salarioBase) - 636.13
    salarioLiquido = salarioBase - parcela
    console.log('Seu salario liquido é de ' + 'R$' + salarioLiquido)
} else {
    parcela = (0.275 * salarioBase) - 869.36
    salarioLiquido = salarioBase - parcela
    console.log('Seu salario liquido é de ' + 'R$' + salarioLiquido)
}