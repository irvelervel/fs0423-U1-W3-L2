console.log('Oggi si comincia con la DOM manipulation!')

// con la DOM Manipulation noi possiamo alterare il CONTENUTO e l'ASPETTO di una pagina web
// DOPO il suo caricamento!
// possiamo anche INSERIRE/ELIMINARE contenuti in modo dinamico!
// per generare contenuti personalizzati per l'utente

// Il processo per alterare/inserire contenuti in una pagina già caricata
// si compone di DUE FASI:

// 1) DOM TRAVERSING (prendere la mira, selezionare l'elemento interessato)
// 2) DOM MANIPULATION (scoccare la freccia, agire sull'elemento selezionato)

// 1) DOM TRAVERSING, SELEZIONARE DALLA PAGINA L'ELEMENTO/GLI ELEMENTI DESIRATO/I
// tutte le tecniche di selezione che impareremo adesso opereranno sul DOCUMENT
// il document rappresenta la PAGINA caricata dal browser
console.log(document) // praticamente la rappresentazione del tag <html> !

// recap oggetti, proprietà e metodi
const obj = {
  firstName: 'Giorgio', // proprietà
  age: 20, // proprietà
  walk: function (steps) {
    // metodo
    console.log('Giorgio cammina per ' + steps + ' passi')
    // "Giorgio cammina per 5 passi"
  },
}

console.log('età di giorgio', obj.age)
obj.walk(5)

// come prendiamo gli elementi dal document?
// a) con gli id

const foundTitle = document.getElementById('main-title')
const elementNotPresent = document.getElementById('stefano')
console.log('foundTitle', foundTitle) // <h1></h1>
console.log('elementNotPresent', elementNotPresent) // null

// getElementById è un metodo che vi permette di recuperare un riferimento ad un elemento
// della pagina tramite il suo attributo "id" (che è univoco!)
// tornerà UN ELEMENTO oppure NULL (se l'id non viene trovato nella pagina)

// b) con una classe
// getElementsByClassName è un metodo che vi permette di recuperare dal documento
// TUTTI gli elementi dotati di una specifica classe
// class non è un attributo univoco, quindi potreste ricevere molti elementi!
// in OGNI caso, li riceverete sotto forma di "HTMLCollection" (una struttura molto simile ad un array)
// nel caso di UN UNICO elemento trovato, vi verrà restituito un array con UN elemento
// nel caso NESSUN elemento venga trovato, troverete un array VUOTO!

const allTheArticles = document.getElementsByClassName('content')
console.log('allTheArticles', allTheArticles)

const justOneElement = document.getElementsByClassName('special-li')
console.log('justOneElement', justOneElement)
// getElementsByClassName non tornerà MAI un elemento, ma sempre un ARRAY!
// ...anche in caso di un unico tag con quella classe

const noElement = document.getElementsByClassName('stefano')
console.log('noElement', noElement)
// anche nel caso un elemento NON venga trovato, verrà tornato un array (vuoto)

// c) con il nome del tag
const allTheLis = document.getElementsByTagName('li')
console.log('allTheLis', allTheLis)
// stesse identiche considerazioni di getElementsByClassName, valgono tutte le cose già dette
// torna SEMPRE una HTMLCollection
const allTheH1s = document.getElementsByTagName('h1')
console.log('allTheH1s', allTheH1s)

// d) con un SELETTORE CSS
const firstLiInsideFooter = document.querySelector('#footer-menu > li')
// troviamo solamente il primo <li> nel footer
// torna sempre UN ELEMENTO oppure NULL
console.log('firstLiInsideFooter', firstLiInsideFooter)

const allLisInsideFooter = document.querySelectorAll('#footer-menu > li')
// tornerà TUTTI gli elementi che corrispondono al selettore
// torna SEMPRE una NodeList, una struttura array-like che è compatibile con forEach, map, filter etc.
console.log('allLisInsideFooter', allLisInsideFooter)

// quindi la differrenza tra querySelector e querySelectorAll
// è che nel primo prende il primo elemento mentre nel secondo
// prende tutti gli elementi!

// document.querySelector('#first') <-- spreco di risorse!
// document.getElementById('first) <-- meglio ottimizzato!

// .parentElement
