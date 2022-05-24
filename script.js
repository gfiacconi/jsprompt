let nome = window.prompt("Inserisci il tuo nome: ");
let cognome = window.prompt("Inserisci il tuo cognome: ");
let dataDiNascita = window.prompt("Inserisci la tua data di nascita: ");
let luogoDiNascita = window.prompt("Inserisci il tuo luogo di nascita: ");
let segnoZodiacale = window.prompt("Inserisci il tuo segno sodiacale: ");

document.getElementById(
  "main"
).innerText = `Nome: ${nome} \nCognome: ${cognome} \nLa tua data di Nascita è: ${dataDiNascita} \nIl tuo luogo di Nascita è: ${luogoDiNascita} \nIl tuo segno zodiacale è: ${segnoZodiacale}`;
