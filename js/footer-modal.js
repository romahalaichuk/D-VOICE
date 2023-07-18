// document.getElementById("openModalBtn").addEventListener("click", function () {
//   document.getElementById("modal").classList.add("is-open");
// });

// document.getElementById("closeModalBtn").addEventListener("click", function () {
//   document.getElementById("modal").classList.remove("is-open");
// });
document.getElementById("openModalBtn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "flex";
});

document.getElementById("closeModalBtn").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
