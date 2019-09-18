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
});

