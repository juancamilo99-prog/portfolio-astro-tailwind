import { gsap } from "gsap";



document.addEventListener("DOMContentLoaded", () =>{
    const tl = gsap.timeline({
        defaults: {
            duration:0.8,
            ease: "power3.out",
        },
    });

    tl.from(".hero-avatar", {
        opacity:0,
        scale: 0,
        rotate: 180,
    })
    .from(".hero-title",{
        opacity:0,
        y:50,        
    })
    .from(".hero-text", {
        opacity:0,
        y:30,
    }, "-=0.4")
    .from(".hero-buttons", {
        opacity:0,
        y:30,
        stagger:0.2,
    }, "-=0.3")
    .from(".hero-social", {
        opacity:0,
        y:20,
        scale:0.5,
        stagger: 0.15,
    }, "-=0.2")
});

