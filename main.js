$("document").ready(function(e){
	$("div#color-images > div").not($("div#color-images > div:eq(0)")).css("display", "none");
	
	$("div#color-picker > ul > li").click(function(e){
		var clicked = $(this);
		if (!clicked.hasClass('active')){
			var divclass = clicked.attr('class');
			$("div#color-picker > ul > li").removeClass("active");
			
			$("div#color-images > div").slideUp('slow');
			$("div#color-images > div."+divclass+"").slideDown('slow');
			clicked.addClass("active");


		}
	});

	$("ul.navbar-nav > li").click(function(e){
		$("ul.navbar-nav > li").removeClass('active');
		$(this).addClass('active');
		$("div#title").fadeTo('fast', 1.0);
		$("div#ourstory").fadeTo('fast', 1.0);
		$("div#customer").fadeTo('fast', 1.0);
	});
	$('a.navbar-brand').click(function(e){
		$("ul.navbar-nav > li").removeClass('active');
		$("ul.navbar-nav > li").eq(0).addClass('active');
	});

	$('html').on("mousewheel", function() {
        var val = $(document).scrollTop();
        var x = 200;
        if (val < $("div.home").position().top - x){
        	$("ul.navbar-nav > li").removeClass("active");
        	$("ul.navbar-nav > li").eq(0).addClass("active");
        	
        }
        else if (val >= $("div.home").position().top - x && val < $("div#buy").position().top - x){
        	$("ul.navbar-nav > li").removeClass("active");
        	$("ul.navbar-nav > li").eq(1).addClass("active");
        	$("div#title").fadeTo('fast', 1.0);
        }
        else if (val >= $("div#buy").position().top - x && val < $("div#ourstory").position().top - x){
        	$("ul.navbar-nav > li").removeClass("active");
        	$("ul.navbar-nav > li").eq(2).addClass("active");
        	$("div#title").fadeTo('fast', 1.0);
        }
        else if(val >= $("div#ourstory").position().top - x && val < $("div#customer").position().top - x) {
        	$("ul.navbar-nav > li").removeClass("active");
        	$("ul.navbar-nav > li").eq(3).addClass("active");
        	$("div#ourstory").fadeTo('fast', 1.0);
        }
        else if(val >= $("div#customer").position().top - x) {
        	$("ul.navbar-nav > li").removeClass("active");
        	$("ul.navbar-nav > li").eq(4).addClass("active");
        	$("div#customer").fadeTo('fast', 1.0);
        }
    });

});

