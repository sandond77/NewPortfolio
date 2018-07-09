$(document).ready(function(){
	$('#submit-contact').click(function(event){
	  	event.preventDefault();
	  	var info = {
	  		name: $('#name').val().trim(),
	  		email: $('#email').val().trim(),
	  		subject: $('#subject').val().trim(),
	  		message: $('#message').val().trim()
	  	}

	  	$.ajax({
	  		method:"POST",
	  		url: "/send",
	  		data: info
	  	}).then(function(response){
	  		if (response === "posted") {
	  			$('#name').val("")
		  		$('#email').val("")
		  		$('#subject').val("")
		  		$('#message').val("")
		  		alert("Your message was sent")
	  		} else {
	  			alert("There was an error sending your message. Please try again later");
	  		}
	  	})
	})
})
