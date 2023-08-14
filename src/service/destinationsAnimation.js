gsap.registerPlugin(ScrollTrigger);

const dItems = gsap.utils.toArray(".d-item");

dItems.forEach((item, index) => {
  gsap.set(item, { opacity: 0, y: 20 });
  ScrollTrigger.create({
    trigger: ".destinations__title",
    start: "top 80%",
    onEnter: () => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
        overwrite: true,
      });
    },
  });
});