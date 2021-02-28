const crossword = document.querySelector(".js-crossword");
crosswordData = JSON.parse(crossword.dataset.crosswordData);

button = (name, id) =>
  `<button style="margin:0 0.5rem;" onclick="location.assign('${id}')">${name}</button>`;

const next = button("Next", crosswordData.number + 1);
const random = button("Random", crosswordData.number - Math.floor(Math.random() * 2000));
const previous = button("Previous", crosswordData.number - 1);
crossword.insertAdjacentHTML("afterbegin", next + random + previous);
