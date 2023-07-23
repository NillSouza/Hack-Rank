function solucao(palpite, palavra) {
    let contador = 0;
    for (let i of palavra) {
        if (palpite === i) {
            contador++;
        }
    }
    console.log(contador);
}

function processData(input) {
    const [palpite, palavra] = input.split(" ");
    solucao(palpite, palavra);
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