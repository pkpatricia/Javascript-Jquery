

$(document).ready(function () {
	 // change page title
	 var pageTitle = prompt("Please enter in a page title.");
	
	$("div > h1").text(pageTitle);
	
	 // enter in 3 favorite websites
   var i=1;
	 while (i < 4) {
		var favorite = prompt("Please enter a favorite website.");
		$("#sect2").each(function(){
		$(this).append("<p><a href='"+favorite+"'>"+ favorite +"</a></p>");
		
		});
		
		i++;
	 }
	
	// pick an image to feature
	$(".choosen").click(function(){
		
		$("#photobig").attr("src",$(this).attr("src"));
		
		
	});
	
	
	var theme = prompt("Please choose a theme of first, second, or third.");
	
	if (theme == "second"){
		$("#sect1").addClass("first");
		$("#sect2").addClass("second");
		$("#sect3").addClass("third");
		$("h1").after('<img src="images/leopard.jpg" width="500" height="500">');
	}
	
	else if (theme == "first"){
		$("#sect1").addClass("second");
		$("#sect2").addClass("first");
		$("#sect3").addClass("third");
		$("h1").after('<p>This is the first theme.</p>');
	}
	
	else {
		$("#sect1").addClass("third");
		$("#sect2").addClass("second");
		$("#sect3").addClass("first");
		$("h1").after('<p>WooHoo! I am done.</p>');
	}
	
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
	
	

