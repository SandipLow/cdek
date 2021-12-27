crouselImage = document.querySelector(".crousel-image");

function nextImage() {
    // console.log(crouselImage.style.backgroundImage)

    if (crouselImage.style.backgroundImage == "url(\"Start.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Gameplay.png\")") {
        crouselImage.style.backgroundImage = "url(End.png)";
    }

    else{
        crouselImage.style.backgroundImage = "url(Start.png)";
    }
}

function prevImage() {
    if (crouselImage.style.backgroundImage == "url(\"Gameplay.png\")") {
        crouselImage.style.backgroundImage = "url(Start.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"End.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay.png)";
    }

    else{
        crouselImage.style.backgroundImage = "url(End.png)";
    }
}

