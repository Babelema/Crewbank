function login(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if(email === "forsonanitak@gmail.com" && password === "$blesstherich7"){

window.location.href = "dashboard.html";

}else{
alert("Invalid Email or Password");
}

}