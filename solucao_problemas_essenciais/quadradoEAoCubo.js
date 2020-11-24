/**
 * Desafio
Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). 
Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

Este é o enunciado, porém o que ele quer de verdade é que dado um número, 
imprima-se todos os números do interval, seu quadrado e seu cubo
 */




//Para submeter na plataforma da DIO tem descomentar a linha abaixo
//let entry=gets();
let entry = '5'; //atribuição de teste - deve ser comentada ou deletada para submissão na DIO
let values = entry.split(' ');
let num = parseInt(values[0]);



for (let index = 1; index <= num; index++) {
  console.log(index, index ** 2, index ** 3)

}

/* let media = H / P;
console.log(media.toFixed(2)); */