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
				}
			});
		});


		//gallery
		$().fancybox({
			selector : '[data-fancybox]',
			loop: true,
			infobar: false,
			arrows: false,
			smallBtn: true,
			toolbar: false,
			lang: "ru",
			i18n: {
				ru: {
					CLOSE: "Закрыть",
					NEXT: "Следующий",
					PREV: "Предыдущий",
					ERROR: "Содержимое не может быть загружено <br/> Повторите попытку позже.",
					PLAY_START: "Начать слайдшоу",
					PLAY_STOP: "Остановить слайдшоу",
					FULL_SCREEN: "Полный экран",
					THUMBS: "Превью",
					DOWNLOAD: "Скачать",
					SHARE: "Поделиться",
					ZOOM: "Увеличить"
				},
			},
			baseTpl:
				'<div class="fancybox-container" role="dialog" tabindex="-1">' +
				'<div class="fancybox-bg"></div>' +
				'<div class="fancybox-inner">' +
				'<div class="fancybox-infobar">' +
				"<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>" +
				"</div>" +
				'<div class="fancybox-toolbar">{{buttons}}</div>' +
				//'<div class="fancybox-navigation">{{arrows}}</div>' +
				'<div class="fancybox-stage"></div>' +
				'<div class="fancybox-caption"></div>' +
				"</div>" +
				"</div>",
			clickContent: function(current, event) {
				return false;
			},				
			afterLoad: function(instance, slide ){
				var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque magnam vitae ut cumque, esse nesciunt eius sint aliquid ullam. Voluptatem, sunt mollitia praesentium porro deserunt animi ducimus maxime dignissimos quam. ';
				var $caption = $(`<div class="product__details">${slide.opts.caption + lorem}</div>`);
				var $prev = $('<div class="swiper-button-prev slider__btn slider__btn--prev"></div>')
				var $next = $('<div class="swiper-button-next slider__btn slider__btn--next"></div>')
				//slide.$image.after( $caption );
				slide.$image.after( $prev, $next );
				$next.click(function(evt){
					evt.stopPropagation();
					instance.next();
				});
				$prev.click(function(evt){
					evt.stopPropagation();
					instance.previous();
				});
				//instance.scaleToFit( duration );
			}			
		});		


	});	

})(jQuery);