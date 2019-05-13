document.addEventListener("DOMContentLoaded", function(event) { 
    document.addEventListener('click', function (click) {
        // console.log(click.target.classList.contains("left-link"));
        if (click.target.classList.contains("left-link")) {
            clearAllLinks();
            document.getElementById('right-main-container').style.display = "inline"
            populateRight(click.target.id);
        } else if (click.target.classList.contains("right-link")) {
            console.log("right link");
        } else if (click.target.classList.contains("right-description")) {
            console.log("right description");
        } else {
            document.getElementById('right-main-container').style.display = "none";
        }
    })
});

function clearAllLinks(linkType) {
        // 0 = 1st LEVEL - LEFT
        // 1 =  LEVEL - RIGHT
        var links = document.getElementsByClassName("right-item-container");
        for (var i = 0; i < links.length; i++) {
            links[i].style.display = "none";
        }
};

function populateRight(type) {
    switch (type) {
        case "code-link-left":
        document.getElementById("code-right-container").style.display = "inline";
        break;
        case "cad-link-left":
        document.getElementById("cad-right-container").style.display = "inline";
        break;
        case "12m-link-left":
        document.getElementById("12m-right-container").style.display = "inline";
        break;
        case "model-boat-left":
        document.getElementById("model-boat-right-container").style.display = "inline";
        break;
        case "superTesa-link-left":
        document.getElementById("superTesa-right-container").style.display = "inline";
        break;
        case "about-link-left":
        document.getElementById("about-right-container").style.display = "inline";
        break;
    }
}