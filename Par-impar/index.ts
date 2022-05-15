//Prompt desactivado linea 2 y 4
let nro: number = Number(p("Ingrese un número"));
while (nro <= 0) {
  nro = Number(p("Ingrese otro numero positivo"));
}
if (nro % 2 === 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}
