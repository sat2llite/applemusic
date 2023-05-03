const section01 = document.querySelector(".section1");
const musicIcon = document.querySelector(".music_icon img");
const headline = document.querySelector(".headline_wrap");

const devices = document.querySelector(".devices ul");
const devicesItem = document.querySelectorAll(".tr");

const arcodian = document.querySelectorAll(".arcodian li");
const arcodianText = document.querySelector(".arcodian_text");

// 로딩 시 뮤직 아이콘 변경
window.onload = () => {
  section01.style.opacity = "1";
  musicIcon.style.width = "86px";
  musicIcon.style.height = "86px";
  headline.style.transform = "translateY(30px)"
  headline.style.opacity = "1";
};


let scroll = 50;
// devices 스크롤 시 움직임
window.addEventListener("wheel", (event) => {
  devicesItem.forEach((item)=>{
    if (event.deltaY > 0) {   
      if (scroll < 0) {
        item.style.transform = `translateY(0px)`;
        scroll = 0;
      } else if (scroll > 0) {
        item.style.transform = `translateY(${(scroll -= 3)}px)`;
      }
    } else {
      if (scroll > 50) {
        item.style.transform = `translateY(50px)`;
        scroll = 50;
      } else if (scroll < 50) {
        item.style.transform = `translateY(${(scroll += 3)}px)`;
      }
    }
  })
});


// 아코디언메뉴 (하다만거)
for (let i = 0; i < arcodian.length; i++) {
  arcodian[i].addEventListener("click", () => {
    arcodianText.classList.toggle("on");
  })
}

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

//sub menu
const menuLis = document.querySelectorAll(".header_ul li");
const subs = document.querySelectorAll(".sub");

let num = 0;

menuLis.forEach(function (menuLi, index) {
  menuLi.addEventListener("mouseover", function () {
    subs[num].classList.remove("on");
    subs[index].classList.add("on");
    num = index;
  });
});

contents.addEventListener("mouseover", function () {
  subs.forEach(function (sub) {
    sub.classList.remove("on");
  });
});

//top button

let offsetHei = docElem.offsetHeight,
  offsetHei2 = offsetHei / 10,
  userBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {
  if (scrollPos2 > offsetHei2) {
    userBtn.classList.add("top_btn_show");
  } else if (scrollPos2 < offsetHei2) {
    userBtn.classList.remove("top_btn_show");
  }
});

userBtn.addEventListener("click", function () {
  let stopInterval = setInterval(function () {
    if (scrollPos2 !== 0) {
      window.scrollBy(0, -200);
    } else {
      clearInterval(stopInterval);
    }
  }, 15);
});


// 햄버거 메뉴
const hamburgerMenu = document.querySelector(".m_header_ul");
const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerIconOn = document.querySelector(".hamburger.on");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("on");

  if (hamburgerIcon.classList.contains("on")) {
    hamburgerMenu.style.visibility = "visible";
    hamburgerMenu.style.opacity = "1";
    gnb.style.visibility = "hidden";
  } else {
    hamburgerMenu.style.visibility = "hidden";
    hamburgerMenu.style.opacity = "0";
    gnb.style.visibility = "visible";
  }
});