$(document).ready(function(){
	$('.main__flow .element .elem>.media').on("click" ,function(){
		$('.info__popup').fadeIn(300);
		$('body,html').css("overflow-y" ,"hidden");
	});
	$('.info__popup .popup>.close').on('click' ,function(e){
		e.preventDefault();
		$('.info__popup').fadeOut(300);
		$('body,html').css("overflow-y", "initial");
	});

	$('.main__flow .element .elem .desc>a').on('click' ,function(e){
		e.preventDefault();
		$(this).closest(".elem").addClass("picked");
	});

	$('.dropdown>a').on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass("opened")) {
			$(this).removeClass('opened');
			$(this).closest('.dropdown').find("ul").fadeOut(300);
		} else {
			$(this).addClass("opened");
			$(this).closest('.dropdown').find("ul").fadeIn(300);
		}
	});
	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if(!$target.closest('.dropdown').length) {
	  	$('.dropdown>a').removeClass('opened');
	  	$('.dropdown ul').fadeOut(300);
	  }        
	});
});