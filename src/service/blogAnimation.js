gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".b-item").forEach((item, index) => {
  const isEven = index % 2 === 0;
  gsap.from(item, {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: isEven ? index * 0.6 : (index + 1) * 0.5,
    scrollTrigger: {
      trigger: ".blog",
      start: "top 80%",
    },
  });
});