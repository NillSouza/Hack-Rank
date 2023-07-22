function solucao(primeiraLetra, segundaLetra, palavras) {
    let palavra, contador = 0;
    let verificarLetras = "";
    let juntarLetras = primeiraLetra + segundaLetra;

    for (let i = 0; i < palavras.length; i++) {
        palavra = palavras[i];
        for (let j = 0; j < 2; j++) {
            verificarLetras += palavra[j]
            if (juntarLetras === verificarLetras) {
                console.log(palavra)
                contador++;
            }
        }
        verificarLetras = "";
    }

    if (contador == 0) {
        console.log("NENHUMA")
    }


}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});