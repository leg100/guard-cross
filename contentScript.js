const crossword = document.querySelector(".js-crossword");

// add buttons
const makeButton = (name, id) => `<button style="margin:0 0.5rem;" onclick="location.assign('${id}')">${name}</button>`;
const crosswordData = JSON.parse(crossword.dataset.crosswordData);
const next = makeButton("Next", crosswordData.number + 1);
const random = makeButton("Random", crosswordData.number - Math.floor(Math.random() * 2000));
const previous = makeButton("Previous", crosswordData.number - 1);
crossword.insertAdjacentHTML("beforebegin", next + random + previous);

// start timer
let startTime;
crossword.addEventListener("focusin", (event) => {
  if (startTime) return;
  startTime = new Date();
  console.log(`Started: ${startTime}`);
});

const noEmpties = () => ![...document.querySelectorAll(".crossword__cell-text")].map((a) => a.innerHTML).includes("");

function checkAll() {
  const button = document.querySelector(".crossword__controls__grid > button:nth-child(1)");
  button.click();
  button.click();
}

function happyEnding() {
  if (noEmpties()) {
    let timeTaken = Math.floor((new Date() - startTime) / 60000);
    alert(
      `\n\n  🎉  🎉  🎉  🎉        Congratulations!         🎉  🎉  🎉  🎉\n\n                          That only took ${timeTaken} minutes! \n\n`
    );
  }
}

// spacebar checks, final entry checks and ends
document.body.onkeyup = function (e) {
  if (e.key == " ") {
    checkAll();
  }
  if (noEmpties()) {
    setTimeout(checkAll, 400);
    setTimeout(happyEnding, 600);
  }
};
