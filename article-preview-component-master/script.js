let share = document.querySelectorAll(".share");
let socials = document.querySelector(".socials");

share.forEach((s) =>
  s.addEventListener("click", () => socials.classList.toggle("hide"))
);
