$(function () {
  setInterval(function () {
    $(".scroll")
      .animate(
        {
          bottom: "10em",
        },
        600
      )
      .animate(
        {
          bottom: "8em",
        },
        600
      );
  });
  
  $(".box").each(function () {
    // 개별적으로 Wheel 이벤트 적용 mousewheel(IE/chrome/opera) DOMMouseScroll(FF)
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;
      /* IE */
      if (!event) event = window.event;
      //휠에 대한 정보 얻기 파이어폭스 외 IE/Chrome/Opera = wheelDelta
      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        //평균 50~120 사이로 요소의 인식높이에 따라 다름(한 화면(height100%)기준일떄는 120
        if (window.opera) delta = -delta;
        //휠에 대한 정보 얻기 Mozilla FF = detail
      } else if (event.detail) delta = -event.detail / 3;
      var moveTop = null;
      // 마우스휠을 위에서 아래로
      if (delta < 0) {
        if ($(this).next() != undefined) {
          moveTop = $(this).next().offset().top;
        }
        // 마우스휠을 아래에서 위로
      } else {
        if ($(this).prev() != undefined) {
          moveTop = $(this).prev().offset().top;
        }
      }
      // 화면 이동 0.8초(800)
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: moveTop + "px",
          },
          {
            duration: 800,
            complete: function () {},
          }
        );
    });
  });


  //business 이미지들
  $business = $('.businessImg_area')
  $businessArea = $('.businessImg > div')

  $business.on('mouseover', function() {
    let i = $(this).index();
    console.log(i)

    $businessArea.removeClass('mouseOn')
    $businessArea.eq(i).addClass('mouseOn')
  })

  /* $main1 = $('#index2')
  let main1Top = $('#index2').height()

  $(window).scroll(function() {
    let i = Math.floor($(this).scrollTop())
    console.log(i)
    //index2 694
    //index3 1764
    //index4 2455
    //index5 3525
    //index6 4216
    //마지막 5620
  }) */
  $(window).on('scroll', function() {
    
    let indexTop1 = $('#index1').offset().top;
    let indexTop2 = $('#index2').offset().top;
    let indexTop3 = $('#index3').offset().top;
    let indexTop4 = $('#index4').offset().top;
    let indexTop5 = $('#index5').offset().top;
    let indexTop6 = $('#index6').offset().top;
    let indexHeight = $(document).scrollTop();

    $span = $('.sideMenu li span')

    if (indexTop2 == indexHeight) {
      $sideMenu.hover(function() {
        $sideMenu.eq(1).removeClass('active2')
      })
  
      $span.removeClass('scrollSide')
      $span.eq(1).addClass('scrollSide')
      $('.sideMenu li').eq(1).removeClass('active2')
      $('.sideMenu li:first-child').removeClass('active')
      $('.sideMenu li:first-child').addClass('active2')
      $('.scrollSide').html('<i>ABOUT</i>')
    } else {
      $span.eq(1).removeClass('scrollSide')
      $('.sideMenu li').eq(1).addClass('active2')
      $('.sideMenu li:first-child').addClass('active')
      $('.sideMenu li:first-child').removeClass('active2')
      $('.sideMenu li:nth-child(2) span').html('<strong>ABOUT</strong>')
    }
  })
  /* $(window).on('scroll', function() {
    let i = Math.floor($(this).scrollTop())
    console.log(i)
    if ( i = 5620) {
      $sideMenu.css('opacity','0')
    } else {
      $sideMenu.css('opacity','1')
    }
  }) */
  
  /* GSAP */

  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".target1-1", {
    scrollTrigger: ".target1-1", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".target1-2", {
    scrollTrigger: ".target1-2", y: 175, duration: 1.5, opacity: 0,
  })
  gsap.from(".target2-1", {
    scrollTrigger: ".target2-1", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".target2-2", {
    scrollTrigger: ".target2-2", y: 175, duration: 1.5, opacity: 0,
  })
  gsap.from(".target3-1", {
    scrollTrigger: ".target3-1", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".target3-2", {
    scrollTrigger: ".target3-2", y: 175, duration: 1.5, opacity: 0,
  })
  gsap.from(".target4-1", {
    scrollTrigger: ".target4-1", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".target4-2", {
    scrollTrigger: ".target4-2", y: 175, duration: 1.5, opacity: 0,
  })
  gsap.from(".target5-1", {
    scrollTrigger: ".target5-1", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".target5-2", {
    scrollTrigger: ".target5-2", y: 175, duration: 1.5, opacity: 0,
  })
  gsap.from(".target6-1", {
    scrollTrigger: ".target6-1", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".target6-2", {
    scrollTrigger: ".target6-2", y: 175, duration: 1.5, opacity: 0,
  })
  gsap.from(".target7-1", {
    scrollTrigger: ".target7-1", y: 175, duration: 1, opacity: 0,
  })
  gsap.from(".target7-2", {
    scrollTrigger: ".target7-2", y: 175, duration: 1.5, opacity: 0,
  })

  $(".index7_table > div").eq(0).on('click', function() {
    $(".index7_table > div").removeClass("tableOn")
    $(this).addClass('tableOn')
  })
  $(".index7_table > div").eq(1).on('click', function() {
    $(".index7_table > div").removeClass("tableOn")
    $(this).addClass('tableOn')
  })

});
