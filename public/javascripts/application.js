$(function() {

	$("form.delete").submit(function(event) {
		event.preventDefault(); //prevents any default behavior
		event.stopPropagation(); //prevents any default behavior

		var ok = confirm("Are you sure you want to continue? This cannot be undone.");
		if (ok) {
			// this.submit();
			// send an AJAX request from the client to our Sinatra Application, telling it to go ahead and delete that item
			var form = $(this);

			var request = $.ajax({
				url: form.attr("action"), // <--where to send the request to
				method: form.attr("method") // <--the HTTP method used for the request
			});

			request.done(function(data, textStatus, jqXHR) {
				form.parent("li").remove()
			});
		}
	});

});



// $("form") <--returns an array of all the forms on the page

//  .delete <-- a class that returns all the forms with the class "delete"

//  .submit <-- a method that calls the given function whenever the form is submitted. 
//  It takes a function that is the event handler to fire whenever this event occures

//  event <-- the actual event that is fired in the browser