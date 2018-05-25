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

		//modalSliderPic
		var $modalSliderPic = $('#modalGallery .slider--gallery-pic');
		$modalSliderPic.data('gallery', {
			slider: false, 
			options: {
				slidesPerView: 'auto',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				modalDialog: false,
				autoHeight: true,
				updateContainrSize: function(swiper){
					var $image = $(swiper.slides[swiper.activeIndex]).find('img');
					var descSlider = $modalSliderDesc.data('gallery').slider;
					$(swiper.$el).css({
						maxWidth: '100vw'
					});
					$(descSlider.$el).css({
						maxWidth: '100vw'
					});	
					requestAnimationFrame(function(){
						$(swiper.$el).css({
							maxWidth: $image.width()
						});
						$(descSlider.$el).css({
							maxWidth: $image.width()
						});
					})				
					requestAnimationFrame(function(){
						swiper.update();
						descSlider.update();						
					})
				},
				on: {
					init: function () {
						this.params.modalDialog = $(this.$el).closest('.modal__dialog');
						this.params.updateContainrSize(this);
					},					
					imagesReady: function () {
						this.params.updateContainrSize(this);
					},					
					slideChange: function () {
						this.params.updateContainrSize(this);
					},
				}								
			}
		});

		var $modalSliderDesc = $('#modalGallery .slider--gallery-desc');
		$modalSliderDesc.data('gallery', {
			slider: false, 
			options: {
				slidesPerView: 1,								
			}
		});		

		$('.slider--products').each(function(){
			var blogSliderConfig = {
				uid: generateID(),
				items: [],
			}
			var blogSlider = this;
			$(blogSlider).find('.tile--product .tile__pic').each(function(index, pic){
				var $img = $(pic).find('img');
				var item = {
					min: $img.attr('src'),
					full: $img.data('full'),
					alt: $img.attr('alt'),
				}
				blogSliderConfig.items.push(item);

					$(pic).click(function(){
						var modalSliderPicConfig = $modalSliderPic.data('gallery');
						var modalSliderDescConfig = $modalSliderDesc.data('gallery');
						if( modalSliderPicConfig.uid == blogSliderConfig.uid ){// та же галерея, просто переключить слайд

						}else{//загрузить слайды галереи
							var sliderPicHtml = '';
							var sliderDescHtml = '';
							blogSliderConfig.items.map(function(item){
								sliderPicHtml += `<div class="swiper-slide slider__slide">
													<img src="${item.full}" alt="${item.alt}">
												</div>`;
								sliderDescHtml += `<div class="swiper-slide slider__slide">
													<div class="product__title">${item.alt}</div>
												</div>`;
							});
							$modalSliderPic.find('.swiper-wrapper').html(sliderPicHtml);
							$modalSliderDesc.find('.swiper-wrapper').html(sliderDescHtml);
							if( !modalSliderPicConfig.slider ){//первая инициализация
								modalSliderDescConfig.slider = new Swiper($modalSliderDesc, modalSliderDescConfig.options);
								modalSliderPicConfig.slider = new Swiper($modalSliderPic, modalSliderPicConfig.options);

								modalSliderDescConfig.slider.controller.control = modalSliderPicConfig.slider;	
								modalSliderPicConfig.slider.controller.control = modalSliderDescConfig.slider;

								$modalSliderDesc.data('gallery', modalSliderDescConfig);				
								$modalSliderPic.data('gallery', modalSliderPicConfig);				
							}else{
								modalSliderPicConfig.slider.update();
								modalSliderDescConfig.slider.update();
							}
						}
						toggleModal('modalGallery');
					});
			});
			$(blogSlider).data('gallery', blogSliderConfig);
		});



	});	

})(jQuery);