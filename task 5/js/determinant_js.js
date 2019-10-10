function determinant() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    var g = document.getElementById("g").value;
    var h = document.getElementById("h").value;
    var i = document.getElementById("i").value;
    
    var res = a*((e*i) - (f*h)) - b*((d*i) - (f*g)) + c*((d*h) - (e*g));

    var resText = document.getElementById("result");
    
    resText.innerHTML = res;

    var formula = document.getElementById("formula");

    formula.innerHTML = "| A | = " + a + "(" + e + "*" + i + " - " + f + "*" + h + ") - " + b + "(" + d + "*" + i + " - " + f + "*" + g + ") + " + c + "(" + d + "*" + h + " - " + e + "*" + g + ") = " + res;
}

