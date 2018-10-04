const printToDom = (stringToPrint) => {
    const printHere = document.getElementById("pets");
    printHere.innerHTML = stringToPrint;
}

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
}

const getPetz = () => {
    return pets;
}


const petClick = (e) => {
    const petId = e.target.closest('.pet-card').id;
    const currentPet = pets.find(x => x.id === petId);
    detailsBuilder(currentPet);
}

const createEvents = () => {
    const petCards = document.getElementsByClassName("pet-card");
    for(let i=0; i<petCards.length; i++) {
        petCards[i].addEventListener('click', petClick);
    }
}

const sortPets = (e) => {
    const type = e.target.id;
    if(type === "cat"){
        petsBuilder(pets);
    } else if(type === "dog"){
        petsBuilder(pets);
    } else{
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    }
}

const sortEvents = () => {
    const catButton = document.getElementById('cat');
    const dogButton = document.getElementById('dog');
    const dinoButton = document.getElementById('dino');
    catButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
}

const petsBuilder = (petsArray) => {
    let domString = "";
    petsArray.forEach((pet) => {
        domString += `<div class= "col-2 pet-card" id="${pet.id}">`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title">${pet.name}</h5>`
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
    createEvents();
}

export {petsBuilder, printToDom, setPets, getPetz, sortEvents}