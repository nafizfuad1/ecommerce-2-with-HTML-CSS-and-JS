const toggleButton = document.getElementById("toggleButton");
const slidebar = document.getElementById("slidebar");

toggleButton.addEventListener("click", () => {
  slidebar.classList.toggle("active");
});


const tabs = document.querySelectorAll(".slide-text");
const bar = document.querySelector(".option-slide-bar-child");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // active text
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // move bar
    if (tab.dataset.tab === "right") {
      bar.classList.add("right");
    } else {
      bar.classList.remove("right");
    }
  });
});
