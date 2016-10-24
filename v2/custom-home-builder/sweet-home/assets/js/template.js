"use strict";
function initialize() {
	var bodyClass = jQuery('body').hasClass('property-listing-pg'),
		assetPath = (bodyClass == true ?  "../" : ''),
		myLatLng   = new google.maps.LatLng(47.609519, 12.852459);
	var mapOptions = {
		zoom:               5,
		center:             myLatLng,
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a0d6d1"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#dedede"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#dedede"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
		// Extra options
		scrollwheel:        false,
		mapTypeControl:     false,
		panControl:         false,
		zoomControlOptions: {
			style:    google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	}
	var map        = new google.maps.Map(document.getElementById('map'), mapOptions);

	var i;
	var markers = [];

	for (var i = 0; i < data.property.length; i++) {
		var dataProperty = data.property[i];
		var latLng       = new google.maps.LatLng(dataProperty.latitude, dataProperty.longitude);
		var propertyType = dataProperty.pType;
		var propertyId   = dataProperty.pId;

		var boxText = document.createElement("div");

		var infoboxOptions = {
			content:                boxText,
			disableAutoPan:         false,
			pixelOffset:            new google.maps.Size(-125, 8),
			zIndex:                 null,
			alignBottom:            true,
			maxWidth:               200,
			boxClass:               "infobox-main-container",
			enableEventPropagation: true,
			closeBoxURL:            assetPath + "assets/img/close.png",
			infoBoxClearance:       new google.maps.Size(1, 1)
		};

		var marker = new RichMarker({
			position: latLng,
			map:      map,
			flat:     true,
			content:  '<div class="map-marker ' + propertyType + '" id="p_id_' + propertyId + '"></div>'
		});
		markers.push(marker);

		boxText.innerHTML  =
			'<div id="property-marker">' +
			'<div class="l-sec">' +
			'<a href="#">' +
			'<img src="' + assetPath + 'assets/img/property/row/' + dataProperty.pImage + '" alt="' + dataProperty.title + '">' +
			'</a>' +
			'<div class="caption">' +
			'<div class="title">' + dataProperty.title + '</div>' +
			'<div class="price-box">' + dataProperty.price + '</div>' +
			'</div>' +
			'</div>' +
			'<div class="r-sec">' +
			'<div class="location">'+ dataProperty.location +'</div>' +
			'<div class="features">' +
			'<div class="bed"><i class="realty-house-bedroom"></i>'+ dataProperty.bedroom +' bd</div>'+
			'<div class="bath"><i class="realty-house-bathroom"></i>'+ dataProperty.bathroom +' ba</div>'+
			'<div class="size"><i class="realty-house-size"></i>'+ dataProperty.size +' sqft</div>' +
			'</div>' +
			'<div class="desc-title">Description</div>'+
			'<div class="desc">'+ dataProperty.description  +'</div>' +
			'</div>' +
			'</div>';
		markers[i].infobox = new InfoBox(infoboxOptions);

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				var h;
				for (h = 0; h < markers.length; h++) {
					markers[h].infobox.close();
				}
				markers[i].infobox.open(map, this);
			}
		})(marker, i));

	}
	var clusterStyles = [
		{
			url:    assetPath + 'assets/img/pattern.png',
			height: 42,
			width:  42
		}
	];
	var markerCluster = new MarkerClusterer(map, markers, {styles: clusterStyles, maxZoom: 15});

	if (jQuery('#location-search-box').length > 0) {
		var input        = document.getElementById('location-search-box');
		var autocomplete = new google.maps.places.Autocomplete(input);
	}
}

function syncPosition(el){
	var current = this.currentItem,
		sync2 = jQuery("#thumbnail-slider");
	sync2
		.find(".owl-item")
		.removeClass("synced")
		.eq(current)
		.addClass("synced");
	if(sync2.data("owlCarousel") !== undefined){
		center(current)
	}
}

function center(number){
	var sync2 = jQuery("#thumbnail-slider"),
		sync2visible = sync2.data("owlCarousel").owl.visibleItems,
		num = number,
		found = false;
	for(var i in sync2visible){
		if(num === sync2visible[i]){
			var found = true;
		}
	}
	if(found===false){
		if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		}else{
			if(num - 1 === -1){
				num = 0;
			}
			sync2.trigger("owl.goTo", num);
		}
	} else if(num === sync2visible[sync2visible.length-1]){
		sync2.trigger("owl.goTo", sync2visible[1])
	} else if(num === sync2visible[0]){
		sync2.trigger("owl.goTo", num-1)
	}
}

