const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const btncopiar = document.querySelector(".btnCopiar");
document.getElementById("btn-copy").style.display = "none";

function btnEncriptar() {
  console.log("btnEncriptar ejecutado");
  let encriptValue = document.getElementById("inputText").value;

  if (!validarTexto()) {
    const textoEncriptado = encrypt(encriptValue);
    document.getElementById("outputText").style.backgroundImage = "none";
    document.getElementById("btn-copy").style.display = "block";
    resultField.value = "";
  } else {
    console.log("no valida");
    return false;
  }
}

function validarTexto() {
  let textoEscrito = document.getElementById("inputText").value;
  let regExp = /[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ@#$!-`~%&]/gm;
  let validador = textoEscrito.match(regExp);
  if (!validador || validador === 0) {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function encrypt(inputTextA) {
  inputTextA = document.getElementById("inputText").value;
  inputTextA = inputTextA.toLowerCase();
  inputToCode = inputTextA
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  resultado(inputToCode);
  inputToCode = " ";
}

function resultado(result) {
  document.getElementById("outputText").innerHTML = result;
  result = "";
}
function decrypt() {
  let input = document.getElementById("inputText").value;
  input = input.toLowerCase();
  let inputToDecode = input
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  console.log(inputToDecode);
  resultado(inputToDecode);
  input = "";
}
if (document.getElementById("inputText").value === "") {
  alert("Ingrese una palabra o frase");
}

function copyToClipboard() {
  var resultField = document.getElementById("outputText");
  resultField.select();
  document.execCommand("copy");
  alert("El texto ha sido incluido al portapapeles");
  resultField = "";
}
