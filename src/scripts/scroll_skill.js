import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () =>{

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".skill-title", {
        scrollTrigger: {
            trigger: ".skill-title",
            start: "top 70%",
        },
        opacity:0,
        x: -400
    },"-=0.4");

    gsap.from(".content-skill", {
        scrollTrigger: {
            trigger: ".content-skill",
            start: "top 70%",
        },
        opacity: 0,
        y: 40,
    },"-=0.3")
})