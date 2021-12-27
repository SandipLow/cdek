crouselImage = document.querySelector(".crousel-image");
form = document.getElementById('add-comment')
commentSection = document.querySelector('.comment-section');

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

//db initialize
firebase.initializeApp({
    apiKey: "AIzaSyAn3eeoZ52fCepqUmgc2X7UOGFlMT8w7CI",
    authDomain: "cdek-8927886351.firebaseapp.com",
    projectId: "cdek-8927886351",
});

var db = firebase.firestore();

//Get comments
db.collection("Shooteeze").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id);
        console.log(doc.data());
        render(doc);
    });
});

//Create comment
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addData(form);
})




function render(doc) {
        let element = document.createElement('div');
        element.classList.add('comment');
        let hr = document.createElement('hr')
        let name = document.createElement('h3');
        let comment = document.createElement('p');
    
        name.innerHTML = doc.data().name;
        comment.innerHTML = doc.data().comment;
        
        element.appendChild(name);
        element.appendChild(hr);
        element.appendChild(comment);

        commentSection.appendChild(element);
    
        console.log("Rendered "+doc.id);
}

function addData(form) {
    db.collection("Shooteeze").add({
        name: form.name.value,
        comment: form.comment.value
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        location.reload();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}