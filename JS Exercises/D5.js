/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let petRevers = pets.reverse();
for (i = 0; i < petRevers.length; i++) {
  console.log("Animali stampati in ordine invertito:", petRevers[i]);
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let firstPet = pets.shift();
pets.push(firstPet);
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (i = 0; i < cars.length; i++) {
  for (let i = 0; i < cars.length; i++) {
    switch (cars[i].brand) {
      case "Ford":
        cars[i].licensePlate = "ABC1234";
        break;
      case "Peugeot":
        cars[i].licensePlate = "DEF5678";
        break;
      case "Volkswagen":
        cars[i].licensePlate = "GHI9012";
        break;
      default:
        cars[i].licensePlate = "UNKNOWN";
    }
  }
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", 
    rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const nuovoOggetto = {
  brand: "Dacia",
  model: "Sandero",
  color: "Orange",
  trims: ["life", "style"],
};
cars.push(nuovoOggetto);
console.log(cars);
for (i = 0; i < cars.length; i++) {
  let lastTrims = cars[i].trims;
  lastTrims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" 
    di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (i = 0; i < cars.length; i++) {
  let firstTrimes = cars[i].trims[0];
  justTrims.unshift(firstTrimes);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
const carsColor = function () {
  for (i = 0; i < cars.length; i++) {
    let color = cars[i].color;
    if (color.charAt(0) === "b") {
      console.log("Fizz");
    } else {
      console.log("Buzz");
    }
  }
};
carsColor();
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 32, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 66, 313, 321, 105];
let j = 0;
while (j < numericArray.length) {
  if (numericArray[j] === 32) {
    break;
  } else {
    console.log(numericArray[j]);
  }
  j++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, 
    genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeto = [];
let posizione = 0;
for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      posizione = 1;
      break;
    case "b":
      posizione = 2;
      break;
    case "c":
      posizione = 3;
      break;
    case "d":
      posizione = 4;
      break;
    case "e":
      posizione = 5;
      break;
    case "f":
      posizione = 6;
      break;
    case "g":
      posizione = 7;
      break;
    case "h":
      posizione = 8;
      break;
    case "i":
      posizione = 9;
      break;
    case "j":
      posizione = 10;
      break;
    case "k":
      posizione = 11;
      break;
    case "l":
      posizione = 12;
      break;
    case "m":
      posizione = 13;
      break;
    case "n":
      posizione = 14;
      break;
    case "o":
      posizione = 15;
      break;
    case "p":
      posizione = 16;
      break;
    case "q":
      posizione = 17;
      break;
    case "r":
      posizione = 18;
      break;
    case "s":
      posizione = 19;
      break;
    case "t":
      posizione = 20;
      break;
    case "u":
      posizione = 21;
      break;
    case "v":
      posizione = 22;
      break;
    case "w":
      posizione = 23;
      break;
    case "x":
      posizione = 24;
      break;
    case "y":
      posizione = 25;
      break;
    case "z":
      posizione = 26;
      break;
  }
  alfabeto.push(charactersArray[i], posizione);
}
console.log(alfabeto);
