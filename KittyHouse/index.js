// =============================================
// Configuration : UNE SEULE IMAGE FIXE
// =============================================

// Chemin de l'image que tu veux garder
const singleImage = "./assets/HomePage/image-content/icon.png";

// Page de redirection après clic sur PLAY
const redirectUrl = "kitty.html";

// Son du bouton PLAY
const clickSound = new Audio("./assets/music/click_button_sound.mp3");

// =============================================
// Références aux éléments HTML
// =============================================
const imageContent = document.querySelector(".image-content");
const mainButton = document.getElementById("main-button");

// =============================================
// Afficher l'image unique au chargement
// =============================================
function showSingleImage() {
  if (!imageContent) return;

  imageContent.style.backgroundImage = `url("${singleImage}")`;
  imageContent.style.opacity = 1;
}

// =============================================
// Click sur PLAY : son + redirection
// =============================================
function handlePlayClick() {
  clickSound.currentTime = 0; // remet au début si déjà joué
  clickSound.play();

  // Attend la fin du son avant de rediriger (~500ms de sécurité)
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 500);
}

// =============================================
// Initialisation
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  showSingleImage();

  if (mainButton) {
    mainButton.style.display = "flex";
    mainButton.addEventListener("click", handlePlayClick);
  }
});