document.getElementById('btn-login').addEventListener('click', function(){
    const emailField = document.getElementById('user-mail')
    const email = emailField.value;
  

    const passwordField = document.getElementById('user-pass')
    const password = passwordField.value
    
    if(email === 'hello@gmail.com' && password === 'hello'){
       window.location.href = 'home-dex.html'
    }else{
       alert('Please enter your main email address and password')
    }
})


d