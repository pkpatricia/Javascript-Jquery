

$(document).ready(function () {
		 
	
	$(document).keypress(function(evt) {
		var keyPressed = String.fromCharCode(evt.which);
		
		if (keyPressed != '*')
		{
			$("div > h1").append(keyPressed);
		} 
		else 
		{
			$("div > h1").unbind('keypress');
		}
});
	
	
	$("#button").click(function(){
		var favorite = prompt("Please enter a favorite website.");									
		$("#sect2").append("<p><a href='"+favorite+"'>" + favorite +"</a></p>");
	
	});
	
	// pick an image to feature
	$(".choosen").click(function(){
		
		$("#photobig").attr("src",$(this).attr("src"));
		var oldPhoto = $("#photobig").attr("src");
	
				$("#photobig").hover(
					
					
					function(){
		
						$(this).attr("src", "images/triangle_hearts.jpg");
		
					},
														 
					function(){
						
						$(this).attr("src", oldPhoto);
					
				});
		
		});
	
	
	
// bind the click event to the theme class. Pass the id as the class and the title as the slogan.
$('.theme').bind('click',
{'class':$(this).attr(id),
'slogan': $(this).attr(title)}, function(evt) {
//remove all classes from the sections
$('section').removeClass();
// add the class to the sections
$('#sect1,#sect2,#sect3').addClass(evt.data.class);
// add the slogan at the end
$('h1').after('<p>'+evt.data.slogan+'</p>');
});	
	

	var orientation = prompt("Please choose a screen orientation of vertical or grid.");
	
	if (orientation == "vertical"){
		$(".section").each(function(){
			$(this).css('width', '30%')
							.css('float', 'left')
							.css('padding', '1%')
							.css('margin', '.5%');
			
		});
		$("footer").css('clear', 'both');
		
		
	}
	
	else {
		$("#sect1").css('width', '45%')
								.css('float', 'left')
						    .css('padding', '1%')
								.css('margin', '.5%');
		
		$("#sect2").css('width', '45%')
								.css('float', 'left')
						    .css('padding', '1%')
								.css('margin', '.5%');
		
		$("#sect3").css('clear', 'both')
						    .css('padding', '1%')
								.css('margin', '.5%');
	}
	
	
});
	
	

