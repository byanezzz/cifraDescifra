
##### Pseudocodigo para cifrar y descifrar una frase
```javascript
funcion cipher**(){
repetir
	//Valida que la frase no contenga espacios en blancos ni numeros
	var frase;	
	Escribir("Ingrese una frase:")
	leer(frase)
  	var invalido=falso;
	si(frase.length===0) entonces
		invalido=true;
		Escribir("Ha olvidado ingresar la frase");
	Sino entonces
		para (i=0 mientras i<frase.length con paso i++) hacer 
			si (frase[i]!==" " o !isNaN(frase[i])) entonces
				invalido=true;
				Escribir("La frase ingresada no es válida");
				break;
			fin si
		fin para
	fin si
hasta que(invalido==true)

//Cifra la frase, la convierte en codigo ASCII y almacena en array
 var arrASCII=[];
para(i=0 mientras i<frase.length con paso i++){
 	arrASCII[i]=((frase.charCodeAt(i)-65+33)%58)+65;
Fin para

//Convierte la frase cifrada ASCII en abcdario normal
var arrCifrado=[];
 para(i=0 mientras i<arrASCII.length con paso i++){
 	arrCifrado[i]=String.fromCharCode(arrASCII[i]);
Fin para
 Escribir(arrCifrado.join(""));
Fin funcion
 

funcion decipher(){
repetir{
	//Valida que la frase no contenga espacios en blancos ni numeros
	Escribir("Ingrese una frase:")
	leer(frase)
  	var invalido=false;
	si(frase.length===0) entonces
		invalido=true;
		Escribir("Ha olvidado ingresar la frase");
	Sino entonces
		para (i=0 mientras i<frase.length con paso i++) hacer 
			si (frase[i]!==" " o !isNaN(frase[i])) entonces
				invalido=true;
				Escribir("La frase ingresada no es válida");
				break;
			fin si
		fin para
	fin si
hasta que(invalido==true)

//Descifra la frase, la convierte en codigo ASCII y almacena en array
var arrASCII=[];
para(i=0 mientras i<frase.length con paso i++){
 	arrASCII[i]=((frase.charCodeAt(i)-65+25)%58)+65;
Fin para

//Convierte la frase descifrada ASCII en abcdario normal
var arrDescifrado=[];
para(i=0 mientras i<arrASCII.length con paso i++){
 	arrDescifrado[i]=String.fromCharCode(arrASCII[i]);
fin para
Escribir(arrDescifrado.join(""));
Fin funcion

//Cuerpo principal del programa

INICIO
	repetir{
		var respuesta 
		Escribir ("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");
		Leer respuesta;
		si(respuesta != "")entonces
			si(respuesta == "1") entonces
				invocar funcion cipher();
			sino si (respuesta == "2") entonces
				invocar funcion decipher();
			sino
				Escribir("Ingrese una opción válida");
			fin si
		fin si
	hasta que (respuesta === "" o (respuesta !== "1" y respuesta !== "2"));

FIN
```
#### [Ver diagrama de flujo](https://www.lucidchart.com/invitations/accept/645c88ce-4b08-43cc-967c-a282cf67e556)