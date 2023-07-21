function solucao(stringCorrompida) {
    let espace = "";
    for (let caracter of stringCorrompida) {
        if (caracter == '!' || caracter == '@' || caracter == '#' || caracter == '$' || caracter == '%' || caracter == "&" || caracter == "*" || caracter == "(" || caracter == ")" || caracter == ".") {

        } else {
            espace += caracter;
        }
    }
    console.log(espace)
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