window.addEventListener('load',function () {
  new Glider(document.querySelector('.carusel_lista'),{
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carusel_indicadores',
    arrows: {
      prev: '.carusel_anterior',
      next: '.carusel_siguiente'
    },
    responsive: [
    {
      // screens greater than >= 800px
      breakpoint: 450,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    }
  ]
  });
});

/*
var glider = new Glider(document.getElementById('glider'));

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 2;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

  sliderAuto(glider, 3000);

*/
