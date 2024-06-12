// import the getActivities function from the database.js file
import { getActivities } from "./database.js";

// declare an activities variable and set it equal to the getActivities function
const activities = getActivities();

// create an event listener for the click event on the Activities button
document.addEventListener("mouseover", (mouseEvent) => {
  // declare a variable named currentActivity and set it equal to the mouseEvent.target
  const currentActivity = mouseEvent.target;
  const dropdownContent = document.querySelector(".dropdown-content");

  // if the currentActivity has a class of dropbtn
  if (
    currentActivity.classList.contains("dropbtn") ||
    currentActivity.classList.contains("dropdown-content") ||
    dropdownContent.contains(currentActivity)
  ) {
    // change the display of the dropdown-content to block
    dropdownContent.classList.remove("hidden");
  } else {
    // change the display of the dropdown-content to none
    dropdownContent.classList.add("hidden");
  }
});

// create an event listener for the click event on the button with the data-type of activities
document.addEventListener("click", (clickEvent) => {
  const currentActivity = clickEvent.target;

  if (currentActivity.dataset.type === "activity") {
    window.alert(`This activity is ${currentActivity.dataset.name}`);
  }
});

// create a function to render the activities to the DOM and returning an HTML template string
export const Activities = () => {
  // declare a variable set to an empty string named activityHTML
  let activityHTML = `
  <div class="activities dropdown">
  <button class="dropbtn">Activities</button>
  <div class="dropdown-content hidden">
  `;
  // use a for...of loop to iterate over the activities array and return the activity object
  for (const activity of activities) {
    // add each activity object's name to the activityHTML string while adding the state of data-type="activity" and the activity object's id and the activity's name

    activityHTML += `
  <a class="activity-options"
    data-type="activity"
    data-name=${activity.name}
    id=${activity.id}>
    ${activity.name}
  </a>
`;
  }

  activityHTML += `</div>`;

  // return the activityHTML string
  return activityHTML;
};
