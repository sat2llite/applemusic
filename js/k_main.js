//progress bar

let progressBar = document.querySelector(".progress_bar"),
  docElem = document.documentElement,
  scrollPos1,
  scrollPos2;

window.addEventListener("scroll", function () {
  let totalScrollPos = (scrollPos2 / scrollPos1) * 100;

  scrollPos1 = docElem.scrollHeight - docElem.clientHeight;
  scrollPos2 = docElem.scrollTop;
  progressBar.style.width = `${totalScrollPos}%`;
});

