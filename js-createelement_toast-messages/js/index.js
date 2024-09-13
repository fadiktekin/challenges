console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const toastElement = document.createElement("li");
  toastElement.classList.add("toast-container__message");
  toastElement.innerHTML = `<p>I'm a toast message.</p>`;
  toastContainer.append(toastElement);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
