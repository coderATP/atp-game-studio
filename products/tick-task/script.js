// ============================================================
// TICKTASK LANDING PAGE
// ============================================================


const yearElement =
  document.querySelector(".footer-year");


if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}