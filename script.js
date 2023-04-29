
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
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
   
    box.style.backgroundColor = 'blue';
    box.style.width = '500px';

    box.style.cssText = `background-color: orange; width: 600px`;


    

    //console.log(typeof(box.style.backgroundColor));

   // btns[1].style.borderRadius = '100%';

    //circles.style.backgroundColor = 'red'; // Выдаст ошибку т.к. я обращаюсь к псевдомассиву 
    //circles[0].style.backgroundColor = "purple"; 


    /* Лучше использовать перебирающие методы

    for (let i = 0; i < 2; i++) { // Изменение элементов с помощью циклов
        circles[i].style.backgroundColor = "purple";
    }

    */

    hearts.forEach(item =>{
        item.style.backgroundColor = "purple";
    });

    
    let div = document.createElement('div');

    //let text = document.createTextNode('Hello');

    div.classList.add('black');

    wrapper.append(div);

    //document.querySelector('.wrapper').append(div);
    //wrapper.prepend(div);

   // hearts[0].before(div);
   //hearts[0].after(div);

   //wrapper.insertBefore(div, hearts[0]);

   //circles[0].remove();
   //wrapper.removeChild(hearts[1]);

    hearts[0].replaceWith(circles[0]);
   //wrapper.replaceChild(circles[0], hearts[0]);

  //  div.innerHTML = '<h1>Hello</h1>';

   //div.textContent = 'Hello';

   div.insertAdjacentHTML('beforeend', '<h2>Hi</h2>'); 