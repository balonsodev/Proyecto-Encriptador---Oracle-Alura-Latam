var output = " ";
var input = "la casa de mi mama";

function encript() {
  //let input = document.getElementById(inputText.value);

  let inputDecoded = input
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "over")
    .replace(/u/gi, "ufat");
  console.log(inputDecoded);
}
encript(input);
