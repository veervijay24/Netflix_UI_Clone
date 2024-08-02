var tl = gsap.timeline();
tl.from(".main",{
    y: "-100%",
    delay: .2,
    duration: 1,
})

tl.from(".main nav span",{
    y: -10,
    opacity: 0,
    duration: .5,
})

tl.from(".main nav div .btn",{
    y: -10,
    opacity: 0,
    duration: .5,
    ease: "elastic",
    stagger:{
        each: .4,
    },
})

tl.from(".hero span",{
    y: 20,
    opacity: 0,
    duration: .5,
    stagger: {
        each: .4,
  }
})
tl.from(".hero-buttons",{
    opacity: 0,
    scale: .5,
})
