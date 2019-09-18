document.addEventListener("DOMContentLoaded", function(e) {
    var btn = document.getElementById("curDate");
    btn.onclick = function(event) {
        var today  = new Date();
        var dd = String(today.getDate()).padStart(2, '0');  
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        var div1 = document.getElementById("date");
        div1.innerHTML = today;
    };

    var btn2 = document.getElementById("btn2");
    btn2.onclick = function(event) {
        alert("Popped Up");
    }

    var btn3 = document.getElementById("btn3");
    btn3.onclick = function(event) {
        var v = 1;
        alert(v);
    }

    var btnNode = document.getElementById("btnNode");
    var btnChanged = document.getElementById("btnChanged");
    var text_to_change = document.getElementById("text_to_change");
    btnNode.onclick = function(event) {
        text_to_change.innerHTML = "Node";
    }
    btnChanged.onclick = function(event) {
        text_to_change.innerHTML = "Changed";
    }

    var btnHide = document.getElementById("btnHide");
    var text_to_hide = document.getElementById("text_to_hide");
    btnHide.onclick = function(event) {
        text_to_hide.innerHTML = "";
    }
    btnHide.ondblclick = function(event) {
        text_to_hide.innerHTML = "Pikabooo";
    }




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