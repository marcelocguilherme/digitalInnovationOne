let entry = '3000';
//let entry = gets();
let values = entry.split(' ');
let renda = parseFloat(values[0]).toFixed(2);


if (renda <= 2000) {
  console.log("Isento")
} else if (renda > 2000 && renda <= 3000) {
  let faixa = (renda - 2000) * 0.08
  console.log('R$ ' + faixa.toFixed(2))
} else if (renda > 3000 && renda <= 4500) {
  let faixa1 = (renda - 3000) * 0.18 + 80

  console.log('R$ ' + faixa1.toFixed(2)

  )

} else {
  let faixa2 = (renda - 4500) * 0.28 + 270 + 80
  console.log('R$ ' + faixa2.toFixed(2))
}




/* let distancia = tempo * velocidadeMedia
let quantidadeLitros = distancia / 12;
console.log(quantidadeLitros.toFixed(2)); */