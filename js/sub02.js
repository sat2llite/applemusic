const inputBoxWrap = document.querySelector(".inputbox_wrap");
const inputBox = document.querySelector(".input_box");
const inputRowBox = document.querySelector(".input_row_box");
// const inputRowWrap = document.querySelector(".input_row_wrap");

inputBoxWrap.addEventListener("focusin", () => {
  inputRowBox.style.maxHeight = "500px";
  inputRowBox.style.overflow = "visible";
  inputRowBox.style.display = "block";
});

inputBoxWrap.addEventListener("focusout", () => {
  inputRowBox.style.display = "none";
});
