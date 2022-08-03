var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $( function() {
    $( "#tabs" ).tabs();
  } );


  
  const swiper3 = new Swiper('.region-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,

    breakpoints: {  
      '1024': {
        slidesPerView: 2,
        spaceBetween: 40,}
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled:false,
    },
  });