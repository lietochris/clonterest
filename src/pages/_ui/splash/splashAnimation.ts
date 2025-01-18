import {gsap} from "gsap";
import SplashDataset from "./splashDataset.ts";

const timeline = gsap.timeline({repeat: Infinity})
const dura = .6


for (let i = 1; i <= SplashDataset.length; i++) {
    timeline.to(`.splash-${i}`, {display: "grid"})
    timeline.fromTo(`.splash-text-${i}`, {
            visibility: "hidden",
            opacity: 0,
            duration: dura,
            y: -40
        },
        {
            visibility: "visible",
            opacity: 1,
            duration: dura,
            y: 0
        })

    document.querySelectorAll(`.splash-column-${i}`).forEach((col, index) => {
        timeline.fromTo(col, {opacity: 0, y: 50}, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
        })
    })

    timeline.to(`.splash-column-${i}`, {delay: 2})
    timeline.to(`.splash-column-${i}`, {opacity: 0})
    timeline.fromTo(`.splash-text-${i}`, {opacity: 1, duration: dura}, {opacity: 0, duration: dura})
    timeline.to(`.splash-${i}`, {display: "none"})
}
