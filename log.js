window.onload = function(){

	
	//Dodeljivanje dogadjaja click koji ce pozvati funkciju provera()
	document.getElementById("btnpotvrda").addEventListener("click", provera);
	document.getElementById("btnpotvrdi").addEventListener("click", anketa);
}
function provera(){
	
var ok = [];
var email = document.querySelector("#tbpolje");
var regEmail = /^[a-z]+(\.[a-z]+)+(\.[1-9][0-9]{0,3}\.(0[0-9]|1[0-7]))?\@ict\.edu\.rs$/;
var spanEmail = document.querySelector("#email-err");
if(!regEmail.test(email.value)) {
email.style.border = "2px solid #ffd81f";
spanEmail.innerHTML = "Greska, ukucajte ponovo email.";
} else {
ok.push("Email: " + email.value);
email.style.border ="1px solid #FFD81F";
spanEmail.innerHTML = "";
}
var password = document.querySelector("#tbPass");
var regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
var spanPass = document.querySelector("#password-err");
if(!regPass.test(password.value)) {
password.style.border = "2px solid #ffd81f";
spanPass.innerHTML = "Sifra mora da sadrzi bar jednu cifru,jedno veliko slovo, malo slovo i mora da ima bar 8 karaktera.";
} else {
ok.push("Password: " + password.value);
password.style.border ="1px solid #ffd81f";
spanPass.innerHTML += "";
}
}

