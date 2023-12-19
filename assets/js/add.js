let accordion = document.querySelectorAll(".Acc-item");
accordion.forEach(function (show) {
  show.addEventListener("click", function () {
    const hide = document.querySelector(".active");
    show.classList.toggle("active");
    hide.classList.remove("active");
  });
});
