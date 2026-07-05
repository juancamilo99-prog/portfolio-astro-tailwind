import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () =>{

    gsap.registerPlugin(ScrollTrigger);
    const  tl = gsap.timeline({
        defaults: {
            duration:0.8,
            ease: "power3.out",
        }
    });

    tl.from(".skill-title", {
        scrollTrigger: {
            trigger: ".skill-title",
            start: "top 100%",
        },
        opacity:0,
        y:30
    });
})