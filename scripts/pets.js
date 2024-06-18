import { getPets } from "./database.js";

const pets = getPets();

document.addEventListener("click", (clickEvent) => {
  const currentPet = clickEvent.target;

  if (currentPet.dataset.type === "pet") {
    window.alert(`This pet's name is ${currentPet.dataset.name}`);
  }
});

export const Pets = () => {
  let petHTML = `<div class="pets">`;

  for (const pet of pets) {
    petHTML += `
  <button class="pet options" 
    data-type="pet"
    data-ownerId=${pet.ownerId}
    data-name="${pet.name}"  
    id=${pet.id}>
    ${pet.name}
  </button>
`;
  }
  petHTML += `</div>`;
  return petHTML;
};
