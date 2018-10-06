import {sortEvents} from "./components/petComponents.js"
import {getPets} from "./data/petData.js"

const initializeApp = () => {
    getPets();
    sortEvents();
}



initializeApp();