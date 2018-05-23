(function($){
	$(document).ready(function() {

		function generateID(){
			// Math.random should be unique because of its seeding algorithm.
			// Convert it to base 36 (numbers + letters), and grab the first 9 characters
			// after the decimal.
			return '_' + Math.random().toString(36).substr(2, 9);
		};			

		//ширина скроллбара
		var scrollMeasure = $('<div>').addClass('scroll__measure').get(0);
		$('body').append(scrollMeasure);
		var scrollbarWidth = scrollMeasure.offsetWidth - scrollMeasure.clientWidth;
		$(':root').css('--scrollbar-width', scrollbarWidth+'px');
		if( scrollbarWidth > 0 ){
			$('.scroll--cutt').css({
				marginRight: -scrollbarWidth
			});		
		}
		
		//bg
		$('img[data-bg=true]').each(function(){
			var src = $(this).attr('src');
			var parent = $(this).parent();
			if( $(parent).is('picture') ){
				src = $(parent).find('img').get(0).currentSrc || $(parent).find('img').get(0).src;
				parent =  $(parent).parent();
			}
			if( $(this).data('combine') ){
				$(parent)
				.css({
					'background': 'url('+src+'), '+ $(parent).css('background')
				})
				.addClass('bg--combined');								
			}else{
				$(parent).css({
					'background-image': `url(${src})`
				});				
			}
			$(this).hide();
		});

		function disablePageScroll(){
			$('body').css({
				paddingRight: scrollbarWidth + 'px',
				overflow: 'hidden'
			});
		}

		function enablePageScroll(){
			$('body').css({
				paddingRight: 0,
				overflow: 'auto'
			});
		}

		function toggleModal(id){
			$(id).hasClass('modal--visible') ? enablePageScroll() : disablePageScroll();
			$(id).toggleClass('modal--visible');
		}

		$('[data-toggle="modal"]').click(function(evt){
			evt.preventDefault();
			toggleModal( $(this).data('target') );
		});

		//slider
		$('.slider--products').each(function(){
			var mySwiper = new Swiper(this, {
				slidesPerView: 4,
				spaceBetween: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			});
		});

		//PhotoSwipe
		var pswpElement = document.querySelectorAll('.pswp')[0];

		$('.slider--products').each(function(){
			var config = {
				uid: generateID(),
				items: [],
				options: {
					bgOpacity: 0.8,
					closeOnScroll: false,
				}
			}
			var gallery = this;
			$(gallery).find('.tile--product .tile__pic').each(function(index, pic){
				var $img = $(pic).find('img');
				var size = $img.data('size').split('x');
				var item = {
					src: $img.attr('src'),
					w: size[0],
					h: size[1],
					title: $img.attr('alt')
				}
				config.items.push(item);
				$(pic).click(function(){
					var config = $(gallery).data('pswpConfig');
					config.options.index = index;
					var galleyPS = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, config.items, config.options);
					galleyPS.init();
				});
			});
			$(gallery).data('pswpConfig', config);
		});



	});	

})(jQuery);