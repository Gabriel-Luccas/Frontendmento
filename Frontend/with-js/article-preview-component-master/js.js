// Botão de share e o evento
let shareOpen = document.querySelector("#shareOpen");
let shareClose = document.querySelector("#shareOff");
let userDisplay = document.querySelector(".user-info");
let shareDisplay = document.querySelector(".shareON");
shareOpen.addEventListener("click", shareOn);
shareClose.addEventListener("click", shareOff);

// função que contrla o display
function shareOn() {
  if (userDisplay.style.display === "flex") {
    userDisplay.style.display = "none";
    shareDisplay.style.display = "flex";
  } else {
    userDisplay.style.display = "flex";
    shareDisplay.style.display = "none";
  }
}

// função fecha o display
function shareOff() {
  if (shareDisplay.style.display === "flex") {
    userDisplay.style.display = "flex";
    shareDisplay.style.display = "none";
  }
}
