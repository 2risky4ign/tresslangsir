function signInup(){
    document.getElementById('log-in').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
}
function back(){
    document.getElementById('back-main').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('log-in').style.display = 'none';
}
function signUp(){
    document.getElementById('back-main').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('log-in').style.display = 'none';
    document.getElementById('signup-main').style.display = 'flex';
}
function back2(){
    document.getElementById('back-main').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('signup-main').style.display = 'none';
}
function gologin(){
    document.getElementById('back-main').style.display = 'flex';
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('log-in').style.display = 'flex';
    document.getElementById('signup-main').style.display = 'none';
} 

// Function to display the login form
function displayLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
}

// Function to display the signup form
function displaySignupForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

// Function to handle login form submission
function login(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve input values
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  // Perform login logic here
  // ...

  // Clear input fields
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
}

// Function to handle signup form submission
function signup(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve input values
  var name = document.getElementById("signup-name").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;

  // Perform signup logic here
  // ...

  // Clear input fields
  document.getElementById("signup-name").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
}

// Attach event listeners to form links
document.getElementById("login-link").addEventListener("click", displayLoginForm);
document.getElementById("signup-link").addEventListener("click", displaySignupForm);

// Attach event listeners to forms
document.getElementById("login-form").addEventListener("submit", login);
document.getElementById("signup-form").addEventListener("submit", signup);
