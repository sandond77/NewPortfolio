$(document).ready(function(){
	$('#submit-contact').click(function(event){
	  	event.preventDefault();
		console.log("js loaded")
	  	var info = {
	  		name: $('#name').val().trim(),
	  		email: $('#name').val().trim(),
	  		subject: $('#subject').val().trim(),
	  		message: $('#message').val().trim()
	  	}

	  	$.ajax({
	  		method:"POST",
	  		url: "/send",
	  	}).then(function(response){
	  		console.log("ajax sent")
	  	})
	})
})
