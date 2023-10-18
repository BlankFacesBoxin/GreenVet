$(function() {
  if ($(window).width() >= 768) {
    let $headerClick = $('.header_gnb > ul > li > a')

    $headerClick.on('mouseover', function() {
      $('header').addClass('headerTop')
      $('.header_gnb li ul').css('display','block')
      $('.header_logo img').attr({
        src: 'img/main/GREENVETHeaderScroll.png'
      })
    })
    $('header').on('mouseleave', function() {
      $('header').removeClass('headerTop')
      $('.header_gnb li ul').css('display','none')
      $('.header_logo img').attr({
        src: 'img/main/GREENVET.png'
      })
    })
      //header 스크롤
    /* $(window).on('scroll', function() {
      let i = Math.floor($(this).scrollTop())
      let bottom = $(document).height() - $(window).height() - $(window).scrollTop();
  
      //console.log(i)
      //console.log(bottom)
  
      if (i = bottom) {
        $('.header').slideUp()
      } else {
        $('.header').slideDown()
      }
    }) */
    $(window).on('scroll', function() {
      let i = Math.floor($(this).scrollTop())
      if (i == 0) {
        $('header').removeClass('header_scroll')
      } else {
  
      }
    })
    $(window).bind('wheel', function(event){
      if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
          // scroll up
          //console.log("스크롤 위로");
          $('header').slideDown();
          $('header').addClass('header_scroll')
      }
      else {
          // scroll down
          //console.log("스크롤 아래로");
          $('header').slideUp();
      }
    });
    
  }
  else {

    /* 스크롤 시 헤더 */
    $(window).on('scroll', function() {
      let i = Math.floor($(this).scrollTop())
      if (i == 0) {
        $('.mobile_headerTop').removeClass('header_scroll')
      } else {
        
      }
    })
    $(window).bind('wheel', function(event){
      if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
          // scroll up
          //console.log("스크롤 위로");
          $('.mobile_headerTop').slideDown();
          $('.mobile_headerTop').addClass('header_scroll')
      }
      else {
          // scroll down
          //console.log("스크롤 아래로");
          $('.mobile_headerTop').slideUp();
      }
    });

    /* 모바일 메뉴 버튼 */
    
    $mobileBtn = $('.header_mobile_menu')
    $mobileBtn.on('click', function() {
      $('.mobile_headerTop').addClass('header_scroll')
      $('.header_gnb').toggleClass('onClass')
      $('.header_mobile_menu').toggleClass('active')
    })
  }

})