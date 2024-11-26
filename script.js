const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


// Sélection des éléments nécessaires
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
let currentIndex = 0;  // Indice de l'image actuellement affichée

// Fonction pour changer l'image et le texte
function updateSlide(index) {
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
}

// Initialisation de l'affichage de la première image
updateSlide(currentIndex);

// Fonction pour créer et afficher les dots
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.setAttribute("data-index", index);
        dotsContainer.appendChild(dot);
    });
}

// Appeler la fonction pour créer les dots
const dotsContainer = document.querySelector(".dots");  // Assure-toi que ce conteneur existe dans ton HTML
createDots();

// Ajouter un événement au clic sur chaque dot
function addDotListeners() {
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach(dot => {
        dot.addEventListener("click", () => {
            currentIndex = parseInt(dot.getAttribute("data-index"));
            updateSlide(currentIndex);
        });
    });
}

// Ajouter les événements au clic sur les dots
addDotListeners();

// Fonction pour mettre à jour les dots sélectionnés
function updateDots() {
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach(dot => dot.classList.remove("dot_selected"));
    const currentDot = document.querySelector(`.dot[data-index='${currentIndex}']`);
    if (currentDot) {
        currentDot.classList.add("dot_selected");
    }
}

// Appeler la fonction pour mettre à jour les dots
updateDots();

// Sélection des flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Event listener pour la flèche gauche (précédent)
arrowLeft.addEventListener('click', function() {
    console.log("Flèche gauche cliquée");  // Cette ligne affiche dans la console chaque fois que la flèche gauche est cliquée
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;  // Passage à la slide précédente
    updateSlide(currentIndex);
});

// Event listener pour la flèche droite (suivant)
arrowRight.addEventListener('click', function() {
    console.log("Flèche droite cliquée");  // Cette ligne affiche dans la console chaque fois que la flèche droite est cliquée
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;  // Passage à la slide suivante
    updateSlide(currentIndex)
});