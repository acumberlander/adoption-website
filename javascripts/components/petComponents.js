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
        domString += `<div class= "col-4 pet-cards d-inline-block" id="${pet.id}">`;
        domString += `<div class="card m-2">`;
        domString += `<div class= "pet-cards card-header text-center">${pet.name}</div>`;
        domString += `<img class=" m-5 text-center card-pics" src="${pet.imageUrl}" alt="${pet.name}">`
        domString += `<p class="card m-2 text-center">${pet.color} </p>`;
        domString += `<p class="card m-2 text-center">${pet.specialSkill}</p>`;
        // domString += `<div class="card-body">`
        if (pet.type === 'cat') {
            domString += `<div class="footer bg-primary">`
            } else if (pet.type === 'dog') {
                domString += `<div class="footer bg-success">`
                } else {
                domString += `<div class="footer bg-danger">`
                }
        domString += `<h5 class="card-title text-center" style="max-width">${pet.type}</h5>`
        // domString += `<h5 class="card-title text-center">${pet.type}</h5>`
        domString += `</div>`;
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