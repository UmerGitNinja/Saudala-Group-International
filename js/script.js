$(document).ready(function () {
  $("#owl-carousel").owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    items: 1,
  });

  questions();
  contactUs();
  openMenu();
  nav();
});

function questions() {
  $(".questions .title").on("click", function () {
    $(this).toggleClass("open");
    $(this).next(".text").slideToggle();
  });
}

function contactUs() {
  $(".contact-us-icon.main").click(function () {
    $(".contact-us-icon").toggleClass("is-active");
  });
}

function openMenu() {
  $(".btn-menu").click(function () {
    $("#header").toggleClass("menu-open");
  });
}

function nav() {
  $("#nav .item").on("click", function () {
    var $width = $(window).width();
    console.log($width);
    $("#header").removeClass("menu-open");
    var $this = $(this),
      $toSection = $this.attr("href"),
      $offset =
        $width < 768
          ? $($toSection).offset().top + 5
          : $($toSection).offset().top - 40;
    $("html, body").animate(
      {
        scrollTop: $offset,
      },
      1000
    );
  });
}

tailwind.config = {
  theme: {
      extend: {
          fontFamily: {
              inter: ['Inter', 'sans-serif'],
          },
          animation: {
              'infinite-scroll': 'infinite-scroll 25s linear infinite',
          },
          keyframes: {
              'infinite-scroll': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-100%)' },
              }
          }                    
      },
  },
};