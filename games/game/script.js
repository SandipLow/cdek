crouselImage = document.querySelector(".crousel-image");

//Auto change Image
setInterval(() => {
    nextImage();
}, 1000);
//Images change in crousel
function nextImage() {
    // console.log(crouselImage.style.backgroundImage)

    if (crouselImage.style.backgroundImage == "url(\"Start.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay1.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Gameplay1.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay2.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Gameplay2.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay3.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Gameplay3.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay4.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Gameplay3.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay4.png)";
    }

    else{
        crouselImage.style.backgroundImage = "url(Start.png)";
    }
}

function prevImage() {
    if (crouselImage.style.backgroundImage == "url(\"Gameplay1.png\")") {
        crouselImage.style.backgroundImage = "url(Start.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Gameplay2.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay1.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Gameplay3.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay2.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Gameplay4.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay3.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"Start.png\")") {
        crouselImage.style.backgroundImage = "url(End.png)";
    }

    else if(crouselImage.style.backgroundImage == "url(\"End.png\")") {
        crouselImage.style.backgroundImage = "url(Gameplay4.png)";
    }

    else{
        crouselImage.style.backgroundImage = "url(Start.png)";
    }
}

