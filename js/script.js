// Chiedere numero km
var nkm = parseInt(prompt('Quanti km vuoi percorrere?'));
document.getElementById('nkm').innerHTML = (nkm + 'km');

// Chiedere età
var eta = parseInt(prompt('Quanti anni hai?'));
document.getElementById('eta').innerHTML = (eta);

// Calcolo prezzo totale del viaggio (0.21/KM)
var costoBiglietto = 0.21 * nkm;
console.log(costoBiglietto);

// sconto del 20% per i minorenni
if (eta < 18 ) {
  costoBiglietto = (0.21 * nkm) - ((0.21*20)/100) + ' (scontato del 20%)';

// 40% per gli over 65.
} else if (eta >= 65) {
  costoBiglietto = (0.21 * nkm) - ((0.21*40)/100) + ' (scontato del 40%)';
}
// STAMPA COSTO BIGLIETTO
document.getElementById('ticketTreno').innerHTML = ' € ' + (costoBiglietto);
