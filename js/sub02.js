const inputBoxWrap = document.querySelector(".inputbox_wrap");
const inputBox = document.querySelector(".input_box");
const inputRowWrap = document.querySelector(".input_row_wrap");
const inputRowBox = document.querySelector(".input_row_box");
const content02 = document.querySelector("#content02");

inputBoxWrap.addEventListener("focusin", () => {
  inputRowBox.classList.add("on");
  content02.style.height = "auto";
});

inputBoxWrap.addEventListener("focusout", () => {
  inputRowBox.classList.remove("on");
  content02.style.height = "100vh";
});


// 풀페이지(jQuery)
// var $html = $("html");
// var page = 1;
// var lastPage = $(".content").length;

// $html.animate({ scrollTop: 0 }, 10);

// window.addEventListener("wheel", function(e){
// 	e.preventDefault();
// },{passive : false});

// $(window).on("wheel", function (e) {
//   if ($html.is(":animated")) return;

//   if (e.originalEvent.deltaY > 0) {
//     if (page == lastPage) return;

//     page++;
//   } else if (e.originalEvent.deltaY < 0) {
//     if (page == 1) return;

//     page--;
//   }
//   var posTop = (page - 1) * $(window).height();

//   $html.animate({ scrollTop: posTop }, 700);
// });