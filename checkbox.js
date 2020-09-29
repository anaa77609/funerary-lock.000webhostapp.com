window.onload = function(){
	
	
	//Dodeljivanje dogadjaja click koji ce pozvati funkciju provera()//
	document.getElementById("btnPrijavi").addEventListener("click", provera());
}

//Dodeljivanje dogadjaja load

window.addEventListener("load", popuniListu);


function popuniListu(){
	//Definisanje potrebnih promenljivih
	var psi, ispis;

	psi = ["Labrador", "Bigl", "Jazavicar","Pit bul","Staford","Rotvajler","Pudlica","Ostalo","Nemam omiljenu rasu","Ne volim pse"];

	ispis = "";

	for(var i = 0; i < psi.length; i++){

		ispis += "<input type='checkbox' name='chbPsi' value='" + psi[i] + "'>" + psi[i] + "<br/>";

	}
	document.getElementById("listaPasa").innerHTML = ispis;
	document.getElementById("listaPasa").style.color="yellow";
}

/*function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}*/

/*function provera()
{
	
	var psi, psiIzbor;
	var nizGreske = [];
	var nizOk = [];
	
	psi = document.getElementsByName("chbPsi");
	psiIzbor = "";

	for(var i = 0; i < psi.length; i++){

		if(psi[i].checked){
			psiIzbor += psi[i].value + " ";
		}
	}
	
	if(psiIzbor == ""){
		nizGreske.push("Izaberite predmet");
	}
	else{
		nizOK.push(psiIzbor);
	}

	var lista = "<ul>";

	if(nizGreske.length != 0){

		for(var i = 0; i < nizGreske.length; i++){
			lista += "<li style='color:#ff0000'>" + nizGreske[i]+ "</li>";
		}
	}
	else{

		for(var i = 0; i < nizOK.length; i++){
			lista += "<li>" + nizOK[i]+ "</li>";
		}
	}
	lista += "</ul>";
	document.getElementById("rez").innerHTML = lista;
}*/