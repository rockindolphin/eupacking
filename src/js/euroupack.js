	$(document).click( function(event){
		if( $(event.target).closest(".selects").length ){
			return;    
		} 
		$(".dropdown_list").slideUp();
		event.stopPropagation();
	});

	$('#phone').on('keyup keypress', function(e){
		if (e.keyCode == 8 || e.keyCode == 46){

		}else{
			var letters=' 1234567890()+';
			return (letters.indexOf(String.fromCharCode(e.which))!=-1);
		}
	});

	$('#callback_telephone').on('keyup keypress', function(e){
		if (e.keyCode == 8 || e.keyCode == 46){

		}else{
			var letters=' 1234567890()+';
			return (letters.indexOf(String.fromCharCode(e.which))!=-1);
		}
	});



$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $("#glue_number");
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		$input.attr({'value': count});
		return false;
	});

	$('.plus').click(function () {
		var $input = $("#glue_number");
		var count = parseInt($input.val()) + 1;
		count = count > 5 ? 5 : count;
		$input.val(count);
		$input.change();
		$input.attr({'value': count});
		return false;
	});
});

$(".down").click(function(){
	$(".dropdown_list").slideUp();
});

// $(".controls").click(function(){
//   var display = $("#drop_brand").css('display');
//   if  ($("#drop_brand").css('display') != "none" || $("#drop_density").css('display') != "none"){
//     $(".dropdown_list").slideUp();
//   }
// });

$("#down_brand").click(function(){
	if($("#kashyr_input").attr('value') == "on"){
		exit();
	}
	var display = $("#drop_brand").css('display');
	if (display == "none"){
		$("#drop_brand").slideDown();
	}else{
		$("#drop_brand").slideUp();
	}
});

