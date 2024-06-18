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
  activityLog: [
    {
      id: 1,
      petId: 1,
      activityId: 1,
      ownerId: 1,
      itemId: 1,
      date: "2021-07-01",
    },
    {
      id: 2,
      petId: 2,
      activityId: 2,
      ownerId: 2,
      itemId: 2,
      date: "2021-07-02",
    },
    {
      id: 3,
      petId: 3,
      activityId: 3,
      ownerId: 3,
      itemId: 3,
      date: "2021-07-03",
    },
    {
      id: 4,
      petId: 4,
      activityId: 4,
      ownerId: 4,
      itemId: 4,
      date: "2021-07-04",
    },
    {
      id: 5,
      petId: 5,
      activityId: 5,
      ownerId: 5,
      itemId: 5,
      date: "2021-07-05",
    },
    {
      id: 6,
      petId: 6,
      activityId: 6,
      ownerId: 6,
      itemId: 6,
      date: "2021-07-06",
    },
    {
      id: 7,
      petId: 7,
      activityId: 7,
      ownerId: 7,
      itemId: 7,
      date: "2021-07-07",
    },
    {
      id: 8,
      petId: 8,
      activityId: 8,
      ownerId: 8,
      itemId: 8,
      date: "2021-07-08",
    },
    {
      id: 9,
      petId: 9,
      activityId: 9,
      ownerId: 9,
      itemId: 9,
      date: "2021-07-09",
    },
    {
      id: 10,
      petId: 10,
      activityId: 10,
      ownerId: 10,
      itemId: 10,
      date: "2021-07-10",
    },
  ],
};
export const getPets = () => {
  return database.pets.map((pet) => ({ ...pet }));
};

export const getOwners = () => {
  return database.owners.map((owner) => ({ ...owner }));
};

export const getItems = () => {
  return database.items.map((item) => ({ ...item }));
};

export const getActivities = () => {
  return database.activities.map((activity) => ({ ...activity }));
};

export const getActivityLog = () => {
  return database.activityLog.map((log) => ({ ...log }));
};
