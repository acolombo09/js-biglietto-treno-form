/*
Il programma dovrà chiedere all’utente il numero di chilometri 
che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const reqKms = prompt("Quanti Km hai bisogno di percorrere?");
const age = prompt("Inserisci la tua età");
const pricePerKm = 0.21;

document.getElementById("first-name").innerHTML = firstName;
document.getElementById("last-name").innerHTML =  lastName;
document.getElementById("age").innerHTML = age;
document.getElementById("req-kms").innerHTML = reqKms;

//To fixed applica in automatico le approssimazioni, che sia floor o ceil.
const priceKms = (reqKms * pricePerKm).toFixed(2);

// console.log(priceKms + " euro");
document.getElementById("price-kms").innerHTML = priceKms + " €";

/* Come miglioria, si potrebbe dare al let coupon un =0 per 
  evitare di aggiungere un else nell'if per gli sconti.
*/
const discountBaby = 20;
const discountOver = 40;
let coupon;

if (age < 18) {
    document.getElementById("discount-calc").innerHTML = (discountBaby + " %");
  } else if (age > 65){
    document.getElementById("discount-calc").innerHTML = (discountOver + " %");
  } else {
    document.getElementById("discount-calc").innerHTML = "No discounts applied";
}

if (age < 18) {
    coupon = ((priceKms * discountBaby) / 100);
  } else if (age > 65) {
    coupon = ((priceKms * discountOver) / 100);
  } else {
    coupon = 0;
}

// console.log((priceKms * discountBaby / 100));
// console.log((priceKms * discountOver / 100));

const finalPrice = (priceKms - coupon);
document.getElementById("final-price").innerHTML = finalPrice + " €";
