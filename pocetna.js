$(document).ready(function () {
poster();



});
var posteri = [
["1.", "Pas će te naučiti bezuslovnoj ljubavi. Ako možeš da imaš to u svom životu, stvari neće biti loše.", "11"],
["2.", "Pas reflektuje porodicu u kojoj živi. Ko je ikada video živahnog psa u sumornoj porodici, ili tužnog psa u srećnoj?", "22"],

];
function poster() {
var sekPosteri = document.getElementById("posteri");
var ispis = "";
for (let i = 0; i < posteri.length; i++) {
ispis = "";
let artikal = document.createElement("article");
artikal.classList.add("poster");
//artikal.style.backgroundImage = "url('images/" + posteri[i][2] + ".jpg')";
ispis += "<div><h3>" + posteri[i][0] + "</h3><p>" + posteri[i][1] + "</p></div>";
artikal.innerHTML = ispis;
sekPosteri.appendChild(artikal);
}
sekPosteri.firstElementChild.classList.add("vidi");
}

