const params = new URLSearchParams(window.location.search);
const fromLogin = params.get("fromLogin");

var back = document.getElementById('back')
let fromLoginStatus
if (fromLogin == 'true') {
    back.style.display = 'block'
} else if (fromLogin == 'false') {
    fromLoginStatus = false
}
back.addEventListener('click', function() {
    history.back();
})

var userData = {
    'Lucas Harel' : 'LucasDev2308',
    'Admin' : 'Admin001',
    'Admin 2' : 'Admin002',
}

var passwordInput = document.getElementById("password");
var usernameInput = document.getElementById("username");

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username in userData) {
        usernameInput.style.borderColor = 'black'
        if (password == userData[username]) {
            localStorage.setItem('loginInfo', username)
            location.href = 'index.html'
        } else {
            passwordInput.style.borderColor = 'red'
        }
    } else {
        usernameInput.style.borderColor = 'red'
    }
})

var showpass = document.getElementById("showpass");
showpass.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        showpass.innerHTML = '<ion-icon name="eye-off" id="eye"></ion-icon>'
        passwordInput.type = 'text'
    } else {
        showpass.innerHTML = '<ion-icon name="eye" id="eye"></ion-icon>'
        passwordInput.type = 'password'
    }
})