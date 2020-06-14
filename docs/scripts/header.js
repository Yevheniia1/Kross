import {createNewElements} from './helpers.js';

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

async function runHeaderDecoration() {
    try {
        await createHeaderDecorations();
        const headerDecorationElements = await import('./decorations.js');
        const master = new TimelineMax();
    
        master.add(headerDecorationElements.leaf5())
              .add(headerDecorationElements.leaf6())
              .add(headerDecorationElements.leaf1())
              .add(headerDecorationElements.leaf2(), '-=3')
              .add(headerDecorationElements.leaf3(), '-=10')
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

export {openMobileNavigation, runHeaderDecoration}
