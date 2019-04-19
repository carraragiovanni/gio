document.addEventListener("DOMContentLoaded", function(event) { 
    document.addEventListener('click', function (click) {
        clearAllLinks();
        if (click.target.nodeName == "A") {
            document.getElementById('right').style.display = "inline"
            populateRight(click.target.innerHTML);
        } else {
            document.getElementById('right').style.display = "none";
        }
    })
});

function clearAllLinks() {
        var links = document.getElementsByClassName("links");

        for (var i = 0; i < links.length; i++) {
            links[i].style.display = "none";
        }
};

function populateRight(type) {
    switch (type) {
        case "code":
        document.getElementById("code-links").style.display = "inline";
        break;
        case "CAD":
        document.getElementById("cad-links").style.display = "inline";
        break;
        case "12M":
        document.getElementById("12M").style.display = "inline";
        break;
        case "bicicletta":
        document.getElementById("bicicletta").style.display = "inline";
        break;
        case "about":
        document.getElementById("about").style.display = "inline";
        break;
    }
}