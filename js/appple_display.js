let card1 = document.querySelector(".card1"),
  card2 = document.querySelector(".card2"),
  card3 = document.querySelector(".card3");

window.addEventListener("scroll", function () {
  if (scrollY > 2138) {
    card1.style.transform = "scale(0.9)";
    card1.style.opacity = "1";
  }
  if (scrollY > 2238) {
    card1.style.transform = "scale(0.8)";
    card1.style.opacity = "0.5";
  }
  if (scrollY > 2338) {
    card1.style.opacity = "0";
  }
  //카드 2
  if (scrollY > 2642) {
    card2.style.transform = "scale(0.9)";
    card2.style.opacity = "1";
  }
  if (scrollY > 2742) {
    card2.style.transform = "scale(0.8)";
    card2.style.opacity = "0.5";
  }
  if (scrollY > 2842) {
    card2.style.opacity = "0";
  }
});

// let topNav = document.querySelector(".top1"),
//   topLogoImg = document.querySelector(".top1 span img"),
//   topUl = document.querySelector(".top1 ul"),
//   topLi = document.querySelectorAll(".top1 ul li"),
//   topTitle = document.querySelector(".top1 span"),
//   topIcon = document.querySelector(".top1 span i"),
//   topUlA = document.querySelectorAll(".top1 > ul > li > a"),
//   topLogin = document.querySelector(".top1 button");

// window.addEventListener("scroll", function () {
//   if (scrollY > 30) {
//     topNav.style.height = "40px";
//     topLogoImg.style.width = "20px";
//     topLogoImg.style.height = "20px";
//     topTitle.style.fontSize = "15px";
//     topUl.style.fontSize = "15px";
//     topUl.style.marginLeft = "37em";
//     topUl.style.height = "40px";
//     topLogin.style.height = "40px";
//     topLogin.style.lineHeight = "10px";
//     topUlA.forEach(function (a, i) {
//       topUlA[i].style.height = "40px";
//       topUlA[i].style.lineHeight = "40px";
//     });
//     topLi.forEach(function (a, i) {
//       topLi[i].style.height = "40px";
//       topLi[i].style.lineHeight = "40px";
//     });
//   }

//   if (scrollY < 30) {
//     topNav.style.height = "53.6px";
//     topNav.style.backgroundColor = "white";
//     topLogoImg.style.width = "25px";
//     topLogoImg.style.height = "25px";
//     topTitle.style.fontSize = "16px";
//     topUl.style.fontSize = "16px";
//     topUl.style.marginLeft = "65em";
//     topLogin.style.height = "53.6px";
//     topLogin.style.lineHeight = "25px";
//     topUlA.forEach(function (a, i) {
//       topUlA[i].style.height = "100%";
//       topUlA[i].style.lineHeight = "53.6px";
//     });
//   }
// });

let moveBox = document.querySelector(".move_box");

window.addEventListener("scroll", function () {
  if (scrollY > 200) {
    moveBox.classList.add("down");
  } else if (scrollY < 300) {
    moveBox.classList.remove("down");
  }
});

let humanImg = document.querySelector(".main_secstion3_img_animation");

window.addEventListener("scroll", function () {
  if (scrollY > 580) {
    humanImg.classList.add("main_secstion3_img_animation_show");
  }
  if (scrollY < 580) {
    humanImg.classList.remove("main_secstion3_img_animation_show");
  }
});

let userInput = document.querySelector(".write_code input"),
  userWriteBox = document.querySelector(".write_code div");

userInput.addEventListener("input", function () {
  let userText = userInput.value;
  userWriteBox.innerHTML = userText;
});

let sideMenuBtn = document.querySelector(".burger_wrap"),
  sideMenuWrap = document.querySelector(".side_menu_wrap"),
  sideMenuCloseBtn = document.querySelector(".side_menu_li i");

sideMenuBtn.addEventListener("click", function () {
  sideMenuWrap.classList.add("side_menu_wrap-show");
});

sideMenuCloseBtn.addEventListener("click", function () {
  sideMenuWrap.classList.remove("side_menu_wrap-show");
});
