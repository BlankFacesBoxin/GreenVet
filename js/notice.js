$(function() {
  $List = $('.tabMenu nav ul li')
  $List.eq(0).on('click', function() {
    $List.removeClass('add_tab')
    $List.eq(0).addClass('add_tab')
  })
  $List.eq(1).on('click', function() {
    $List.removeClass('add_tab')
    $List.eq(1).addClass('add_tab')
  })
  $List.eq(2).on('click', function() {
    $List.removeClass('add_tab')
    $List.eq(2).addClass('add_tab')
  })
  $List.eq(3).on('click', function() {
    $List.removeClass('add_tab')
    $List.eq(3).addClass('add_tab')
  })
})