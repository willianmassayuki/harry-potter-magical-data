import axios from "axios";

// Use these routes to request data on Harry Potter characters:

// View
// all characters:
// https://hp-api.onrender.com/api/characters

// a specific character, based on their unique ID:
// https://hp-api.onrender.com/api/character/:id

// characters who are Hogwarts students during the book series:
// https://hp-api.onrender.com/api/characters/students

// characters who are Hogwarts staff during the book series:
// https://hp-api.onrender.com/api/characters/staff

// characters in a certain house, e.g. /gryffindor:
// https://hp-api.onrender.com/api/characters/house/:house

// all spells:
// https://hp-api.onrender.com/api/spells

const api = axios.create({
  baseURL: "https://hp-api.onrender.com/api/",
});

export default api;
