// - Creare un programma che stampi in console i numeri da 1 a 100
//     - Creare un ciclo for che stampi i numeri in console da 1 a  0
let containerDOMElement = document.querySelector('.container');

for (let i = 0; i < 100; i++) {
    //  - Far in modo che il programma stampi per i multipli di 3 la stringa fizz
    //     - Inserire all'interno del ciclo una condizione per cui i numeri che nella modale di 3 danno come resto 0 stampino la parola fizz

    // - Far in modo che il programma stampi per i multipli di 5 la stringa buzz
    //     - Inserire all'interno del ciclo una condizione per cui i numeri che nella modale di 5 danno come resto 0 stampino la parola buzz

    // - Far in modo che il programma stampi per i multipli di 3 e di 5 la stringa fizzbuzz
    //     - Inserire all'interno del ciclo una condizione per cui i numeri che nella modale di 5 e di 3 danno come resto 0 stampino la parola buzz
    let counter = i + 1
    // - Creare un div nel HTML per ogni m stampato dal ciclo for
    //    - Richiamare un elemento dal DOM
    //    - Creare all'interno di quell'elemento un numero elementi del DOM pari al numero di volte che si ripete il ciclo for
    //    - Far si che per ogni elemento venga stampato nel HTML la stringa o il numero corretto

    // - Dare uno stile ad ogni numero a seconda della divisibilità di m


    const contentDOMElement = document.createElement('div')
    containerDOMElement.append(contentDOMElement)

    if (((counter % 3) + (counter % 5)) === 0) {
        console.log('FizzBuzz')
        contentDOMElement.innerHTML = ('FizzBuzz')
        contentDOMElement.classList.add('fizzbuzz')
    }
    else if ((counter % 3) === 0) {
        console.log('Fizz')
        contentDOMElement.innerHTML = ('Fizz')
        contentDOMElement.classList.add('fizz')
    }
    else if ((counter % 5) === 0) {
        console.log('Buzz')
        contentDOMElement.innerHTML = ('Buzz')
        contentDOMElement.classList.add('buzz')
    }
    else {
        console.log(counter)
        contentDOMElement.innerHTML = counter
        contentDOMElement.classList.add('number')
    }
}
