document.addEventListener("DOMContentLoaded", function(e) {
    var btnHide = document.getElementById("btnHide");
    var text_to_hide = document.getElementById("text_to_hide");
    btnHide.onclick = function(event) {
        text_to_hide.innerHTML = "";
    }
    btnHide.ondblclick = function(event) {
        text_to_hide.innerHTML = "Pikabooo";
    }});