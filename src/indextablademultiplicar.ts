let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Numero que desea multiplicar en la tabla";
rotulo2.innerHTML = "Multiplicar hasta";

btnEnviar.addEventListener("click", () => {
  let nro: number = Number(dato1.value);
  let limite: number = Number(dato2.value);
  let resultado: number;
  let contador: number = 1;
  while (contador <= limite) {
    resultado = nro * contador;
    contador = contador + 1;
    console.log(nro + "x" + contador + "=" + resultado);
  }
});

//me da mal los resultados en consola
