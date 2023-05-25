function copyToClipboard() {
  var resultField = document.getElementById("outputText");
  resultField.select();
  document.execCommand("copy");
  resultField.value = "";

  alert("El texto ha sido incluido al portapapeles");
  resultField = "";
}

function encrypt() {
  var textoI = document.getElementById("inputText").value;
  textoI = textoI.toLowerCase();
  let inputToCode = textoI
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  resultado(inputToCode);
  //document.getElementById("outputText").innerHTML = inputToCode;
  textoI = "";
  inputToCode = "";
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
  //document.getElementById("outputText").innerHTML = inputToDecode;
  input = "";
}
if (document.getElementById("inputText").value === "") {
  alert("Ingrese una palabra o frase");
}
