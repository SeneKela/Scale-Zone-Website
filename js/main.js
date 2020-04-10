 AOS.init({
  duration: 800,
  easing: 'slide-up',
  once: true
 });
(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() {
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();


	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

  $('.navbar .dropdown > a').click(function(){
    location.href = this.href;
  });

	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
  });


	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    dragTouch: false,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

  $('.nonloop-block-11').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      autoplay: true,
      stagePadding: 20,
      margin:50,
      nav: false,
      dots: true,
      smartSpeed: 1000,
      navText: ['<span class="ion-chevron-left">', '<span class="ion-chevron-right">'],
      responsive:{
        600:{
          stagePadding: 20,
          items:1
        },
        800:{
          stagePadding: 20,
          items:2
        },
        1000:{
          items:2
        }
      }
    });

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});

  var siteStellar = function () {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  };
  siteStellar();

	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});

				}, 100);

			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

  var slideImage = function() {
    $(".slide-image").each(function () {
      var bg = $(this).data("bg");
      var pos = $(this).data("kenburn-start");

      $(this).css({
        "background-image": "url(" + bg + ")",
        "transform-origin": pos
      });
    });
  };
  slideImage();

  var formatThousandsNoRounding = function(n, dp){
    var e = '', s = e+n, l = s.length, b = n < 0 ? 1 : 0,
        i = s.lastIndexOf(','), j = i == -1 ? l : i,
        r = e, d = s.substr(j+1, dp);
    while ( (j-=3) > b ) { r = '.' + s.substr(j, 3) + r; }
    return s.substr(0, j + 3) + r +
      (dp ? ',' + d + ( d.length < dp ?
          ('00000').substr(0, dp - d.length):e):e);
  };
formatThousandsNoRounding();

  var hasRun = false;

  inView('#countUp').on('enter', function() {
      if (hasRun == false) {
          $('.number').each(function() {
              var $this = $(this),
                  countTo = $this.attr('data-count');

              $({ countNum: $this.text()}).animate({
                  countNum: countTo
              },
              {
                  duration: 2000,
                  easing:'linear',
                  step: function() {
                      $this.text(formatThousandsNoRounding(Math.floor(this.countNum)));
                  },
                  complete: function() {
                      $this.text(formatThousandsNoRounding(this.countNum));
                  }
              });
          });
          hasRun = true;
      }
  });
inView();


function copyToClipboard(element) {
var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).text()).select();
document.execCommand("copy");
$temp.remove();
}
copyToClipboard();

})(jQuery);
