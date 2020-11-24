let entry = '-7 -3';
//let entry = gets();
let values = entry.split(' ');
let a = parseInt(values[0]);
let b = parseInt(values[1]);
let q;

for (let r = 0; r < Math.abs(b); r++) {
  console.log(`Com R=${r} temos quociente = ${q}e resto = a ${r}`)
  if ((a - r) % b == 0) {
    q = (a - r) / b
    console.log(q, r)
  }
}


