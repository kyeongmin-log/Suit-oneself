const box = document.querySelector(".box");
const text = document.querySelector(".touch");

box.addEventListener("mouseover", () => {
  setTimeout(() => {
    text.style.color = "rgb(24, 24, 24)";
    text.innerHTML = "Have a good day.";
  }, 800);
});

box.addEventListener("mouseout", () => {
  setTimeout(() => {
    text.style.color = "rgb(247, 247, 247)";
    text.innerHTML = "Dont's Touch Me";
  }, 800);
});
