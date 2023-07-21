

function solucao(letra, palavras) {
    let cont = 0;
    let filtro = []
    for (let i = 0; i < palavras.length; i++) {
        filtro = palavras[i]
        for (let j = 0; j < 1; j++) {
            if (filtro[j] === letra) {

            } else {
                cont += 1;
            }
        }
    }
    console.log(cont);
}

function processData(input) {
    const { letra, palavras } = JSON.parse(input)[0];
    solucao(letra, palavras);
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