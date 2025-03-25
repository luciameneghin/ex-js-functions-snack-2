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


//snack 4
function creaTimer(tempo) {
  return function () {
    setTimeout(() => {
      console.log(`--- Timer snack 4: Tempo scaduto!---`);
    }, tempo);
  }
}
const timer = creaTimer(5000);
timer();


//snack 5
function stampaOgniSecondo() {
  let i = 1;
  const intervallo = setInterval(() => {
    console.log(`Contatore snack 5: ${i} secondi`);
    i++;
  }, 1000);

  return intervallo;
}

const intervallo = stampaOgniSecondo();

setTimeout(() => {
  clearInterval(intervallo);
  console.log('Snack 5: stop!');
}, 5000);


//snack 6
function creaContatoreAutomatico(ms) {
  let contatore = 0;
  return function () {
    const intervalloSnackSei = setInterval(() => {
      contatore++;
      console.log(`Contatore snack 6: ${contatore} secondi`);
    }, ms);

    return intervalloSnackSei;
  }
}

const avviaContatore = creaContatoreAutomatico(1000);
const intervalloSnackSei = avviaContatore();

setTimeout(() => {
  clearInterval(intervalloSnackSei);
  console.log('Contatore snack 6: Sono passati 5 secondi');
}, 5000);