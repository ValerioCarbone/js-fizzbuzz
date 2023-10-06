// - Creare un programma che stampi in console i numeri da 1 a 100
//     - Creare un ciclo for che stampi i numeri in console da 1 a  0
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
    if (p===0){
    console.log('FizzBuzz')
    }
    else if (n===0){
        console.log('Fizz')
    }
    else if (o===0){
        console.log('Buzz')
    }
    else {
        console.log(m)
    }   
}
