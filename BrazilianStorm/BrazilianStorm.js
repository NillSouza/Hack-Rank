function solucao(notas) {

    let maior = notas[0], menor = notas[0];
    let indiceMenor = 0, indiceMaior = 0;
    let media = 0;

    for (let i = 0; i < notas.length; i++) {
        media += notas[i];
        if (menor > notas[i]) {
            menor = notas[i];
        }
        if (maior < notas[i]) {
            maior = notas[i];
        }
    }

    if ((notas.length - 2) > 0) {
        console.log((media - (maior + menor)) / (notas.length - 2))
    } else {
        console.log(notas.length - 2);
    }
}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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