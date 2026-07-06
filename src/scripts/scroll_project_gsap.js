import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener ("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".project-title", {
        scrollTrigger: {
            trigger: ".project-title",
            start: "top 70%"
        },
        opacity: 0,
        y:30
    }),

    gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 70%",
            },
            opacity:0,
            y:30,
            duration: 0.1,
            delay: index * 0.1,
        })
    })
})