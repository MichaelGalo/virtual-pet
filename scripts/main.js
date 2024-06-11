// import HTML functions from all modules
import { Pets } from "./scripts/pets.js";
import { Owners } from "./scripts/owners.js";
import { Items } from "./scripts/items.js";
import { Activities } from "./scripts/activities.js";
import { ActivityLog } from "./scripts/activityLog.js";

// declare variables to target sections of the HTML in the DOM inside of main html container
const mainContainer = document.querySelector("#main");

// create a function for render that will render the applicationHTML to the DOM
const applicationHTML = () => {
  // declare a variable set to an empty string named applicationHTML
  let applicationHTML = "";
  // add the HTML for the Pets, Owners, Items, Activities, and ActivityLog to the applicationHTML string
  applicationHTML += `
  ${Pets()} 
  ${Owners()} 
  ${Items()} 
  ${Activities()} 
  ${ActivityLog()}
  `;
  // return the applicationHTML string
  return applicationHTML;
};

// use the .innerHTML method to render the applicationHTML to the DOM with the declared variables for the sections of the HTML in the DOM
mainContainer.innerHTML = applicationHTML();
