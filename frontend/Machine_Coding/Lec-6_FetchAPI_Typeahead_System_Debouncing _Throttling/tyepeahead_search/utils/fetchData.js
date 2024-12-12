export const getCountries = async (keyword) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);

    const countryArr = await res.json();

    console.log(countryArr);

    if (res.status === 404) {
      console.log("No data found");
      return [];
    }

    return countryArr;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
