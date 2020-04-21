// imprimir a mediana do array (se tamanho é par = media dos 2 numeros do meio, se nao,  o numero do meio)

const array = [1, 15, 10, 5, 6, 5, 4];
let median;

if (array.length % 2 == 0) {
    median = (array[(array.length / 2) - 1] + array[array.length / 2]) / 2;
} else {
    median = (array[(array.length - 1) / 2]);
}

console.log(median);