!function(){gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".img__item").forEach((function(e,r){gsap.from(e,{opacity:0,x:-20,duration:1,delay:3.5*r,scrollTrigger:{trigger:".about__img",start:"top 80%",end:"top 20%",scrub:!0,onToggle:function(r){r.isActive&&gsap.to(e,{opacity:1,x:0,duration:1})}}})})),gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".b-item").forEach((function(e,r){var t=r%2==0;gsap.from(e,{opacity:0,y:20,duration:1,delay:t?.6*r:.5*(r+1),scrollTrigger:{trigger:".blog",start:"top 80%"}})})),window.addEventListener("scroll",(function(){var e=document.querySelector("header");window.scrollY>0?(e.classList.add("solid"),e.classList.remove("transparent")):(e.classList.remove("solid"),e.classList.add("transparent"))}));var e=document.querySelector(".destinations__gallery"),r=document.querySelector(".packages__gallery");new Swiper(e,{direction:"horizontal",loop:!0,spaceBetween:84,slidesPerView:3,navigation:{nextEl:".btn-next",prevEl:".btn-prev"},breakpoints:{1251:{spaceBetween:87,slidesPerView:3},951:{spaceBetween:20,slidesPerView:2},0:{spaceBetween:0,slidesPerView:1}}}),new Swiper(r,{direction:"horizontal",loop:!0,spaceBetween:47,slidesPerView:3,navigation:{nextEl:".packages__btn-next",prevEl:".packages__btn-prev"},breakpoints:{1251:{spaceBetween:47,slidesPerView:3},951:{spaceBetween:20,slidesPerView:2},0:{spaceBetween:0,slidesPerView:1}}})}();
//# sourceMappingURL=index.8f72ef25.js.map