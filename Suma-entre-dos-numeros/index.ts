let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnviar = document.getElementById("enviar");
rotulo1.innerHTML = "Ingrese primer numero";
rotulo2.innerHTML = "Ingrese segundo numero";
btnEnviar.addEventListener("click", () => {
let nro1: number = Number(dato1.value);
let nro2: number = Number(dato2.value);
let actual: number;
let suma: number; 
actual = nro1;
suma = 0;

while (actual <= nro2) {
  suma = suma + actual;
  actual++;
}
console.log(suma);