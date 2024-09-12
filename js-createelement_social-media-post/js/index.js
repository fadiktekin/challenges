console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const section = document.createElement("section");
document.body.append(section);
section.classList.add("post");

const content = document.createElement("p");
section.append(content);
content.classList.add("post__content");
content.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");
section.append(footer);

const span = document.createElement("span");
footer.append(span);
span.classList.add("post__username");
span.textContent = "@username";

const button = document.createElement("button");
footer.append(button);
button.classList.add("post__button");
button.setAttribute("data-js", "like-button");
button.setAttribute("type", "button");
button.textContent = "♥ Like";
button.addEventListener("click", handleLikeButtonClick);
