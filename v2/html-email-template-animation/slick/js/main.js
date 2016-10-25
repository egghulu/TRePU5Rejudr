var landscape = 0;
$(document).ready(function() {   
	

	$('#iframe').css({
		height:$(window).height()
	});


	$('.setting_box').animate({ left:0 }, 1000, "easeOutSine");
	
	$('#setting_btn').click(function(){
		

		if($('.setting_box').position().left == 0){
			$('.setting_box').animate({ left:-280 }, 500, "easeOutSine");
			

		}else{
			$('.setting_box').animate({ left:0 }, 500, "easeOutSine");
			
		}
		

	})
	
	
	
	


	
	var handle = setInterval(checkhover,5000);

	function checkhover(){
		 
		$('.setting_box').animate({ left:-280 }, 500, "easeOutSine");

	}

	
	$('.setting_box').mouseenter(function(){
	  
	    clearInterval(handle);
	    handle = 0;
	}).mouseleave(function(){
	   
	    handle = setInterval(checkhover,5000);
	});

	var icon_array = [];
	var Layout_array = [];
	var color_name =[];
	var active_layout;
	var color_active;
	var active_respon = 'icon_imac'

	$('#responsive_box img').each(function(i){
		icon_array[i] = $(this).attr('id');
		click_icon_responsive(icon_array[i]);
	});

	$('.layout_box a').each(function(i){
			Layout_array[i] = $(this).attr('id');	
			active_layout = Layout_array[0]	

			click_layout(Layout_array[i]);

	});
	/*$('#color_box a').each(function(i){

		color_name[i] = $(this).attr('id');
		
		color_active = color_name[0];
		click_color(color_name[i]);
		
			
	});*/

	function click_icon_responsive(icon){
		$('#'+icon).parent().click(function(){
			if($('#'+icon).attr('id') == 'icon_imac'){

				active_respon = 'icon_imac'
				
				$('#box_iframe').animate({ width:'100%' ,height:$(window).height(),top:0, left:0}, 500, "easeOutSine");
				$('#iframe').animate({ width:'100%' ,height:$(window).height()}, 500, "easeOutSine");
				$('#box_iframe').css({
					marginTop:0

				})

					$('.imac-screen').animate({ opacity:0}, 100, "easeOutSine");
					$('.respon').removeClass('imac-screen');
			}
			
			if($('#'+icon).attr('id') == 'icon_iphone'){

				active_respon = 'icon_iphone'
				
				/*$('#box_iframe').animate({ width:480 ,height:$(window).height()}, 500, "easeOutSine");
				$('#iframe').animate({ width:480 ,height:$(window).height()}, 500, "easeOutSine");
				$('#box_iframe').css({
					marginTop:0

				})*/
				$('.respon').removeClass('imac-screen');
				$('.respon').addClass('imac-screen');

				
				landscape = 0;	
				$('#box_iframe').animate({ width:330 ,height:585, left:$(window).width()/2-162,top:$(window).height()/2-293}, 500, "easeOutSine");
				$('#iframe').animate({ width:330 ,height:585}, 500, "easeOutSine");
				$('#box_iframe').css({
					marginTop:0

				})

				$('.imac-screen').animate({ opacity:1}, 100, "easeOutSine");
				
				$('.imac-screen').animate({ top:($(window).height()/2)-($('.imac-screen').height()/2),left:($(window).width()/2)-($('.imac-screen').width()/2)}, 100, "easeOutSine");
				
				
				 $('.imac-screen').animate({
						'marginTop' : 0
			       	
			       	
			    },{
			        duration:600,
			        step: function(now, fx) {
			            $('.imac-screen').css('transform','rotate(' + now+ 'deg)');
			        }
			    });
				 
			

			}
			if($('#'+icon).attr('id') == 'icon_iphone_landscape'){



				active_respon = 'icon_iphone_landscape' 

				
				$('.respon').removeClass('imac-screen');
				$('.respon').addClass('imac-screen');

				landscape = 90;	
				$('#box_iframe').animate({ width:566 ,height:320 ,left:$(window).width()/2-283,top:($(window).height()/2-164)-90}, 500, "easeOutSine");
				$('#iframe').animate({ width:566 ,height:335}, 500, "easeOutSine");
				//$('#box_iframe').animate({ marginTop:($(window).height()/2)-150}, 500, "easeOutSine");

	
				$('.imac-screen').animate({ top:($(window).height()/2)-($('.imac-screen').height()/2),left:($(window).width()/2)-($('.imac-screen').width()/2)}, 100, "easeOutSine");
				$('.imac-screen').animate({ opacity:1}, 100, "easeOutSine");
				

				 $('.imac-screen').animate({

			        'marginTop' : -90,
			       	
			    },{
			        duration:600,
			        step: function(now, fx) {
			        	
			            $('.imac-screen').css('transform','rotate(' + now + 'deg)');
			          
			        }
			    });
				 $('.imac-screen').attr('style','margin-top:0')
				
				
			}
			
			
			$('li').removeClass('active_responsive');
			$(this).addClass('active_responsive');

			

		});
	}

	function click_layout(layout){
			
		$('#'+layout).click(function() {

			active_layout = layout;	
			$('a').removeClass('active_layout');
			$(this).addClass('active_layout');
			changeLayout(color_active,active_layout);
			
		});
		
	};

	function changeLayout(c_active,L){
		
		//$('#iframe').attr('src','item/'+c_active+'/'+L+'.html');
		$('#iframe').attr('src','item/'+L+'.html');
	
		
		$('#iframe').ready(function(){
			iframe_height();

		})
			
		
	}



	function click_color(color){

		$('#'+color).click(function(){
			
			var c_name = $(this).attr('id');
			color_active = c_name;

			addRel(color_active);

			$('a').removeClass('active_layout');
			$('a').removeClass('active_color');
			$(this).addClass('active_color');
			$('#'+active_layout).addClass('active_layout');

			$('#iframe').attr('src','item/'+c_name+'/'+active_layout+'.html');
			
		});
			

	}
	

    


	function iframe_height(){
		
			/*$('#iframe').css({
			
			height:$(window).height()
		});*/


		click_icon_responsive(active_respon);
	}


	

	screenPreview();
	addRel(color_active);

	

	function addRel(activeColor){

		$('.screenshot').each(function(i){

			if($(this).attr('id') == "TemplateBuilder"){

				$(this).attr('rel','images/layout/'+$(this).attr('id')+'.jpg')
			}else{
				//$(this).attr('rel','images/layout/'+activeColor+'/'+$(this).attr('id')+'.jpg')
				$(this).attr('rel','images/layout/'+$(this).attr('id')+'.jpg')
			}
			
			//$(this).attr('rel','item/'+activeColor+'/layout/'+$(this).attr('id')+'.jpg')
			//$(this).attr('rel','images/layout/'+$(this).attr('id')+'.jpg')
		})
	};
	
	
	function screenPreview(){

		xOffset = 70
		yOffset = 290;
			

		

		$("a.screenshot").hover(function(e){

			this.t = this.title;
			this.title = "";	
			var c = (this.t != "") ? "<br/>" + this.t : "";
			$("body").append("<p id='screenshot'><img height='"+($('.setting_box').height()-60)+"' src='"+ this.rel +"' alt='url preview' />"+ c +"</p>");								 
			$("#screenshot")
				.css("top",(xOffset) + "px")
				.css("left",(yOffset) + "px")
				.fadeIn("fast");

				/*.css("top",(e.pageY - xOffset) + "px")
				.css("left",(e.pageX + yOffset) + "px")
				.fadeIn("fast");*/

	    },
		function(){
			this.title = this.t;	
			$("#screenshot").remove();
	    });	
		$("a.screenshot").mousemove(function(e){
			$("#screenshot")
				.css("top",(xOffset) + "px")
				.css("left",(yOffset) + "px");
				/*.css("top",(e.pageY - xOffset) + "px")
				.css("left",(e.pageX + yOffset) + "px");*/
		});		
	};	
});

$(window).resize(function(){
	
	if(navigator.userAgent.match(/Android/i) ||
       navigator.userAgent.match(/webOS/i) ||
       navigator.userAgent.match(/iPhone/i) ||
       navigator.userAgent.match(/iPad/i) ||
       navigator.userAgent.match(/iPod/i) ||
       navigator.userAgent.match(/BlackBerry/) || 
       navigator.userAgent.match(/Windows Phone/i) || 
       navigator.userAgent.match(/ZuneWP7/i)){


		
         

	}else{

		$('#iframe').css({
			height:$(window).height()
		});

		$('#box_iframe').css({
			left:$(window).width()/2-($('#box_iframe').width()/2),
			top:$(window).height()/2-($('#box_iframe').height()/2)-landscape

		})

	
		$('.imac-screen').css({
			left:$(window).width()/2-($('.imac-screen').width()/2),
			top:$(window).height()/2-($('.imac-screen').height()/2)

		})

	}

	if($.browser.mozilla || $.browser.msie || $.browser.opera || $.browser.safari || $.browser.webkit) {
	 	
	};
	
});



