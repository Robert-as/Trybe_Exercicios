let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1: for (let indexNumbers of numbers) {
//    console.log(indexNumbers);
//}


//2: let somaMax = 0;
//for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
//    somaMax += numbers[indexNumbers]
//}
//console.log(somaMax);


//3: let media = 0;
//for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
//    media += numbers[indexNumbers]
//}
//console.log(media/numbers.length);


//4; let media = 0;
//for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
//    media += numbers[indexNumbers]
//}
//if (media/numbers.length > 20){
//    console.log('Valor maior que 20')
//} else {
//    console.log('Valor menor ou igual a 20')
//}


//5: let valorMax = 0;
//for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
//    if (numbers[indexNumbers] > valorMax) {
//        valorMax = numbers[indexNumbers];
//    }
//}
//console.log(valorMax);


//6: let valorImpar = []
//for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
//    if (numbers[indexNumbers] % 2 != 0) {
//        valorImpar.push(numbers[indexNumbers]);
//    } 
//}
//if (valorImpar.length > 0) {
//    console.log(valorImpar)
//} else {
//    console.log('Nenhum valor impar encontrado')
//}


//7: let valorMin = numbers[0];
//for (indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
//    if (numbers[indexNumbers] < valorMin ) {
//        valorMin = numbers[indexNumbers];
//    }
//}
//console.log(valorMin);


//8: let listaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
//for (let count of listaNum){
//    console.log(count);
//}


//9:
let listaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
for (let count of listaNum){
    console.log(count / 2);
}