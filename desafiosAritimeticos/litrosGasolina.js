let entry = '10 85';
let entry = gets();
let values = entry.split(' ');
let tempo = parseFloat(values[0]);
let velocidadeMedia = parseInt(values[1]);


let distancia = tempo * velocidadeMedia
let quantidadeLitros = distancia / 12;
console.log(quantidadeLitros.toFixed(2));