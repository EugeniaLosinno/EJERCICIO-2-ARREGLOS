let num: number[] = new Array(5);

for (let indice = 0; indice < num.length; indice++) {
  num[indice] = Number(prompt("Ingrese el valor " + (indice + 1)));
}

console.log("Los números ingresados");
for (let indice = 0; indice < num.length; indice++) {
  console.log(num[indice]);
}
