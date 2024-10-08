console.clear();
const pixelValues = [
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
  ],
];

const canvas = document.querySelector('[data-js="canvas"]');

for (const colorArr of pixelValues) {
  for (const color of colorArr) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    pixel.style.backgroundColor = color;
    canvas.append(pixel);
  }
}
