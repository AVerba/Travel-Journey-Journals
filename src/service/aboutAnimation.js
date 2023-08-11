gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".img__item").forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    x: -20,
    duration: 1,
    delay: index * 3.5,
    scrollTrigger: {
      trigger: ".about__img",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      onToggle: self => {
        if (self.isActive) {
          gsap.to(item, { opacity: 1, x: 0, duration: 1 });
        }
      },
    },
  });
});