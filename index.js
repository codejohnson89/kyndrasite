console.log('site starting up');

$('.slick').slick({

    // normal options...
        slidesToShow: 1,
          infinite: true,
          fade: true,
          speed: 2000,
          autoplay: true,
          arrows: false,
  
    // the magic
    responsive: [{
  
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
          fade: true,
          speed: 2000,
          autoplay: true
        }
  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });