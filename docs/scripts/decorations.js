const leaf_1 = document.querySelector('.leaf-1'),
      leaf_2 = document.querySelector('.leaf-2'),
      leaf_3 = document.querySelector('.leaf-3'),
      leaf_5 = document.querySelector('.leaf-5'),
      leaf_6 = document.querySelector('.leaf-6');

// Анимации для элементов
function leaf1() {
    const tl = new TimelineMax({repeat: -1, repeatDelay: 15}),
          elem = leaf_1,
          sec = 1;

    tl.fromTo(elem, sec, {scale: 0}, {scale: 1,  ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 10, taper: "out", randomize: false, clamp:  false})});;

    return tl
}

function leaf2() {
    const tl = new TimelineMax({repeat: -1, repeatDelay: 1, smoothChildTiming: true}),
          rl = -55,
          rr = -155,
          elem = leaf_2,
          sec = 3,
          ease = Power0.easeNone,
          vertical_displacement = '+=250';
   
          tl.fromTo(elem, sec, {x: 50, y: -300}, {xPercent: -50, yPercent: vertical_displacement, rotation: rl, ease: ease})
          .to(elem, sec - 2, {rotation: -75, yPercent: '+=75', ease: ease})
          .to(elem, sec, {xPercent: 20, yPercent: vertical_displacement, rotation: rr, ease: ease})
          .to(elem, sec + 1, {rotation: -380, yPercent: '+=350', xPercent: 200, ease: ease,  opacity: 0})
          // .to(elem, sec, {rotation: -550, yPercent: vertical_displacement, xPercent: 400, ease: ease, opacity: 0})

    return tl;
}

function leaf3() {
    const tl = new TimelineMax({repeat:-1, repeatDelay:1, smoothChildTiming: true}),
          elem = leaf_3,
          rl = 245,
          rr = 200,
          sec = 2.5,
          vertical_displacement = '+=50',
          ease = Sine.easeInOut,
          start_position = 180; 
    tl.fromTo(elem, sec, {x: -400, y: -450, rotation: start_position}, {xPercent: -50, yPercent: vertical_displacement, rotation: rl,ease: ease})
      .to(elem, sec, {xPercent: 30, yPercent: vertical_displacement, rotation: rr,ease: ease})
      .to(elem, sec, {xPercent: -30, yPercent: vertical_displacement, rotation: rl, ease: ease})
      .to(elem, sec, {xPercent: 50, yPercent: vertical_displacement, rotation: rr, ease: ease})
      .to(elem, sec, {xPercent: -30, yPercent: vertical_displacement, rotation: rl, ease: ease})
      .to(elem, sec, {xPercent: 30, yPercent: vertical_displacement, rotation: rr, ease: ease})
      .to(elem, sec, {xPercent: -30, yPercent: vertical_displacement, rotation: rl, opacity: 0, ease: ease})

      return tl;
}


function leaf5() {
    const tl = new TimelineMax({repeat: -1, repeatDelay: 20}),
          elem = leaf_5,
          sec = 1,
          ease = Power4.easeInOut;

    tl.fromTo(elem, sec, {scale: 0}, {scale: 1, rotation: 1800, ease: ease});

    return tl
}

function leaf6() {
    const tl = new TimelineMax({repeat: -1, repeatDelay: 10}),
          elem = leaf_6,
          sec = .05,
          ease = Power4.easeInOut;

    tl.to(elem, sec, {rotation: 5, ease: ease, yoyo: true, repeat:12});

    return tl
}

// Полная сборка анимации
     
const MASTER = new TimelineMax();

MASTER.add(leaf5())
      .add(leaf6())
      .add(leaf1())
      .add(leaf2(), '-=3')
      .add(leaf3(), '-=10')
