//descrizione esercizio
//1.il PC deve generare 16 numeri casuali tra 1 e 100
//2. il numeri non possono essere duplicati
//3. insegutio deve chiedere all'utente (100-16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//4. L'utente non può inserire più volte lo stesso numero.
//5. Se il numero è presente nella lista dei numeri generati, partita termina, altrimetni si continua chiedendo all'utente un altro numero.
//6. La partita termian quando il giocatore inserisce un numeri 'vietato' o raggiunge il numero massimo possibile di numeri consentiti.
//7. Al termine dell apartita il software deve comunicare i punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// 1, 2 ********//
var number = [];
var userArray = [];
console.log(userArray);
// var numberBot = number[r];
while(number.length < 16){
    var r = Math.floor(Math.random() * 100) + 1;
    if(number.indexOf(r) === -1) {
        number.push(r);
    }
}
console.log(number);

// PARTE  3 e 5 e 6 *********//
var checkedNumber = false;
//ciclo for per inserire i numeri del giocatore( max 84 giri)
for (var i  = 0; i < 84; i++) {
    var userNumber = Number(prompt('Inserisci un numero da uno a 100. Non ripetere lo stesso numero altirmenti perderai!'));
    var numberInserted = userArray.push(userNumber);

    // condizioni di vincita o perdita
    if ( userNumber == r || userNumber > 100 || isNaN(userNumber)) {
        checkedNumber = true;
    }

    if (checkedNumber == true ) {
        console.log('hai perso');
        console.log('punteggio: hai fatto '+ i +' giri');
        break;    
    } else {
        console.log('continua a giocare');
    }
    console.log(userNumber);
    
}

// //prova inserimento numero ripetuto:
//  function numberSelected(array, number) {
     
//  }
