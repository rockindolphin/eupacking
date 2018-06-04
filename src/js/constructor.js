(function($){
	$(document).ready(function() {

		var paperConfig = [
			{ name: 'Excellent Top', 			color: 'white', 			density: [215, 230, 250, 275, 300, 325, 350, 375, 400, 425, 450] },
			{ name: 'Kromopak-GC2', 			color: 'white', 			density: [200, 215, 230, 245, 260, 275, 300, 325, 350, 375, 400] },
			{ name: 'Kromoplex-GC2', 			color: 'white', 			density: [200, 215, 230, 245, 260, 275, 300, 325, 350, 375, 400] },
			{ name: 'DELIGHT GLOSS', 			color: 'white', 			density: [190, 210, 230, 260, 310, 360, 400] },
			{ name: 'SENATOR C2S Art Board', 	color: 'white', 			density: [230, 210, 250, 300] },
			{ name: 'ALASKA PLUS GC2', 			color: 'white', 			density: [205, 220, 235, 255, 280, 305, 330] },
			{ name: 'ATELIER GC-1', 			color: 'white', 			density: [220, 240, 260, 280, 300, 325, 350] },
			{ name: 'SIMCOTE', 					color: 'white', 			density: [200, 210, 225, 235, 250, 260, 275, 290, 315, 340] },
			{ name: 'NINGBO FOLD GC-1', 		color: 'white', 			density: [220, 230, 250, 270, 280, 300, 325, 350, 400, 440, 450] },
			{ name: 'BRAVO GC-1', 				color: 'white', 			density: [210, 230, 250, 270, 300, 320, 350, 360] },
			{ name: 'ARKTIKA GC-1', 			color: 'white', 			density: [200, 215, 230, 250, 275, 300, 325, 350] },
			{ name: 'MAULE RC', 				color: 'brown', 			density: [200, 225, 245, 260, 275, 295, 305, 325, 345, 365, 390, 420] },
			{ name: 'Avanta prima', 			color: 'white', 			density: [200, 210, 220, 230, 245, 255, 270, 290, 315, 335, 360] },
			{ name: 'Zenith (Manila back)', 	color: 'white', 			density: [235, 250, 270, 295, 325, 360] },
			{ name: 'TAMBRITE', 				color: 'white', 			density: [200, 210, 220, 230, 240, 250, 260, 270, 285, 310, 335] },
			{ name: 'СКБ', 						color: 'brown', 			density: [175, 195, 220, 235, 255, 290, 315, 350, 380] },
			{ name: 'SVETOCOAT', 				color: 'brown', 			density: [175, 200, 235, 280, 310, 330] },
			{ name: 'Unicolor-GD3', 			color: 'browngray', 		density: [230, 250, 280, 300, 320, 350, 380, 400, 420, 450] },
			{ name: 'Multicolor Mirabell-GD2', 	color: 'browngray', 		density: [230, 250, 280, 300, 320, 350, 380, 400, 420, 450] },
			{ name: 'Veno Freeze-GD2', 			color: 'browngray', 		density: [250, 275, 300, 325, 350, 375, 400] },
			{ name: 'SERVIBOARD GD-2', 			color: 'browngray', 		density: [280, 300, 320, 350, 380, 400] },
			{ name: 'UMKA COLOR GD-2', 			color: 'browngray', 		density: [230, 250, 280, 300, 320, 350, 400, 450, 500, 550] },
			{ name: 'НЕВА', 					color: 'browngray', 		density: [220, 240, 280, 300, 320, 350, 390, 420, 450, 480] },
			{ name: 'Hansol Paper Co Ltd', 		color: 'browngray', 		density: [180, 200, 220, 230, 240, 250, 260, 280, 300, 330, 350, 400, 450, 500] },
			{ name: 'Ecoprint-GT3', 			color: 'white', 			density: [220, 230, 250, 280, 300, 320, 350, 380, 400, 420, 450] },
			{ name: 'Multicolor Belvedere-GT2', color: 'white', 			density: [230, 250, 280, 300, 320, 350, 380, 400, 420, 450] },
			{ name: 'Topcolor-GT1', 			color: 'white', 			density: [250, 280, 300, 320] },
			{ name: 'CONTIBOARD GT-1', 			color: 'white', 			density: [210, 230, 250, 275, 300, 320, 350, 400] },
		];

		var boxConfig = {
			colors: {
				white: 0xffffff,
				brown: 0xab8c69,
				gray: 0xcccccc,			
				browngray: 0xdcd6d2,			
			},
			textures: '/images/textures/',
		}

		function getFormData(){
			var $form = $('#constructorForm');
			var fields = {};
			var elements = [
				{ selector: 'input[type=checkbox]', type: 'checkbox' },
				{ selector: 'input[type=radio]', type: 'radio' },
				{ selector: 'input[type=number]', type: 'number' },
				{ selector: 'textarea', type: 'textarea' },
				{ selector: 'select', type: 'select' }
			];
			elements.map(function(element){
				$(element.selector).each(function(){
					var id = $(this).attr('id');
					var label = $('label[for='+id+']').text();
					var group = parseInt($(this).data('group')) || false;
					var isBoolean = element.type === 'checkbox' || element.type === 'radio';
					var value = isBoolean ? $(this).prop('checked') : $(this).val();
					fields[id] = { group: group, label: label, value: value, type: element.type };
				})
			});
			//groups
			var groups = [];
			$form.find('[data-group-title]').each(function(){
				groups[$(this).data('groupTitle')] = {label: $(this).text(), items: []};
			});	
			groups.map(function(group, index){
				var g_items = [];
				$.map(fields, function(item, key){
					var g_item = false;
					switch(item.type){
						case 'checkbox':
							g_item = {label: item.label, value: (item.value ? 'Да' : 'Нет')};
							break;
						case 'radio':
							g_item = item.value ? {label: false, value: item.label} : false;
							break;
						case 'select':
							g_item = {label: item.label, value: $(`#${key} option:selected`).text() };
							break;
						case 'number':
						case 'textarea':
							g_item = {label: false, value: item.value };
							break;
					}
					if( g_item && item.group == index ){
						g_items.push( g_item );
					}
				});
				group.items = g_items;
			});

			return {fields: fields, groups: groups};
		}

		function generateTable(data){
			var html = '';
			data.groups.map(function(group){
				if( group.items.length > 1 ){
					html += `<tr>
								<td colspan="2" class="text-uppercase font-weight-bold">${group.label}</td>
							</tr>`;
					group.items.map(function(item){
						html += `<tr>
									<td>${item.label}</td>
									<td>${item.value}</td>
								</tr>`;
					});				
				}else{
					html += `<tr>
								<td class="text-uppercase font-weight-bold">${group.label}</td>
								<td>${group.items[0].value}</td>
							</tr>`;				
				}
			});
			return html;
		}

		//Материал: Марка
		$('#mark').each(function(){
			$(this).empty().trigger("change");
			paperConfig.map(function(item, key){
				var option = new Option(item.name, key, false, false);
				$(this).append(option);
			}.bind(this) );
			$(this).trigger('change');

			$(this).change(function(){
				var val = $(this).val();
				var $density = $('#density');
				$density.empty().trigger("change");
				paperConfig[val]['density'].map(function(item, key){
					var option = new Option(item + ' г/м2', key, false, false);
					$density.append(option);
				});
				$density.trigger('change');
				//changeBoxColor( paperConfig[val]['color'] );
			});

		});

		//Материал: Плотность
		$('#density').each(function(){
			$(this).empty().trigger("change");
			paperConfig[0]['density'].map(function(item, key){
				var option = new Option(item + ' г/м2', key, false, false);
				$(this).append(option);
			}.bind(this) );
			$(this).trigger('change');
		});	

		//Материал: Кашировка
		$('#laminating').change(function(){
			var isChecked = $(this).prop('checked');
			$('#mark').prop('disabled', isChecked);
			$('#density').prop('disabled', isChecked);
			if( isChecked ){
				material_alpha.map = textura_bg_kashyr;
				material_alpha.color.setHex( boxConfig.colors.brown );
			}else{
				material_alpha.map = false;
				material_alpha.color.setHex( boxConfig.colors.white );				
			}
		});

		//Материал: Металлизированный картон
		$('#metal_cardboard').change(function(){
			var isChecked = $(this).prop('checked');
			$('input[name=solid_polish]').prop('disabled', isChecked);
			if( isChecked ){
				material_bg.shininess = 120;
				material_bg.color.setHex( boxConfig.colors.gray );
			}else{
				material_bg.shininess = 20;
				material_bg.color.setHex( boxConfig.colors.white );				
			}			
		});

		//Красочность: Полноцвет + pantone
		$('#fullcolor_pantone').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material_tisnenie.map = textura_tesnenie;
			}			
		});	

		//Красочность: Полноцвет
		$('#fullcolor').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material_tisnenie.map = textura_tesnenie_bw;
			}			
		});	

		//Красочность: Pantone
		$('#pantone').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material_tisnenie.map = textura_tesnenie;
			}			
		});

		//Отделка: Тиснение фольгой
		$('#embossing').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material_tisnenie.map = textura_tesnenie_gold;
				material_tisnenie.bumpMap = textura_tesnenie_map;
				material_tisnenie.shininess = 1000;
			}else{
				material_tisnenie.bumpMap = false;
				material_tisnenie.shininess = material_bg.shininess;		
			}			
		});						
		
		//Отделка: Вырубные окошки
		$('#notch_windows').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material_bg.map = textura_bg_with_window;
			}else{
				material_bg.map = textura_bg;			
			}			
		});

		//Отделка: Конгрев
		$('#congreve').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material.bumpMap = textura_kongrev;
			}else{
				material.bumpMap = false;			
			}			
		});

		//Сплошной лак: Глянцевый
		$('#solid_polish_glossy').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material_bg.shininess = 500;
			}			
		});						
		//Сплошной лак: Матовый
		$('#solid_polish_matt').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material_bg.shininess = 50;
			}			
		});
		//Сплошной лак: Нет
		$('#solid_polish_no').change(function(){
			var isChecked = $(this).prop('checked');
			var isMetalChecked = $('#metal_cardboard').prop('checked');
			if( isChecked && !isMetalChecked ){
				material_bg.shininess = 20;
			}			
		});		

		//Выборочный лак: Глянцевый
		$('#partial_polish_glossy').change(function(){
			var isChecked = $(this).prop('checked');
			var isCongreveChecked = $('#congreve').prop('checked');
			if( isChecked ){
				material.shininess = 500;
			}			
			if( !isCongreveChecked ){
				material.bumpMap = textura_form_laq;
			}			
		});

		//Выборочный лак: Матовый
		$('#partial_polish_matt').change(function(){
			var isChecked = $(this).prop('checked');
			var isCongreveChecked = $('#congreve').prop('checked');
			if( isChecked ){
				material.shininess = 50;
				texture_shine = 50;
			}			
			if( !isCongreveChecked ){
				material.bumpMap = textura_form_laq;
			}			
		});

		//Выборочный лак: Нет
		$('#partial_polish_no').change(function(){
			var isChecked = $(this).prop('checked');
			if( isChecked ){
				material.shininess = material_bg.shininess;
			}			
		});											

		//Отправить запрос
		$('#constructor_send').click(function(evt){
			evt.preventDefault();
			var data = getFormData();
			var tableHtml = generateTable( data );
			$('#constructorTable').html( tableHtml );
			eupacking.toggleModal( 'modalConstructorSend' );
		});

		//Сохранить параметры
		$('#constructor_reset').click(function(){
			$('#mark').val('0').trigger('change');

			$('#mark').prop('disabled', false);
			$('#density').prop('disabled', false);
			$('input[name=solid_polish]').prop('disabled', false);
			$('#glue_points').val('1').trigger('change');

			//changeBoxColor( paperConfig[val]['white'] );
		});


		//WebGL
		window.temp = true; //???

		var shine = 0;
		var texture_shine=0;
		var tesnenie_shine=0;

		var spin = 'left';
		var controls, container;
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
		renderer.shadowMapEnabled = true;
		container = document.getElementById('constructor__canvas');
		container.appendChild(renderer.domElement);			

		// camera
		var camera = new THREE.PerspectiveCamera(45, 700 / 700, 1, 1000);
		camera.position.z = 500;

		// scene
		var scene = new THREE.Scene();

		// cube
		var geometry = new THREE.BoxGeometry(70, 300, 220 ); 	

		//textures
		var textura_bg_alpha = 				THREE.ImageUtils.loadTexture(boxConfig.textures + 'texture_bg_alpha.png');

		var textura_bg = 					THREE.ImageUtils.loadTexture(boxConfig.textures + 'texture_bg.png');
		var textura_bg_kashyr = 			THREE.ImageUtils.loadTexture(boxConfig.textures + 'texture_bg_noise.png');
		var textura_bg_with_window = 		THREE.ImageUtils.loadTexture(boxConfig.textures + 'texture_bg_notch_windows.png');

		var textura = 						THREE.ImageUtils.loadTexture(boxConfig.textures + 'texture_fullcolor_new.png');
		var textura_pantone_b = 			THREE.ImageUtils.loadTexture(boxConfig.textures + 'prosto_tcvet.png');
		var textura_pantone = 				THREE.ImageUtils.loadTexture(boxConfig.textures + 'prosto_tcvet_new.png');
		var textura_pantone_polnotsvet = 	THREE.ImageUtils.loadTexture(boxConfig.textures + 'tekstura_pantone_polnotsvet.png');

		var textura_tesnenie = 				THREE.ImageUtils.loadTexture(boxConfig.textures + 'tisnenie_zolonoy_falgoy.png');
		var textura_tesnenie_bw = 			THREE.ImageUtils.loadTexture(boxConfig.textures + 'tisnenie_zolonoy_falgoy_bw.png');
		var textura_tesnenie_gold = 		THREE.ImageUtils.loadTexture(boxConfig.textures + 'tisnenie_zolonoy_falgoy_gold.png');
		var textura_tesnenie_map = 			THREE.ImageUtils.loadTexture(boxConfig.textures + 'tisnenie_zolonoy_falgoy_noise.png');

		var bump_map = 						THREE.ImageUtils.loadTexture(boxConfig.textures + 'bump_map.jpg');//рельефная карта

		var textura_kongrev = 				THREE.ImageUtils.loadTexture(boxConfig.textures + 'textura_kongrev_bump_NRM.png');
		var textura_form_laq = 				THREE.ImageUtils.loadTexture(boxConfig.textures + 'textura_form_laq_NRM.png');


		//create layers
		var background = textura_bg;
		var beuty_layer = textura;
		var kongrev_enable = textura_kongrev; 


		/**** create materials ******/

		var material_alpha = new THREE.MeshPhongMaterial({ 
			color: boxConfig.colors.white, 
			alphaMap: textura_bg_alpha, 
			alphaTest: 0.5, 
			side: THREE.DoubleSide, 
			map: false,
		});

		var material_bg = new THREE.MeshPhongMaterial({ 
			map: background, 
			shininess: 20, 
			transparent: true,
		});

		var material = new THREE.MeshPhongMaterial({ 
			map: beuty_layer, 
			bumpMap: kongrev_enable, 
			shininess: 20, 
			transparent: true,
		});

		var material_tisnenie = new THREE.MeshPhongMaterial({ 
			map: textura_tesnenie_bw, 
			bumpMap: false, 
			shininess: 20, 
			transparent: true,
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
		var ambLight = new THREE.HemisphereLight(boxConfig.colors.white,boxConfig.colors.white,0.7);
		scene.add(ambLight);

		// add spotlight for the shadows
		var spotLight = new THREE.SpotLight( boxConfig.colors.white, 0.3, -100 );
		spotLight.position.set( 800, 200, 1000 );
		spotLight.castShadow = true;
		spotLight.shadowDarkness = 0.5;
		spotLight.shadowMapSoft = true;
		spotLight.shadowMapWidth = 1024;
		spotLight.shadowMapHeight = 1024;
		spotLight.lookAt(new THREE.Vector3(  0, 0, 0 ));

		scene.add( spotLight ); 


		var spotLight2 = new THREE.SpotLight( boxConfig.colors.white, 0.2, -50 );
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


	});	
})(jQuery);		
