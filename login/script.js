// funzione per cambiare modal tra login form e register form
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';

}

var state= false;
function toggle(){
event.preventDefault();
var imageButton = document.getElementById("imageButton");
if(state){
    document.getElementById("password").setAttribute("type","password");
    imageButton.classList.toggle('fa-eye')
    imageButton.classList.toggle('fa-eye-slash')
    state = false;
    } else {
    document.getElementById("password").setAttribute("type","text");
    imageButton.classList.toggle('fa-eye')
    imageButton.classList.toggle('fa-eye-slash')
    state = true;
}
}

// not implemented
function checkPassword(){
    console.log('check');
}

// funzione per registrare un nuovo utente su DB usando AJAX
document.getElementById('register').addEventListener('submit', function(event){
    event.preventDefault();

    var formData = new FormData(this);

    fetch('register.php', {
        method: 'POST', 
        body: formData
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log(data);
        if (data == 'true'){
            alert('Account created');
        } else if(data == '23505') {
            alert('Account name already exists');
        } else {
            alert('Problem creating account');
        }
    })
});

// funzione per controlle di credenziali e eventuale login usando AJAX
document.getElementById('login').addEventListener('submit', function(event){
    event.preventDefault();

    var formData = new FormData(this);

    fetch('login.php', {
        method: 'POST', 
        body: formData
    })
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        sessionStorage.setItem('username', data['session'][0]['username']);
        sessionStorage.setItem('points', parseInt(data['session'][0]['points']));
        sessionStorage.setItem('item', data['session'][0]['item']);

        if (data['login'] == true){
            window.location.href = "../play.php";
        } else {
            alert('wrong credentials');
    }})
    .catch(function(error) {
        console.log('Fetch Error:', error);
    });


});