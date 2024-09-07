$(document).ready(function(){
	var $grid = $('#grid');
	var fT = 300;
	var hDelay = fT;
	if(window.location.href == 'http://dev.davidrudnick.org/'){
		$('#logo').fadeTo(0,0).fadeTo(fT,1);
		hDelay+=fT*2;
		$('#header-links .header-item').each(function(){
			$(this).fadeTo(0,0);
			$(this).delay(hDelay).fadeTo(fT,1);
			hDelay+=fT*2;
		});
	}
	$grid.fadeTo(0,0).delay(hDelay).fadeTo(fT,1);
	

	$grid.masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
		  	percentPosition: true,
		  	gutter: '.grid-gutter-sizer',
		});
	$grid.imagesLoaded().progress( function(instance, image) {
		// $(".grid-item-image").css('visibility', "visible")

		if($(image.img)[0].className == "loader"){
			// $(image.img)[0].style.display = "none";
			// $(image.img).prev().css("display", "none");
		} else {
			$(image.img).siblings().find(".loader").prevObject[0].style.visibility = "hidden";
			$(image.img)[0].style.visibility = "visible";
			$(image.img)[0].parentElement.style['pointer-events'] = 'all';

		}
		$grid.masonry('layout');
	});
	var duration = 500;

	$(".header-links .not-index").click(function(event){
		event.preventDefault();
		var that = $(this);
		$(".sidebar-parent").each(function(event){
			if($(this).is(':visible') && $(this)[0].id !== $(that.data("id"))[0].id){
				$(this).hide();
			}
		})
		$($(this).data("id")).fadeToggle(duration);
	})
	$(".grid-button-small").click(function(event){
		event.preventDefault();
		if(window.innerWidth > 600){
			$("#content").css("padding-right", "10vw");
			$(".grid-sizer").css("width", "6.3333333333%");
			$(".grid-gutter-sizer").css("width", "0.5666666667vw");
			$(".grid-item").css("width", "6.3333333333%");
			$(".grid-item-large").css("width", "12.666666667%");
			$(".grid-item-large .overlay-text-title").css("font-size", "1.5vw");
			$grid.masonry('layout');
			$(this).hide();
			$(".grid-button-big").show();
		} else {
			console.log('test');
			$("#content").css("padding-right", "0");
			$(".grid-sizer").css("width", "19%");
			$(".grid-gutter-sizer").css("width", "1.7vw");
			$(".grid-item").css("width", "19%");
			$(".grid-item-large").css("width", "38%");
			$(".grid-item-large .overlay-text-title").css("font-size", "3vw");
			$grid.masonry('layout');
			$(this).hide();
			$(".grid-button-big").show();
		}
	
	})
	$(".grid-button-big").click(function(event){
		event.preventDefault();
		if(window.innerWidth > 600){
			$("#content").css("padding-right", "0");
			$(".grid-sizer").css("width", "19%");
			$(".grid-gutter-sizer").css("width", "1.7vw");
			$(".grid-item").css("width", "19%");
			$(".grid-item-large").css("width", "38%");
			$(".grid-item-large .overlay-text-title").css("font-size", "3vw");
			$grid.masonry('layout');
			$(this).hide();
			$(".grid-button-small").show();
		} else {
			$("#content").css("padding-right", "0");
			$(".grid-sizer").css("width", "85%");
			$(".grid-gutter-sizer").css("width", "1.7vw");
			$(".grid-item").css("width", "85%");
			$(".grid-item-large").css("width", "85%");
			$(".grid-item-large .overlay-text-title").css("font-size", "3vw");
			$grid.masonry('layout');
			$(this).hide();
			$(".grid-button-small").show();
		}

	})
})