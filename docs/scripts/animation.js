// Анимации для элементов

class Animation {

      constructor(container) {
            this.container = container
      }

      calculatePercentageOfHeight(pc) {
            return this.container.clientHeight*(pc/100);
      }

      calculatePercentageOfHWidth(pc) {
            return this.container.clientWidth*(pc/100);
      }

      scaling(elem) {
            const tl = new TimelineMax({repeat: -1, repeatDelay: 15}),
            sec = 1;
  
            tl.fromTo(elem, sec, {scale: 0}, {scale: 1,  ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 10, taper: "out", randomize: false, clamp:  false})});;
      
            return tl
      }

      sharpFall(elem) {
            const tl = new TimelineMax({repeat: -1, repeatDelay: 1, smoothChildTiming: true}),
                  rl = -55,
                  rr = -155,
                  sec = 3,
                  ease = Power0.easeNone;
           
                  tl.fromTo(elem, sec, {x: this.calculatePercentageOfHWidth(-10), yPercent: -100}, {xPercent: -50, y: `+=${this.calculatePercentageOfHeight(40)}`, rotation: -55, ease: ease})
                  .to(elem, sec - 2, {rotation: -75, y: `+=${this.calculatePercentageOfHeight(12)}`, ease: ease})
                  .to(elem, sec, {xPercent: 15, y: `+=${this.calculatePercentageOfHeight(35)}`, rotation: -165, ease: ease})
                  .to(elem, sec - 1.45, {rotation: -250, y: `+=${this.calculatePercentageOfHeight(15)}`, xPercent: 20, ease: ease,  opacity: 0})
                  // .to(elem, sec, {rotation: -550, yPercent: vertical_displacement, xPercent: 400, ease: ease, opacity: 0})
        
            return tl;
        }

        smoothFall(elem) {
            const tl = new TimelineMax({repeat:-1, repeatDelay:1, smoothChildTiming: true}),
                  rl = 250,
                  rr = 200,
                  sec = 2.5,
                  vertical_displacement = `+=${this.calculatePercentageOfHeight(14)}`,
                  ease = Sine.easeInOut,
                  start_position = 180; 
            tl.fromTo(elem, sec, {x: this.calculatePercentageOfHWidth(-33), y: `${this.calculatePercentageOfHeight(-41)}`, rotation: start_position}, {xPercent: -50, y: vertical_displacement, rotation: rl,ease: ease})
              .to(elem, sec, {xPercent: 30, y: vertical_displacement, rotation: rr,ease: ease})
              .to(elem, sec, {xPercent: -30, y: vertical_displacement, rotation: rl, ease: ease})
              .to(elem, sec, {xPercent: 30, y: vertical_displacement, rotation: rr, ease: ease})
              .to(elem, sec, {xPercent: -30, y: vertical_displacement, rotation: rl, ease: ease})
              .to(elem, sec, {xPercent: 30, y: vertical_displacement, rotation: rr, ease: ease})
              .to(elem, sec, {xPercent: -30, y: vertical_displacement, rotation: rl, ease: ease})
              .to(elem, sec, {xPercent: 30, y: vertical_displacement, rotation: rr, ease: ease})
              .to(elem, sec, {xPercent: -30, y: vertical_displacement, rotation: rl, opacity: 0, ease: ease})
        
              return tl;
        }

        rotate(elem) {
            const tl = new TimelineMax({repeat: -1, repeatDelay: 20}),
                  sec = 1,
                  ease = Power4.easeInOut;
        
            tl.fromTo(elem, sec, {scale: 0}, {scale: 1, rotation: 1800, ease: ease});
        
            return tl
        }

        shake(elem) {
            const tl = new TimelineMax({repeat: -1, repeatDelay: 10}),
                  sec = .05,
                  ease = Power4.easeInOut;
        
            tl.to(elem, sec, {rotation: 5, ease: ease, yoyo: true, repeat:12});
        
            return tl
        }

}

export {Animation};