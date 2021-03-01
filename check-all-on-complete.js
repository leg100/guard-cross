const checkAllButton = document.querySelector(".crossword__controls__grid")
  .firstChild;
document.body.onkeyup = function (e) {
  if (e.key == ' ') {
    checkAllButton.click();
    checkAllButton.click();
  }
};
