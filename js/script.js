

$(window).on("load", function() {   // WAIT UNTIL ALL CONTENT IS LOADED
   
    var pageTitle = document.title;

    // LINE-HEIGHT
    
    function lineHeight() {
    
        $(".text-mask").each( function() {
            var lineHeight = $(this).children(".text-animate").css("line-height");
            $(this).css("height",lineHeight);
        });
        
    }
    
    lineHeight();
           
    
    // HERO TITLE CAROUSEL
    var IEversion = detectIE();
    
    
    if (IEversion !== false) {
    } else {
        
        var carouselFirstReset = $("#carousel-first").html();

        $( "<li class='hero-title-carousel-reveal cubic-easeinout--fast'>" + $("#carousel-first li:first").html() + "</li>" ).insertAfter( "#carousel-first li:last" );
        
        
        var carouselCount = $("#carousel-first > li").length;

        var n = 1;

        (function titleCarousel (i) {

          setTimeout(function () {

            if ( i == 1 ) {

                $("#carousel-first li:nth-last-child(2)").addClass("hero-title-carousel-hide");

                $("#carousel-first li:last").removeClass("hero-title-carousel-reveal");

            } else {

                $("#carousel-first li:nth-of-type(" + n + ")").addClass("hero-title-carousel-hide");
                $("#carousel-first li:nth-of-type(" + (n+1) + ")").removeClass("hero-title-carousel-reveal");
            }


            if (--i) {          // If i > 0, keep going
              titleCarousel(i);       // Call the loop again, and pass it the current value of i
              n++;  
            } else {

                n = 1;
                $("#carousel-first").html( carouselFirstReset );
                $( "<li class='hero-title-carousel-reveal cubic-easeinout--fast'>" + $("#carousel-first li:first").html() + "</li>" ).insertAfter( "#carousel-first li:last" );
                i = carouselCount;
                titleCarousel(i); 
            }
          }, 2750);
        })(carouselCount);    
        
    

    }

    
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}    
    
});


(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));


