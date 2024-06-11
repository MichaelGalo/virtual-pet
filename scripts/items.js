// import the getItems function from the database.js file
import { getItems } from "./database.js";

// declare an item variable and set it equal to the getItems function
const items = getItems();

// create an event listener for the click event on the button with the data-type of items
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "items") {
    const currentItem = clickEvent.target;
    window.alert(`This item's name is ${currentItem}`);
  }
});

// create a function to render the items to the DOM and returning an HTML template string
export const Items = () => {
  // declare a variable set to an empty string named itemHTML
  let itemHTML = "";

  // use a for...of loop to iterate over the items array and return the item object
  for (const item of items) {
    // add each item object's name to the itemHTML string while adding the state of data-type="item" and the item object's id and the item's name
    itemHTML += `
<div class="items">
  <li class="item options" 
    data-type="item"  
    id=${item.id}>
    ${item.name}
  </li>
</div>
`;
  }

  // return the itemHTML string
  return itemHTML;
};
