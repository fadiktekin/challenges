import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "hhttps://swapi.py4e.com/api/planets/1/",
  films: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/apifilms/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.py4e.com/api/vehicles/14/",
    "https://swapi.py4e.com/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.py4e.com/api/starships/12/",
    "https://swapi.py4e.com/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.py4e.com/api/people/1/",
};

// Create dom element for a card and append it to the root
const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

fetchDataAndRender();

// --v-- your code below this line --v--

async function fetchDataAndRender() {
  try {
    const response = await fetch("https://swapi.py4e.com/api/people");
    const data = await response.json();

    if (!response.ok) {
      console.log("Response not ok");
      return;
    }

    const results = data.results;
    results.forEach((element) => {
      const card = Card(element);
      renderElement(card);
    });
  } catch (error) {
    console.log("Error occured", error);
  }
}
