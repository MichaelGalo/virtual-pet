// import statements
import {
  getActivities,
  getItems,
  getOwners,
  getPets,
  getActivityLog,
} from "./database.js";

// declare variables for activities, items, owners, and pets and set them equal to the corresponding functions
const activities = getActivities();
const items = getItems();
const owners = getOwners();
const pets = getPets();
const activityLog = getActivityLog();

// create a function to render the activityLog to the DOM and returning an HTML template string
export const ActivityLog = () => {
  // declare a variable set to an empty string named activityHTML
  let activityHTML = `<div class="activityLog">`;

  // loop through the selections array
  for (const log of activityLog) {
    // find the corresponding pet, owner, activity, and items from their respective arrays
    const pet = pets.find((p) => p.id === log.petId);
    const owner = owners.find((o) => o.id === pet.ownerId);
    const activity = activities.find((a) => a.id === log.activityId);
    const usedItem = items.find((i) => i.id === log.itemId); // if there are multiple items

    // create a human-readable date/time string
    const dateTime = new Date(log.date).toLocaleString();

    // construct the log entry HTML
    activityHTML += `
      <div class="log-entry">
        <p>Pet Name: ${pet.name}</p>
        <p>Owner Name: ${owner.name}</p>
        <p>Activity: ${activity.name}</p>
        <p>Items Used: ${usedItem.name}</p>
        <p>Date/Time: ${dateTime}</p>
      </div>
    `;
  }

  activityHTML += `</div>`;

  // return the activityHTML string
  return activityHTML;
};
