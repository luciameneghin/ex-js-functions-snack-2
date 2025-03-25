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


//snack 2
const quadrato = (n) => n * n;
console.log(quadrato(4));


//snack 3
function eseguiOperazione(x, y, operazione) {
  return operazione(x, y);
}

const somma = (x, y) => x + y;
console.log(eseguiOperazione(2, 3, somma));

const moltiplica = (x, y) => x * y;
console.log(eseguiOperazione(2, 3, moltiplica));

const sottrai = (x, y) => x - y;
console.log(eseguiOperazione(10, 3, sottrai));