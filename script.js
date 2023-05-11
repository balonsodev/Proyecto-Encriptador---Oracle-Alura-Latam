//var output = " ";
const textoPrueba = "la casa";

function encrypt() {
  var textoI = document.getElementById("inputText").value;
  let inputToCode = textoI
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  console.log(inputToCode);
  document.getElementById("outputText").innerHTML = inputToCode;
}

function decrypt() {
  let input = document.getElementById("inputText").value;

  let inputToDecode = input
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  console.log(inputToDecode);
  document.getElementById("outputText").innerHTML = inputToDecode;
}

//decrypt(inputCoded);
