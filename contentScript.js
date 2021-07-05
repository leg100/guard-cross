const crossword = document.querySelector(".js-crossword");

// add buttons
const makeButton = (name, id) => `<button style="margin:0 0.5rem;" onclick="location.assign('${id}')">${name}</button>`;
const crosswordData = JSON.parse(crossword.dataset.crosswordData);
const next = makeButton("Next", crosswordData.number + 1);
const random = makeButton("Random", crosswordData.number - Math.floor(Math.random() * 2000));
const previous = makeButton("Previous", crosswordData.number - 1);
crossword.insertAdjacentHTML("beforebegin", previous + random + next);

// start timer
let startTime;
crossword.addEventListener("focusin", (event) => {
  if (startTime) return;
  startTime = new Date();
  console.log(`Started: ${startTime}`);
});

const noEmpties = () => ![...document.querySelectorAll(".crossword__cell-text")].map((a) => a.innerHTML).includes("");

function checkAll() {
  const button = document.querySelector('button[data-link-name="Check all"]');
  button.click();
}

function checkThis() {
  const button = document.querySelector('button[data-link-name="Check this"]');
  button.click();
}

function happyEnding() {
  if (noEmpties()) {
    let now = new Date();
    let ms = now - startTime;
    let secs = Math.floor(ms / 1000);
    let mins = Math.floor(secs / 60);
    let andSeconds = secs % 60;
    alert(
      `\n\n  🎉  🎉  🎉  🎉        Congratulations!         🎉  🎉  🎉  🎉\n\n                          That only took ${mins} minutes and ${andSeconds} seconds! \n\n`
    );
  }
}

document.body.onkeyup = function (e) {
  // a-z keys check current clue
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    checkThis();
  }
  // spacebar checks current clue
  if (e.key == " ") {
    checkThis();
  }
  // ctrl-a checks all clues
  if (e.ctrlKey && e.key == "a") {
    checkAll();
    setTimeout(checkAll, 100);
  }
  // auto checks all upon completion and show msg with completed time if all correct
  if (noEmpties()) {
    checkAll();
    setTimeout(checkAll, 100);
    setTimeout(happyEnding, 600);
  }
};
