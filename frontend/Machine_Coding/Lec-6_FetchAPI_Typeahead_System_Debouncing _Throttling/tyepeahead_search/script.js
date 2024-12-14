/***

    typeahed system/search:

       - to build auto suggestion, it helps the user to selcet a text and take a certain decision quickly.

    
    Must have feature:

      - input search box - via input field tag
      - make a API call to fetch the dynamic data
      - create a dynamic li and insert the dynamic data after fetching the data.
      - append the data in ul tag

     Good have feattures:

      - sort the data alphabetically
      - can put the default data inside list of items, if you dont type anything on focus

 */

import { getCountries } from "./utils/fetchData.js";
import { debounce } from "./utils/debounce.js";

const populateData = (countryArr) => {
  const resultCont = document.getElementById("results");
  console.log(countryArr);

  // need to dynamic list of li and inset the data from country array

  if (countryArr && countryArr.length) {
    const fragment = document.createDocumentFragment();

    countryArr.forEach((counrtyName) => {
      const resultItem = document.createElement("li");

      resultItem.className = "result-item";
      resultItem.innerText = counrtyName;

      fragment.appendChild(resultItem);
    });

    resultCont.innerHTML = "";
    resultCont.appendChild(fragment);
  }
};

const handleSearch = (countries) => {
  return countries.map((country) => {
    return country.name.common;
  });
};

const handleSuggestions = async (event) => {
  const keyword = event.target.value;

  if (!keyword.length) return;

  const countries = await getCountries(keyword);

  const countryArr = handleSearch(countries);

  populateData(countryArr);
};

const inititialiseTypeaheadSystem = () => {
  const searchInput = document.getElementById("searchInput");

  const debounceSuggestions = debounce((event) => {
    handleSuggestions(event);
  }, 500);
  searchInput.addEventListener("input", debounceSuggestions);
};

inititialiseTypeaheadSystem();
