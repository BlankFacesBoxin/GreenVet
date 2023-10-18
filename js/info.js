$(function() {
  gsap.utils.toArray(".parallex_img").forEach(item => {
    gsap.to(item, {
      backgroundPositionY: '50%',
        ease: "none",
        scrollTrigger: {
            trigger: item,
            start: "-100px bottom",
            end: "bottom 100px",
            scrub: 1
        }
    });
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".info_firstArea", {
    scrollTrigger: ".info_firstArea", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".info_secound", {
    scrollTrigger: ".info_secound", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".info_third", {
    scrollTrigger: ".info_third", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".info_table", {
    scrollTrigger: ".info_table", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".info_fours", {
    scrollTrigger: ".info_fours", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".info_five", {
    scrollTrigger: ".info_five", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".info_six", {
    scrollTrigger: ".info_six", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".info_wrap .title_text", {
    scrollTrigger: ".info_wrap .title_text h2", x: -125, duration: 1, opacity: 0,
  })
})
