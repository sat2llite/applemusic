const inputBoxWrap = document.querySelector(".inputbox_wrap");
const inputBox = document.querySelector(".input_box");
const inputRowBox = document.querySelector(".input_row_box");
const content02 = document.querySelector("#content02");


inputBoxWrap.addEventListener("focusin", () => {
  inputRowBox.classList.add('on');
  content02.style.height = "auto";
});

inputBoxWrap.addEventListener("focusout", () => {
  inputRowBox.classList.remove('on');
});
