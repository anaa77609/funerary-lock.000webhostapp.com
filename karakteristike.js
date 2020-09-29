$(document).ready(function () {
primer();



});
var karakteristike = [
["-Karakter-", "<h4>Rotvajler odaje veliko samopouzdanje i stabilnost. Dobar odbrambeni pas koji je uvek na oprezu.</h4>", "ss"],
["<br/>-Prilagodjavanje-", "<h4>Rotvajler se lako prilagodjava zivotu u stanu ukoliko mu se obezbedi dovoljno prostora i vremena za istrčavnje. Svoju grubu igru  će lako ublaziti i prilagoditi u prisustvu dece. Rotvajler je po prirodi čuvar i nije mu potreban nikakav trening za razvoj ove osobine.</h4>", "zz"],
["<br/>-Dresura i karakter-","<h4>Rotvajler je neustrašiv i efikasan pas čuvar, koji nikad ne laje bez razloga. Potrebna mu je sloboda, i ne podnosi da ostane suviše dugo vezan. Može da bude veoma disciplinovan ako njegov gospodar ima dovoljno autoriteta i ako je strastven uzgajivač. Od prijateljske i mirne osnove, ljubitelj dece, on  je veoma veran, poslušan, vodljiv i radostan pri radu.</h4>","mm"],
["<br/>-Za kraj-","<h3>Zbog svojih zaštitničkih poriva Rotvajler će neustrašivo braniti i čuvati svog vlasnika i porodici. Hrabar je, odan i pouzdan, a ujedno ozbiljan, smiren i izuzetno izdržljiv. Ali Rotvajler nije pas za neiskusnog vlasnika jer mu treba čvrsta disciplina i konstantan trening. Potrebna mu je redovnaa vežba, puno interakcije i psihičke stimulacije. S njim ćete imati pune ruke posla jer je pun energije. Uživa u raznim zadacima sa svojim vlasnikom. Voli da trči, pliva, a inače se koristi i kao policijski pas, za osmatranje, čuvanje, praćenje.  Možete vrlo lako da ga naučite pravilima ponašanja koja kad jednom prihvati – primenjuje doživotno.</h3>","ll"]
];
function primer() {
var sekKarakteristike = document.getElementById("tekst");
var ispis = "";
for (let i = 0; i < karakteristike.length; i++) {
ispis = "";
let artikal = document.createElement("article");
artikal.classList.add("primer");
//artikal.style.backgroundImage = "url('images/" + posteri[i][2] + ".jpg')";
ispis += "<div><h3>" + karakteristike[i][0] + "</h3><p>" + karakteristike[i][1] + "</p></div>";
artikal.innerHTML = ispis;
sekKarakteristike.appendChild(artikal);
}
sekKarakteristike.firstElementChild.classList.add("vidi");
document.getElementById("tekst").style.color="brown";
}