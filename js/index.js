const CLP_BS = document.querySelector("#CLP-BS");
const BS_CLP = document.querySelector("#BS-CLP");

CLP_BS.addEventListener("click", () => {
    ConvertirCLPaBS();
});

BS_CLP.addEventListener("click", () => {
    ConvertirBSaCLP();
});

document.querySelector("#clp").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        ConvertirCLPaBS();
    }
});

document.querySelector("#bs").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        ConvertirBSaCLP();
    }
});

function ConvertirBSaCLP() {
    const tasaHtml = document.querySelector("#tasa");
    const clpHtml = document.querySelector("#clp");
    const bsHtml = document.querySelector("#bs");
    const tasa = tasaHtml.value.toString().trim() != "" ? parseFloat(tasaHtml.value) : localStorage.getItem("tasa");
    tasaHtml.value = tasa;
    const bs = parseFloat(bsHtml.value);
    const res = bs / tasa;
    clpHtml.value = res.toFixed(2);
    localStorage.setItem("tasa", tasa);
}

function ConvertirCLPaBS() {
    const tasaHtml = document.querySelector("#tasa");
    const clpHtml = document.querySelector("#clp");
    const bsHtml = document.querySelector("#bs");
    const tasa = tasaHtml.value.toString().trim() != "" ? parseFloat(tasaHtml.value) : localStorage.getItem("tasa");
    tasaHtml.value = tasa;
    const clp = parseFloat(clpHtml.value);
    const res = clp * tasa;
    bsHtml.value = res.toFixed(2);
    localStorage.setItem("tasa", tasa);
}