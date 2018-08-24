$(document).ready(function () {
	var text = $('h1').text() + "... Editado pelo JQuery";
	$('h1')
		.css("color","#f66")
		.hide()
		.delay('1000')
		.fadeIn("slow")
		.text(text)
		.click(function () {
			$('body').css("background","#C30");
			$('h1').css("color", "#000");
		});


	$('a').css({color:'red', display:'block'});
	$('.link2').css("color", "green");
	$('#link3').css("color","black");
	$('*').css("padding", "10");
	$('h1, #link3').css("border-bottom", "solid 3px blue");

	$('#link3')
		.delay('1000')
		.fadeOut("slow");
});