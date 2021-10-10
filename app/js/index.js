 $(document).scroll(function() {
   if ($(document).scrollTop() > $(".block-1").height() / 2)
    $("header").addClass("fixed");
  else
    $("header").removeClass("fixed");
});

$(".up-btn").on("click", function(){
  $("html, body").animate({
    scrollTop:0
  },'slow');
});

$(".menu-btn").on("click", function () {
  $("#hidden-menu").animate({
    "right": 0
  },500);
});

$("#hidden-menu span").on("click", function () {
  $("#hidden-menu").animate({
    "right": -350
  },500);
});

$(document).ready(function() {
  $("#slider").slick({
    dots: false,
    prevArrow: '<div class="arrow-prev"><i class="fas fa-arrow-left"></i></div>',
    nextArrow: '<div class="arrow-prev"><i class="fas fa-arrow-right"></i></div>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2
  });
});
