$(function () {
  $(window).on("load", function () {
    $(".page-loader").delay("500").fadeOut(1000);
  });
  $(document).ready(function () {
    $(document).on("click", ".icon-menu", function () {
      $(".responsive-sidebar-menu").addClass("active");
    });
    $(document).on("click", ".responsive-sidebar-menu .overlay", function () {
      $(".responsive-sidebar-menu").removeClass("active");
    });
    $(document).on("click", ".menu li .scroll-to", function () {
      $(".responsive-sidebar-menu").removeClass("active");
    });
    $(document).on("click", ".color-boxed a", function () {
      $(".color-boxed a").removeClass("clr-active");
      $(this).addClass("clr-active");
    });
    $(document).on("click", ".global-color .setting-toggle", function () {
      $(".global-color").addClass("active");
    });
    $(document).on(
      "click",
      ".global-color .inner .overlay, .global-color .inner .global-color-option .close-settings",
      function () {
        $(".global-color").removeClass("active");
      }
    );
  });
  $(window)
    .scroll(function () {
      var windscroll = $(window).scrollTop();
      if (windscroll >= 0) {
        $(".page-section").each(function (i) {
          if ($(this).position().top <= windscroll - -1) {
            $(".scroll-nav .scroll-to.active").removeClass("active");
            $(".scroll-nav .scroll-to").eq(i).addClass("active");
            $(".scroll-nav-responsive a.active").removeClass("active");
            $(".scroll-nav-responsive a").eq(i).addClass("active");
          }
        });
      } else {
        $(".scroll-nav .scroll-to.active").removeClass("active");
        $(".scroll-nav .scroll-to:first").addClass("active");
        $(".scroll-nav-responsive a.active").removeClass("active");
        $(".scroll-nav-responsive a:first").addClass("active");
      }
      if (windscroll >= 0) {
        $(".scroll-to-page").each(function (i) {
          var wscrolldecress = windscroll + 1;
          if ($(this).position().top <= wscrolldecress - 0) {
            $(".scroll-nav .scroll-to.active").removeClass("active");
            $(".scroll-nav .scroll-to").eq(i).addClass("active");
            $(".scroll-nav-responsive a.active").removeClass("active");
            $(".scroll-nav-responsive a").eq(i).addClass("active");
          }
        });
      } else {
        $(".scroll-nav .scroll-to.active").removeClass("active");
        $(".scroll-nav .scroll-to:first").addClass("active");
        $(".scroll-nav-responsive a.active").removeClass("active");
        $(".scroll-nav-responsive a:first").addClass("active");
      }
    })
    .scroll();
  if ($(".testimonial-slider").length) {
    var testimonial = $(".testimonial-slider").owlCarousel({
      items: 1,
      margin: 30,
      stagePadding: 0,
      smartSpeed: 450,
      autoHeight: true,
      loop: false,
      nav: false,
      dots: false,
      onInitialized: counter,
      onTranslated: counter,
    });
    $(".testimonial-nav .next").on("click", function () {
      testimonial.trigger("next.owl.carousel");
    });
    $(".testimonial-nav .prev").on("click", function () {
      testimonial.trigger("prev.owl.carousel", [300]);
    });
    function counter(event) {
      var element = event.target;
      var items = event.item.count;
      var item = event.item.index + 1;
      if (item > items) {
        item = item - items;
      }
      $("#testimonial-slide-count").html(
        "<span class='left'>" + item + "</span> / " + items
      );
    }
  }
  window.addEventListener("scroll", { scroll_animations });
});
function scroll_animations() {
  var defaults = {
    duration: 1.2,
    ease: "power4.out",
    animation: "fade_from_bottom",
    once: !1,
  };
  gsap.utils.toArray(".scroll-animation").forEach(function (box) {
    var gsap_obj = {};
    var settings = {
      duration: box.dataset.animationDuration || defaults.duration,
    };
    var animations = {
      fade_from_bottom: { y: 180, opacity: 0 },
      fade_from_top: { y: -180, opacity: 0 },
      fade_from_left: { x: -180, opacity: 0 },
      fade_from_right: { x: 180, opacity: 0 },
      fade_in: { opacity: 0 },
      rotate_up: { y: 180, rotation: 10, opacity: 0 },
    };
    var scroll_trigger = {
      scrollTrigger: {
        trigger: box,
        once: defaults.once,
        start: "top bottom+=20%",
        toggleActions: "play none none reverse",
        markers: !1,
      },
    };
    jQuery.extend(gsap_obj, settings);
    jQuery.extend(
      gsap_obj,
      animations[box.dataset.animation || defaults.animation]
    );
    jQuery.extend(gsap_obj, scroll_trigger);
    gsap.from(box, gsap_obj);
  });
}
scroll_animations();
