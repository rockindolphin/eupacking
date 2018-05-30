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
			$(`#${id}`).hasClass('modal--visible') ? enablePageScroll() : disablePageScroll();
			$(`#${id}`).toggleClass('modal--visible');
		}

		$('[data-toggle="modal"]').click(function(evt){
			evt.preventDefault();
			toggleModal( $(this).data('target') );
		});

		$('.modal').click(function(evt){
			var id = $(this).attr('id');
			if( evt.target == this ){
				toggleModal( id );
			}
		});

		//slider
		$('.slider--products').each(function(){
			var mySwiper = new Swiper(this, {
				slidesPerView: 4,
				spaceBetween: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					576: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 4,
						spaceBetween: 30,
					}
				}
			});
		});


		//gallery
		lightbox.option({
			albumLabel: '',
			disableScrolling: true
		});

		var lastScrollTop = 0;
		$('[data-lightbox]').click(function(evt){
			lastScrollTop = window.pageYOffset;
		});
		function scrollToLast(){
			$('html, body').scrollTop(lastScrollTop);
		}
		$('.lb-close').click(function(){
			scrollToLast();
		});
		$('.lightboxOverlay').click(function(){
			scrollToLast();
		});
		$('.lightbox').click(function(evt){
			if( evt.target == this ){
				scrollToLast();			
			}
		});
		$('.lb-container').click(function(evt){
			if( evt.target === this ){//click on close
				$(this).closest('.lightbox').find('.lb-close').click();
			}
		});

	});	

})(jQuery);