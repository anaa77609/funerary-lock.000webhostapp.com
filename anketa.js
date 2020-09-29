window.onload = function(){

	
	//Dodeljivanje dogadjaja click koji ce pozvati funkciju anketa()
	document.getElementById("btnpotvrdi").addEventListener("click", anketa);
	document.getElementById("btnpotvrda").addEventListener("click", provera);
}
function anketa(){
var biranje=document.getElementsByName("radio");
var sadrzaj="";
var greske=new Array();
var izabrano="";
for(i=0;i<biranje.length;i++)
{
if(biranje[i].checked)
{
izabrano=biranje[i].value;
break;
}
}
if(izabrano=="")
{
greske.push("Niste izabrali nijedan odgovor!");
}
if(greske.length==0)
{
alert("Uspešno ste glasali!");

}
else
{
var listaGresaka="";
for(var i=0;i<greske.length;i++)
{
listaGresaka+=greske[i];
}
alert(listaGresaka);
}
}