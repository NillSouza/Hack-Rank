function solucao(sequencia) {
    let posi = 0;
    for (let i of sequencia) {
        if (i === ">") {
            posi++;
            if (posi >= 7) {
                posi = 0;
            }
        }
        if (i === "<") {
            posi--;
            if (posi <= -1) {
                posi = 6;
            }
        }
    }
    console.log(posi)
}

function processData(input) {
    solucao(input);
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