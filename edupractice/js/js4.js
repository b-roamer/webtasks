document.addEventListener("DOMContentLoaded", function(e) {
var btnNode = document.getElementById("btnNode");
    var btnChanged = document.getElementById("btnChanged");
    var text_to_change = document.getElementById("text_to_change");
    btnNode.onclick = function(event) {
        text_to_change.innerHTML = "\"Node\"";
    }
    btnChanged.onclick = function(event) {
        text_to_change.innerHTML = "\"Changed\"";
    }});