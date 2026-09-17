$(document).ready(function () {
  // Menu Button

  $(".nav-menu").hide();

  $("#menu-button").click(function () {
    $(".nav-menu").toggle();

    $(".navbar-mobile").toggleClass("navbar-mobile-active");

    $(this).text($(this).text() === "MENU" ? "Close" : "MENU");
  });

  // Tab
  $(".tab-header li a").click(function (e) {
    e.preventDefault();

    let target = $(this).attr("href");

    $(".tab-header li a").removeClass("active");
    $(".tab").removeClass("active");

    $(this).addClass("active");
    $(target).addClass("active");
  });

  // Tab Desktop
  $(".tab-header-desktop li a").click(function (e) {
    e.preventDefault();

    var target = $(this).attr("href");

    $(".tab-header-desktop li a").removeClass("active");
    $(".tab").removeClass("active");

    $(this).addClass("active");
    $(target).addClass("active");
  });

  // Slick
  $(".slider-container").slick({
    dots: true,
    easing: "swing",
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (slider, i) {
      return '<span class="custom-dot"></span>';
    },
  });

  // Slick Desktop
  $(".slider-container-desktop").slick({
    dots: true,
    easing: "swing",
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    customPaging: function (slider, i) {
      return '<span class="custom-dot-desktop"></span>';
    },
    appendArrows: $('.slider-pagination-desktop'),
    appendDots: $('.slider-pagination-desktop')
  });

  $('.slider-pagination-desktop .slick-dots').addClass('slick-dots-desktop')
  $('.slider-pagination-desktop .slick-next').insertAfter('.slick-dots-desktop');
  $('.slick-next').text('');
  $('.slick-prev').text('');
  
  $('.slider-pagination-desktop .slick-next').html('<img src="images/arrow_right.png" alt="arrow_right" height="11">');
  $('.slider-pagination-desktop .slick-prev').html('<img src="images/arrow_left.png" alt="arrow_left" height="11">');

});
