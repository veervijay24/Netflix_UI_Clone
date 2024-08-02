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


// var body = document.querySelector("body");

// window.addEventListener("scroll",function(dets){
//     console.log(dets);
// })



// let lastScrollTop = 0; // Store the previous scroll position

// Function to handle scroll events
// function handleScroll() {
//     const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    // if (currentScrollTop > lastScrollTop) {
    //     gsap.to(".main",{
    //         y: "-100%",
    //         duration: 2,
    //         opacity: 0,
    //         scale: .2,
    //        })
    // } 
    // else {
    //     gsap.to(".main",{
    //         y: "100%",
    //         duration: 2,
    //         opacity: 1,
    //         scale: 1,
    //        })
    // }

    // Update the last scroll position
//     lastScrollTop = currentScrollTop;
// }

// Attach the scroll event listener to the window
// window.addEventListener('scroll', handleScroll);
