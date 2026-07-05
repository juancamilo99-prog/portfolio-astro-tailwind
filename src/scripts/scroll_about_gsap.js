import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        defaults: {
            duration: 0.8,
            ease: "power3.out",
        }
    });

    tl.from(".about-title", {
        scrollTrigger: {
            trigger: ".about-title",
            start: "top 70%",
        },
        opacity:0,
        y:30,
    }, "-=0.4")

    gsap.from(".about-cont-image", {
        scrollTrigger: {
            trigger: ".about-cont-image",
            start: "top 70%",
        },
        x: -400,
        opacity:0,
    });
    
    gsap.from(".about-cont-texto", {
        scrollTrigger: {
            trigger: ".about-cont-texto",
            start: "top 70%",
        },
        x:400,
        opacity: 0,
    });
});