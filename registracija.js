var datum;
window.onload= function(){
	datum=new Date();
	console.log("sa");
	ispisGod();
	document.getElementById("btnSubmitt").addEventListener("click",potvrdi());
}
function ispisGod(){
	var tag = document.getElementById("godina");
	var ispis="";
	for(var i=datum.getFullYear();i>1930;i--){
		ispis += "<option value='"+i+"'>"+i+"</option>";
	}
	tag.innerHTML+=ispis;
	console.log(datum.getFullYear());
	//console.log(ispis);
}
function ispisD(n){
	console.log(n.selectedIndex);
	var tagD = document.getElementById("dan");
	var ispis="<option value='0'>Dan</option>";
	switch (n.selectedIndex){
		case 2:
			for(var i=1;i<=28;i++){
				ispis += "<option value='"+i+"'>"+i+"</option>";
			}
			console.log(ispis);
			tagD.innerHTML=ispis;
			
			break;
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			for(var i=1;i<=31;i++){
				ispis += "<option value='"+i+"'>"+i+"</option>";
			}
			console.log(ispis);
			tagD.innerHTML=ispis;
			break;
		default:
			for(var i=1;i<=30;i++){
				ispis += "<option value='"+i+"'>"+i+"</option>";
			}
			console.log(ispis);
			tagD.innerHTML=ispis;
			break;
			
	}
}

function potvrdi()
{
	var dobar = [];
	var greske = [];
	var ime = document.querySelector("#tbime");
	var regIme =  /^[A-Z][a-z]{2,19}$/;
	var spanIme = document.querySelector("#ime-err");
	
	var prezime=document.querySelector("#tbprezime");
var regPrezime= /^[A-Z][a-z]{2,19}$/;
var spanPrezime= document.querySelector("#prezime-err");
var username = document.querySelector("#tbKorIme");
var reKorIme = /^[a-z]{2,19}$/;
var spanUsername = document.querySelector("#username-err");

var email = document.querySelector("#tbemail");

var reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
var spanmail = document.querySelector("#email-err");

//var pol = "";
var pass=document.querySelector("#tbLozinka1");
var reLozinka = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
var spanLozinka = document.querySelector("#lozinka-err");


godina = document.getElementById("godina");
godinaIzbor = godina.options[godina.selectedIndex].value;
	
mesec = document.getElementById("mesec");
mesecIzbor = mesec.options[mesec.selectedIndex].value;
	
//dan = document.getElementById("dan");
//danIzbor = dan.options[dan.selectedIndex].value;
	var status = document.getElementsByName("pol");
	var statusIzbor = "";

	for(var i = 0; i < status.length; i++){

		if(status[i].checked){
			statusIzbor = status[i].value;
			break;
		}

	}

	if(!regIme.test(ime.value))
	{
		ime.style.border = "2px solid #FFD81F";
		greske.push("Greška, ukucajte ponovo ime.");
	}
	
	else {
dobar.push("Ime " + ime.value);


}

if(!regPrezime.test(prezime.value))
{
	prezime.style.border="2px solid #FFD81F";
	greske.push("Greška, ukucajte ponovo prezime.");
}
else
{
	dobar.push("Prezime "+prezime.value);
	
}


if(!reKorIme.test(username.value))
{
	username.style.border="2px solid #FFD81F";
	greske.push("Greška, ukucajte ponovo korisničko ime.");
}
else
{
	dobar.push("Username "+username.value);

}

if(statusIzbor == ""){
		greske.push("Greška, niste izabrali pol.");
	}
	else{
		dobar.push(statusIzbor);
	}
	
if(godinaIzbor=="0")
{
	greske.push("Greska, niste izabrali godinu rodjenja.");
}
else
{
	dobar.push(godinaIzbor);
}
if(mesecIzbor=="0")
{
	greske.push("Greska, niste izabrali mesec rodjenja.");
}
else
{
	dobar.push(mesecIzbor);
}
/*if(danIzbor=="0")
{
	dan.push("Greska, niste izabrali dan rodjenja.");
}
else
{
	dobar.push(danIzbor);
}*/
	
		if(!reEmail.test(email.value)){
			email.style.border="2px solid #FFD81F";
		greske.push("Greška, ukucajte ponovo email.");
	}
	else{
		dobar.push(email.value);
	}

 if(!reLozinka.test(pass.value))
{
	pass.style.border="2px solid #FFD81F";
	greske.push("Greška, ukucajte ponovo lozinku.Mora sadržati bar 1 broj, 1 malo slovo, 1 veliko slovo i bar 8 karaktera.");
}
else
{
	dobar.push("Lozinka "+pass.value);
	
}



var lista = "<ul>";

	if(greske.length != 0){

		for(var i = 0; i < greske.length; i++){
			lista += "<li style='color:#FFD81F'>" + greske[i]+ "</li>";
		}
	}
	else{

		for(var i = 0; i < dobar.length; i++){
			lista += "<li>" + dobar[i]+ "</li>";
		}
	}
	lista += "</ul>";
	document.getElementById("rez").innerHTML = lista;

	}
	


