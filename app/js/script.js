$(function(){
  let headerBtn = $('.menu-btn'),
       xBtn = $('.x-btn'),
       menu = $('.header-menu');


  headerBtn.on('click', function(){
      menu.addClass('header-menu_active')
  })
  
  xBtn.on('click', function(){
      menu.removeClass('header-menu_active')
  })
})

  $('.space-img').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '150px',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  });
  AOS.init();



