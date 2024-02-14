const slides = [
	{
		"image":"./assets/images/slideshow/photo1.jpg",
		"tagLine":"<p>Impressions tous formats <span>en boutique et en ligne</span></p>"
	},
	{
		"image":"./assets/images/slideshow/photo2.jpg",
		"tagLine":"<p>Tirages haute définition grand format <span>pour vos bureaux et events</span></p>"
	},
	{
		"image":"./assets/images/slideshow/photo3.jpg",
		"tagLine":"<p>Grand choix de couleurs <span>de CMJN aux pantones</span></p>"
	},
	{
		"image":"./assets/images/slideshow/photo4.png",
		"tagLine":"<p>Autocollants <span>avec découpe laser sur mesure</span></p>"
	}
];

//indique la première image - index = 0
let currentSlideIndex = 0;

// c'est pour afficher la première image
function displaySlide(index) {
// constante "slideContainer" indique à quel endroit du document  
// - ici la balise div banner - il faut insérer les données
// identifié par la suite comme slidesContainer
  const slidesContainer = document.getElementById('banner');
// Efface le contenu - code html - actuel de la balise div ''
  slidesContainer.innerHTML = '';

// constante 'imgElement' qui crée dans le document
  const imgElement = document.createElement('img');
// indique le tag src pour trouver l'emplacement de l'image à afficher
// il faut chercher dans le tableau slides la valeur de image qui correspond à l'index
  imgElement.src = slides[index].image;
// définit le tag 'class' pour le mise en forme du slide affiché
  imgElement.className = 'activeSlide';

// constante "taglineElement" fait la même chose que ci-dessus, avec la valeur
// tagline au lieu de image
  const taglineElement = document.createElement('div');
  taglineElement.innerHTML = slides[index].tagLine;
  taglineElement.className = 'tagline activeTagline';

// indique qu'il faut rajouter (appendChild) dans le Container 'slidesContainer'
// identifié comme 'banner' - voir ligne 27 - 
// les élements imgElement et taglineElement
  slidesContainer.appendChild(imgElement);
  slidesContainer.appendChild(taglineElement);

}

// fonction qui permet de passer d'un slide vers le prochain - à droite
// la fonction nextSlide va être appelé plus bas, tout comme prevSlide
function nextSlide() { 

// on rajoute 1 à currentSlideIndex pour passer à la slide suivante
// après le numéro du slide correpondrait au nombre total de slides (soit 4), 
// on passe au slide 0, car le slide 4 n'existe pas
	currentSlideIndex = currentSlideIndex + 1;
	if(currentSlideIndex === slides.length)
	{
		currentSlideIndex = 0;
	}
// instruction qui appelle la fonction displaySlide et , qui va afficher la slide
	displaySlide(currentSlideIndex);
	updateSelectors(currentSlideIndex);
}

// fonction qui permet de passer d'un slide vers le prochain - à gauche
function prevSlide() { // passer à la slide précédente

	currentSlideIndex = currentSlideIndex - 1;
	if(currentSlideIndex < 0)
	{
		currentSlideIndex = slides.length - 1;
	}
	displaySlide(currentSlideIndex);
	updateSelectors(currentSlideIndex);
}

function updateSelectors(currentSlideIndex) {
	const selectorsContainer = document.getElementById('dotscontainer');
	selectorsContainer.innerHTML = '';

	slides.forEach((_slide, index) => {
		const selector = document.createElement('div');
		selector.className = 'dot' + (index === currentSlideIndex ? ' active' : '');
		selectorsContainer.appendChild(selector);
	});
}
// il faut surveiller l'élément 'flechedroite' ou 'flechegauche' et surveiller 
// si quelqu'un clique dessus 'click', ce qui déclenche la fonction
// nextSlide ou prevSlide
document.getElementById('flechedroite').addEventListener('click', nextSlide);
document.getElementById('flechegauche').addEventListener('click', prevSlide);

// Initialisation
displaySlide(currentSlideIndex);
updateSelectors(currentSlideIndex);


