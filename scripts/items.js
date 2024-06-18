import { getItems } from "./database.js";

const items = getItems();

document.addEventListener("click", (clickEvent) => {
  const currentItem = clickEvent.target;

  if (currentItem.dataset.type === "item" && currentItem.type === "radio") {
    window.alert(`This item's name is ${currentItem.dataset.name}`);
  }
});

export const Items = () => {
  let itemHTML = `<div class="items">`;

  for (const item of items) {
    itemHTML += `
  <input type="radio"
  class="item options"
    data-type="item"
    data-name="${item.name}"  
    id=${item.id}>
    ${item.name}
  </input>
`;
  }
  itemHTML += `</div>`;
  return itemHTML;
};
