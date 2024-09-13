console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successElement = document.querySelector('[data-js="success"]');

hideElement(tosError);
hideElement(successElement);

function hideElement(element) {
  element.setAttribute("hidden", "");
}

function showElement(element) {
  element.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
  event.target.checked ? hideElement(tosError) : showElement(tosError);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  if (!formElements.tos.checked) {
    showElement(tosError);
    return;
  }

  showElement(successElement);
  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
