(function($){
	$(document).ready(function() {

		var paperConfig = [
			{ name: 'Excellent Top', 			color: 'white', 			density: [215, 230, 250, 275, 300, 325, 350, 375, 400, 425, 450], 					disabled: false },
			{ name: 'Kromopak-GC2', 			color: 'white', 			density: [200, 215, 230, 245, 260, 275, 300, 325, 350, 375, 400], 					disabled: false },
			{ name: 'Kromoplex-GC2', 			color: 'white', 			density: [200, 215, 230, 245, 260, 275, 300, 325, 350, 375, 400], 					disabled: false },
			{ name: 'DELIGHT GLOSS', 			color: 'white', 			density: [190, 210, 230, 260, 310, 360, 400], 										disabled: false },
			{ name: 'SENATOR C2S Art Board', 	color: 'white', 			density: [230, 210, 250, 300], 														disabled: false },
			{ name: 'ALASKA PLUS GC2', 			color: 'white', 			density: [205, 220, 235, 255, 280, 305, 330], 										disabled: false },
			{ name: 'ATELIER GC-1', 			color: 'white', 			density: [220, 240, 260, 280, 300, 325, 350], 										disabled: false },
			{ name: 'SIMCOTE', 					color: 'white', 			density: [200, 210, 225, 235, 250, 260, 275, 290, 315, 340], 						disabled: false },
			{ name: 'NINGBO FOLD GC-1', 		color: 'white', 			density: [220, 230, 250, 270, 280, 300, 325, 350, 400, 440, 450], 					disabled: false },
			{ name: 'BRAVO GC-1', 				color: 'white', 			density: [210, 230, 250, 270, 300, 320, 350, 360], 									disabled: false },
			{ name: 'ARKTIKA GC-1', 			color: 'white', 			density: [200, 215, 230, 250, 275, 300, 325, 350], 									disabled: false },
			{ name: 'MAULE RC', 				color: 'brown', 			density: [200, 225, 245, 260, 275, 295, 305, 325, 345, 365, 390, 420], 				disabled: false },
			{ name: 'Avanta prima', 			color: 'white', 			density: [200, 210, 220, 230, 245, 255, 270, 290, 315, 335, 360], 					disabled: false },
			{ name: 'Zenith (Manila back)', 	color: 'white', 			density: [235, 250, 270, 295, 325, 360], 											disabled: false },
			{ name: 'TAMBRITE', 				color: 'white', 			density: [200, 210, 220, 230, 240, 250, 260, 270, 285, 310, 335], 					disabled: false },
			{ name: 'СКБ', 						color: 'brown', 			density: [175, 195, 220, 235, 255, 290, 315, 350, 380], 							disabled: false },
			{ name: 'SVETOCOAT', 				color: 'brown', 			density: [175, 200, 235, 280, 310, 330], 											disabled: false },
			{ name: 'Unicolor-GD3', 			color: 'browngray', 		density: [230, 250, 280, 300, 320, 350, 380, 400, 420, 450], 						disabled: false },
			{ name: 'Multicolor Mirabell-GD2', 	color: 'browngray', 		density: [230, 250, 280, 300, 320, 350, 380, 400, 420, 450], 						disabled: false },
			{ name: 'Veno Freeze-GD2', 			color: 'browngray', 		density: [250, 275, 300, 325, 350, 375, 400], 										disabled: false },
			{ name: 'SERVIBOARD GD-2', 			color: 'browngray', 		density: [280, 300, 320, 350, 380, 400], 											disabled: false },
			{ name: 'UMKA COLOR GD-2', 			color: 'browngray', 		density: [230, 250, 280, 300, 320, 350, 400, 450, 500, 550], 						disabled: false },
			{ name: 'НЕВА', 					color: 'browngray', 		density: [220, 240, 280, 300, 320, 350, 390, 420, 450, 480], 						disabled: false },
			{ name: 'Hansol Paper Co Ltd', 		color: 'browngray', 		density: [180, 200, 220, 230, 240, 250, 260, 280, 300, 330, 350, 400, 450, 500], 	disabled: false },
			{ name: 'Ecoprint-GT3', 			color: 'white', 			density: [220, 230, 250, 280, 300, 320, 350, 380, 400, 420, 450], 					disabled: false },
			{ name: 'Multicolor Belvedere-GT2', color: 'white', 			density: [230, 250, 280, 300, 320, 350, 380, 400, 420, 450], 						disabled: false },
			{ name: 'Topcolor-GT1', 			color: 'white', 			density: [250, 280, 300, 320], 														disabled: false },
			{ name: 'CONTIBOARD GT-1', 			color: 'white', 			density: [210, 230, 250, 275, 300, 320, 350, 400], 									disabled: false },
			{ name: 'Лайнер', 					color: 'brown', 			density: [], 																		disabled: true },
		];

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

		//bg
		function setMaterialBgShininess(shininess){
			boxConfig.materials.bg.shininess = shininess;
		}

		function setMaterialBgColor(color){
			boxConfig.materials.bg.color.setHex( boxConfig.colors[color] );
		}

		function setMaterialBgMap(texture){
			boxConfig.materials.bg.map = texture;
		}

		//alpha
		function setMaterialAlphaColor(color){
			boxConfig.materials.alpha.color.setHex( boxConfig.colors[color] );  
		}

		function setMaterialAlphaMap(texture){
			boxConfig.materials.alpha.map = texture; 
		}

		//simple
		function setMaterialShininess(shininess){
			boxConfig.materials.simple.shininess =  shininess
		}

		function setMaterialBumpMap(texture){
			boxConfig.materials.simple.bumpMap = texture;
		}

		//embossing
		function setMaterialEmbossingMap(texture){
			boxConfig.materials.embossing.map = texture;
		}

		function setMaterialEmbossingBumpMap(texture){
			boxConfig.materials.embossing.bumpMap = texture;
		}

		function setMaterialEmbossingShininess(shininess){
			boxConfig.materials.embossing.shininess = shininess;
		}

		function setBoxConfig(){
			var data = getFormData();
			//Кашировка
			if( data.fields.laminating.value ){
				setMaterialAlphaMap( boxConfig.textures.bg_laminating )
				setMaterialAlphaColor( 'brown' );
			}else{
				setMaterialAlphaMap( false )
				setMaterialAlphaColor( 'white' );
			}
			//Металлизированный картон
			if( data.fields.metal_cardboard.value ){
				setMaterialBgShininess( 120 );
				setMaterialBgColor( 'gray' );
			}else{
				setMaterialBgShininess( 20 );
				setMaterialBgColor( 'white' );			
			}
			//Вырубные окошки
			if( data.fields.notch_windows.value ){
				setMaterialBgMap( boxConfig.textures.bg_notch_windows );
			}else{
				setMaterialBgMap( boxConfig.textures.bg );
			}
			//Конгрев
			if( data.fields.congreve.value ){
				setMaterialBumpMap( boxConfig.textures.congreve );
			}else{
				setMaterialBumpMap( false );			
			}
			//Красочность: Полноцвет + pantone
			if( data.fields.fullcolor_pantone.value ){
				setMaterialEmbossingMap( boxConfig.textures.embossing );
			}
			//Красочность: Полноцвет
			if( data.fields.fullcolor.value ){
				setMaterialEmbossingMap( boxConfig.textures.embossing_bw );
			}
			//Красочность: Pantone
			if( data.fields.pantone.value ){
				setMaterialEmbossingMap( boxConfig.textures.embossing );
			}
			//Сплошной лак: Глянцевый
			if( data.fields.solid_polish_glossy.value ){
				setMaterialBgShininess( 500 );
			}
			//Сплошной лак: Матовый
			if( data.fields.solid_polish_matt.value ){
				setMaterialBgShininess( 50 );
			}
			//Сплошной лак: Нет
			if( data.fields.solid_polish_no.value && !data.fields.metal_cardboard.value ){
				setMaterialBgShininess( 20 );
			}
			//Выборочный лак: Глянцевый
			if( data.fields.partial_polish_glossy.value ){
				setMaterialShininess( 500 );
				if( !data.fields.congreve.value ){
					setMaterialBumpMap( boxConfig.textures.partial_polish );
				}	
			}
			//Выборочный лак: Матовый
			if( data.fields.partial_polish_matt.value ){
				setMaterialShininess( 50 );
				if( !data.fields.congreve.value ){
					setMaterialBumpMap( boxConfig.textures.partial_polish );
				}	
			}
			//Выборочный лак: Нет
			if( data.fields.partial_polish_no.value ){
				setMaterialShininess( boxConfig.materials.bg.shininess );
			}
			//Тиснение фольгой
			if( data.fields.embossing.value ){
				setMaterialEmbossingMap( boxConfig.textures.embossing_gold );
				setMaterialEmbossingBumpMap( boxConfig.textures.embossing_map );
				setMaterialEmbossingShininess( 1000 );
			}else{
				setMaterialEmbossingBumpMap( false );
				setMaterialEmbossingShininess( boxConfig.materials.bg.shininess );		
			}
			boxConfig.materials.alpha.needsUpdate = true;
			boxConfig.materials.bg.needsUpdate = true;
			boxConfig.materials.simple.needsUpdate = true;
			boxConfig.materials.embossing.needsUpdate = true;			
			targetRotation += Math.PI;			
		}

		//Материал: Марка
		$('#mark').each(function(){
			$(this).empty().trigger("change");
			paperConfig.map(function(item, key){
				var option = new Option(item.name, key, false, false);
				if( item.disabled ){ $(option).prop('disabled', true); }
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
				setMaterialAlphaColor( paperConfig[val]['color'] );
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
			$('#mark').val('0').trigger('change');
			$('#mark').prop('disabled', isChecked);
			$('#density').prop('disabled', isChecked);
		});

		//Материал: Металлизированный картон
		$('#metal_cardboard').change(function(){
			var isChecked = $(this).prop('checked');
			$('input[name=solid_polish]').prop('disabled', isChecked);		
		});

		
		var boxUpdateControls = [
			'laminating',				//Материал: Кашировка
			'metal_cardboard',			//Материал: Металлизированный картон
			'fullcolor_pantone',		//Красочность: Полноцвет + pantone
			'fullcolor',				//Красочность: Полноцвет
			'pantone',					//Красочность: Pantone
			'embossing',				//Отделка: Тиснение фольгой
			'notch_windows',			//Отделка: Вырубные окошки
			'congreve',					//Отделка: Конгрев
			'solid_polish_glossy',		//Сплошной лак: Глянцевый
			'solid_polish_matt',		//Сплошной лак: Матовый
			'solid_polish_no',			//Сплошной лак: Нет
			'partial_polish_glossy',	//Выборочный лак: Глянцевый
			'partial_polish_matt',		//Выборочный лак: Матовый
			'partial_polish_no',		//Выборочный лак: Нет
		];

		boxUpdateControls.map(function(control){
			$(`#${control}`).change(function(){
				setBoxConfig();
			});
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
		$('#constructor_reset').click(function(evt){
			evt.preventDefault();
			$('#constructorForm').get(0).reset();
			$('#mark').val('0').trigger('change');

			$('#mark').prop('disabled', false);
			$('#density').prop('disabled', false);
			$('input[name=solid_polish]').prop('disabled', false);
			$('#glue_points').val('1').trigger('change');

			setMaterialAlphaColor( 'white' );
			setBoxConfig();
		});


		$("#stepLeft").on('click dblclick', function(){
			targetRotation -= 0.5;
		});

		$("#stepRight").on('click dblclick', function(){
			targetRotation += 0.5;
		});

		//WebGL
		window.temp = true; //???

		var spin = 'left';
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
		var loader = new THREE.TextureLoader();
		var loadedCount = 0;
		$.map(boxConfig.textures, function(value, key){
			boxConfig.textures[key] = loader.load(boxConfig.texturesPath + key+'.png', function(){
				loadedCount++;
				if( Object.keys(boxConfig.textures).length-1 === loadedCount ){
					$('.constructor__preview').addClass('constructor__preview--loaded');
				}
			});
		});

		//create materials
		boxConfig.materials.alpha = new THREE.MeshPhongMaterial({ 
			color: boxConfig.colors.white, 
			alphaMap: boxConfig.textures.bg_alpha, 
			alphaTest: 0.5, 
			side: THREE.DoubleSide, 
			map: false,
		});

		boxConfig.materials.bg = new THREE.MeshPhongMaterial({ 
			map: boxConfig.textures.bg, 
			shininess: 20, 
			transparent: true,
		});

		boxConfig.materials.simple = new THREE.MeshPhongMaterial({ 
			map: boxConfig.textures.fullcolor, 
			bumpMap: boxConfig.textures.congreve, 
			shininess: 20, 
			transparent: true,
		});

		boxConfig.materials.embossing = new THREE.MeshPhongMaterial({ 
			map: boxConfig.textures.embossing_bw, 
			bumpMap: false, 
			shininess: 20, 
			transparent: true,
		});

		var materialsArr = [];
		$.map(boxConfig.materials, function(material){
			materialsArr.push(material);
		});

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

		var cube = new THREE.SceneUtils.createMultiMaterialObject( geometry, materialsArr );

		cube.overdraw = true;
		cube.receiveShadow = true;
		cube.castShadow = true;

		cube.rotation.y -= Math.PI * 0.3;

		scene.add(cube);

		//AMBIENT LIGHT
		var ambLight = new THREE.HemisphereLight(boxConfig.colors.white, boxConfig.colors.white, 0.7);
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

		$(window).on('resize', function(){
			requestAnimationFrame(function(){
				onWindowResize();
			});
		});
		onWindowResize();

		function onWindowResize() {
			var size = renderer.getSize();
			var width = $(renderer.domElement).outerWidth();
			$(renderer.domElement).height( width*(size.height/size.width) );
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
