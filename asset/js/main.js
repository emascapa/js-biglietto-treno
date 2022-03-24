/* Il programma dovrà chiedere all'utente il 

numero di chilometri che vuole percorrere e 

l'età del passeggero.


Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:


il prezzo del biglietto è definito in base ai km (0.21 € al km)


va applicato uno sconto del 20% per i minorenni


va applicato uno sconto del 40% per gli over 65.


L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca */



// Chiedo km da percorrere
let km_trip = prompt('Inserire il numero di km da percorrere, per favore inserire un valore numerico');

//controllo che sia un numero il valore inserito sennò faccio reinserire.
//si può inserire solo un'altra volta pk Fabio se uso il ciclo while si arrabbia
var containsOnlyDigits = /^[0-9]+$/; // one or more of digits 0 to 9
if (containsOnlyDigits.test(km_trip)) {
    km_trip = parseInt(km_trip);
} else {
    km_trip = prompt('PER FAVORE INSERIRE IL NUMERO DI CHILOMETRI)');
    km_trip = parseInt(km_trip);
}


//chiedo età passeggero
let user_age = prompt('Inserire età passeggero, per favore inserire un valore numerico');

//controllo che sia un numero il valore inserito sennò faccio reinserire.
if (containsOnlyDigits.test(user_age)) {
    user_age = parseInt(user_age);
} else {
    user_age = prompt('PER FAVORE INSERISCI LA TUA ETà IN NUMERI)');
    user_age = parseInt(user_age);
}

//calcolo prezzo biglietto standard
let ticket_price = km_trip * 0.21;


//applico eventuale sconto
let discount;
if (user_age <= 18) {
    ticket_price = ticket_price * 0.8;
    discount = '20%'
} else if (user_age >= 65) {
    ticket_price = ticket_price * 0.6;
    discount = '40%'
} else {
    discount = 'Nessuno sconto disponibile'
}


//arrotondo alle prime due cifre decimali
ticket_price = ticket_price.toFixed(2);


//inserisco i valori nel html
document.getElementById('kilometers').innerHTML = km_trip;
document.getElementById('age').innerHTML = user_age;
document.getElementById('discount').innerHTML = discount;
document.getElementById('final_price').innerHTML = ticket_price;









