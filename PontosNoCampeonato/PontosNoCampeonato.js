function solucao(resultados) {
    let vitoria = 3;
    let empate = 1;
    let pontos = 0;

    for (let i of resultados) {
        if (i === "V") {
            pontos += vitoria;
        }
        if (i === "E") {
            pontos += empate;
        }
    }
    console.log(pontos);
}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
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