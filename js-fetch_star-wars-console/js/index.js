console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      console.log("Response not ok");
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
