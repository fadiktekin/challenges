import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  // const foundCountry = countries.find((country) =>
  //   country.name.startsWith(searchString)
  // );

  const foundCountries = countries
    .slice()
    .filter((country) =>
      country.name
        .toLocaleLowerCase()
        .startsWith(searchString.toLocaleLowerCase())
    );

  if (foundCountries) {
    foundCountries.map((country) => {
      const countryElement = Country(country);
      container.append(countryElement);
    });
  }
});
