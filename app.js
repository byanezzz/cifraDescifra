function cipher() {
  do {
    // Valida que la frase no contenga espacios en blancos ni numeros
    var phrase = prompt("Ingrese una frase:")
    var invalid = false;
    if (phrase.length === 0) {
      invalid = true;
      alert("Ha olvidado ingresar la frase");
    } else {
      for (var index = 0; index < phrase.length; index++) {
        if (phrase[index] === " " || !isNaN(phrase[index])) {
          invalid = true;
          alert("La frase ingresada no es válida");
          break;
        }
      }
    }
  } while (invalid === true)
  // Cifra la frase, la convierte en codigo ASCII y almacena en array
  var arrASCII = [];
  for (var index = 0; index < phrase.length; index++) {
    arrASCII[index] = ((phrase.charCodeAt(index) - 65 + 33) % 58) + 65;
  }
  var arrCipher = [];
  for (var index = 0; index < arrASCII.length; index++) {
    arrCipher[index] = String.fromCharCode(arrASCII[index]);
  }
  alert(arrCipher.join(""));
}

function decipher() {
  do {
    // Valida que la frase no contenga espacios en blancos ni numeros
    var phrase = prompt("Frase cifrada:")
    var invalid = false;
    if (phrase.length === 0) {
      invalid = true;
      alert("Ha olvidado ingresar la frase");
    } else {
      for (var index = 0; index < phrase.length; index++) {
        if (phrase[index] === " " || !isNaN(phrase[index])) {
          invalid = true;
          alert("La frase ingresada no es válida");
          break;
        }
      }
    }
  } while (invalid === true)

  // Descifra la frase, la convierte en codigo ASCII y almacena en array
  var arrASCII = [];
  for (var index = 0; index < phrase.length; index++) {
    arrASCII[index] = ((phrase.charCodeAt(index) - 65 + 25) % 58) + 65;
  }

  var arrDecipher = [];
  for (var index = 0; index < arrASCII.length; index++) {
    arrDecipher[index] = String.fromCharCode(arrASCII[index]);
  }
  alert(arrDecipher.join(""));
}

function menu() {
  do {
    var answ = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");
    if (answ !== "") {
      if (answ === "1") {
        cipher();
      } else if (answ === "2") {
        decipher();
      } else {
        alert("Ingrese una opción válida");
      }
    }
  } while (answ === "" || (answ !== "1" && answ !== "2"));
}
menu();