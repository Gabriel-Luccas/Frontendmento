const arrowDisplay = document
  .getElementById("arrow")
  .addEventListener("click", display_on_off);
const features_opn = document.getElementById("features-opn");
const company_opn = document.getElementById("company-opn");

function display_on_off() {
  if (
    features_opn.style.display === "none" ||
    company_opn.style.display === "none"
  ) {
    features_opn.style.display = "block";
    company_opn.style.display = "block";
  } else {
    features_opn.style.display = "none";
    company_opn.style.display = "none";
  }
}
