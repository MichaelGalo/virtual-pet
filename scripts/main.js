// import HTML functions from all modules
import { Pets } from "./pets.js";
import { Items } from "./items.js";
import { Activities } from "./activities.js";
import { ActivityLog } from "./activityLog.js";

// declare variables to target sections of the HTML in the DOM inside of main html container
const mainContainer = document.querySelector("#container");
const optionsContainer = document.querySelector("#options");
const selectionsContainer = document.querySelector("#selections");

// create a function to render the Pets function to the DOM targeting the optionsContainer
const renderPets = () => {
  optionsContainer.innerHTML = Pets();
};

renderPets();

// create a function to render the Items function to the DOM targeting the optionsContainer
const renderItems = () => {
  selectionsContainer.innerHTML = Items();
};

renderItems();

// create a function to render the Activities function to the DOM targeting the optionsContainer
const renderActivities = () => {
  selectionsContainer.innerHTML = Activities();
};

renderActivities();
