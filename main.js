var typed = new Typed(".typer", {
  strings: ["Web Developer.", "React Developer.", "Front End Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let valueNumber = document.querySelectorAll(".exp-number");
let interval = 1000;

valueNumber.forEach((valueNumber) => {
  let starValue = 0;
  let endValue = parseInt(valueNumber.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    starValue += 1;
    valueNumber.textContent = starValue;
    if (starValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img ").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
