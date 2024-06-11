// import HTML functions from all modules
import { Pets } from "./pets.js";
import { Items } from "./items.js";
import { Activities } from "./activities.js";
import { ActivityLog } from "./activityLog.js";

// declare variables to target sections of the HTML in the DOM inside of main html container
const mainContainer = document.querySelector("#container");
const optionsContainer = document.querySelector("#options");
const selectionsContainer = document.querySelector("#selections");

// create a function to render the Pets, Items & Activities functions to the DOM targeting the optionsContainer
const renderOptions = () => {
  const pets = Pets();
  const items = Items();
  const activities = Activities();

  optionsContainer.innerHTML = `${pets} ${items} ${activities}`;
};

renderOptions();
