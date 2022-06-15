const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

window.addEventListener("scroll", showBox);
showBox();
function showBox() {
  boxes.forEach((box) => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("active");
      console.log(boxTop, "box");
      console.log(triggerBottom);
    } else {
      box.classList.remove("active");
    }
  });
}
