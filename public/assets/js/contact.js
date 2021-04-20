$(document).ready(function(){
	$('#submit-contact').click(function(event){
	  	event.preventDefault();
	  	$('#successful').remove();
	  	$('#failure').remove();
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
	  		if (response === "sent") {
	  			$('#name').val("")
		  		$('#email').val("")
		  		$('#subject').val("")
		  		$('#message').val("");
			  	var successful = '<div class="alert alert-success alert-dismissible collapse" id="successful" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><p>Your message was successfully sent!</p></div>'
			  	$('#append').append(successful);
			  	$('#successful').show();
	  		} else {
			  	var failure = '<div class="alert alert-danger alert-dismissible collapse" id="failure" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><p>Your message was not sent. Please try again later.</p></div>'
			  	$('#append').append(failure);
			  	$('#failure').show();
	  		}
	  	})
	})
})


//this is not funcitonal