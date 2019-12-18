// Chiedere numero km
var nkm = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(nkm);
// Chiedere età
var eta = parseInt(prompt('Quanti anni hai?'));
console.log(eta);
// Calcolo prezzo totale del viaggio (0.21/KM)
var costoBiglietto = 0.21 * nkm;
console.log(costoBiglietto);
// sconto del 20% per i minorenni
if (eta < 18 ) {
  costoBiglietto = (0.21 * nkm) - ((0.21*20)/100);
} else if (eta >= 65) {
  costoBiglietto = (0.21 * nkm) - ((0.21*20)/100);
}
console.log(costoBiglietto);
// 40% per gli over 65.
