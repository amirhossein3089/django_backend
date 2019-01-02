  
  console.log("salamaslamsdljfs")
  grecaptcha.ready(function() {
    grecaptcha.execute('6LfW3IUUAAAAAI0JEzSubK9nnf8gZJdgOK-oC7EW', {action: 'register'})
        .then(function(token) {
        console.log(token)
        document.getElementById('g-recaptcha-response').value = token;
    });
  });
