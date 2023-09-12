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

// quindi la differenza tra querySelector e querySelectorAll
// è che nel primo prende il primo elemento mentre nel secondo
// prende tutti gli elementi!

// quando possibile dovremmo cercare di non utilizzare i querySelector per un puro discorso prestazionale:
// document.querySelector('#first') <-- spreco di risorse!
// document.getElementById('first) <-- meglio ottimizzato!

// facciamo ora qualche esempio di selezione di elementi veri nella pagina!
const thirdArticle = document.getElementsByClassName('content')[2]
console.log('thirdArticle', thirdArticle)

const secondMainMenuLi = document.querySelector(
  '#main-menu > li:nth-of-type(2)'
)
console.log('secondMainMenuLi', secondMainMenuLi)

// .parentElement troverà SEMPRE, dato un elemento, il suo genitore (se dovesse servirvi)
console.log('secondMainMenuLi', secondMainMenuLi.parentElement) // <-- torna la <ul> che contiene il secondo <li>

// 2) DOM MANIPULATION (manipolazione degli elementi trovati con 1) )

// ogni elemento testuale ha una proprietà che si chiama .innerText
// trovo l'<h1> nella pagina:
const pageTitle = document.getElementById('main-title')
// pageTitle è UN OGGETTO!
// .innerText funziona "in lettura"...
console.log(pageTitle.innerText) // "DOM Manipulation"
// ...ma funziona anche "in scrittura"! potete CAMBIARE il valore di una qualsiasi, essendo pageTitle un oggetto!
pageTitle.innerText = 'EPICODE RULES!'

pageTitle.classList.add('classe-di-test') // aggiunge al titolo una nuova class
pageTitle.classList.add('red-color') // aggiunge al titolo una nuova class
pageTitle.classList.remove('classe-di-test') // rimuove la classe di test aggiunta prima

// style
pageTitle.style.fontSize = '3em'
pageTitle.style.opacity = '0.5'

const removeTitle = function () {
  const title = document.getElementsByTagName('h1')[0]
  title.style.display = 'none'
}

// removeTitle() // <-- finchè non decommento removeTitle(), il titolo rimane lì perchè ho definito la logica
// in una funzione ma non l'ho ancora mai eseguita!

// proviamo a cambiare il colore del testo a TUTTI gli <li> della lista ordinata:

const makeThemAllGreen = function () {
  // seleziono con querySelectorAll TUTTI gli <li> dentro la <ol> con id "ordered-list"
  const allTheLis = document.querySelectorAll('#ordered-list li') // torna una NodeList di <li>
  // NodeList è una struttura come un array, posso ciclarla con forEach, map, filter...
  allTheLis.forEach((singleLi) => {
    // singleLi, finalmente, è un oggetto singolo! posso utilizzare le tecniche della DOM manipulation
    singleLi.style.color = 'green'
  })
}

makeThemAllGreen()

const makeThisOrange = function (elementId) {
  const element = document.getElementById(elementId)
  element.style.color = 'orange'
}

makeThisOrange('special-li')
makeThisOrange('par')

// qualora utilizziaste getElementsByClassName oppure getElementsByTagName, ricordatevi che non tornano
// una NodeList ma una HTMLCollection; quindi non potreste farci forEach, map, filter etc.
// Soluzioni: 1) utilizzare un semplice for per ciclarli
// 2) trasformare la HTMLCollection in un vero e proprio array:
const myCollection = document.getElementsByClassName('content') // HTMLCollection
const arrayFromTheCollection = Array.from(myCollection) // un vero e proprio array! qui potete usare forEach, map, filter etc.

// altra cosa che si può fare: assegnare o leggere ATTRIBUTI dagli elementi
// GETATTRIBUTE/SETATTRIBUTE

// selezioniamo il primo <li> nella <ol> (con il link)
const anchorInsideFirstLi = document.querySelector('ol li a') // mi torna il link <a> dentro il primo <li> nella <ol>
console.log(anchorInsideFirstLi.getAttribute('href')) // "www.epicode.com"
anchorInsideFirstLi.setAttribute('href', 'https://www.google.com') // riassegnarlo a un nuovo valore

// fin'adesso abbiamo _modificato_ la pagina!
// ma noi possiamo anche GENERARE CONTENUTI da zero!
// createElement()

// il metodo createElement() permette di creare "in memoria" un nuovo nodo per la pagina
const generateNewP = function () {
  const myNewParagraph = document.createElement('p') // <p></p>
  myNewParagraph.innerText =
    'Questo paragrafo è stato interamente generato via JS!'
  myNewParagraph.classList.add('new-p')
  myNewParagraph.style.fontStyle = 'italic'
  // <p>Questo paragrafo è stato interamente generato via JS!</p>
  // il p esiste, ma solo in memoria (come una variabile)
  // per fargli raggiungere il DOM, bisogna APPENDERLO a qualcos'altro
  // lo appendiamo al main:
  const main = document.getElementsByTagName('main')[0]
  main.appendChild(myNewParagraph)
}

generateNewP()

const appendAnotherLi = function () {
  const list = document.getElementById('ordered-list')
  const newLi = document.createElement('li') // <li></li>
  newLi.innerText = 'Sesto' // <li>Sesto</li>
  newLi.style.color = 'green'
  list.appendChild(newLi) // appendo fisicamente il mio <li> alla <ol>
}

// appendAnotherLi()

// 1) SI CREA L'ELEMENTO
// 2) SI RIEMPIE/STILA L'ELEMENTO
// 3) SI TROVA IL PADRE A CUI LO SI VUOLE APPENDERE
// 4) SI APPENDE SUL PADRE IL NUOVO ELEMENTO

// IMPARIAMO A COLLEGARE UNA DELLE FUNZIONI CHE ABBIAMO SCRITTO AL CLICK DEL MOUSE
