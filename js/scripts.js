(function ($) {

$('.blog__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:"<i class='fa fa-chevron-left slick-prev' aria-hidden='true'></i>",
  nextArrow:"<i class='fa fa-chevron-right slick-next' aria-hidden='true'></i>",
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 736,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.partners__slider').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    customPaging: function(slider, i) {
      // this example would render "tabs" with titles
      return '<span class="dot"></span>';
    },

});


})(jQuery);

