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

// PDP slider
const initSlider = () => {
  const imageList = document.querySelector(".slide-wrapper .card-list");
  const slideButtons = document.querySelectorAll(".slider-button");

  const sliderScrollBar = document.querySelector(".slider-scrollbar");
  const sliderScrollThumb = sliderScrollBar.querySelector(".scrollbar-thumb");

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;

      imageList.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollBar.clientWidth - sliderScrollThumb.offsetWidth);

    sliderScrollThumb.style.left = `${thumbPosition}px`;
  };

  imageList.addEventListener("scroll", updateScrollThumbPosition);
};

window.addEventListener("load", initSlider);

// mobile footer
const plusIcons = document.querySelectorAll(".plus-icon");

plusIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const list = icon.parentElement.nextElementSibling.querySelector(".mobile-footer-list");
    list.classList.toggle("active");
  });
});