$("#drop_brand li").click(function(){
  $("#brand").attr( { 'value': $(this).text() } );
  $("#drop_brand").slideUp();

  var color_white = 0xffffff;
  var color_brown = 0xab8c69;
  var color_grey = 0xdcd6d2;

  if ($(this).text() == "Excellent Top"){
	$("ul#drop_density").html("<li>215 г/м2<li>230 г/м2<li>250 г/м2<li>275 г/м2<li>300 г/м2<li>325 г/м2<li>350 г/м2<li>375 г/м2<li>400 г/м2<li>425 г/м2<li>450 г/м2");
	$("#density").attr({'value':'215 г/м2'});
	material_alpha.color.setHex(color_white);   
  }
  if ($(this).text() == "Kromopak-GC2" || $(this).text() == "Kromoplex-GC2"){
	$("#drop_density").html("<li>200 г/м2<li>215 г/м2<li>230 г/м2<li>245 г/м2<li>260 г/м2<li>275 г/м2<li>300 г/м2<li>325 г/м2<li>350 г/м2<li>375 г/м2<li>400 г/м2");
	$("#density").attr({'value':'200 г/м2'});
	material_alpha.color.setHex(color_white); 
  }
  if ($(this).text() == "DELIGHT GLOSS"){
	$("ul#drop_density").html("<li>190 г/м2<li>210 г/м2<li>230 г/м2<li>260 г/м2<li>310 г/м2<li>360 г/м2<li>400 г/м2");
	$("#density").attr({'value':'190 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "SENATOR C2S Art Board"){
	$("ul#drop_density").html("<li>230 г/м2<li>210 г/м2<li>250 г/м2<li>300 г/м2");
	$("#density").attr({'value':'230 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "ALASKA PLUS GC2"){
	$("ul#drop_density").html("<li>205 г/м2<li>220 г/м2<li>235 г/м2<li>255 г/м2<li>280 г/м2<li>305 г/м2<li>330 г/м2");
	$("#density").attr({'value':'205 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "ATELIER GC-1"){
	$("ul#drop_density").html("<li>220 г/м2<li>240 г/м2<li>260 г/м2<li>280 г/м2<li>300 г/м2<li>325 г/м2<li>350 г/м2");
	$("#density").attr({'value':'220 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "SIMCOTE"){
	$("ul#drop_density").html("<li>200 г/м2<li>210 г/м2<li>225 г/м2<li>235 г/м2<li>250 г/м2<li>260 г/м2<li>275 г/м2<li>290 г/м2<li>315 г/м2<li>340 г/м2");
	$("#density").attr({'value':'200 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "NINGBO FOLD GC-1"){
	$("ul#drop_density").html("<li>220 г/м2<li>230 г/м2<li>250 г/м2<li>270 г/м2<li>280 г/м2<li>300 г/м2<li>325 г/м2<li>350 г/м2<li>400 г/м2<li>440 г/м2<li>450 г/м2");
	$("#density").attr({'value':'220 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "BRAVO GC-1"){
	$("ul#drop_density").html("<li>210 г/м2<li>230 г/м2<li>250 г/м2<li>270 г/м2<li>300 г/м2<li>320 г/м2<li>350 г/м2<li>360 г/м2");
	$("#density").attr({'value':'210 г/м2'});
	material_alpha.color.setHex(color_white);
  }
  if ($(this).text() == "ARKTIKA GC-1"){
	$("ul#drop_density").html("<li>200 г/м2<li>215 г/м2<li>230 г/м2<li>250 г/м2<li>275 г/м2<li>300 г/м2<li>325 г/м2<li>350 г/м2");
	$("#density").attr({'value':'200 г/м2'});
	material_alpha.color.setHex(color_white);
  }
  if ($(this).text() == "MAULE RC"){
	$("ul#drop_density").html("<li>200 г/м2<li>225 г/м2<li>245 г/м2<li>260 г/м2<li>275 г/м2<li>295 г/м2<li>305 г/м2<li>325 г/м2<li>345 г/м2<li>365 г/м2<li>390 г/м2<li>420 г/м2");
	$("#density").attr({'value':'200 г/м2'});
	material_alpha.color.setHex(color_brown);    
  }
  if ($(this).text() == "Avanta prima"){
	$("ul#drop_density").html("<li>200 г/м2<li>210 г/м2<li>220 г/м2<li>230 г/м2<li>245 г/м2<li>255 г/м2<li>270 г/м2<li>290 г/м2<li>315 г/м2<li>335 г/м2<li>360 г/м2");
	$("#density").attr({'value':'200 г/м2'});
	material_alpha.color.setHex(color_white);
  }
  if ($(this).text() == "Zenith (Manila back)"){
	$("ul#drop_density").html("<li>235 г/м2<li>250 г/м2<li>270 г/м2<li>295 г/м2<li>325 г/м2<li>360 г/м2");
	$("#density").attr({'value':'235 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "TAMBRITE"){
	$("ul#drop_density").html("<li>200 г/м2<li>210 г/м2<li>220 г/м2<li>230 г/м2<li>240 г/м2<li>250 г/м2<li>260 г/м2<li>270 г/м2<li>285 г/м2<li>310 г/м2<li>335 г/м2");
	$("#density").attr({'value':'200 г/м2'});
	material_alpha.color.setHex(color_white);    
  }   
  if ($(this).text() == "СКБ"){
	$("ul#drop_density").html("<li>175 г/м2<li>195 г/м2<li>220 г/м2<li>235 г/м2<li>255 г/м2<li>290 г/м2<li>315 г/м2<li>350 г/м2<li>380 г/м2");
	$("#density").attr({'value':'175 г/м2'});
	material_alpha.color.setHex(color_brown);    
  }
  if ($(this).text() == "SVETOCOAT"){
	$("ul#drop_density").html("<li>175 г/м2<li>200 г/м2<li>235 г/м2<li>280 г/м2<li>310 г/м2<li>330 г/м2");
	$("#density").attr({'value':'175 г/м2'});
	material_alpha.color.setHex(color_brown);    
  }   
  if ($(this).text() == "Unicolor-GD3" || $(this).text() == "Multicolor Mirabell-GD2"){
	$("ul#drop_density").html("<li>230 г/м2<li>250 г/м2<li>280 г/м2<li>300 г/м2<li>320 г/м2<li>350 г/м2<li>380 г/м2<li>400 г/м2<li>420 г/м2<li>450 г/м2");
	$("#density").attr({'value':'230 г/м2'});
	material_alpha.color.setHex(color_grey);    
  }
  if ($(this).text() == "Veno Freeze-GD2"){
	$("ul#drop_density").html("<li>250 г/м2<li>275 г/м2<li>300 г/м2<li>325 г/м2<li>350 г/м2<li>375 г/м2<li>400 г/м2");
	$("#density").attr({'value':'250 г/м2'});
	material_alpha.color.setHex(color_grey);    
  }
  if ($(this).text() == "SERVIBOARD GD-2"){
	$("ul#drop_density").html("<li>280 г/м2<li>300 г/м2<li>320 г/м2<li>350 г/м2<li>380 г/м2<li>400 г/м2");
	$("#density").attr({'value':'280 г/м2'});
	material_alpha.color.setHex(color_grey);    
  }
  if ($(this).text() == "UMKA COLOR GD-2"){
	$("ul#drop_density").html("<li>230 г/м2<li>250 г/м2<li>280 г/м2<li>300 г/м2<li>320 г/м2<li>350 г/м2<li>400 г/м2<li>450 г/м2<li>500 г/м2<li>550 г/м2");
	$("#density").attr({'value':'230 г/м2'});
	material_alpha.color.setHex(color_grey);    
  }
  if ($(this).text() == "НЕВА"){
	$("ul#drop_density").html("<li>220 г/м2<li>240 г/м2<li>280 г/м2<li>300 г/м2<li>320 г/м2<li>350 г/м2<li>390 г/м2<li>420 г/м2<li>450 г/м2<li>480 г/м2");
	$("#density").attr({'value':'220 г/м2'});
	material_alpha.color.setHex(color_grey);    
  }
  if ($(this).text() == "Hansol Paper Co Ltd"){
	$("ul#drop_density").html("<li>180 г/м2<li>200 г/м2<li>220 г/м2<li>230 г/м2<li>240 г/м2<li>250 г/м2<li>260 г/м2<li>280 г/м2<li>300 г/м2<li>330 г/м2<li>350 г/м2<li>400 г/м2<li>450 г/м2<li>500 г/м2");
	$("#density").attr({'value':'180 г/м2'});
	material_alpha.color.setHex(color_grey);    
  }
  if ($(this).text() == "Ecoprint-GT3"){
	$("ul#drop_density").html("<li>220 г/м2<li>230 г/м2<li>250 г/м2<li>280 г/м2<li>300 г/м2<li>320 г/м2<li>350 г/м2<li>380 г/м2<li>400 г/м2<li>420 г/м2<li>450 г/м2");
	$("#density").attr({'value':'220 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "Multicolor Belvedere-GT2"){
	$("ul#drop_density").html("<li>230 г/м2<li>250 г/м2<li>280 г/м2<li>300 г/м2<li>320 г/м2<li>350 г/м2<li>380 г/м2<li>400 г/м2<li>420 г/м2<li>450 г/м2");
	$("#density").attr({'value':'230 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "Topcolor-GT1"){
	$("ul#drop_density").html("<li>250 г/м2<li>280 г/м2<li>300 г/м2<li>320 г/м2");
	$("#density").attr({'value':'250 г/м2'});
	material_alpha.color.setHex(color_white);    
  }
  if ($(this).text() == "CONTIBOARD GT-1"){
	$("ul#drop_density").html("<li>210 г/м2<li>230 г/м2<li>250 г/м2<li>275 г/м2<li>300 г/м2<li>320 г/м2<li>350 г/м2<li>400 г/м2");
	$("#density").attr({'value':'210 г/м2'});
	material_alpha.color.setHex(color_white);    
  }       
});


/*

  if ($(this).text() == "XXXXXXXXXXXX"){
	$("ul#drop_density").html("<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2<li>XXX г/м2");
	$("#density").attr({'value':'XXX г/м2'});
	material_alpha.color.setHex(color_white);    
  }   


material_alpha.color.setHex(0xab8c69);

material_alpha.color.setHex(0xdcd6d2);
*/

$("#down_density").click(function(){
	if($("#kashyr_input").attr('value') == "on"){
		exit();
	}
	var display = $("#drop_density").css('display');
	if (display == "none"){
		$("#drop_density").slideDown();
	}else{
		$("#drop_density").slideUp();
	} 
});

// $(".density_li").mouseup(function(){
//   $("#density").attr({'value':$(this).text()});
//   $("#drop_density").slideUp();
// });

$("body").on("click", "#drop_density li", function(){
	$("#density").attr({'value':$(this).text()});
	$("#drop_density").slideUp();
});

$(".checkbox").click(function(){
	if($(this).is('.checkbox_cheked')){
		$(this).removeClass('checkbox_cheked');
	}
	else{
		$(this).addClass('checkbox_cheked');
	}
});

$("#kashyr").click(function(){
	if($("#kashyr").is('.checkbox_cheked')){
		$("#kashyr_input").attr({'value':'on'});
	}
	else{
		$("#kashyr_input").attr({'value':'off'});
	}
});

$("#metall").click(function(){
	if($("#metall").is('.checkbox_cheked')){
		$("#metall_input").attr({'value':'on'});
	}
	else{
		$("#metall_input").attr({'value':'off'});
	}
});

$("#foil").click(function(){
	if($("#foil").is('.checkbox_cheked')){
		$("#foil_input").attr({'value':'on'});
	}
	else{
		$("#foil_input").attr({'value':'off'});
	}
});

$("#kongrev").click(function(){
	if($("#kongrev").is('.checkbox_cheked')){
		$("#kongrev_input").attr({'value':'on'});
	}
	else{
		$("#kongrev_input").attr({'value':'off'});
	}
});

$("#window").click(function(){
	if($("#window").is('.checkbox_cheked')){
		$("#window_input").attr({'value':'on'});
	}
	else{
		$("#window_input").attr({'value':'off'});
	}
});

$("#polnotsvet").click(function(){
	if($("#polnotsvet").is('.checkbox_cheked')){
		$("#polnotsvet_input").attr({'value':'on'});
	}
	else{
		$("#polnotsvet_input").attr({'value':'off'});
	}
});

$("#pantone").click(function(){
	if($("#pantone").is('.checkbox_cheked')){
		$("#pantone_input").attr({'value':'on'});
	}
	else{
		$("#pantone_input").attr({'value':'off'});
	}
});

$("#design").click(function(){
	if($("#design").is('.checkbox_cheked')){
		$("#design_input").attr({'value':'on'});
	}
	else{
		$("#design_input").attr({'value':'off'});
	}
});

$("#construction").click(function(){
	if($("#construction").is('.checkbox_cheked')){
		$("#construction_input").attr({'value':'on'});
	}
	else{
		$("#construction_input").attr({'value':'off'});
	}
});

$("#solid_laq span").click(function(){
	if( $("#metall_input").attr('value') == "on" ){
		exit();
	}
	$("#solid_laq span").removeClass('radio_buttom_cheked');
	$(this).addClass('radio_buttom_cheked');
	$("#solid_laq_input").attr( {'value': $(this).attr('id')} );  
});

$("#form_laq span").click(function(){
	$("#form_laq span").removeClass('radio_buttom_cheked');
	$(this).addClass('radio_buttom_cheked');
	$("#form_laq_input").attr({'value':$(this).attr('id')});
});

$("#beuty span").click(function(){
	$("#beuty span").removeClass('radio_buttom_cheked');
	$(this).addClass('radio_buttom_cheked');
	$("#beuty_input").attr({'value':$(this).attr('id')});
});



  /***************************************************/

function on_off(obj){
	var temp='';
	if( obj.attr('value') == "on" ){
		temp ='да'
	}else{
		temp='нет'
	}
	return temp;
}

  /******************** bottom buttoms ******************/

$('.bottom_buttom').click(function(){
	var temp='';
	$('#td_brand').html($('#brand').attr('value'));

	$('#td_density').html($('#density').attr('value'));

	$('#td_kashyr').html(on_off($('#kashyr_input')));

	$('#td_metall').html( on_off($('#metall_input')) );

	if( $("#beuty_input").attr('value') == "polnotsvet_pantone" ){
		temp = 'полноцвет + pantone';
	}
	if(	$("#beuty_input").attr('value') == "polnotsvet" ){
		temp = 'полноцвет';
	}
	if( $("#beuty_input").attr('value') == "pantone" ){
		temp = 'pantone';
	}
	$('#td_beuty').html(temp);

	$('#td_glue_number').html( $('#glue_number').attr('value') );

	$('#td_foil').html( on_off($('#foil_input')) );

	$('#td_kongrev').html(on_off($('#kongrev_input')));

	$('#td_window').html(on_off($('#window_input')));

	if( $("#solid_laq_input").attr('value') == "gloss" ){
		temp = 'глянцевый';
	}
	if( $("#solid_laq_input").attr('value') == "mat" ){
		temp = 'матовый';
	}
	if( $("#solid_laq_input").attr('value') == "no_laq" ){
		temp = 'нет';
	}
	$('#td_solid_laq').html(temp);

	if( $("#form_laq_input").attr('value') == "gloss" ){
		temp = 'глянцевый';
	}
	if( $("#form_laq_input").attr('value') == "mat" ){
		temp = 'матовый';
	}
	if( $("#form_laq_input").attr('value') == "no_laq" ){
		temp = 'нет';
	}
	$('#td_form_laq').html(temp);

	$('#td_construction').html( on_off($('#construction_input')) );

	$('#td_design').html( on_off($('#design_input')) );

	$('#td_additionalinfo').html( $('#additionalinfo').val() );

});

$('#send_request').click(function(){
	$('#cform').css({'display':'block'});
	$('#message_wrap').css({'display':'block'});
	$('#save_list').css({'display':'none'});

	$('#comments').val('МАТЕРИАЛ: \nмарка:\t' + $('#td_brand').html()+'\nплотность:\t'+ $('#td_density').html() +'\nкашировка:\t'+ $('#td_kashyr').html() +'\nметаллизированный картон:\t'+ $('#td_metall').html() + '\nКРАСОЧНОСТЬ:\t'+ $('#td_beuty').html() +'\nКОЛИЧЕСТВО ТОЧЕК СКЛЕЙКИ:\t'+ $('#td_glue_number').html() +'\nОТДЕЛКА:\nтиснение фольгой:\t'+ $('#td_foil').html() +'\nконгрев:\t'+ $('#td_kongrev').html() +'\nвырубные окошки:\t'+ $('#td_window').html() +'\nСПЛОШНОЙ ЛАК:\t'+ $('#td_solid_laq').html() +'\nВЫБОРОЧНЫЙ ЛАК:\t'+ $('#td_form_laq').html() +'\nРАЗРАБОТКА:\nдизайн:\t'+ $('#td_design').html() +'\nконструкция:\t'+ $('#td_construction').html() +'\nДОПОЛНИТЕЛЬНО:\n'+ $('#td_additionalinfo').html());
});

$('#cform').click(function(){
 
	//alert($('#table_value').val());
});

$('#save_param').click(function(){
	$('#cform').css({'display':'none'});
	$('#message_wrap').css({'display':'none'});
	$('#save_list').css({'display':'block'}); 

	$('#table_value').val($('#order_table').html());
});

$('#reset').click(function(){
	$('#brand').attr({'value':'Excellent Top'});
	$("ul#drop_density").html("<li>215 г/м2<li>230 г/м2<li>250 г/м2<li>275 г/м2<li>300 г/м2<li>325 г/м2<li>350 г/м2<li>375 г/м2<li>400 г/м2<li>425 г/м2<li>450 г/м2");
	$("#density").attr({'value':'215 г/м2'});
	material_alpha.color.setHex(0xffffff);

	$("#kashyr").removeClass('checkbox_cheked');
	$("#metall").removeClass('checkbox_cheked');
	$("#kashyr_input").attr({'value':'off'});
	$("#metall_input").attr({'value':'off'});

	$("#beuty span").removeClass('radio_buttom_cheked');
	$("#polnotsvet").addClass('radio_buttom_cheked');
	$("#beuty_input").attr({'value':'polnotsvet'});

	$("#glue_number").val(1);

	$("#trim span").removeClass('checkbox_cheked');
	$("#kongrev").addClass('checkbox_cheked');
	$("#kongrev_input").attr({'value':'on'});
	$("#foil_input").attr({'value':'off'});    
	$("#window_input").attr({'value':'off'});     

	$("#solid_laq span").removeClass('radio_buttom_cheked');
	$("#solid_laq #gloss").addClass('radio_buttom_cheked');
	$("#solid_laq_input").attr({'value':'gloss'});         

	$("#form_laq span").removeClass('radio_buttom_cheked');
	$("#form_laq #no_laq").addClass('radio_buttom_cheked');
	$("#form_laq_input").attr({'value':'no_laq'});    

	$("#development span").addClass('checkbox_cheked');

	choose();
});


  /*************** control buttoms **********************/

	$("#360left").click(function(){
		window.temp = false;
		spin="left";
		cube.rotation.y = window.rotationY;
		lastTime = (new Date()).getTime();
	});

	$("#360right").click(function(){
		window.temp = false;
		spin="right";
		cube.rotation.y = window.rotationY;
		lastTime = (new Date()).getTime();
	});

	$("#constructor__canvas").mousedown(function(){
		window.temp = true;
	});

	$("#left_step").click(function(){
		targetRotation -= 0.5;
	}).dblclick(function(){
		targetRotation -= 0.5;
	});

	$("#right_step").click(function(){
		targetRotation += 0.5;
	}).dblclick(function(){
		targetRotation += 0.5;
	});

  /***** chooce function *****/
function choose(){

	var color_white = 0xffffff;
	var color_brown = 0xab8c69;

	$(".dropdown_list").slideUp();

	if( $("#kashyr_input").attr('value') == "on" ){
		material_alpha.map = textura_bg_kashyr;
		material_alpha.color.setHex(color_brown);
		$('#brand').attr({'value' : 'Лайнер'});
		$('#density').attr({'value' : ''});
		$("#marks_density span").css({'opacity':'0.5'});
		$("#marks_density h5").css({'opacity':'0.5'});      
		$("#marks_density input").css({'opacity':'0.5'});     
	}

	if( $("#kashyr_input").attr('value') == "off" ){
		material_alpha.map = false;
		$('#brand').attr({'value' : 'Excellent Top'});
		$("ul#drop_density").html('<li>215 г/м2<li>230 г/м2<li>250 г/м2<li>275 г/м2<li>300 г/м2<li>325 г/м2<li>350 г/м2<li>375 г/м2<li>400 г/м2<li>425 г/м2<li>450 г/м2');
		$("#density").attr({'value':'215 г/м2'});
		material_alpha.color.setHex(color_white);
		$("#marks_density span").css({'opacity':'1'});
		$("#marks_density h5").css({'opacity':'1'});      
		$("#marks_density input").css({'opacity':'1'});      
	}

	if( $("#metall_input").attr('value') == "on" ){
		//material_alpha.map = textura_bg_kashyr;
		material_bg.shininess = 120;
		material_bg.color.setHex(0xcccccc);
		$("#solid_laq_input").attr({'value':'no_laq'});
		$("#solid_laq span").removeClass('radio_buttom_cheked');
		$('#no_laq').addClass('radio_buttom_cheked');
		$("#solid_laq span").css({'opacity':'0.5'});
		$("#solid_laq h5").css({'opacity':'0.5'});
	}

	if( $("#metall_input").attr('value') == "off" ){
		//material_alpha.map = false;
		material_bg.shininess = 20;
		material_bg.color.setHex(color_white);
		$("#solid_laq span").css({'opacity':'1'});
		$("#solid_laq h5").css({'opacity':'1'});      
	}

	if( $("#window_input").attr('value') == "on" ){
		material_bg.map = textura_bg_with_window;
	}

	if( $("#window_input").attr('value') == "off" ){
		material_bg.map = textura_bg;
	}

	if( $("#kongrev_input").attr('value') == "on" ){
		material.bumpMap = textura_kongrev;
	}

	if( $("#kongrev_input").attr('value') == "off" ){
		material.bumpMap = false;      
	}

	if( $("#beuty_input").attr('value') == "polnotsvet_pantone" ){
		material_tisnenie.map = textura_tesnenie;
		//material.map = textura_pantone_polnotsvet;
	} 

	if( $("#beuty_input").attr('value') == "polnotsvet" ){
		material_tisnenie.map = textura_tesnenie_bw;
	}

	if( $("#beuty_input").attr('value') == "pantone" ){
		material_tisnenie.map = textura_tesnenie;
	}

	if( $("#solid_laq_input").attr('value')=="gloss" ){
		material_bg.shininess = 500;      
	}

	if( $("#solid_laq_input").attr('value')=="mat" ){
		material_bg.shininess = 50;
	}

	if( $("#solid_laq_input").attr('value')=="no_laq" ){
		if( $("#metall_input").attr('value') != "on" ){
			material_bg.shininess = 20;
		}
	}

	if( $("#form_laq_input").attr('value')=="gloss" ){
		material.shininess = 500;
		if( $("#kongrev_input").attr('value') != "on" ){
			material.bumpMap = textura_form_laq;
		}
	}

	if( $("#form_laq_input").attr('value')=="mat" ){
		material.shininess = 50;
		texture_shine = 50;
		if( $("#kongrev_input").attr('value') != "on" ){
			material.bumpMap = textura_form_laq;
		}
	}

	if( $("#form_laq_input").attr('value')=="no_laq" ){
		material.shininess = material_bg.shininess;
	}

	if( $("#foil_input").attr('value') == "on" ){
		material_tisnenie.map = textura_tesnenie_gold;
		material_tisnenie.bumpMap = textura_tesnenie_map;
		material_tisnenie.shininess = 1000;
	}else{
		material_tisnenie.bumpMap = false;
		material_tisnenie.shininess = material_bg.shininess;
	}

	material_alpha.needsUpdate = true;
	material_bg.needsUpdate = true;
	material.needsUpdate = true;
	material_tisnenie.needsUpdate = true;

	targetRotation += Math.PI;    
  }

  
	var boxConfig = {
		colors: {
			white: 0xffffff,
			brown: 0xab8c69,
			gray: 0xcccccc,			
			browngray: 0xdcd6d2,			
		},
		texturesPath: 'images/textures/',
		textures: {
			bg: 				false,
			bg_alpha: 			false,
			bg_laminating: 		false,
			bg_notch_windows: 	false,
			fullcolor: 			false,
			embossing: 			false,
			embossing_bw: 		false,
			embossing_gold: 	false,
			embossing_map: 		false,
			congreve: 			false,
			partial_polish: 	false,
		},
		materials: {
			alpha: false,
			bg: false,
			simple: false,
			embossing: false,
		}
	}

	//WebGL
	window.temp = true; //???

	var spin="left";
	var targetRotation = 0.5;
	var targetRotationOnMouseDown = 0;

	var mouseX = 0;
	var mouseXOnMouseDown = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	// revolutions per second
	var angularSpeed = 0.2; 
	var lastTime = 0;

	// renderer
	var renderer = new THREE.WebGLRenderer({ alpha: true, antialias:true });
	renderer.setSize(640, 700);
	renderer.setClearColor(boxConfig.colors.white, 0);
	renderer.shadowMap.enabled = true;
	var container = document.getElementById('constructor__canvas');
	container.appendChild(renderer.domElement);

	// camera
	var camera = new THREE.PerspectiveCamera(45, 700 / 700, 1, 1000);
	camera.position.z = 500;

	// scene
	var scene = new THREE.Scene();

	//textures
	var theme_path = 'images/textures/';
	var loader = new THREE.TextureLoader();
	var textura_bg =				loader.load( theme_path + 'bg.png' );
	var textura_bg_alpha =			loader.load( theme_path + 'bg_alpha.png' );
	var textura_bg_kashyr =			loader.load( theme_path + 'bg_laminating.png' );
	var textura_bg_with_window =	loader.load( theme_path + 'bg_notch_windows.png' );
	var textura =					loader.load( theme_path + 'fullcolor.png' );
	var textura_tesnenie =			loader.load( theme_path + 'embossing.png' );
	var textura_tesnenie_bw =		loader.load( theme_path + 'embossing_bw.png' );
	var textura_tesnenie_gold =		loader.load( theme_path + 'embossing_gold.png' );
	var textura_tesnenie_map =		loader.load( theme_path + 'embossing_map.png' );
	var textura_kongrev =			loader.load( theme_path + 'congreve.png' );
	var textura_form_laq =			loader.load( theme_path + 'partial_polish.png' );

	//create materials
	var material_alpha = new THREE.MeshPhongMaterial({ 
		color: 0xffffff, 
		alphaMap: textura_bg_alpha, 
		alphaTest: 0.5, 
		side: THREE.DoubleSide, 
		map: false
	});
	var material_bg = new THREE.MeshPhongMaterial({ 
		map: textura_bg, 
		shininess: 20, 
		transparent: true
	});
	var material = new THREE.MeshPhongMaterial({ 
		map: textura, 
		bumpMap: textura_kongrev, 
		shininess: 20, 
		transparent: true
	});
	var material_tisnenie = new THREE.MeshPhongMaterial({ 
		map: textura_tesnenie_bw, 
		bumpMap: false, 
		shininess: 20, 
		transparent: true
	});
	var arr_materials = [
		material_alpha, 
		material_bg, 
		material, 
		material_tisnenie
	];

	var bricks = [
		new THREE.Vector2(.138575, .214251),
		new THREE.Vector2(.483457, .214251),
		new THREE.Vector2(.483457, .785264),
		new THREE.Vector2(.138575, .785264)
	];
	var clouds = [
		new THREE.Vector2(.597898, .214251),
		new THREE.Vector2(.941222, .214251),
		new THREE.Vector2(.941222, .785264),
		new THREE.Vector2(.597898, .785264)
	];
	var crate = [
		new THREE.Vector2(.138575, .785264),
		new THREE.Vector2(.483457, .785264),
		new THREE.Vector2(.483457, .925836),
		new THREE.Vector2(.138575, .925836)
	];
	var stone = [
		new THREE.Vector2(.138575, .070771),
		new THREE.Vector2(.483457, .070771),
		new THREE.Vector2(.483457, .214251),
		new THREE.Vector2(.138575, .214251)
	];
	var water = [
		new THREE.Vector2(.024912, .214254),
		new THREE.Vector2(.138575, .214254),
		new THREE.Vector2(.138575, .785264),
		new THREE.Vector2(.024912, .785264)
	];
	var wood = [
		new THREE.Vector2(.483457, .214254),
		new THREE.Vector2(.597898, .214254),
		new THREE.Vector2(.597898, .785264),
		new THREE.Vector2(.483457, .785264)
	];

	// cube
	var geometry = new THREE.BoxGeometry(70, 300, 220 ); 

	geometry.faceVertexUvs[0] = [];

	geometry.faceVertexUvs[0][0] = [ bricks[3], bricks[0], bricks[2] ];
	geometry.faceVertexUvs[0][1] = [ bricks[0], bricks[1], bricks[2] ];

	geometry.faceVertexUvs[0][2] = [ clouds[3], clouds[0], clouds[2] ];
	geometry.faceVertexUvs[0][3] = [ clouds[0], clouds[1], clouds[2] ];

	geometry.faceVertexUvs[0][4] = [ crate[3], crate[0], crate[2] ];
	geometry.faceVertexUvs[0][5] = [ crate[0], crate[1], crate[2] ];

	geometry.faceVertexUvs[0][6] = [ stone[0], stone[1], stone[3] ];
	geometry.faceVertexUvs[0][7] = [ stone[1], stone[2], stone[3] ];

	geometry.faceVertexUvs[0][8] = [ water[3], water[0], water[2] ];
	geometry.faceVertexUvs[0][9] = [ water[0], water[1], water[2] ];

	geometry.faceVertexUvs[0][10] = [ wood[3], wood[0], wood[2] ];
	geometry.faceVertexUvs[0][11] = [ wood[0], wood[1], wood[2] ];

	var cube = new THREE.SceneUtils.createMultiMaterialObject( geometry, arr_materials );

	cube.overdraw = true;
	cube.receiveShadow = true;
	cube.castShadow = true;

	cube.rotation.y -= Math.PI * 0.3;

	scene.add(cube);

	//AMBIENT LIGHT
	var ambLight = new THREE.HemisphereLight(0xffffff,0xffffff,0.7);
	scene.add(ambLight);
	  
	// add spotlight for the shadows
	var spotLight = new THREE.SpotLight( 0xffffff, 0.3, -100 );
	spotLight.position.set( 800, 200, 1000 );
	spotLight.castShadow = true;
	spotLight.shadowDarkness = 0.5;
	spotLight.shadowMapSoft = true;
	spotLight.shadowMapWidth = 1024;
	spotLight.shadowMapHeight = 1024;
	spotLight.lookAt(new THREE.Vector3(  0, 0, 0 ));
	scene.add( spotLight ); 


	var spotLight2 = new THREE.SpotLight( 0xffffff, 0.2, -50 );
	spotLight2.position.set( 800, -350, 1000 );
	spotLight2.castShadow = true;
	spotLight2.shadowDarkness = 0.5;
	spotLight2.shadowMapSoft = true;
	spotLight2.shadowMapWidth = 1024;
	spotLight2.shadowMapHeight = 1024;
	scene.add( spotLight2 ); 

	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	document.addEventListener( 'touchmove', onDocumentTouchMove, false );
		
	// start animation
	targetRotation = cube.rotation.y;
	animate();

	function animate(){
		if(window.temp){
			cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
			window.targetRotation = targetRotation;
		}else{
			var time = (new Date()).getTime();
			var timeDiff = time - lastTime;
			var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;

			if (spin=="left"){
				cube.rotation.y += angleChange;
				lastTime = time;
			}else{
				cube.rotation.y -= angleChange;
				lastTime = time;
			}
			targetRotation = cube.rotation.y;
		}
		window.rotationY = cube.rotation.y;
		renderer.render(scene, camera);

		// request new frame
		requestAnimationFrame(function(){
			animate();
		});

	}


	function onWindowResize() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function onDocumentMouseDown( event ) {
		$("#constructor__canvas").mouseover(function(){
			event.preventDefault();     
		});  

		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mouseup', onDocumentMouseUp, false );
		document.addEventListener( 'mouseout', onDocumentMouseOut, false );

		mouseXOnMouseDown = event.clientX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;
	}

	function onDocumentMouseMove( event ) {
		mouseX = event.clientX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
	}

	function onDocumentMouseUp( event ) {
		document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
		document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
	}

	function onDocumentMouseOut( event ) {
		document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
		document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
	}

	function onDocumentTouchStart( event ) {
		if ( event.touches.length === 1 ) {
			$("#constructor__canvas").mouseover(function(){
				event.preventDefault();     
			});

			mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
			targetRotationOnMouseDown = targetRotation;
		}
	}

	function onDocumentTouchMove( event ) {
		if ( event.touches.length === 1 ) {
			$("#constructor__canvas").mouseover(function(){
				event.preventDefault();     
			});
			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
		}
	}

