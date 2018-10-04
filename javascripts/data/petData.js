import {setPets, petsBuilder, getPetz} from '../components/petComponents.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    petsBuilder(getPetz());
}

function executeThisCodeIfXhrFails () {
    console.log("shit broke");
}

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};

export {getPets, getPetz};