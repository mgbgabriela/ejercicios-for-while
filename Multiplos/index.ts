let nro: number;
let multiplos: string = "";

for (let nro: number = 1; nro <= 100; nro++) {
  if (nro % 2 == 0 || nro % 3 == 0) {
    multiplos = multiplos + nro + " ";
  }
}
console.log(multiplos);
