(function($){
	$(document).ready(function() {

		$('#constructor_send').click(function(evt){
			evt.preventDefault();
			var $form = $('#constructorForm');
			var data = {};
			var elements = [
				{ selector: 'input[type=checkbox]', bool: true },
				{ selector: 'input[type=radio]', bool: true },
				{ selector: 'input[type=number]', bool: false },
				{ selector: 'textarea', bool: false },
				{ selector: 'select', bool: false }
			];
			elements.map(function(element){
				$(elem.selector).each(function(){
					//переписать
				})
			});
/*
			$form.find('input[type=checkbox]').each(function(){
				var label = $('label[for='+$(this).attr('id')+']').text();
				var group = false;
				data[$(this).attr('id')] = { label: label, value: $(this).prop('checked'), group: group };
			});
			$form.find('input[type=radio]').each(function(){
				var label = $('label[for='+$(this).attr('id')+']').text();
				var group = false;
				data[$(this).attr('id')] = { label: label, value: $(this).prop('checked'), group: group };
			});
			$form.find('input[type=number], textarea, select').each(function(){
				var label = $('label[for='+$(this).attr('id')+']').text();
				var name = $(this).attr('name');
				var group = name ? $('label[for='+name+']').text() : false;
				data[$(this).attr('id')] = { label: label, value: $(this).val(), group: group };
			});	
*/
			console.log(data);
		});

	});	
})(jQuery);		
