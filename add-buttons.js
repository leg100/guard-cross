const crossword = document.querySelector(".js-crossword");
crosswordData = JSON.parse(crossword.dataset.crosswordData);

makeButton = (name, id) =>
  `<button style="margin:0 0.5rem;" onclick="location.assign('${id}')">${name}</button>`;

const next = makeButton("Next", crosswordData.number + 1);
const random = makeButton(
  "Random",
  crosswordData.number - Math.floor(Math.random() * 2000)
);
const previous = makeButton("Previous", crosswordData.number - 1);
crossword.insertAdjacentHTML("beforebegin", next + random + previous);


let startTime;
crossword.addEventListener("focusin", (event) => {
    if (startTime) return;
    startTime = DateTime.now()
    console.log(`Started: ${startTime}`);
});
