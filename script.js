console.log("Script JavaScript chargé");
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentIndex = 0;  // L'index de l'image active

// Fonction pour mettre à jour l'image et le texte de la slide
function updateSlide(index) {
    console.log("Mise à jour de la slide avec l'index : ", index); // Log l'index

    const imageElement = document.querySelector(".slide img");
    const taglineElement = document.querySelector(".slide .tagline");

    imageElement.src = slides[index].image;
    taglineElement.innerHTML = slides[index].tagLine;
}

// Fonction pour mettre à jour les dots
function updateDots() {
    const allDots = document.querySelectorAll(".dot");
    console.log("Tous les dots :", allDots); // Log tous les dots présents

    // Retirer la classe 'dot_selected' de tous les dots
    allDots.forEach(dot => dot.classList.remove("dot_selected"));
    console.log("Classe 'dot_selected' retirée de tous les dots");

    // Ajouter 'dot_selected' au dot correspondant à l'index actuel
    const currentDot = document.querySelector(`.dot[data-index='${currentIndex}']`);
    console.log("Dot actuel sélectionné :", currentDot); // Vérifiez quel dot est sélectionné

    if (currentDot) {
        currentDot.classList.add("dot_selected");
        console.log("Classe 'dot_selected' ajoutée au dot");
    }
}

// Fonction pour naviguer entre les slides avec les flèches
function navigateSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlide(currentIndex);
    updateDots();  // Mise à jour des dots après avoir changé de slide
}

// Écoute des clics sur les flèches
document.querySelector(".arrow_left").addEventListener("click", function() {
    console.log("Flèche gauche cliquée");
    navigateSlide(-1);
});

document.querySelector(".arrow_right").addEventListener("click", function() {
    console.log("Flèche droite cliquée");
    navigateSlide(1);
});

// Ajouter des dots dynamiquement dans le DOM
const dotsContainer = document.querySelector(".dots"); // Conteneur des dots
slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("data-index", index);
    dotsContainer.appendChild(dot);
});

// Ajouter un écouteur d'événement pour les dots
document.querySelectorAll(".dot").forEach(function(dot) {
    dot.addEventListener("click", function() {
        console.log("Dot cliqué avec l'index : ", dot.getAttribute("data-index"));
        currentIndex = parseInt(dot.getAttribute("data-index"));
        updateSlide(currentIndex);  // Met à jour la slide en fonction du dot sélectionné
        updateDots();  // Met à jour les dots pour marquer celui sélectionné
    });
});

// Vérifier si les dots existent au chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM entièrement chargé. Initialisation des dots...");
    updateSlide(currentIndex);
    updateDots();  // Met à jour les dots dès le chargement
});