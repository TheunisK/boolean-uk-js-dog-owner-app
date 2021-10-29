console.log(data);

// WRITE YOUR CODE BELOW!

// function dogListItems () {
    const dogListButtons = document.querySelector(".dogs-list");

    for (let i = 0; i < data.length; i++) {
        const dogButton = document.createElement("li");
        dogButton.className = ("dogs-list__button");
        dogButton.innerText = data[i].name;
        dogButton.id = i;
        dogListButtons.append(dogButton);
        console.log(dogButton.id);
    }

// }

// let dogButton = document.querySelector("#dog1");

dogListButtons.addEventListener("click", function(event) {
    event.preventDefault();
    let idValue = event.target.id;
    if (idValue === "") {
        idValue = 0;
    }
    mainDogCard(idValue);
});

function mainDogCard (id) {

    const dogCard = document.querySelector(".main__dog-section");
    dogCard.innerHTML = "";
    const dogName = document.createElement("h2");
    dogName.innerText = data[id].name;
    dogCard.append(dogName);

    const dogPic = document.createElement("img");
    dogPic.setAttribute("src", data[id].image);
    dogCard.append(dogPic);

    const textContainer = document.createElement("div");
    textContainer.className = "main__dog-section__desc";
    dogCard.append(textContainer);

    const h3 = document.createElement("h3");
    h3.innerText = "Bio";
    textContainer.appendChild(h3);

    const dogText = document.createElement("p");
    dogText.innerText = data[id].bio;
    textContainer.append(dogText);

    const isNaughty = document.createElement("p");
    dogCard.append(isNaughty);

    const italic = document.createElement("em");
    italic.innerText = "Is naughty?";
    isNaughty.append(italic);

    const goodBadButton = document.createElement("button");
    goodBadButton.innerText = "Good dog!";
    dogCard.append(goodBadButton);


    console.log(dogCard);
}

// dogListItems();
// mainDogCard(idValue);


