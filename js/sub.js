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
