//descrizione esercizio
//1.il PC deve generare 16 numeri casuali tra 1 e 100
//2. il numeri non possono essere duplicati
//3. insegutio deve chiedere all'utente (100-16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//4. L'utente non può inserire più volte lo stesso numero.
//5. Se il numero è presente nella lista dei numeri generati, partita termina, altrimetni si continua chiedendo all'utente un altro numero.
//6. La partita termian quando il giocatore inserisce un numeri 'vietato' o raggiunge il numero massimo possibile di numeri consentiti.
//7. Al termine dell apartita il software deve comunicare i punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// 1, 2 ********//
// messaggio di benvenuto
alert('Benvenuti al gioco del camp minato!🌝');
alert("Ci sono 16 bombe all'interno del vostro campo. La difficoltà dovete sceglierla voi. Buona Fortuna💥💥")
//--------------------------- //
//creazione variabili
var numberBomb = [];
var userArray = [];
//--------------------------- //
//ciclo while per generare i 16 numeri random
while(numberBomb.length < 16){
    var r = Math.floor(Math.random() * 100) + 1;
    if(numberBomb.indexOf(r) === -1) {
        numberBomb.push(r);
    }
}
//--------------------------- //
console.log(numberBomb);
//inserimento numero ripetuto:

/**
 * verifica ripetizione numero
 * @param {int} numbs numero inserito
 * @param {int} arr array in considerazione
 * @return boolean  -  se c'è o non c'è il numero nell'array
 */
function numberSelected(numbs, arr) {
    var   numberInserted = arr.length;
    for (let i = 0; i < numberInserted; i++) {
 
         if (arr[i] === numbs) {
             return true;
         }              
    } 
    return false;
  }
  //--------------------------- //
// PARTE  3 e 5 e 6 *********//
//creazione variabile booleana:
var checkedNumber = false;
//--------------------------- //
//ciclo for per inserire i numeri del giocatore( max 84 giri)
for (var i  = 0; i <= 84; i++) {

    var goodNumbers = Number(prompt('Inserisci un numero da uno a 100. NOn puoi ripetere gli stessi numeri!'));
    // var numberInserted = userArray.push(userNumber);
    var numberChecked = numberSelected(goodNumbers, userArray);
    // condizioni di vincita o perdita
    if (goodNumbers <= 100 && !isNaN(goodNumbers) && goodNumbers > 0 &&  numberChecked == false) {
       userArray.push(goodNumbers)
        console.log(userArray); //numeri inseriti
    } else {
        alert('NIENTE NUMERI UGUALI O SIMBOLI STRANI!!!!!💩💩💩');
    }

    if ( numberBomb.includes(goodNumbers)) {
        alert('☠️☠️☠️☠️☠️☠️☠️☠️☠hai perso!!☠️☠️☠️☠️☠️☠️☠️☠️');
        alert('il tuo punteggio finale è '+ ''+i);
        alert('controlla la console per vedere le bombe ed i tuoi numeri!');
        break;    
    } 
    if (i== 84) {
        alert('CONGRATULAZIONI, HAI VINTO!🏆🏆🏆🏆');
        alert('controlla la console per vedere le bombe ed i tuoi numeri!');
    }

}


