import { getActivities } from "./database.js";

const activities = getActivities();

document.addEventListener("mouseover", (mouseEvent) => {
  const currentActivity = mouseEvent.target;
  const dropdownContent = document.querySelector(".dropdown-content");
  if (
    currentActivity.classList.contains("dropbtn") ||
    currentActivity.classList.contains("dropdown-content") ||
    dropdownContent.contains(currentActivity)
  ) {
    dropdownContent.classList.remove("hidden");
  } else {
    dropdownContent.classList.add("hidden");
  }
});

document.addEventListener("click", (clickEvent) => {
  const currentActivity = clickEvent.target;

  if (currentActivity.dataset.type === "activity") {
    window.alert(`This activity is ${currentActivity.dataset.name}`);
  }
});

export const Activities = () => {
  let activityHTML = `
  <div class="activities dropdown">
  <button class="dropbtn">Activities</button>
  <div class="dropdown-content hidden">
  `;

  for (const activity of activities) {
    activityHTML += `
  <a class="activity-options"
    data-type="activity"
    data-name="${activity.name}"
    id=${activity.id}>
    ${activity.name}
  </a>
`;
  }
  activityHTML += `</div>`;
  return activityHTML;
};
