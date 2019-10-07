$(document).ready(function() {
	new WOW().init();

	// slide thumb1
 	$('.c-slide03').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        asNavFor: '.c-slide03--sub'
	});
    $('.c-slide03--sub').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.c-slide03',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });


    // slide thumb2
    $('.big_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        asNavFor: '.thumb_img'
    });
    $('.thumb_img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.big_img',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
         responsive: [
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    }
		  ]
    });

    // 
    $('.multiple-items').slick({
	  infinite: true,
	  slidesToShow: 3,
	   dots: false,
	   arrows: true,
	  slidesToScroll: 3,
	   responsive: [
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});


    // back top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});


// menu
jQuery(document).ready(function($) {
	 $('.open-nav').click(function(event){
		$('#menu-mobile').toggleClass('active');
	});

	$('.btn_exit, .overlay_hide').click(function(){
		$('#menu-mobile').removeClass('active');
	});
});

function myFunction(x) {
	if (x.matches) {
		$(function() {
			$('#menu-mobile').find(function() {
				$('ul').removeClass('sub_menu_2');
			});
		});

		var ccc = $('#menu-mobile ul li').find('ul');
		if (ccc.length !== 0) {
			ccc.before('<button class="accordion"></button>');
			ccc.addClass('sub-menu');
		}
		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].onclick = function() {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
		                // panel.style.maxHeight = panel.scrollHeight + "200px";
		            }
		        }
		    };

		$('#menu-mobile').find('.accordion').click(function() {
			var next = $(this).next();
		  	next.slideToggle();
		});
	} else {
		$(function() {
			$('#menu-mobile').find('ul').addClass('sub_menu_2');
			
			$('#menu-mobile ul li').find('ul').removeClass('sub-menu');
		});
	}
};

var x = window.matchMedia("(max-width: 1199px)")
myFunction(x) 
x.addListener(myFunction) 





