
### Pseudocodigo para cifrar y descifrar una frase

#### Cuerpo principal del programa
1. Mostrar un mensaje al usuario preguntando que operacion desea realizar: debe marcar "1" si quiere cifrar o "2" para descifrar
2. Declarar una variable y almacenar ahi la respuesta del usuario
3. Evaluar la respuesta del usuario con un condicional if
	1. Si el usuario envia una respuesta que no esta vacia  evaluamos que dice su respuesta
		1. Si la respuesta fue "1", invocar a la funcion cipher
		2. Sino si la respuesta fue "2", invocar a la funcion decipher
			1. Sino mostrar un mensaje de que la respuesta enviada no es valida
4. Repetir los pasos 1-3 mientras la respuesta no sea valida

### Funcion cipher
1. Declaro una funcion cipher
2. Solicito al usuario que ingrese la frase que desea cifrar
3. Valido que lo introducido sea correcto
	1. Declaro una variable llamada invalido y la inicializo en falso
	2. Evaluo la condicion de si la frase esta vacia
		- Si se cumple invalido pasa a ser verdadera
	3. Sino se cumple recorro con una expresion repetitiva for para evaluar elemento por elemento si hay algun numero o espacio vacio dentro de la frase.
		- Si se cumple invalido pasa a ser verdadera
		- Muestro un mensaje al usuario de que la frase es invalida
		- Rompo el ciclo ya que con un elemento que cumpla la condicion es suficiente para que la frase entera sea invalida
4. Repetir los pasos del 1 al 3 hasta que invalido sea distinta de verdadera
5. Aplicar el cifrado cesar
	1. Declaro un array vacio llamado arrASCII, con una expresion iterativa for recorro la frase 
	2. Cada elemento de la frase lo convertimos a ASCII con la funcion charCodeAt y le aplicamos la formula del cifrado de cesar con 33 pasos a la derecha segun el enunciado
	3. Recorremos ahora el array arrACII que ahora contiene numeros que en realidad son letras representadas en ASCII
	4. Con la funcion fromCharCode volvemos a revertir cada elemento del array arrASCII a string
6. Convertimos el array de string nuevamente a una cadena de texto usando la funcion join
7. Mostrar un mensaje al usuario con la frase cifrada.

### Funcion decipher
1. Declaro una funcion decipher
2. Solicito al usuario que ingrese la frase que desea cifrar
3. Valido que lo introducido sea correcto
	1. Declaro una variable llamada invalido y la inicializo en falso
	2. Evaluo la condicion de si la frase esta vacia
		- Si se cumple invalido pasa a ser verdadera
	3. Sino se cumple recorro con una expresion repetitiva for para evaluar elemento por elemento si hay algun numero o espacio vacio dentro de la frase.
		- Si se cumple invalido pasa a ser verdadera
		- Muestro un mensaje al usuario de que la frase es invalida
		- Rompo el ciclo ya que con un elemento que cumpla la condicion es suficiente para que la frase entera sea invalida
4. Repetir los pasos del 1 al 3 hasta que invalido sea distinta de verdadera
5. Aplicar el cifrado cesar
	1. Declaro un array vacio llamado arrASCII, con una expresion iterativa for recorro la frase 
	2. Cada elemento de la frase lo convertimos a ASCII con la funcion charCodeAt y le aplicamos la formula del cifrado de cesar con 25 pasos a la derecha
	3. Recorremos ahora el array arrACII que ahora contiene numeros que en realidad son letras representadas en ASCII
	4. Con la funcion fromCharCode volvemos a revertir cada elemento del array arrASCII a string
6. Convertimos el array de string nuevamente a una cadena de texto usando la funcion join
7. Mostrar un mensaje al usuario con la frase descifrada.

***
#### [Ver diagrama de flujo](https://www.lucidchart.com/invitations/accept/645c88ce-4b08-43cc-967c-a282cf67e556)