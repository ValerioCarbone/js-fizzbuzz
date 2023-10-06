// - Creare un programma che stampi in console i numeri da 1 a 100
//     - Creare un ciclo for che stampi i numeri in console da 1 a  0
let containerDOMElement = document.querySelector('.container')

for (let i = 0; i < 100; i++){
// - Far in modo che il programma stampi per i multipli di 3 la stringa fizz
//     - Inserire all'interno del ciclo una condizione per cui i numeri che nella modale di 3 danno come resto 0 stampino la parola fizz

// - Far in modo che il programma stampi per i multipli di 5 la stringa buzz
//     - Inserire all'interno del ciclo una condizione per cui i numeri che nella modale di 5 danno come resto 0 stampino la parola buzz

// - Far in modo che il programma stampi per i multipli di 3 e di 5 la stringa fizzbuzz
//     - Inserire all'interno del ciclo una condizione per cui i numeri che nella modale di 5 e di 3 danno come resto 0 stampino la parola buzz
    let m = i + 1
    const n = m % 3
    const o = m % 5
    const p = n + o
// - Richiamare un elemento dal DOM
// - Creare all'interno di quell'elemento un numero elementi del DOM pari al numero di volte che si ripete il ciclo for
// - Far si che per ogni elemento venga stampato nel HTML la stringa o il numero corretto

    const contentDOMElement = document.createElement('div') 
    containerDOMElement.append(contentDOMElement)   
// containerDOMElement.classList.add('')

    if (p===0){
    console.log('FizzBuzz')
    contentDOMElement.innerHTML = ('FizzBuzz')
    }
    else if (n===0){
        console.log('Fizz')
        contentDOMElement.innerHTML = ('Fizz')
    }
    else if (o===0){
        console.log('Buzz')
        contentDOMElement.innerHTML = ('Buzz')
    }
    else {
        console.log(m)
        contentDOMElement.innerHTML = m
    }   
}
