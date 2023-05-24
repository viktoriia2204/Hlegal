
$(document).ready(function(){
  // anchor scroll
  $(".anchor").on("click", function (event) {
    event.preventDefault();
    const id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
  });

  // slider
  $('.slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

