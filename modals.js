document.addEventListener("DOMContentLoaded", () => {
  console.log("yeah");

  document.querySelector(".modal-open").addEventListener("click", () => {
    window.open("modal.htm", "_self");
  });
});
