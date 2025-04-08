var clickSushi = document.getElementById("sushiSvg");  // Henter sushi-bildet og legger til en eventlistener for klikk
var tellClicks = 0;  // Variabel for å holde styr på totalt antall klikk
var printClicksEL = document.getElementById("printClicks");  // Henter elementet for å vise antall klikk

// Variabler for multiplisering av klikk
var multiplyClicks = 1;  // Startverdi for multiplikatoren av klikk
var moreClicksEL = document.getElementById("moreClicks");  // Knappen for å oppgradere multiplikatoren
var printMoreClicksEL = document.getElementById("printMoreClicks");  // Element for å vise multiplikatoren

// Variabler for kokker (eller chefs) som klikker på sushien
var chefs = 0;  // Antall kokker som er ansatt
var moreChefsEL = document.getElementById("moreChefs");  // Knappen for å ansette flere kokker
var printMoreChefsEL = document.getElementById("printMoreChefs");  // Element for å vise antall kokker
var chefInterval;  // Lagre intervallet som styrer kokkene som klikker hvert sekund

// Variabler for hvor mange clicks hver kokk gir per sekund
var chefsClickEL = document.getElementById("chefsClick")
var printChefClicksEL = document.getElementById("printChefClicks")
var chefClickMultiplier = 1;  // Starts with 1 click per chef

// Klikk på sushien
clickSushi.addEventListener("click", addClicks);

function addClicks() {
    tellClicks += multiplyClicks;  // Legger til klikk basert på multiplikatoren
    printClicksEL.innerText = tellClicks;  // Oppdaterer antall klikk i visningen
    clickSushi.style.transform = "scale(1.03)";
    setTimeout(() => {
        clickSushi.style.transform = "scale(1.1)";
        setTimeout(() => {
            clickSushi.style.transform = "";  // Tilbakestiller til CSS-standarden
        }, 200);
    }, 100);
}

// Event listener for å multiplisere klikk (oppgradere sushi click multiplier)
moreClicksEL.addEventListener("click", moreClicks);

function moreClicks() {
    multiplyClicks += 1;  // Øker multiplikatoren for klikk
    printMoreClicksEL.innerText = "x " + multiplyClicks;  // Oppdaterer visningen av multiplikatoren
}

// Event listener for å ansette flere kokker
moreChefsEL.addEventListener("click", moreChefs);

function moreChefs() {
    chefs += 1;  // Legger til en kokk
    printMoreChefsEL.innerText = chefs + " chefs";  // Oppdaterer visningen med antall kokker

    // Starter intervallet for kokkene som klikker hvis det ikke allerede kjører
    if (!chefInterval) {
        chefInterval = setInterval(() => {
            tellClicks += chefs * chefClickMultiplier;  // Hver kokk klikker hvert sekund basert på multiplikatoren
            printClicksEL.innerText = tellClicks;  // Oppdaterer antall klikk
        }, 1000);  // Klikker hvert sekund
    }
}

// Event listener for å oppgradere kokkernes klikknivå
moreChefClicksEL = document.getElementById("chefsClicks");  // Knappen for å oppgradere kokkernes klikk
moreChefClicksEL.addEventListener("click", moreChefClicks);

function moreChefClicks() {
    chefClickMultiplier += 1;  // Øker multiplikatoren med 1 for hver oppgradering
    printChefClicksEL.innerText = "x " + chefClickMultiplier;  // Oppdaterer visningen av kokkernes multiplikator
}
