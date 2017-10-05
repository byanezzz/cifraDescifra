function cipher(){
do{
	//Valida que la frase no contenga espacios en blancos ni numeros
	var frase=prompt("Ingrese una frase:")
  	var invalido=false;
	if(frase.length===0){
		invalido=true;
		alert("Ha olvidado ingresar la frase");
	}else{
	for (i=0; i<frase.length; i++){ 
			if (frase[i]===" "||!isNaN(frase[i])){
				invalido=true;
				alert("La frase ingresada no es válida");
				break;
			}
		}
	}
}while(invalido==true)
//Cifra la frase, la convierte en codigo ASCII y almacena en array
 var arrASCII=[];
 for(i=0;i<frase.length;i++){
 	arrASCII[i]=((frase.charCodeAt(i)-65+33)%58)+65;
 }
var arrCifrado=[];
 for(i=0;i<arrASCII.length;i++){
 	arrCifrado[i]=String.fromCharCode(arrASCII[i]);
 } 
 alert(arrCifrado.join(""));
 }
 


function decipher(){
do{
	//Valida que la frase no contenga espacios en blancos ni numeros
	var frase=prompt("Frase cifrada:")
  	var invalido=false;
	if(frase.length===0){
		invalido=true;
		alert("Ha olvidado ingresar la frase");
	}else{
	for (i=0; i<frase.length; i++){ 
			if (frase[i]===" "||!isNaN(frase[i])){
				invalido=true;
				alert("La frase ingresada no es válida");
				break;
			}
		}
	}
}while(invalido==true)

//Descifra la frase, la convierte en codigo ASCII y almacena en array
var arrASCII=[];
for(i=0;i<frase.length;i++){
 	arrASCII[i]=((frase.charCodeAt(i)-65+25)%58)+65;
}

//
var arrDescifrado=[];
for(i=0;i<arrASCII.length;i++){
 	arrDescifrado[i]=String.fromCharCode(arrASCII[i]);
}
alert(arrDescifrado.join(""));
}

function menu(){
	do{
		var respuesta = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");
		if(respuesta != ""){
			if(respuesta == "1") {
				cipher();
			} else if (respuesta == "2") {
				decipher();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta === "" || (respuesta !== "1" && respuesta !== "2"));
}
 menu();

