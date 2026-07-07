import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".content-title ", {
        scrollTrigger: {
            trigger: ".content-title",
            start: "top 50%",
            markers: true
        },
        opacity: 0,
        y:30
    },"-=0.4"),

    gsap.from(".content-info", {
        scrollTrigger: {
            trigger: ".content-title",
            start: "top 50%",
        },
        opacity: 0,
        x: -400,
        stagger: 0.1,
    }),

    gsap.from(".content-form", {
        scrollTrigger: {
            trigger: ".content-title",
            start: "top 50%",
        },
        opacity:0,
        x: 400,
    })


})