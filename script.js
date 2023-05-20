function copyToClipboard() {
  var resultField = document.getElementById("outputText");
  resultField.select();
  document.execCommand("copy");
  //mostrarImagen();
  resultField.value = "";

  alert("El texto ha sido incluido al portapapeles");
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
  document.getElementById("outputText").innerHTML = inputToCode;
  textoI = "";
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
  document.getElementById("outputText").innerHTML = inputToDecode;
  input = "";
}
function mostrarTexto() {
  $("#encription-not-found").addClass("hidden");
  $("#encription-found").removeClass("hidden");
}

function mostrarImagen() {
  $("#encription-found").addClass("hidden");
  $("#encription-not-found").removeClass("hidden");
}
function procesoEncriptar() {
  // SI el input area esta vacio mostramos al perrito
  var textoAEncriptar = document.getElementById("inputText");
  if (textoAEncriptar.value == "") {
    mostrarImagen();
    swal("Ingresa un texto :)");
    return;
  } else {
    mostrarTexto();
  }

  var textoEncriptado = encriptar(textoAEncriptar.value);
  var resultadoTextArea = document.getElementById("resultado");
  resultadoTextArea.value = textoEncriptado;
  textoAEncriptar.value = "";
}
