console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  starContainer.innerHTML = "";

  for (let i = 1; i < 6; i++) {
    const img = document.createElement("img");
    i <= filledStars
      ? (img.src = "assets/star-filled.svg")
      : (img.src = "assets/star-empty.svg");

    img.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(img);
  }
}

renderStars(1);
