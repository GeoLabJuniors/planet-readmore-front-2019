 $(document).ready(function() {
            $('.slider').bxSlider({
				auto: true,
				autoPlay: 5000,
				speed: 1000,
				tickerHover: true
				 
			});
        });



 $('.bookSlider').slick({
            autoplay: true,
	        autoplaySpeed: 3500,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true, 
            variableWidth: true,
            infinite: true
         
                             });
