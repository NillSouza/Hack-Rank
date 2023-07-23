let palpite = "3";
let palavra = "abacate"
let contador = 0;

for (let i of palavra) {
    if (palpite === i) {
        contador++;
    }
}
console.log(contador)
