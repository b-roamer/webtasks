document.addEventListener("DOMContentLoaded", function(e) {
var btnAddition = document.getElementById("Addition");
    var btnDifference = document.getElementById("Difference");
    var btnMultiplication = document.getElementById("Multiplication");
    var btnDivision = document.getElementById("Division");
    var btnModulo = document.getElementById("Modulo");
    var btnResult = document.getElementById("btnResult")
    var result = document.getElementById("result");

    var res = 0;

    var sign = document.getElementById("sign");

    var operation = "+";




    btnAddition.onclick = function(event) {
        operation = "+";
        sign.innerHTML = operation;
    }

    btnDifference.onclick = function(event) {
        operation = "-";
        sign.innerHTML = operation;
    }

    btnMultiplication.onclick = function(event) {
        operation = "*";
        sign.innerHTML = operation;
    }

    btnDivision.onclick = function(event) {
        operation = "/";
        sign.innerHTML = operation;
    }

    btnModulo.onclick = function(event) {
        operation = "%";
        sign.innerHTML = operation;
    }

    btnResult.onclick = function(event) {
        var n1 = parseInt(document.getElementById("n1").value);
        var n2 = parseInt(document.getElementById("n2").value);
        
        if (operation==="+") result.innerHTML = n1 + n2;

        else if (operation==="-") result.innerHTML = n1 - n2;

        else if (operation==="*") result.innerHTML = n1 * n2;

        else if (operation==="/") result.innerHTML = n1 / n2;

        else if (operation==="%") result.innerHTML = n1 % n2;
    }
});