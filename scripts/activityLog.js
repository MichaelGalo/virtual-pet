// import statements
import { getActivities, getItems, getOwners, getPets } from "./database.js";

// declare variables for activities, items, owners, and pets and set them equal to the corresponding functions
const activities = getActivities();
const items = getItems();
const owners = getOwners();
const pets = getPets();

// create a function to render the activityLog to the DOM and returning an HTML template string
export const ActivityLog = () => {
  // declare a variable set to an empty string named activityHTML
  let activityHTML = "";

  // return the activityHTML string
  return activityHTML;
};
