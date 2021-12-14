// JavaScript Document

/* -- Hamburgermenu -- */

var hamburger = document.querySelector("body main section header button");
var navMenu = document.querySelector("body main section header nav");

function mobileMenu() {
    hamburger.classList.toggle("cross");
    navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);



/* -- Slider -- */

function createCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
	let carrouselElementsContainer = carrousel.querySelector(":scope > div");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("ul");
	let bolletjes = carrousel.querySelectorAll(":scope > nav a");
	let linkButtons = carrousel.querySelectorAll(":scope > a");
	
  
  /****************/
	/* DE BOLLETJES */
	/****************/
  
  // de bolletjes activeren
  function iniBolletjes() {
    for (bolletje of bolletjes) {
			// elk bolletje laten luisteren naar kliks
      bolletje.addEventListener("click", function(e){
				// als er geklikt wordt
        
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// de id van het bijbehorende element bepalen
				let newElementID = this.hash.substring(1); // de # eraf halen
        // dan naar het element met ID scrollen
        scrollToElement(newElementID);
      });
    }
	}
  
  
  /*****************************/
	/* LINKS/RECHTS LINK-BUTTONS */
	/*****************************/  

	// de links/rechts link-buttons initialiseren en activeren
  function iniLinkButtons() {    
    for(linkButton of linkButtons) {
			// beide link-buttins naar kliks laten luisteren
      linkButton.addEventListener("click", function(e){
        // als er geklikt wordt
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// bepalen of er op 'previous' of 'next' geklikt is
				let direction = this.getAttribute("href");
				// naar het element gaan
				goToElement(direction);
      });
    }
	}
  
  
  /*****************/
	/* START POSITIE */
	/*****************/
  
	// het eerste element en bolletje actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
    // eerste bolletje current maken
		bolletjes[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  
  /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/
  
  //////////////////////////////////
  // naar volgende/vorige element //
  function goToElement(direction) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > div > .current");

		let newElement;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
			// checken of nieuwe element bestaat - anders naar laatste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > div > ul:last-of-type");
			}
		} else {
			// het nieuwe element is het volgende broertje/zusje
			newElement = currentElement.nextElementSibling;
			// checken of nieuwe element bestaat - anders naar eerste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > div > ul:first-of-type");
			}
		}

		// naar het nieuwe element scrollen
		scrollToElement(newElement.id);
  }
  
  
  ///////////////////////////
  // scroll to new element //
  function scrollToElement(elementID) {
    // nieuwe element current element maken
    updateCurrentElement(elementID);

    // scrollLeft van de container aanpassen
    let theElement = carrousel.querySelector("#"+elementID);
    let elementOffset = theElement.offsetLeft;
    carrouselElementsContainer.scrollLeft = elementOffset;

    // de bolletjes updaten
    updateBolletjes(elementID);
  }
  
  
  ////////////////////////////
	// update current element //
	function updateCurrentElement(elementID) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > div > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// het nieuwe element opzoeken
		let newElement = carrousel.querySelector("#"+elementID);
		// de class current toevoegen
		newElement.classList.add("current");
	}

  
  //////////////////////
  // update bolletjes //
  function updateBolletjes(elementID){
		// het huidige current bolletje opzoeken
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		// de class current verwijderen
		currentBolletje.classList.remove("current");
		
		// het nieuwe bolletje opzoeken
    let newBolletje = carrousel.querySelector("a[href='#"+elementID+"']");
		// de class current toevoegen
		newBolletje.classList.add("current");
  }

  
  
	// de bolletjes activeren
  iniBolletjes();	
  // de linkbuttons activeren
  iniLinkButtons();	
  // de carrousel bij het begin starten
  iniStartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCarrousel("newsSlider");
  createCarrousel("liveSlider");
  createCarrousel("discographySlider");
  createCarrousel("videoSlider");
  //je kunt hier ook meerdere carrousellen activeren
})();


