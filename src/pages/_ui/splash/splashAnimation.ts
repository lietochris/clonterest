import { gsap } from "gsap";

const duration = 0.6;
const collages = document.querySelectorAll(".collage");

function animateCollage(collage: Element) {
  const timeline = gsap.timeline();
  const subtitle = collage.querySelector(".collage__subtitle");
  const items = collage.querySelector(".collage__items")?.querySelectorAll(":scope > div");

  // Mostrar el collage
  timeline.call(() => collage.classList.remove("hidden"));

  // Animar subtítulo
  timeline.fromTo(
    subtitle,
    { visibility: "hidden", opacity: 0, y: -40 },
    { visibility: "visible", opacity: 1, y: 0, duration }
  );

  // Animar items
  if (items) {
    timeline.fromTo(
      items,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.5, ease: "power3.out" }
    );
    timeline.to(items, { delay: 2 });
    timeline.to(items, { opacity: 0 });
  }

  // Ocultar subtítulo
  timeline.fromTo(
    subtitle,
    { opacity: 1 },
    { opacity: 0, duration }
  );

  // Ocultar el collage
  timeline.call(() => collage.classList.add("hidden"));

  return timeline;
}

const masterTimeline = gsap.timeline({ repeat: -1 });
collages.forEach(collage => masterTimeline.add(animateCollage(collage)));
