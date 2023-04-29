
// PageActivityPractice

/*

let box = document.getElementById('box');

console.log(box);

let btns = document.getElementsByTagName('button');

console.log(btns[0]); 

let circles = document.getElementsByClassName('circle');

let hearts = document.querySelectorAll('.heart');

hearts.forEach(i => {
    console.log(i);
})

let oneHeart = document.querySelector('.heart');
console.log(oneHeart);

let btn = document.querySelector('button');
console.log(btn);

let btnq = document.querySelector('div');
console.log(btnq);

*/

let box = document. getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('heart'),
    oneHeart = document.querySelector('.heart');

    box.style.backgroundColor = 'blue';
    box.style.width = '500px';

    box.style.cssText = `background-color: orange; width: 600px`;


    

    //console.log(typeof(box.style.backgroundColor));

   // btns[1].style.borderRadius = '100%';

    //circles.style.backgroundColor = 'red'; // Выдаст ошибку т.к. я обращаюсь к псевдомассиву 
    //circles[0].style.backgroundColor = "purple"; 


    for (let i = 0; i < 2; i++) { // Изменение элементов с помощью циклов
        circles[i].style.backgroundColor = "purple";
    }