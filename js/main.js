const user = document.getElementById("user");
const password = document.getElementById("password");
const button = document.getElementById("btn");
const form = document.getElementById("myForm");
function sign (event) {
    event.preventDefault();
    if (user.value == "Leyla Kerimova" && password.value == "12345") {
        window.location.href = "./home.html";
    }
    else {
        alert("Username ve ya sifre sehvdir");
    }
    
   
}button.addEventListener("click", sign)
form.addEventListener("sumbit", sign)