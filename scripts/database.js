// create database array of objects with pets, owners, items and activities1
export const database = {
  pets: [
    { id: 1, name: "Buddy", ownerId: 1, species: "Dog" },
    { id: 2, name: "Mittens", ownerId: 2, species: "Cat" },
    { id: 3, name: "Goldie", ownerId: 3, species: "Fish" },
    { id: 4, name: "Polly", ownerId: 4, species: "Bird" },
    { id: 5, name: "Rex", ownerId: 5, species: "Reptile" },
    { id: 6, name: "Daisy", ownerId: 6, species: "Rabbit" },
    { id: 7, name: "Whiskers", ownerId: 7, species: "Cat" },
    { id: 8, name: "Rocky", ownerId: 8, species: "Dog" },
    { id: 9, name: "Nemo", ownerId: 9, species: "Fish" },
    { id: 10, name: "Fluffy", ownerId: 10, species: "Hamster" },
  ],
  owners: [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
    { id: 5, name: "Tom" },
    { id: 6, name: "Sarah" },
    { id: 7, name: "Mike" },
    { id: 8, name: "Emily" },
    { id: 9, name: "David" },
    { id: 10, name: "Jessica" },
  ],
  items: [
    { id: 1, name: "Dog Food" },
    { id: 2, name: "Cat Toy" },
    { id: 3, name: "Fish Tank" },
    { id: 4, name: "Bird Seed" },
    { id: 5, name: "Reptile Habitat" },
    { id: 6, name: "Rabbit Hutch" },
    { id: 7, name: "Cat Litter" },
    { id: 8, name: "Dog Leash" },
    { id: 9, name: "Fish Tank Filter" },
    { id: 10, name: "Hamster Wheel" },
  ],
  activities: [
    { id: 1, name: "Walking" },
    { id: 2, name: "Playing" },
    { id: 3, name: "Feeding" },
    { id: 4, name: "Grooming" },
    { id: 5, name: "Training" },
    { id: 6, name: "Cleaning" },
    { id: 7, name: "Exercising" },
    { id: 8, name: "Bathing" },
    { id: 9, name: "Vet Visit" },
    { id: 10, name: "Socialization" },
  ],
  activityLog: [],
};
// create a function to get all pets using the .map method
export const getPets = () => {
  return database.pets.map((pet) => ({ ...pet }));
};

// create a function to get all owners using the .map method
export const getOwners = () => {
  return database.owners.map((owner) => ({ ...owner }));
};

// create a function to get all items using the .map method
export const getItems = () => {
  return database.items.map((item) => ({ ...item }));
};

// create a function to get all activities using the .map method
export const getActivities = () => {
  return database.activities.map((activity) => ({ ...activity }));
};

// create a function to create an activity log based on the pet, item, owner and activity using the .map method
