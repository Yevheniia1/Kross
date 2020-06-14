import {createNewElements} from './helpers.js';
import {Animation} from './animation.js';

async function createTestimonialsDecorations() {
    const containerForDecorations = document.querySelector('.testimonials>.container>.decoration'),
    classesOfDecorations = ['leaf-1', 'leaf-4', 'leaf-5', 'dots-3', 'dots-4'];

    //Создание декоративных элементов в testimonials
    for(let value of classesOfDecorations){
    let img = createNewElements(containerForDecorations, 'img', `${value}`)
    img.setAttribute('src', `./imgs/decorations/${value}.png`)
    }
}

async function runTestimonialsDecorations() {
    try{
        await createTestimonialsDecorations();
        const master = new TimelineMax(),
              testimonials = document.querySelector('.testimonials'),
              leaf_1 = testimonials.querySelector('.leaf-1'),
              leaf_4 = testimonials.querySelector('.leaf-4'),
              leaf_5 = testimonials.querySelector('.leaf-5');

        const testimonialsAnimation = new Animation(testimonials);

        master.add(testimonialsAnimation.scaling(leaf_1))
              .add(testimonialsAnimation.shake(leaf_4))
              .add(testimonialsAnimation.rotate(leaf_5))
    
    } catch(err) {
        console.log(err)
    }
   
}

export {runTestimonialsDecorations}