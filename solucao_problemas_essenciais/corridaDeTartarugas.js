/**
 * Desafio
A corrida de tartarugas é um esporte que cresceu muito nos últimos anos,
fazendo com que vários competidores se dediquem a capturar tartarugas rápidas,
 e treina-las para faturar milhões em corridas pelo mundo.
 Porém a tarefa de capturar tartarugas não é uma tarefa muito fácil,
 pois quase todos esses répteis são bem lentos.
 Cada tartaruga é classificada em um nível dependendo de sua velocidade:


Nível 1: Se a velocidade é menor que 10 cm/h .
Nível 2: Se a velocidade é maior ou igual a 10 cm/h e menor que 20 cm/h .
Nível 3: Se a velocidade é maior ou igual a 20 cm/h .

Sua tarefa é identificar qual o nível de velocidade da tartaruga
mais veloz de um grupo.

Entrada
A entrada consiste de múltiplos casos de teste, e cada um consiste em duas
linhas: A primeira linha contém um inteiro L (1 ≤ L ≤ 500) representando
o número de tartarugas do grupo, e a segunda linha contém L
inteiros Vi (1 ≤ Vi ≤ 50) representando as velocidades de cada
tartaruga do grupo.

Saída
Para cada caso de teste, imprima uma única linha indicando o nível de
velocidade da tartaruga mais veloz do grupo.
 */

//Para submeter na plataforma da DIO tem descomentar a linha abaixo
//let entry=gets();
//let entry = '10 \n 10 10 10 10 15 18 20 15 11 10 \n 10 \n 1 5 2 9 5 5 8 4 4 3 \n 10 \n 19 9 1 4 5 8 6 11 9 7'; //atribuição de teste - deve ser comentada ou deletada para submissão na DIO
let qtdT = gets().split(" ");
let veloc = gets().split(" ");

let qtdT2 = gets().split(" ");
let veloc2 = gets().split(" ");

let qtdT3 = gets().split(" ");
let veloc3 = gets().split(" ");
let entry = '10'

let values = entry.split('\n');
//console.log(values)
//console.log(values.length)

for (let i = 0; i < values.length; i++) {
  let velocidades = values[i + 1].split(' ')
  velocidades.shift()
  //console.log(i);
  i++
  //console.log(velocidades);

  let maiorDoGrupo = Math.max(...velocidades)
  if (maiorDoGrupo < 10) {
    console.log(1)

  } else if (maiorDoGrupo >= 10 && maiorDoGrupo < 20) {
    console.log(2)
  } else {
    console.log(3)
  }
}

//let velocidades = values[1].split(' ')
//velocidades.shift()

//console.log(values);

//velocidadesInt = velocidades.map((velocidade) => parseInt(velocidade))
//console.log(velocidades);

//console.log(velocidadesInt);
//console.log(Math.max(...velocidades))
/* let maiorDoGrupo = Math.max(...velocidades)
if (maiorDoGrupo < 10) {
  console.log(1)

} else if (maiorDoGrupo >= 10 && maiorDoGrupo < 20) {
  console.log(2)
} else {
  console.log(3)
} */


