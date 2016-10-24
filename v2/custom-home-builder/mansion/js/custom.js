
$(window).ready(function(){

//$(window)._scrollable();
	// navigation
	var mlinks = $('ul.nav li a');

	$('a.scroll').click(function(){
		//alert (this.hash);
		
		if (this.hash=="#homeposition")
		{
			$.scrollTo( $('body'), 500 );
		}
		else {
		$.scrollTo( this.hash, 500, { easing:'easeInOutSine' });
		}
		//mark active menu item
			for (var i = 0, j = mlinks.length; i<j; i++)   {
				$(mlinks[i]).css('color', '#959595');
				
				if ($(mlinks[i]).attr('href')==this.hash)
				{
				$(mlinks[i]).css('color', 'white');
				} 
		
			}
		
		return false;
	});

/* scroll to home section */
$('a.scrollback').click(function(){
		$.scrollTo( this.hash, 500, { easing:'easeInOutSine' });
		//mark active menu item
		
		return false;
});


// make home link active by default
$('a.scroll').eq(0).click();


});//end of $(window).ready(function()