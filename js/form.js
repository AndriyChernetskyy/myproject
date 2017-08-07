
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=842739302568340";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



document.getElementById('submit').addEventListener('click', sendForm);

function sendForm(e) {
	e.preventDefault();
    const form = document.getElementById('form');
    if (form.checkValidity()) {
    	alert('Form is OK')    
    } else {
    	alert('Form is not OK');
    }   
}

$(function() {
    $('form input[type=submit]').click(sendForm);
})


function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/andrewusa921@gmail.com", 
        method: "POST",
        data: {
            name: $('#c-name').val(),
            email: $('#c-mail').val(),
            mobile: $('#c-telephone').val(),
            comment: $('#description').val()
        },
        dataType: "json"
    })
     .done(function() {
         $('form')[0].reset();
         $('#form-result').html('<p>Thank you!</p>');
     })
     .fail(function(xhr, status, error){
         $('#form-result').html(`<p>Sorry, there is an error: ${error}</p>`);
     });
}