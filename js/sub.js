function view() {
  const img = document.querySelectorAll(".s01_img");
  const txt = document.querySelectorAll(".s01_txt");
  const winTop = document.documentElement.scrollTop;

  img.forEach((i) => {
    const imgTop = i.offsetTop - 200;

    if (imgTop <= winTop) {
      i.classList.add("on");
    } else {
      i.classList.remove("on");
    }
  });

  txt.forEach((i) => {
    const imgTop = i.offsetTop - 200;

    if (imgTop <= winTop) {
      i.classList.add("on");
    } else {
      i.classList.remove("on");
    }
  });
}

window.addEventListener("scroll", () => {
  view();
});

// slider
const trans = document.querySelector(".tv_slides > ul");
const trans2 = document.querySelector(".tv_slides:nth-child(2) > ul");
window.addEventListener("load", () => {
  trans.animate({ transform: "translateX(-1000px)" }, 80*1000);
  trans2.animate({ transform: "translateX(-1000px)" }, 60*1000);
});
