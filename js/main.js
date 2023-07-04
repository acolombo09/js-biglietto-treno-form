/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto 
di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente 
due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo 
un form in pagina in cui l’utente potrà inserire i dati e visualizzare 
il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in 
pagina (il prezzo dovrà essere formattato con massimo due decimali, 
per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere 
un’implementazione da seguire per il secondo milestone. 
Potete scegliere di implementare una soluzione completamente diversa oppure simile,
ma in ogni caso cercate di farla vostra.

Bonus:
al click su annulla, si svuotano i campi e scompare il biglietto
usare una select per far scegliere la fascia d’età all’utente
*/

const btnLogin = document.querySelector(".login");
const pricePerKm = 0.21;

btnLogin.addEventListener("click", function() {
  const reqkmsInputElement = document.querySelector("[name='reqkms']");
  const yourageInputElement = document.querySelector("[name='yourage']");
  const firstnameInputElement = document.querySelector("[name='firstname']");
  const lastnameInputElement = document.querySelector("[name='lastname']");

  const reqkms = reqkmsInputElement.value;
  const yourage = yourageInputElement.value;
  const firstname = firstnameInputElement.value;
  const lastname = lastnameInputElement.value;

  let coupon = 0;

  if (yourage < 18) {
    coupon = 20;
  } else if (yourage > 65) {
    coupon = 40;
  }

  console.log(reqkms);
  console.log(yourage);
  console.log(firstname);
  console.log(lastname);

  if (yourage < 18 || yourage > 65) {
    document.getElementById("discount-calc").innerHTML = coupon + " %";
  } else {
    document.getElementById("discount-calc").innerHTML = "No discounts";
  }

  const pricekms = (reqkms * pricePerKm).toFixed(2);
  document.getElementById("price-kms").innerHTML = pricekms + " €";

  let discountAmount = (pricekms * coupon) / 100;

  const finalPrice = (pricekms - discountAmount).toFixed(2);
  document.getElementById("final-price").innerHTML = finalPrice + " €";
});