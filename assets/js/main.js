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
while(number.length < 16){
    var r = Math.floor(Math.random() * 100) + 1;
    if(number.indexOf(r) === -1) {
        number.push(r);
    }
}
console.log(number);
// 3*********
var chekedNumber= false;
for (var i  = 0; i < 3; i++) {
    var numberUtente = Number(prompt('inserisci un numero da 1 a 100, non ripetere lo stesso numero o perderai!'));
    if (numberUtente === number){
        chekedNumber = true;
        alert('hai perso la partita');
        break;
    }
    console.log(numberUtente);
}
