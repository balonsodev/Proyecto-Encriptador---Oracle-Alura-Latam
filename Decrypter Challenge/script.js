var output = " ";
var input = "la casa de mi mama";
var inputCoded = "lai caisai denter mimes maimai";

function encrypt() {
  //let input = document.getElementById(inputText.value);

  let inputToCode = input
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "over")
    .replace(/u/gi, "ufat");
  console.log(inputToCode);
}

function decrypt() {
  //let input = document.getElementById(inputText.value);

  let inputToDecode = inputCoded
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/over/gi, "o")
    .replace(/ufat/gi, "u");
  console.log(inputToDecode);
}
encrypt(input);
decrypt(inputCoded);
