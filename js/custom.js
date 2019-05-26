/*========== NAVBAR TRANSPARENT TO SOLID ==========*/


$(document).ready(function() { 
        $(window).scroll(function() {
          if($(this).scrollTop() > 800) { 
              $('.navbar').addClass('solid'); 
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});


/*========== CLOSE MOBILE NAV WHEN CLICKED ==========*/

$(document).ready(function() {
  $(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened == true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  })
})

/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function() {
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate( {
          scrollTop: $(hash).offset().top
        }, 800, function()  {
          window.location.hash = hash;
        });
        }
      });
    });


/*========== MEET THE TEAM ==========*/

$(document).ready(function(){
  $("#history-slider").owlCarousel({
    items:3,
    autoplay:true,
    smartSpeed:1500,
    loop:true,
    autoplayHoverPause:true,
    responsive : {
      0 : {
        items: 1
      },
      576 : {
        items: 2
        },
        768 : {
          items : 3
        }
      }
    });
  }
  );
  
  /*========== QUOTES ==========*/

$(document).ready(function(){
  $("#quote-slider").owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:1700,
    loop:true,
    autoplayHoverPause:true,
    responsive : {
      0 : {
        items: 1
      },
      766 : {
        items: 2
        },
      }
    });
  }
  );

