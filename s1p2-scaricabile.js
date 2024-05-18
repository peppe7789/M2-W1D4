/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// I principali datatype sono:
// - String (stringa): sono dati solitamente di tipo testo, ma al suo interno possiamo trovare anche dei numeri, che inseriti tra le doppie virgolette/apici o backtick, vengono gestiti dal codice solo come testo ai quali non è possibile fare delle operazioni matematiche. Di fatti se facessimo la somma tra due stringe avverrebbe solo l'unione scritta detta concatenazione. 
                    const animal = "Cane"
                    console.log(animal)
// - Number (numero): sono dati di tipo numerico e a differenza del tipo stringa non vanno inseriti all'inetrno delle virgolette.
                     const number = 7
                     console.log(number) 
// - Boolean (booleani): i valori possono essere solo true (vero) o false (falso), viene utilizzato solitamente per capire se un determinato caso può essere vero o falso.
                     const boolean = true
                     console.log(boolean)
// - Array : sono un gruppo di dati e possomo essere di qualsiasi tipo basta separarli tramite una virgola, inoltre sono inseriti tra le parentesi quadre. Possiamo utilizzarli grazie al fatto che ogni dato è associato ad un indice, che parte sempre da zero leggendo i dati da sinistra verso destra. 
                     const array = ["Giuseppe",34,"Palermo",true]
                     console.log(array)
// - Object (oggetti): lo utilizziamo per  descrivere in modo dettagliato i nostri oggetti perchè ci permette di inserire sia la chiave che il valore. Al suo interno possiamo trovare tutti i tipi di datri già accennati ed anche le array. Ricordiamoci che i dati vanno inseriti tramite le parentesi graffe.
                     const myObject = {
                        name : "Giuseppe",
                        surneme : "Lucido",
                        age : 34,
                        array 
                     } 
                     console.log(myObject) 
// - Undedined (indefinito): lo utiliziamo quando vogliamo inserire nel nostro codice una variabile alla quale di proposito non diamo un valore in attesa di essere utilizzata.
                     const testUndefined = undefined
                     console.log(testUndefined)   
// - NUll (nullo): lo utilizziamo quando vogliamo comunicare che la variabile ha un valore nullo.
                     const testNull = null
                     console.log(testNull)


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// - Un oggetto è una raccolta di dati che ci permette di definire in modo dettagliato ciò che vogliamo descrivere, perchè posssiamo inserire la categoria di ricerca con il relativo valore.

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
                    const sum = 12 + 20
                    console.log(sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
                    const x = 12
                    console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
                    const name = "Giuseppe"
                    console.log(name)
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
                    const difference = x - 4
                    console.log(difference)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
                    const name1 = "john"
                    const name2 = "john"
                    console.log( name1 !== name2)

