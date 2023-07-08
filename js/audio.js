document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("background-music");
  var toggleButton = document.getElementById("toggle-music");
  var volume = 0.5; // Głośność domyślna (0-1)

  // Funkcja do włączania/wyłączania muzyki i zmiany ikony przycisku
  function toggleMusic() {
    if (audio.paused) {
      audio.play();
      toggleButton.textContent = "Wyłącz muzykę";
    } else {
      audio.pause();
      toggleButton.textContent = "Włącz muzykę";
    }
  }

  // Funkcja do regulacji głośności
  function changeVolume() {
    audio.volume = volume;
  }

  // Obsługa kliknięcia przycisku
  toggleButton.addEventListener("click", toggleMusic);

  // Obsługa zmiany wartości suwaka (do regulacji głośności)
  volumeSlider.addEventListener("input", function () {
    volume = volumeSlider.value;
    changeVolume();
  });

  // Inicjalizacja głośności
  changeVolume();
});
