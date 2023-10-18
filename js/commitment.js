$(function() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /* 탭 메뉴 */
  let $tabMenu = $('.comm_tabMenu nav ul')
  let $tabList = $('.comm_tabMenu nav ul li')

  $tabList.eq(0).on('click', function() {
    $tabList.removeClass('add_tab')
    $tabList.eq(0).addClass('add_tab')
    $(".first_tab").css({
      display : "block"
    }).animate({
      opacity : '1'
    })
    $(".secound_tab").css({
      display : "none"
    }).animate({
      opacity : '0'
    })
    $(".third_tab").css({
      display : "none"
    }).animate({
      opacity : '0'
    })
  })
  $tabList.eq(1).on('click', function() {
    $tabList.removeClass('add_tab')
    $tabList.eq(1).addClass('add_tab')
    $(".secound_tab").css({
      display : "block"
    }).animate({
      opacity : '1'
    })
    $(".first_tab").css({
      display : "none"
    }).animate({
      opacity : '0'
    })
    $(".third_tab").css({
      display : "none"
    }).animate({
      opacity : '0'
    })
  })
  $tabList.eq(2).on('click', function() {
    $tabList.removeClass('add_tab')
    $tabList.eq(2).addClass('add_tab')
    $(".third_tab").css({
      display : "block"
    }).animate({
      opacity : '1'
    })
    $(".first_tab").css({
      display : "none"
    }).animate({
      opacity : '0'
    })
    $(".secound_tab").css({
      display : "none"
    }).animate({
      opacity : '0'
    })
  })

  /* 페럴렉스 효과 */
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
  /* 스크롤 효과 */
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".main_item01", {
    scrollTrigger: ".main_item01", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".main_item02", {
    scrollTrigger: ".main_item02", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".main_item03", {
    scrollTrigger: ".main_item03", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".main_item04", {
    scrollTrigger: ".main_item04", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".main_item05", {
    scrollTrigger: ".main_item05", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".main_item06", {
    scrollTrigger: ".main_item06", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".main_item07", {
    scrollTrigger: ".main_item07", y: 175, duration: 1, opacity: 0,
  })
  gsap.from("#first_para", {
    scrollTrigger: "#first_para", y: 175, duration: 1, opacity: 0,
  })
  gsap.from("#secound_para", {
    scrollTrigger: "#secound_para", y: 175, duration: 1, opacity: 0,
  })
  gsap.from("#third_para", {
    scrollTrigger: "#third_para", y: 175, duration: 1, opacity: 0,
  })
  gsap.from("#fours_para", {
    scrollTrigger: "#fours_para", y: 175, duration: 1, opacity: 0,
  })
  gsap.from("#five_para", {
    scrollTrigger: "#five_para", y: 175, duration: 1, opacity: 0,
  })
  gsap.from("#six_para", {
    scrollTrigger: "#six_para", y: 175, duration: 1, opacity: 0,
  })
  gsap.from("#seven_para", {
    scrollTrigger: "#seven_para", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".title_text", {
    scrollTrigger: ".title_text", x: -125, duration: 1, opacity: 0,
  })
})