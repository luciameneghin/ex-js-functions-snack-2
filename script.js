//snack 1
//funzione dichiarativa
function sommaDichiarativa(a, b) {
  return a + b;
}

console.log(sommaDichiarativa(2, 3));

//funzione anonima
const sommaAnonima = function (a, b) {
  return a + b;
}
console.log(sommaAnonima(7, 3));

//funzione freccia
const sommaFreccia = (a, b) => a + b;
console.log(sommaFreccia(10, 7));