function initializeSubmit() {
	var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
	var mapOptions = {
		zoom: 12,
		center: myLatLng,
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a0d6d1"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#dedede"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#dedede"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f1f1f1"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],

		// Extra options
		//mapTypeControl: false,
		panControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.LEFT_BOTTOM
		}
	};
	var map = new google.maps.Map(document.getElementById('p-map'), mapOptions);
	var image = '../assets/img/marker.png';

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		draggable: true,
		icon: image
	});
	if (jQuery('#p-address').length > 0) {
		var input = document.getElementById('p-address');
		var autocomplete = new google.maps.places.Autocomplete(input);
		google.maps.event.addListener(autocomplete, 'place_changed', function () {
			var place = autocomplete.getPlace();
			jQuery('#p-lat').val(place.geometry.location.lat());
			jQuery('#p-long').val(place.geometry.location.lng());
			marker.setPosition(place.geometry.location);
			map.setCenter(place.geometry.location);
			map.setZoom(15);
		});
	}
	google.maps.event.addListener(marker, 'dragend', function (event) {
		jQuery('#p-lat').val(event.latLng.lat());
		jQuery('#p-long').val(event.latLng.lng());
	});
}

jQuery(document).ready(function () {

	new WOW().init();

	// Clone the main menu to the mobile menu
	jQuery('#main-menu').clone().removeClass().appendTo('#mobile-menu-container');

	// Enable Menu menu toggling
	jQuery('#main-menu-handle').on('click', function () {
		jQuery(this).toggleClass('active');
		jQuery('#mobile-menu-container').slideToggle(function () {
			jQuery(window).trigger('scroll').trigger('resize');
		});
	});

	// Enable Featured properties slider
	if (jQuery('#featured-properties .owl-carousel').length > 0) {
		jQuery("#featured-properties .owl-carousel").owlCarousel({
			items:             2,
			itemsDesktop:      [1200, 2],
			itemsDesktopSmall: [980, 1],
			itemsTablet:       [768, 1],
			itemsMobile:       [480, 1],
			navigation:        !1,
			pagination:        !0
		});
	}

	// Enable Our Agents slider
	if (jQuery('.agent-box-container').length > 0) {
		jQuery(".agent-box-container").owlCarousel({
			items:        3,
			itemsDesktop: [1200, 3],
			itemsDesktopSmall: [980, 2],
			itemsTablet:  [768, 2],
			itemsMobile:  [600, 1],
			navigation:   !0,
			pagination:   !1
		});
	}

	// Search Boxes
	var mainSearchBox = jQuery('#search-box');
	if(mainSearchBox.length > 0 && mainSearchBox.hasClass('accordion')){
		mainSearchBox.on('click', '.title-box', function(){
			var $this = jQuery(this),
				clickedParent = $this.parent();
			if(!clickedParent.hasClass('active')){
				clickedParent.addClass('active').siblings().removeClass('active');
				mainSearchBox.find('.content-box').slideUp();
				$this.next('.content-box').slideDown();
			}
		});
	}

	if(mainSearchBox.length > 0 && mainSearchBox.hasClass('horizontal')){
		mainSearchBox.on('click', '.more-options', function(e){
			e.preventDefault();
			mainSearchBox.find('.advanced-search-sec').slideToggle();
		});
		mainSearchBox.on('click', '.title', function(){
			jQuery(this).toggleClass('disable');
			mainSearchBox.find('.field-main-container').slideToggle();
		});
	}

	// SideBar SearchForm
	var sideBarSearch = jQuery('#side-bar').find('.property-search-form');
	if(sideBarSearch.length > 0){
		sideBarSearch.find('.more-options').on('click', function(e){
			e.preventDefault();
			sideBarSearch.find('.b-sec').slideToggle();
		});
	}

	if (jQuery.isFunction(jQuery.fn.select2)) {
		// Change all the select boxes to select2
		jQuery("select").select2();
	}

	// Enable Range Sliders
	if (jQuery('.range-slider').length > 0) {
		jQuery(".range-slider").ionRangeSlider({
			type:       'double',
			prefix:     "$",
			maxPostfix: "+",
			prettify:   false
		});
	}

	if (jQuery("#main-slider").length > 0) {

		// Main Slider
		var mainSlider = jQuery("#main-slider");

		mainSlider.find('.items').each(function(){
			var imgContainer = jQuery(this).children('.img-container');
			imgContainer.css('background-image', 'url(' + imgContainer.data('bg-img') + ')');
		});

		mainSlider.owlCarousel({
			navigation:     !0,
			singleItem:     !0,
			addClassActive: !0,
			autoPlay:       !0,
			pagination:     !1
		});
	}

	if (jQuery.isFunction(jQuery.fn.isotope)) {
		var propertyMainContainer = jQuery(".property-boxes");
		var isoTopProperty = propertyMainContainer.isotope({
			transitionDuration: "0.7s"
		});
		isoTopProperty.on('layoutComplete', function () {
			jQuery(window).trigger('scroll').trigger('resize');
		});
		propertyMainContainer.imagesLoaded(function () {
			propertyMainContainer.isotope("layout");
			jQuery(".sort-section-container").on("click", "a", function (e) {
				e.preventDefault();
				jQuery(".sort-section-container a").removeClass("active");
				jQuery(this).addClass("active");
				var filterValue = jQuery(this).attr("data-filter");
				propertyMainContainer.isotope({filter: filterValue});
				jQuery(window).trigger('resize.px.parallax');
			});
		});
	}

	if (jQuery.isFunction(jQuery.fn.isotope)) {
		var mainContainer = jQuery(".image-main-box");
		var isotopGallery = mainContainer.isotope({
			transitionDuration: "0.7s"
		});
		isotopGallery.on('layoutComplete', function () {
			jQuery(window).trigger('scroll').trigger('resize');
		});
	}

	if (jQuery.isFunction(jQuery.fn.magnificPopup)) {
		jQuery('.image-main-box').magnificPopup({
			delegate:     '.more-details',
			type:         'image',
			removalDelay: 600,
			mainClass:    'mfp-fade',
			gallery:      {
				enabled:            true,
				navigateByImgClick: true,
				preload:            [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image:        {
				titleSrc: 'data-title',
				tError:   '<a href="%url%">The image #%curr%</a> could not be loaded.'
			}
		});
	}

	//Enable neighborhood buttons
	function enableByButtons() {
		jQuery('.neighborhood-row .btn-container').on('click', 'button', function () {
			jQuery(this).parent().siblings('.neighbor-by').val(jQuery(this).data('value'));
			jQuery(this).addClass('active').siblings('button').removeClass('active');
		});
	}
	if (jQuery('.neighborhood-row').length > 0) {

		enableByButtons();
		// Add new neighborhood
		jQuery('.add-neighborhood-btn').on('click', function () {
			var neighboorPattern = jQuery('#neighborhood-pattern').clone().attr('id', '');
			jQuery('.neighborhood-container').append(neighboorPattern);
			jQuery(window).trigger('resize.px.parallax');
			enableByButtons();
		});
	}

	if (jQuery('.counter-box').length > 0 ) {

		jQuery('.counter-box').on('inview', function(event, isInView) {
			if (isInView) {
				jQuery(this).find('.value').countTo({
					speed: 3000,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					}
				});
			}
		});
	}

	if(jQuery('.twitter-news-ticker').length > 0){
		jQuery('.twitter-news-ticker').newsTicker({
			row_height: 40,
			speed: 800,
			max_rows: 1,
			duration: 4000,
			prevButton:  jQuery('.prev-button'),
			nextButton:  jQuery('.next-button')
		});
	}

	// Enable Google Map
	if (jQuery('#map').length > 0) {
		initialize();
	}

	// Enable Location auto complete
	if (jQuery('#location-search-box').length > 0 && jQuery('#map').length == 0) {
		var input        = document.getElementById('location-search-box');
		var autocomplete = new google.maps.places.Autocomplete(input);
	}

	if (jQuery.isFunction(jQuery.fn.mCustomScrollbar)) {
		jQuery('#property-listing-map .property-listing-container').mCustomScrollbar({
			scrollButtons: {enable:true}
		});
	}


	// FAQ section
	var faqBox = jQuery('.faq-box');
	if (faqBox.length > 0) {
		jQuery('.faq-box.opened').find('.content').slideDown();
		faqBox.on('click', '.title', function () {
			jQuery(this).next('.content').stop().slideToggle().parent().toggleClass('opened');
		});
	}

	if(jQuery('.details-boxes').length > 0){
		jQuery('.details-boxes').on('click', '.title', function(){
			jQuery(this).next('.content').stop().slideToggle().parent('.details-boxes').toggleClass('closed');
		});
	}


	if(jQuery('#property-slider').length > 0) {

		// Property Details Sliders
		var sync1 = jQuery("#property-slider"),
			sync2 = jQuery("#thumbnail-slider");

		sync1.owlCarousel({
			singleItem : true,
			slideSpeed : 1000,
			navigation: true,
			pagination:false,
			afterAction : syncPosition,
			responsiveRefreshRate : 200
		});

		sync2.owlCarousel({
			items : 8,
			itemsDesktop      : [1199,6],
			itemsDesktopSmall     : [979,5],
			itemsTablet       : [768,4],
			itemsMobile       : [479,2],
			pagination:false,
			responsiveRefreshRate : 100,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});

		sync2.on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = jQuery(this).data("owlItem");
			sync1.trigger("owl.goTo",number);
		});
	}

	if(jQuery('body').hasClass('submit-property')){
		jQuery('#p-status, #p-type').listbox();
		jQuery('.lbjs .lbjs-list').mCustomScrollbar({
			scrollButtons: {enable:true}
		});

		var dynamicText = jQuery('#p-main-info').find('.p-dynamic-text'),
			pTypeField = jQuery('#p-type'),
			pStatusField = jQuery('#p-status');
		dynamicText.find('.p-type-text').text(pTypeField.find("option:selected").text());
		dynamicText.find('.p-status-text').text(pStatusField.find("option:selected").text());

		pTypeField.on('change', function () {
			dynamicText.find('.p-type-text').text(jQuery(this).find("option:selected").text());
		});
		pStatusField.on('change', function () {
			var fVal = jQuery(this).val();
			( fVal == 2 || fVal == 3 ) ? jQuery('.p-price-type-container').slideDown() : jQuery('.p-price-type-container').slideUp();
			dynamicText.find('.p-status-text').text(jQuery(this).find("option:selected").text());
		});

		//	Initial Maps and auto complete section
		initializeSubmit();


		var previewNode = document.querySelector("#preview-template");
		previewNode.id = "";
		var previewTemplate = previewNode.parentNode.innerHTML;
		previewNode.parentNode.removeChild(previewNode);

		jQuery('#attachment-uploader').dropzone({
			url: "../uploader.php",
			maxFilesize: 5,
			previewTemplate: previewTemplate,
			acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg,.pdf,.txt,.mp3",
			clickable: "#add-attachment",
			success: function (file, response) {
				var fileExt = (file.type).split('/')[1];
				file.previewElement.childNodes[1].className = "ext-icon  "+fileExt;
				jQuery(window).trigger('resize.px.parallax');
			}
		});


		var previewNode1 = document.querySelector("#preview-template1");
		previewNode1.id = "";
		var previewTemplate1 = previewNode1.parentNode.innerHTML;
		previewNode1.parentNode.removeChild(previewNode1);

		jQuery('#floorplan-uploader').dropzone({
			url: "../uploader.php",
			thumbnailWidth: 105,
			thumbnailHeight: 105,
			maxFilesize: 5,
			previewTemplate: previewTemplate1,
			acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
			clickable: "#add-floorplan",
			success: function (file, response) {
				jQuery(window).trigger('resize.px.parallax');
			}
		});


		var previewNode2 = document.querySelector("#preview-template2");
		previewNode2.id = "";
		var previewTemplate2 = previewNode2.parentNode.innerHTML;
		previewNode2.parentNode.removeChild(previewNode2);

		jQuery('#gallery-uploader').dropzone({
			url: "../uploader.php",
			thumbnailWidth: 105,
			thumbnailHeight: 105,
			maxFilesize: 5,
			previewTemplate: previewTemplate2,
			acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
			clickable: "#add-gallery",
			success: function (file, response) {
				jQuery(window).trigger('resize.px.parallax');
			}
		});
	}


	if(jQuery('body').hasClass('compare')){
		var compareItemContainer = jQuery('.value-list .property-items-container'),
			propertyItems = compareItemContainer.find('.property-item'),
			itemsWidth = propertyItems.width(),
			itemsLength = propertyItems.length;

		compareItemContainer.width(itemsWidth * itemsLength);

		jQuery('.value-list').mCustomScrollbar({
			axis:"x",
			scrollButtons: {enable:true}
		});
	}

	if(jQuery('body').hasClass('video-tour')){

		// Property Details Sliders
		var sync1 = jQuery("#video-tour-slider"),
			sync2 = jQuery("#thumbnail-slider");

		sync1.owlCarousel({
			singleItem : true,
			slideSpeed : 1000,
			navigation: false,
			pagination: false,
			afterAction : syncPosition,
			responsiveRefreshRate : 200
		});

		sync2.owlCarousel({
			items : 8,
			itemsDesktop      : [1199,6],
			itemsDesktopSmall     : [979,5],
			itemsTablet       : [768,4],
			itemsMobile       : [479,2],
			pagination:false,
			responsiveRefreshRate : 100,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});

		sync2.on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = jQuery(this).data("owlItem");
			sync1.trigger("owl.goTo",number);
		});
	}
});

jQuery(window).scroll(function () {
	"use strict";
	var haderSec = jQuery("body, #main-header");
	jQuery(document).scrollTop() > 136 ? haderSec.addClass("sticky") : haderSec.removeClass("sticky");
});