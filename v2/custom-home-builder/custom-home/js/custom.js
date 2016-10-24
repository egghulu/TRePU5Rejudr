/*
  * Copyright 2015 Kopasoft http://kopatheme.com/.
  * MIT License.
*/
"use strict";
jQuery(document).ready(function() {
	var masory_epl;
	var menu_height;
	var map_change;
	/*---------------goto top-----------------*/
	jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.real_scroll_top').fadeIn();
        } else {
            jQuery('.real_scroll_top').fadeOut();
        }
    }); 

    jQuery('.real_scroll_top').on('click',function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
	/*---------------menu click-----------------*/
	if (jQuery('.real_menu_click').length > 0) {
		jQuery('.real_menu_click').superclick({
		    speed: 'normal',
		    delay: 300,
		    cssArrows: false,
		    popUpSelector: 'ul',
		    animation:{opacity:'show',height:'show'},
		    animationOut:  {opacity:'hide',height:'hide'},
		});
	}	
	/*---------------search menu-----------------*/
	if (jQuery('.real_search').length > 0) {
		jQuery('.fa-search').on('click',function(){
			jQuery('.real_search form').toggle(300);
		});
	}
	/*---------------menu scroll bar-----------------*/
	if (jQuery('#real_menu_scroll').length > 0) {
		menu_height = jQuery(window).height();
		jQuery('.real_close_menu_scroll').on('click',function(){
			jQuery('#real_menu_scroll').height(0);
		})	
	}
	jQuery('.real_menubar i').on('click',function(){
		jQuery('#real_menu_scroll').height(menu_height);
	});
	/*---------------menu supperfish-----------------*/
	jQuery('.real_primary_menu').superfish({
		delay:200,
		animation:   {opacity:'show',height:'show'},
		speed:       'fast',
		popUpSelector: 'ul,.real_wrap_menu',
		autoArrows:  false,
	});
	/*---------------sliderPro-----------------*/
	if (jQuery('.real_widget_slider').length > 0) {
	    var sp1 = jQuery('.slider-pro');    
	    sp1.sliderPro({
	        height: 295,
	        forceSize: 'fullWidth',
	        arrows: true,
	        buttons: false,
	        waitForLayers: false,
	        autoplay: false,
	        fadeOutPreviousSlide: false,
	        fadeArrows:false,
	        autoScaleLayers: true,
	        slideDistance: 0,
	        autoplayDelay: 5000,
	        breakpoints: {
		        1024:{
		        	height:295,
		        }
		    },
		    init: function(){
	           jQuery(".real_widget_slider .loading").hide();    
	           jQuery(".real_widget_slider .slider-pro").show();   
                   jQuery(".real_widget_slider .sp-image.sp-image-bg").css({
                     "margin-top": "0",
                     "margin-left": "0"
                   });
	        }
	    });
	};
	/*---------------skillpro-----------------*/
	if (jQuery('.real_skill').length > 0) {
		jQuery( ".skill_01" ).progressbar({
		    value: 60,
		});
		jQuery( ".skill_02" ).progressbar({
		    value: 70,
		});
		jQuery( ".skill_03" ).progressbar({
		    value: 80,
		});
		jQuery( ".skill_04" ).progressbar({
		    value: 50,
		});
		jQuery( ".skill_06" ).progressbar({
		    value: 60,
		});
		jQuery( ".skill_07" ).progressbar({
		    value: 70,
		});
		jQuery( ".skill_08" ).progressbar({
		    value: 80,
		});
		jQuery( ".skill_05" ).progressbar({
		    value: 50,
		});
	}
	/*---------------fliter-----------------*/
	if (jQuery('.real_widget_has_filter').length > 0) {
		var container_01 = jQuery('.real_widget_has_filter .real_filter_content >ul');
		var masonryOptions = {
			columnWidth: 1,
		  	itemSelector : '.col-md-3'
		};

		container_01.imagesLoaded(function(){
		  	var m_grid = container_01.masonry( masonryOptions);
		  	var m_filters_01 = jQuery('.real_widget_has_filter .filters-options li');

			m_filters_01.on('click',function(event){
				event.preventDefault();
				m_filters_01.removeClass('active');
				jQuery(this).addClass('active');
				var m_filter_val = jQuery(this).data('val');
				container_01.find('.col-md-3').each(function(){					
					var m_item_val = jQuery(this).data('val').toString().split(',');					
					var a = m_item_val.indexOf(m_filter_val.toString()) > -1;
				    if (m_filter_val == "*") {
						jQuery(this).removeClass('hide');
						jQuery(this).addClass('show');
					} else {
						if ( a == true) {
							jQuery(this).removeClass('hide');
							jQuery(this).addClass('show');	
						} else {
							jQuery(this).removeClass('show');
							jQuery(this).addClass('hide');
						}
					}								
				});

				container_01.masonry('layout');
			});

		});
	}
	/*---------------owl carousel-----------------*/
	if(jQuery('.real_widget_intro_3_has_owl').length){
		var owl = jQuery(".real_widget_intro_3_has_owl .widget-content .real_wrap_owl");
	      owl.owlCarousel({
	          items : 3,
	          itemsDesktop : [1000,3],
	          itemsDesktopSmall : [900,2],
	          itemsTablet: [600,1],
	          itemsMobile : false,
	          navigation:true,
	          pagination : false,
	          autoplay: false,
	          navigationText: [
		      "Previous Post",
		      "Next Post"
		      ],
	    });
    }
    if(jQuery('.real_widget_intro_2_has_owl').length){
		var owl = jQuery(".real_widget_intro_2_has_owl .widget-content .real_wrap_owl");
	      owl.owlCarousel({
	          items : 2,
	          itemsDesktop : [1000,1],
	          itemsDesktopSmall : [900,1],
	          itemsTablet: [600,1],
	          itemsMobile : false,
	          navigation:true,
	          pagination : false,
	          autoplay: false,
	          navigationText: [
		      "PREV",
		      "NEXT"
		      ],
	    });
    }
    if(jQuery('.real_widget_owl_img').length){
		var owl = jQuery(".real_widget_owl_img .widget-content .real_wrap_owl");
	      owl.owlCarousel({
	          items : 1,
	          itemsDesktop : [1000,1],
	          itemsDesktopSmall : [900,1],
	          itemsTablet: [600,1],
	          itemsMobile : false,
	          navigation:true,
	          pagination : false,
	          autoplay: false,
	          navigationText: [
		      "<i class='fa fa-angle-left'></i>",
		      "<i class='fa fa-angle-right'></i>"
		      ],
	    });
    }
    if(jQuery('.real_widget_list_blockquote').length){
		var owl = jQuery(".real_widget_list_blockquote .widget-content .real_wrap_owl");
	      owl.owlCarousel({
	          items : 1,
	          itemsDesktop : [1000,1],
	          itemsDesktopSmall : [900,1],
	          itemsTablet: [600,1],
	          itemsMobile : false,
	          navigation:false,
	          pagination : true,
	          autoplay: false,
	    });
    }
    if(jQuery('.real_widget_testimonial').length){
		var owl = jQuery(".real_widget_testimonial .widget-content .real_wrap_owl");
	      owl.owlCarousel({
	          items : 1,
	          itemsDesktop : [1000,1],
	          itemsDesktopSmall : [900,1],
	          itemsTablet: [600,1],
	          itemsMobile : false,
	          navigation:true,
	          pagination : false,
	          autoplay: false,
	          navigationText: [
		      "Prev",
		      "Next"
		      ],
	    });
    }
   
    if(jQuery('.entry-thumb.real_has_owl').length){
		var owl = jQuery(".entry-thumb.real_has_owl");
	      owl.owlCarousel({
	          items : 1,
	          itemsDesktop : [1000,1],
	          itemsDesktopSmall : [900,1],
	          itemsTablet: [600,1],
	          itemsMobile : false,
	          navigation:false,
	          pagination : true,
	          autoplay: false,
	    });
    }
	/*---------------match height-----------------*/
	jQuery('.ul-mh').children().matchHeight();
	jQuery('.ul-mh2').children().matchHeight();
	jQuery('.ul-mh3').children().matchHeight();
	/*---------------gmap 3-----------------*/
	if(jQuery('.real_widget_map.real_style_01').length){
		jQuery('.real_widget_map.real_style_01 .real_map').gmap3({
			 map: {
			    options: {
			      maxZoom: 12,
				  mapTypeControl: false, 
				  mapTypeId: google.maps.MapTypeId.ROADMAP,
			    }  
			 },
			 marker:{
			    address: "Singapore",
			    options: {
			     icon: new google.maps.MarkerImage(
			       "images/map-2.png",
			       new google.maps.Size(339, 339, "px", "px")
			     )
			    }
			 }
			},
		"autofit" );
	}
	if(jQuery('.real_widget_map.real_style_02').length){
		jQuery('.real_widget_map.real_style_02 .real_map').height("530px").gmap3({
			 map: {
			    options: {
			      zoom: 15,
				  mapTypeControl: false, 
				  mapTypeId: google.maps.MapTypeId.ROADMAP,
			    }  
			 },
			 trafficlayer:{
  			},
			 marker:{
			 	values:[
			 		{address: "Ha Noi, Viet Nam",
					    options: {
					     icon: new google.maps.MarkerImage(
					       "images/map-3.png",
					       new google.maps.Size(42, 58, "px", "px")
					     )
					    }
					},
					{address: "Nam Dinh, Viet Nam",
					    options: {
					     icon: new google.maps.MarkerImage(
					       "images/map-3.png",
					       new google.maps.Size(42, 58, "px", "px")
					     )
					    }
					},
					{address: "Hung Yen, Viet Nam",
					    options: {
					     icon: new google.maps.MarkerImage(
					       "images/map-3.png",
					       new google.maps.Size(42, 58, "px", "px")
					     )
					    }
					},
					{address: "Hai Duong, Viet Nam",
					    options: {
					     icon: new google.maps.MarkerImage(
					       "images/map-3.png",
					       new google.maps.Size(42, 58, "px", "px")
					     )
					    }
					},
			 	],
			    
			 }
			},
		"autofit" );
	}
	if(jQuery('.real_widget_map.real_style_03').length){
		jQuery('.real_widget_map.real_style_03 .real_map').height("490px").gmap3({
			 map: {
			    options: {
			      maxZoom: 3,
				  mapTypeControl: false, 
				  mapTypeId: google.maps.MapTypeId.ROADMAP,
			    }  
			 },
			 marker:{
			    address: "baffin bay",
			    options: {
			     icon: new google.maps.MarkerImage(
			       "images/map-5.png",
			       new google.maps.Size(42, 58, "px", "px")
			     )
			    }
			 }
			},
		"autofit" );
	}
	if(jQuery('.real_widget_map.real_style_04').length){
		jQuery('.real_widget_map.real_style_04 .real_map').height("330px").gmap3({
			 map: {
			    options: {
			      maxZoom: 13,
				  mapTypeControl: false, 
				  mapTypeId: google.maps.MapTypeId.ROADMAP,
			    }  
			 },
			 marker:{
			 	values:[
			 		{address: "grand st,new york",
					    options: {
					     icon: new google.maps.MarkerImage(
					       "images/map-4.png",
					       new google.maps.Size(42, 58, "px", "px")
					     )
					    }
					},
					{address: "park slope,new york",
					    options: {
					     icon: new google.maps.MarkerImage(
					       "images/map-6.png",
					       new google.maps.Size(49, 49, "px", "px")
					     )
					    }
					},
					{address: "bayonne,new york",
					    options: {
					     icon: new google.maps.MarkerImage(
					       "images/map-4.png",
					       new google.maps.Size(42, 58, "px", "px")
					     )
					    }
					},
					{address: "water st,new york",
					    options: {
					     icon: new google.maps.MarkerImage(
					       "images/map-7.png",
					       new google.maps.Size(49, 49, "px", "px")
					     )
					    }
					},
			 	],
			    // address: "new york",
			    // options: {
			    //  icon: new google.maps.MarkerImage(
			    //    "images/map-4.png",
			    //    new google.maps.Size(42, 58, "px", "px")
			    //  )
			    // }
			 }
			},
		"autofit" );
	}
	if(jQuery('#epl_adv_tab_map_sat').length){
		var map_change = jQuery('#epl_adv_tab_map_sat').height("315px").gmap3({
			 map: {
			    options: {
			      maxZoom: 13,
				  mapTypeControl: false, 
				  mapTypeId: google.maps.MapTypeId.ROADMAP,
			    }  
			 },
			 marker:{
			    address: "new york",
			    options: {
			     icon: new google.maps.MarkerImage(
			       "images/map-4.png",
			       new google.maps.Size(42, 58, "px", "px")
			     )
			    }
			 }
			},
		"autofit" );
	}
	
	/*---------------instagram-----------------*/	
	 if( jQuery('.real_widget_instagram .widget-content .real_instagram').length ){
        jQuery('.real_widget_instagram .widget-content .real_instagram').each( function() {
            var $this = jQuery(this);
            var ins_Id = $this.attr('data-access-id');
            console.log(ins_Id);
            var ins_Token = $this.attr('data-access-token');
            var ins_count = $this.attr('data-count');
            $this.pongstgrm({
                accessId: ins_Id,
                accessToken: ins_Token,
                count: ins_count,
                show: 'recent',
                button: false,
                column: "real_width_in"
            });
        });
    }
	/*---------------accordion-----------------*/	
	if(jQuery('.panel-group').length){
    	var panel_titles = jQuery('.panel-group .panel-title a');
        panel_titles.addClass("collapsed");
        jQuery('.panel-heading.active').find(panel_titles).removeClass("collapsed");
        panel_titles.on('click',function(){
            jQuery(this).closest('.panel-group').find('.panel-heading').removeClass('active');
            var pn_heading = jQuery(this).parents('.panel-heading');
            if (jQuery(this).hasClass('collapsed')) {
                pn_heading.addClass('active');
            } else {
                pn_heading.removeClass('active');
            }
        });
    }
    /*---------------fitvids video-----------------*/
    if(jQuery('.real_tab_video').length){
    	jQuery('.real_tab_video').fitVids();
    }
    if(jQuery('.real_wrap_video').length){
    	jQuery('.real_wrap_video').fitVids();
    }
    if(jQuery('.epl-video-container').length){
    	jQuery('.epl-video-container').fitVids();
    }
    if(jQuery('.elp-author-video').length){
    	jQuery('.elp-author-video').fitVids();
    }
    /*---------------jquery for epl my fix-----------------*/
    if(jQuery('.epl-switch-view').length){
    	//click view list
    	jQuery('.epl-switch-view .view-list').on('click',function(){
    		var bol = jQuery(this).hasClass('epl-current-view');
    		if(bol){
    			alert("it's turn on");	
    		}else{
    			jQuery(this).addClass('epl-current-view');
    			var element_near = jQuery(this).next();
    			jQuery(element_near).removeClass('epl-current-view');
    			//remove class epl_listing_grid_view
    			var parent = jQuery(this).closest('.entry-content');
    			remove_class_epl_listing_grid_view(parent);
    			setTimeout(function(){
    				jQuery('body').imagesLoaded( function() {
				        masory_epl = jQuery('.epl-archive-default >.entry-content').masonry({        
				            itemSelector: '.epl-listing-post',
				            columnWidth: 1,
				            isAnimated: true,
				    	});
				    	masory_epl.masonry('layout');
				    });
    			},1000);
    			//masory_epl.masonry('layout');
    		}
    	});
    	//click view grid
    	jQuery('.epl-switch-view .view-grid').on('click',function(){
    		var bol = jQuery(this).hasClass('epl-current-view');
    		if(bol){
    			alert("it's turn on");	
    		}else{
    			jQuery(this).addClass('epl-current-view');
    			var element_near = jQuery(this).prev();
    			jQuery(element_near).removeClass('epl-current-view');
    			//add class epl_listing_grid_view
    			var parent = jQuery(this).closest('.entry-content');
    			add_class_epl_listing_grid_view(parent);
    			setTimeout(function(){
    				jQuery('body').imagesLoaded( function() {
				        masory_epl = jQuery('.epl-archive-default >.entry-content').masonry({        
				            itemSelector: '.epl-listing-post',
				            columnWidth: 1,
				            isAnimated: true,
				    	});
				    	masory_epl.masonry('layout');
				    });
    			},1000);
    			//masory_epl.masonry('layout');
    		}
    	});
    }
    /*---------------masonry-----------------*/
    if(jQuery('.epl-archive-default').length){
    	masory_epl = jQuery('.epl-archive-default >.entry-content').masonry({        
            itemSelector: '.epl-listing-post',
            columnWidth: 1,
            isAnimated: true,
    	});
    	masory_epl.masonry('layout');
    }
    if(jQuery('.real_widget_shop_layout_1').length){
    	kivv_mal = jQuery('.real_widget_shop_layout_1 .widget-content >.products').masonry({        
            itemSelector: 'li',
            columnWidth: 1,
            isAnimated: true,
    	});
    	kivv_mal.masonry('layout');
    }
    if(jQuery('.real_widget_shop_layout_2').length){
    	kivv_mal = jQuery('.real_widget_shop_layout_2 .widget-content >.products').masonry({        
            itemSelector: 'li',
            columnWidth: 1,
            isAnimated: true,
    	});
    	kivv_mal.masonry('layout');
    }
    if(jQuery('.real_widget_shop_layout_3').length){
    	kivv_mal = jQuery('.real_widget_shop_layout_3 .widget-content >.products').masonry({        
            itemSelector: 'li',
            columnWidth: 1,
            isAnimated: true,
    	});
    	kivv_mal.masonry('layout');
    }
    /*---------------epl listing search-----------------*/
    if(jQuery('.epl-search-tabs').length){
    	jQuery('.epl-search-tabs .tab-link').on('click',function(){
    		var this_parent = jQuery(this).parent();
    		this_parent.children().removeClass('epl-sb-current');
    		jQuery(this).addClass('epl-sb-current');
    		var link_li_val = jQuery(this).data('tab');
    		var k = link_li_val.toString();
    		
    		var parent_big = jQuery('.epl-search-forms-wrapper');
    		parent_big.children().removeClass('epl-sb-current');
    		var k = "#"+k;
    		console.log(k);
    		jQuery('div').find(k).addClass('epl-sb-current');
    	});
    }

    /*---------------epl listing tab-----------------*/
    if(jQuery('.epl-author-box-container').length){
    	jQuery('.epl-author-tabs .tab-link').on('click',function(){
    		var this_parent = jQuery(this).parent();
    		this_parent.children().removeClass('epl-author-current');
    		jQuery(this).addClass('epl-author-current');
    		var link_li_val = jQuery(this).data('tab');
    		var k = link_li_val.toString();

    		var parent_big = jQuery('.epl-author-box-outer-wrapper');
    		parent_big.children().removeClass('epl-author-current');
    		var k = "#"+k;
    		console.log(k);
    		jQuery('div').find(k).addClass('epl-author-current');
    		if(k=="#tab-3"||k=="#tab-4"){
    			jQuery('.epl-author-image').css('display','none');
    		}else{
    			jQuery('.epl-author-image').css('display','block');
    		}
    	});
    }
    /*---------------tab map-----------------*/
    if(jQuery('.epl_adv_map_list').length){
    	jQuery('.epl_adv_map_list >li').on('click',function(){
    		var this_parent = jQuery(this).parent();
    		this_parent.children().removeClass('maptab-current');
    		jQuery(this).addClass('maptab-current');
    		var link_li_val = jQuery(this).data('map');
    		if(link_li_val=="sat") {
    			map_change.gmap3("autofit");
    		}else
    		if(link_li_val == "bike"){
    			map_change.gmap3("bicyclinglayer");
    		}else
    		if(link_li_val == "transit"){
    			map_change.gmap3("trafficlayer");
    		}else
    		if(link_li_val == "comparables"){
    			map_change.gmap3({
    				kmllayer:{
					    options:{
					      url: "http://gmap3.net/kml/rungis-desc.kml",
					      opts:{
					        suppressInfoWindows: true
					      }
					    },
					    events:{
					      click: function(kml, event){
					        alert(event.featureData.description);
					      }
					    }
					  }
    			});	
    		}
    	});
    }
    /*---------------wow scrool animator-----------------*/
    if(jQuery('.real_wow').length){
    	var wow = new WOW({
			    boxClass:     'real_wow',      // animated element css class (default is wow)
			    
			}
		);
		wow.init();
    }
    /*---------------video background-----------------*/
    if(jQuery('.real_widget_for_bgvd').length){
	    jQuery('.real_widget_for_bgvd .real_wrap_video').vimeofy({
	        'url': 'http://vimeo.com/143842675',
	        'color': '#00D8D8',
	        'autoplay': true,
	        'loop': true,
	        'delay': 0
	    });
	}	
	/*---------------alert-----------------*/
	if(jQuery('.real_alert_box').length){
		jQuery('.real_close').on('click',function(){
			jQuery(this).parent().toggle(300);	
		});
	}
	/*---------------validate form-----------------*/
	if(jQuery('.real_form_comment.real_style_03').length){
		jQuery('.real_form_comment.real_style_03').validate({
	        // Add requirements to each of the fields
	        rules: {
	            name: {
	                required: true,
	                minlength: 10
	            },
	            email: {
	                required: true,
	                email: true
	            },
	            web: {
	                required: true,
	                minlength: 10
	            },
	            message: {
	                required: true,
	                minlength: 15
	            }
	        },
	        // Specify what error messages to display
	        // when the user does something horrid
	        messages: {
	            name: {
	                required: "Please enter your name.",
	                minlength: jQuery.format("At least {0} characters required.")
	            },
	            email: {
	                required: "Please enter your email.",
	                email: "Please enter a valid email."
	            },
	            phone: {
	                required: "Please enter your phone.",
	                url: "Please enter a valid phone."
	            },
	            message: {
	                required: "Please enter a message.",
	                minlength: jQuery.format("At least {0} characters required.")
	            }
	        },
	        // Use Ajax to send everything to processForm.php
	        submitHandler: function(form) {
	            jQuery(".real_form_comment.real_style_03").attr("value", "Sending...");
	            jQuery(form).ajaxSubmit({
	                success: function(responseText, statusText, xhr, jQueryform) {
	                    jQuery("#response-1").html(responseText).hide().slideDown("fast");
	                    jQuery(".real_form_comment.real_style_03").attr("value", "Submit");
	                }
	            });
	            return false;
	        }
	    });
	}
	if(jQuery('.real_form_comment.real_style_02').length){
		jQuery('.real_form_comment.real_style_02').validate({
	        // Add requirements to each of the fields
	        rules: {
	            name: {
	                required: true,
	                minlength: 10
	            },
	            email: {
	                required: true,
	                email: true
	            },
	            web: {
	                required: true,
	                minlength: 10
	            },
	            message: {
	                required: true,
	                minlength: 15
	            }
	        },
	        // Specify what error messages to display
	        // when the user does something horrid
	        messages: {
	            name: {
	                required: "Please enter your name.",
	                minlength: jQuery.format("At least {0} characters required.")
	            },
	            email: {
	                required: "Please enter your email.",
	                email: "Please enter a valid email."
	            },
	            phone: {
	                required: "Please enter your phone.",
	                url: "Please enter a valid phone."
	            },
	            message: {
	                required: "Please enter a message.",
	                minlength: jQuery.format("At least {0} characters required.")
	            }
	        },
	        // Use Ajax to send everything to processForm.php
	        submitHandler: function(form) {
	            jQuery(".real_form_comment.real_style_02").attr("value", "Sending...");
	            jQuery(form).ajaxSubmit({
	                success: function(responseText, statusText, xhr, jQueryform) {
	                    jQuery("#response-1").html(responseText).hide().slideDown("fast");
	                    jQuery(".real_form_comment.real_style_02").attr("value", "Submit");
	                }
	            });
	            return false;
	        }
	    });
	}
	if(jQuery('.real_form_comment.real_style_01').length){
		jQuery('.real_form_comment.real_style_01').validate({
	        // Add requirements to each of the fields
	        rules: {
	            name: {
	                required: true,
	                minlength: 10
	            },
	            email: {
	                required: true,
	                email: true
	            },
	            web: {
	                required: true,
	                minlength: 10
	            },
	            message: {
	                required: true,
	                minlength: 15
	            }
	        },
	        // Specify what error messages to display
	        // when the user does something horrid
	        messages: {
	            name: {
	                required: "Please enter your name.",
	                minlength: jQuery.format("At least {0} characters required.")
	            },
	            email: {
	                required: "Please enter your email.",
	                email: "Please enter a valid email."
	            },
	            phone: {
	                required: "Please enter your phone.",
	                url: "Please enter a valid phone."
	            },
	            message: {
	                required: "Please enter a message.",
	                minlength: jQuery.format("At least {0} characters required.")
	            }
	        },
	        // Use Ajax to send everything to processForm.php
	        submitHandler: function(form) {
	            jQuery(".real_form_comment.real_style_02").attr("value", "Sending...");
	            jQuery(form).ajaxSubmit({
	                success: function(responseText, statusText, xhr, jQueryform) {
	                    jQuery("#response-1").html(responseText).hide().slideDown("fast");
	                    jQuery(".real_form_comment.real_style_02").attr("value", "Submit");
	                }
	            });
	            return false;
	        }
	    });
	}
	if(jQuery('#commentform').length){
	    jQuery('#commentform').validate({
	        // Add requirements to each of the fields
	        rules: {
	            name: {
	                required: true,
	                minlength: 10
	            },
	            email: {
	                required: true,
	                email: true
	            },
	            web: {
	                required: true,
	                minlength: 10
	            },
	            message: {
	                required: true,
	                minlength: 15
	            }
	        },
	        // Specify what error messages to display
	        // when the user does something horrid
	        messages: {
	            name: {
	                required: "Please enter your name.",
	                minlength: jQuery.format("At least {0} characters required.")
	            },
	            email: {
	                required: "Please enter your email.",
	                email: "Please enter a valid email."
	            },
	            phone: {
	                required: "Please enter your phone.",
	                url: "Please enter a valid phone."
	            },
	            message: {
	                required: "Please enter a message.",
	                minlength: jQuery.format("At least {0} characters required.")
	            }
	        },
	        // Use Ajax to send everything to processForm.php
	        submitHandler: function(form) {
	            jQuery(".commentform").attr("value", "Sending...");
	            jQuery(form).ajaxSubmit({
	                success: function(responseText, statusText, xhr, jQueryform) {
	                    jQuery("#response-1").html(responseText).hide().slideDown("fast");
	                    jQuery(".commentform").attr("value", "Submit");
	                }
	            });
	            return false;
	        }
	    });
	}
	if(jQuery('#gform_wrapper_1 form').length){
	    jQuery('#gform_wrapper_1 form').validate({
	        // Add requirements to each of the fields
	        rules: {
	            name: {
	                required: true,
	                minlength: 2
	            },
	            email: {
	                required: true,
	                email: true
	            },
	            web: {
	                required: true,
	                minlength: 10
	            },
	            message: {
	                required: true,
	                minlength: 15
	            }
	        },
	        // Specify what error messages to display
	        // when the user does something horrid
	        messages: {
	            name: {
	                required: "Please enter your name.",
	                minlength: jQuery.format("At least {0} characters required.")
	            },
	            email: {
	                required: "Please enter your email.",
	                email: "Please enter a valid email."
	            },
	            phone: {
	                required: "Please enter your phone.",
	                url: "Please enter a valid phone."
	            },
	            message: {
	                required: "Please enter a message.",
	                minlength: jQuery.format("At least {0} characters required.")
	            }
	        },
	        // Use Ajax to send everything to processForm.php
	        submitHandler: function(form) {
	            jQuery(".commentform").attr("value", "Sending...");
	            jQuery(form).ajaxSubmit({
	                success: function(responseText, statusText, xhr, jQueryform) {
	                    jQuery("#response-1").html(responseText).hide().slideDown("fast");
	                    jQuery(".commentform").attr("value", "Submit");
	                }
	            });
	            return false;
	        }
	    });
	}
	/*---------------menu scroll-----------------*/
	var nav = jQuery('.real_header');

	jQuery(window).scroll(function () {
	    if (jQuery(this).scrollTop() > 220) {
	      nav.addClass("real_menu_scroll_stick");
	    } else {
	      nav.removeClass("real_menu_scroll_stick");
	    }
	});
	/*---------------perrty photo-----------------*/
	if(jQuery('.real_modul_type_product_shop_single').length){
		jQuery("a[data-rel ^='prettyPhoto']").prettyPhoto({
			hook: 'data-rel',
			// default_width: 500,
			// default_height: 344,
		});	
	}
	////////////////// end ///////////////////////////////////////////////////////////
	
});
function add_class_epl_listing_grid_view(parent){
	parent.children('.epl-listing-post').addClass('epl_listing_grid_view');
}
function remove_class_epl_listing_grid_view(parent){
	parent.children('.epl-listing-post').removeClass('epl_listing_grid_view');
}
function masonry_reload_layout(){
	
}