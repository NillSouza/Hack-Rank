function solucao(precos) {

    let menorPreju = 9999999;

    for (let i = 0; i < precos.length; i++) {
        for (let j = i + 1; j < precos.length; j++) {
            const compra = precos[i];
            const venda = precos[j];
            const prejuizo = compra - venda;
            if (prejuizo > 0) {
                if (prejuizo < menorPreju) {
                    menorPreju = prejuizo;
                }
            }
        }
    }
    console.log(menorPreju)
}

function processData(input) {
    const precos = input.split(" ").map(x => parseInt(x));
    solucao(precos);
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