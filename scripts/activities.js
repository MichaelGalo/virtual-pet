// import the getActivities function from the database.js file
import { getActivities } from "./database.js";

// declare an activities variable and set it equal to the getActivities function
const activities = getActivities();

// create an event listener for the click event on the button with the data-type of activities
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "activities") {
    const currentActivity = clickEvent.target;
    window.alert(`This activity is ${currentActivity}`);
  }
});

// create a function to render the activities to the DOM and returning an HTML template string
export const Activities = () => {
  // declare a variable set to an empty string named activityHTML
  let activityHTML = "";
  // use a for...of loop to iterate over the activities array and return the activity object
  for (const activity of activities) {
    // add each activity object's name to the activityHTML string while adding the state of data-type="activity" and the activity object's id and the activity's name

    activityHTML += `
<li class="activity options"
data-type="activity"
data-name=${activity.name}
id=${activity.id}>
${activity.name}
</li>
`;
  }

  // return the activityHTML string
  return activityHTML;
};
