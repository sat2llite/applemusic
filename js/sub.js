function view() {
  const img = document.querySelectorAll(".s01_img");
  const winTop = document.documentElement.scrollTop;

  img.forEach((i) => {
    const imgTop = i.offsetTop - 100;

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
