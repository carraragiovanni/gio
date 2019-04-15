document.addEventListener("DOMContentLoaded", function(event) { 
    document.addEventListener('click', function (click) {
        if (click.target.nodeName == "A") {
            document.getElementById('right').style.display = "inline";
            populateRight(click.target.innerHTML);
        } else {
            document.getElementById('right').style.display = "none";
        }
    })
});

function populateRight(type) {
    switch (type) {
        case "code":
            document.getElementById("code-links").style.display = "inline";
            document.getElementById("12M").style.display = "none";
            document.getElementById("cad-links").style.display = "none";
            document.getElementById("bicicletta").style.display = "none";
            break;
            case "CAD":
            document.getElementById("cad-links").style.display = "inline";
            document.getElementById("12M").style.display = "none";
            document.getElementById("code-links").style.display = "none";
            document.getElementById("bicicletta").style.display = "none";
            break;
            case "12M":
            document.getElementById("12M").style.display = "inline";
            document.getElementById("cad-links").style.display = "none";
            document.getElementById("code-links").style.display = "none";
            document.getElementById("bicicletta").style.display = "none";
            break;
            case "bicicletta":
            document.getElementById("bicicletta").style.display = "inline";
            document.getElementById("12M").style.display = "none";
            document.getElementById("cad-links").style.display = "none";
            document.getElementById("code-links").style.display = "none";
            break;
    }
}