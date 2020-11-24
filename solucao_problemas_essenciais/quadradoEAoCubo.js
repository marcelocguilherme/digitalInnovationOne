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