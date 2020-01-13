import {createNewElements} from './script.js';


const containerForDecorations = document.querySelector('.header--home>.container>.decoration'),
      containerAbout = document.querySelector('.about'),
      classesOfDecorations = ['leaf-1', 'leaf-2', 'leaf-3', 'leaf-5', 'leaf-6', 'dots-1', 'dots-2'];

//Создание декоративных элементов в header
for(let value of classesOfDecorations){
    let img = createNewElements(containerForDecorations, 'img', `${value}`)
    img.setAttribute('src', `./imgs/decorations/${value}.png`)
}

//Создание декоративных элементов в about
(() => {
    let img = createNewElements(containerAbout, 'img', 'leaf-4');
    img.setAttribute('src', `./imgs/decorations/leaf-4.png`)
})()