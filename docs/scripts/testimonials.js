import {createNewElements} from './script.js';

const containerForDecorations = document.querySelector('.testimonials>.container>.decoration'),
      classesOfDecorations = ['leaf-2', 'leaf-4', 'leaf-5', 'dots-3', 'dots-4'];

//Создание декоративных элементов в testimonials
for(let value of classesOfDecorations){
    let img = createNewElements(containerForDecorations, 'img', `${value}`)
    img.setAttribute('src', `./imgs/decorations/${value}.png`)
}