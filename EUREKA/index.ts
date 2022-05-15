//PROMPT DESACTIVADO LINEA 7

let contador: number = 1;
let claveIngresada: string = "";

while (contador <= 3 && claveIngresada !== "eureka") {
  claveIngresada = p("Introduzca la clave");
  contador++;
}
if (claveIngresada === "eureka") {
  console.log("Clave correcta");
} else {
  console.log("Ya no tiene más intentos");
}
