// Pobranie elementów
var modal = document.getElementById("footer-modal");
var closeButton = document.getElementsByClassName("close")[0];

// Funkcja otwierająca okno modalne
function openModal() {
  modal.style.display = "block";
}

// Funkcja zamykająca okno modalne
function closeModal() {
  modal.style.display = "none";
}

// Obsługa zdarzeń
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
