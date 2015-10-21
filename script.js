$(document).ready(function(){
	var clickCount = 0;
	$('#generateButton').on('click', function(){
		$('#generateOutput').append("<div class='deleteDiv'><button id='deleteButton'>Delete</button></div><div class='changeDiv'><button id='changeButton'>Change</button></div>");
		incrementNumber();
	});

	$('#generateOutput').on('click', '#deleteButton', function(){
		$(this).parent().remove();
	});

	$('#generateOutput').on('click', '#changeButton', function(){
		$(this).parent().toggleClass("addRed");
	});
	function incrementNumber(){
		clickCount++;
		console.log(clickCount);
		$('#numberOutput').text(clickCount);
	}
});