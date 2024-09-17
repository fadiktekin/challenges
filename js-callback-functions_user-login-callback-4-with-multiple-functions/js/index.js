console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");
handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");

// Calculating the Total Price
const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];

function extractPrice(product) {
  return product.price;
}

function calculateTotalPrice(products, extractPrice) {
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += extractPrice(product);
  }
  return totalPrice;
}

console.log(calculateTotalPrice(products, extractPrice));

//Creating a Custom Map Function
function double(number) {
  return number * 2;
}
function myMap(numbers, double) {
  const result = [];
  for (const number of numbers) {
    result.push(double(number));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
console.log(myMap(numbers, double));
