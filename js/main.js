function preloader() {
	$(function(){
		setTimeout(function(){
			let p = $('.preloader');
			p.css('opacity', 0);

			setTimeout(function(){
				p.remove(),
				parseInt(p.css('--duration'))
			}, 5000);
		}, 5000);
		
	});
}
preloader();
$(function(){
	
	


	let item = $('.advantages__slider-item');
	let item1 = $('.advantages__slider-item-1');
	let item2 = $('.advantages__slider-item-2');
	let item3 = $('.advantages__slider-item-3');
	let item4 = $('.advantages__slider-item-4');
	let item5 = $('.advantages__slider-item-5');
	let info1 = $('.advantages__slider-info-1');
	let info2 = $('.advantages__slider-info-2');
	let info3 = $('.advantages__slider-info-3');
	let info4 = $('.advantages__slider-info-4');
	let info5 = $('.advantages__slider-info-5');
	let itemMedia = $('.advantages__media-slider-item');
	let itemMedia1 = $('.advantages__media-slider-item-1');
	let itemMedia2 = $('.advantages__media-slider-item-2');
	let itemMedia3 = $('.advantages__media-slider-item-3');
	let itemMedia4 = $('.advantages__media-slider-item-4');
	let itemMedia5 = $('.advantages__media-slider-item-5');
	let infoMedia1 = $('.advantages__media-slider-info-1');
	let infoMedia2 = $('.advantages__media-slider-info-2');
	let infoMedia3 = $('.advantages__media-slider-info-3');
	let infoMedia4 = $('.advantages__media-slider-info-4');
	let infoMedia5 = $('.advantages__media-slider-info-5');
	let weightInput = $('#weight-ind');
	let ageInput = $('#age-ind');
	let age = $('#age-ind').val();
	let weight = $('#weight-ind').val();
	info2.hide();
	info3.hide();
	info4.hide();
	info5.hide();

	$('.main__slider').slick({
		adaptiveHeight: true,
		fade: true,
		nextArrow: '<div class="main__slider-arrow-right"></div>',
		prevArrow: '<div class="main__slider-arrow-left"></div>'
	});

	item1.click(function(){
		item1.addClass('active-item-1');
		item2.removeClass('active-item-2');
		item3.removeClass('active-item-3');
		item4.removeClass('active-item-4');
		item5.removeClass('active-item-5');
		info1.fadeIn(800);
		info2.hide();
		info3.hide();
		info4.hide();
		info5.hide();
	});
	item2.click(function(){
		item2.addClass('active-item-2');
		item1.removeClass('active-item-1');
		item3.removeClass('active-item-3');
		item4.removeClass('active-item-4');
		item5.removeClass('active-item-5');
		info2.fadeIn(800);
		info1.hide();
		info3.hide();
		info4.hide();
		info5.hide();
	});
	item3.click(function(){
		item3.addClass('active-item-3');
		item1.removeClass('active-item-1');
		item2.removeClass('active-item-2');
		item4.removeClass('active-item-4');
		item5.removeClass('active-item-5');
		info3.fadeIn(800);
		info1.hide();
		info2.hide();
		info4.hide();
		info5.hide();
	});
	item4.click(function(){
		item4.addClass('active-item-4');
		item1.removeClass('active-item-1');
		item2.removeClass('active-item-2');
		item3.removeClass('active-item-3');
		item5.removeClass('active-item-5');
		info4.fadeIn(800);
		info1.hide();
		info2.hide();
		info3.hide();
		info5.hide();
	});
	item5.click(function(){
		item5.addClass('active-item-5');
		item1.removeClass('active-item-1');
		item2.removeClass('active-item-2');
		item3.removeClass('active-item-3');
		item4.removeClass('active-item-4');
		info5.fadeIn(800);
		info1.hide();
		info2.hide();
		info3.hide();
		info4.hide();
	});

	$('.comfort__slider').slick({
		slidesToShow: 1,
		variableWidth: true,
		arrows: false,
		asNavFor: '.comfort__slider-map'
	});

	$('.comfort__slider-map').slick({
		fade: true,
		asNavFor: '.comfort__slider',
		prevArrow: '<div class="comfort__slider-arrow-left"></div>',
		nextArrow: '<div class="comfort__slider-arrow-right"></div>'
	});

	$('.comfort__slider-media').slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.comfort__slider-number-media'
	});
	$('.comfort__slider-number-media').slick({
		slidesToShow: 1,
		fade: true,
		asNavFor: '.comfort__slider-media',
		prevArrow: '<div class="comfort__slider-arrow-left"></div>',
		nextArrow: '<div class="comfort__slider-arrow-right"></div>'
	});

	let mySwiper = new Swiper ('.swiper-container', {
	    freeMode: true,
	    slidesPerView: 1,
	    autoWidth: true,
	    scrollbar: {
	        	el: '.swiper-scrollbar',
	        	draggable: true,
	        	dragSize: 35,
	        	dragClass: 'trainers__slider-scrollbar',
	       },
	    breakpoints: {
           1199: {
            	slidesPerView: 2.2,
           },
           900: {
           		slidesPerView: 1.2,
           },
           767: {
           		slidesPerView: 1,
           },
	    }
	  })

	$('.feedback__slider').slick({
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		speed: 500,
		touchThreshold: 10,
		focusOnSelect: true,
		asNavFor: '.feedback__slider-numbers',
		responsive: [	
			{		   
			    breakpoint: 1199,
			    settings:  {
			    	slidesToShow: 3,
			    }
			},
			{		   
			    breakpoint: 767,
			    settings:  {
			    	slidesToShow: 1,
			    }
		    }
		]	
	});

	$('.feedback__slider-numbers').slick({
		fade: true,
		asNavFor: '.feedback__slider',
		prevArrow: '<div class="feedback__slider-arrow_left"></div>',
		nextArrow: '<div class="feedback__slider-arrow_right"></div>'
	});
	
	$(weightInput).val(weight);
	$(ageInput).val(age);

	$('.form__weight-plus').click(function(){
		$(weightInput).val(++weight);
	})
	$('.form__weight-minus').click(function(){
	    if (weight >= 1) {
	    	$(weightInput).val(--weight);
	    }
	});

	$('.form__age-plus').click(function(){
		$(ageInput).val(++age);
	});
	$('.form__age-minus').click(function(){
	    if (age >= 1) {
	    	$(ageInput).val(--age);
	    }
	});


	
	function random(){
		let arr = [$('.main__plus-text-1'), $('.main__plus-text-2'), $('.main__plus-text-3')];
		let rand = Math.floor(Math.random() * arr.length);
		let start = arr[rand];
		start.toggleClass('main__plus-text-active');
	}
	function remove(){
		$('.main__plus-text-1').removeClass('main__plus-text-active');
		$('.main__plus-text-2').removeClass('main__plus-text-active');
		$('.main__plus-text-3').removeClass('main__plus-text-active');
	}
	setInterval(random, 4000);
	setInterval(remove, 3998);
	
	itemMedia1.click(function(){
		infoMedia1.slideToggle(500);
		infoMedia2.slideUp(300);
		infoMedia3.slideUp(300);
		infoMedia4.slideUp(300);
		infoMedia5.slideUp(300);
	})	
	itemMedia2.click(function(){
		infoMedia2.slideToggle(500);
		infoMedia1.slideUp(300);
		infoMedia3.slideUp(300);
		infoMedia4.slideUp(300);
		infoMedia5.slideUp(300);
	})	
	itemMedia3.click(function(){
		infoMedia3.slideToggle(500);
		infoMedia1.slideUp(300);
		infoMedia2.slideUp(300);
		infoMedia4.slideUp(300);
		infoMedia5.slideUp(300);
	})	
	itemMedia4.click(function(){
		infoMedia4.slideToggle(500);
		infoMedia1.slideUp(300);
		infoMedia2.slideUp(300);
		infoMedia3.slideUp(300);
		infoMedia5.slideUp(300);
	})	
	itemMedia5.click(function(){
		infoMedia5.slideToggle(500);
		infoMedia1.slideUp(300);
		infoMedia2.slideUp(300);
		infoMedia3.slideUp(300);
		infoMedia4.slideUp(300);
	})
	$('.main__button, .action__button').click(function(){
		$('.modal').fadeIn(500)
	});
	$('.advantages__slider-button').click(function(){
		$('.modal-LM').fadeIn(500)
	});
	$('.modal__close').click(function(){
		$('.modal').fadeOut(500)
	});
	$('.modal-LM__close').click(function(){
		$('.modal-LM').fadeOut(500)
	});
	$('.thanks__close').click(function(){
		$('.thanks').hide(100)
	});
	jQuery(function($){
	   $(".modal__tel, .trial__form-input, .modal-LM__tel").mask("+7 (999) 999-99-99");
	});

	$('.modal__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/modal.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.modal').hide(300);
			$('.thanks').show(300);
		});
		return false;
	});

	$('.trial__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/modal.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.thanks').show(300);
		});
		return false;
	});

	$('.modal-LM__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/modal-LM.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.modal-LM').hide(300);
			$('.thanks').show(300);
		});
		return false;
	});

	$('.nutrition__form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/nutrition.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("form").trigger("reset");
			$('.thanks').show(300);
		});
		return false;
	});


	$('.main__plus-1').hover(function(){
		$('.main__plus-text-1').css('opacity', '1');
	},
	function(){
		$('.main__plus-text-1').css('opacity', '0');
	});
	$('.main__plus-2').hover(function(){
		$('.main__plus-text-2').css('opacity', '1');
	},
	function(){
		$('.main__plus-text-2').css('opacity', '0');
	});
	$('.main__plus-3').hover(function(){
		$('.main__plus-text-3').css('opacity', '1');
	},
	function(){
		$('.main__plus-text-3').css('opacity', '0');
	});
});