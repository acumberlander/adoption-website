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
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    } else if(type === "dog"){
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    } else if(type === "dino"){
        const filteredPets = pets.filter(x => x.type === type);
        petsBuilder(filteredPets);
    } else {
        petsBuilder(pets);
    }
}

const sortEvents = () => {
    const catButton = document.getElementById('cat');
    const dogButton = document.getElementById('dog');
    const dinoButton = document.getElementById('dino');
    const allButton = document.getElementById('all');
    catButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
    allButton.addEventListener('click', sortPets);
}

const petsBuilder = (petsArray) => {
    let domString = "";
    petsArray.forEach((pet) => {
        // domString += `<div class="m" id="petContainer">`;
        domString += `<div class= "col-4 pet-card" id="${pet.id}">`;
        domString += `<div class="card m-2">`;
        domString += `<div class= "pet-card card-header text-center">${pet.name}</div>`;
        domString += `<img class="card-img-top" src="${pet.imageUrl}" alt="${pet.name}">`
        domString += `<div class="card m-2 text-center">${pet.color}</div>`;
        domString += `<div class="card m-2 text-center">${pet.specialSkill}</div>`;
        domString += `<div class="card-body">`
        if (pet.type === 'cat') {
            domString += `<h5 class="card-title text-center bg-primary">${pet.type}</h5>`
            } else if (pet.type === 'dog') {
                domString += `<h5 class="card-title text-center bg-success">${pet.type}</h5>`
                } else {
                domString += `<h5 class="card-title text-center bg-danger">${pet.type}</h5>`
                }
        // domString += `<h5 class="card-title text-center">${pet.type}</h5>`
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
        
        // domString += `</div>`;
    });
    printToDom(domString);
    createEvents();
}

export {petsBuilder, printToDom, setPets, getPetz, sortEvents}