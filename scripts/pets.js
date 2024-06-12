// import the getPets function from the database.js file
import { getPets } from "./database.js";

// declared a pet variable and set it equal to the getPets function
const pets = getPets();

// create an event listener for the click event on the button with the data-type of pets
document.addEventListener("click", (clickEvent) => {
  const currentPet = clickEvent.target;

  if (currentPet.dataset.type === "pet") {
    window.alert(`This pet's name is ${currentPet.dataset.name}`);
  }
});

// create a function to render the pets to the DOM and returning an HTML template string
export const Pets = () => {
  // declare a variable set to an empty string named petHTML
  let petHTML = `<div class="pets">`;

  // use a for...of loop to iterate over the pets array and return the pet object
  for (const pet of pets) {
    // add each pet object's name to the petHTML string while adding the state of data-type="pet" and the pet object's id and the pet's name
    petHTML += `
  <button class="pet options" 
    data-type="pet"
    data-ownerId=${pet.ownerId}
    data-name=${pet.name}  
    id=${pet.id}>
    ${pet.name}
  </button>
`;
  }

  petHTML += `</div>`;

  // return the petHTML string
  return petHTML;
};
