let ComputerResult = document.createElement('div');
ComputerResult.className = ('text-center');
ComputerResult.id = ('risultato-computer');
const button = document.getElementById('my-button');



// GENERARE UN NUMERO RANDOM DA 1 A 5 PER IL COMPUTER
function CGenerator (numero) {
    let NumeroComputer = Math.floor(Math.random() * (5 - 1) + 1 );
    console.log ('Numero Computer', NumeroComputer)
    return NumeroComputer
}


//Assegno il valore scelto dall'utente all'interno del select ad una variabile
let NumeroUtente = document.getElementById('numero-utente');
NumeroUtente.addEventListener('change', (numero) => {
    NumeroUtente = numero.target.value;
    console.log(NumeroUtente);
    return NumeroUtente.value;
});

button.addEventListener('click', CGenerator(NumeroComputer) ,{
    somma = (parseInt(NumeroComputer) + parseInt(NumeroUtente))
});


// SOMMARE I DUE NUMERI
// VERIFICARE SE LA SOMMA è PARI O DISPARI
// CONFRONTARE CON LA SCELTA DELL'UTENTE E VERIFICARE CHI HA VINTO