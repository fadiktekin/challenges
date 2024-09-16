console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

for (const key in languages) {
  const option = document.createElement("option");
  option.textContent = languages[key];
  option.value = key;
  select.append(option);
}

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

for (const navItem in nav) {
  const li = document.createElement("li");
  ul.append(li);

  const a = document.createElement("a");
  a.textContent = nav[navItem].text;
  li.append(a);
  a.href = nav[navItem].href;
}
