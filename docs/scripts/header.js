import {createNewElements} from './helpers.js';
import {Animation} from './animation.js';


async function createHeaderDecorations() {
    const header = document.querySelector('.header--home'),
          containerForDecorations = header.querySelector('.container>.decoration'),
          classesOfDecorations = ['dots-1', 'dots-2', 'leaf-1', 'leaf-2', 'leaf-3',  'leaf-4', 'leaf-5', 'leaf-6'];

    //Создание декоративных элементов в header
    for(let value of classesOfDecorations){
    let img = createNewElements(containerForDecorations, 'img', `${value}`)
    img.setAttribute('src', `./imgs/decorations/${value}.png`)
    }
}

// Полная сборка анимации в header

async function runHeaderDecorations() {
    try {
        await createHeaderDecorations();
        const master = new TimelineMax(),
              header = document.querySelector('.header--home'),
              leaf_1 = header.querySelector('.leaf-1'),
              leaf_2 = header.querySelector('.leaf-2'),
              leaf_3 = header.querySelector('.leaf-3'),
              leaf_5 = header.querySelector('.leaf-5'),
              leaf_6 = header.querySelector('.leaf-6');
        const headerAnimation = new Animation(header);
    
        master.add(headerAnimation.rotate(leaf_5))
              .add(headerAnimation.shake(leaf_6))
              .add(headerAnimation.scaling(leaf_1))
              .add(headerAnimation.sharpFall(leaf_2), '-=3')
              .add(headerAnimation.smoothFall(leaf_3), '-=10')
    } catch(err) {
        console.log(err)
    }
}

function openMobileNavigation() {
    const buttonBurger = document.querySelector('.burger__btn'),
          header = document.querySelector('.header--home');

    buttonBurger.onclick = () => {
        header.classList.toggle('menu--open');
    }
}

export {openMobileNavigation, runHeaderDecorations}
