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


var errorMeldingEL = document.getElementById("errorMelding") //For å vise errormelding hvis du ikke har nok sushier for å kjøpe en oppgradering

prices = [10, 50, 100]




function initializeUpgradeCosts() {
    printMoreClicksEL.innerText = "x" + multiplyClicks + " (Koster: " + prices[0] + " sushi)";
    printMoreChefsEL.innerText = chefs + " chefs (Koster: " + prices[1] + " sushi)";
    printChefClicksEL.innerText = "x" + chefClickMultiplier + " (Koster: " + prices[2] + " sushi)";
}

initializeUpgradeCosts()

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
    let upgradeCost = prices[0]; // Henter prisen for oppgraderingen
    if (tellClicks >= upgradeCost) {
        tellClicks -= upgradeCost; // Trekk kostnaden fra tellClicks
        multiplyClicks += 1; // Øker multiplikatoren for klikk
        prices[0] = Math.ceil(prices[0] * 3); // Øker prisen for neste oppgradering
        printClicksEL.innerText = tellClicks; // Oppdaterer antall klikk i visningen
        printMoreClicksEL.innerText = "x " + multiplyClicks + " (Koster: " + prices[0] + " sushi)"; // Oppdaterer visningen av multiplikatoren og prisen
        errorMeldingEL.innerHTML = ""; // Fjerner eventuell feilmelding
    } else {
        errorMeldingEL.innerHTML = "Du har ikke nok sushi for å oppgradere!"; // Viser feilmelding
    }
}

// Event listener for å ansette flere kokker
moreChefsEL.addEventListener("click", moreChefs);

function moreChefs() {
    let upgradeCost = prices[1]; // Henter prisen for å ansette en ny kokk
    if (tellClicks >= upgradeCost) {
        tellClicks -= upgradeCost; // Trekk kostnaden fra tellClicks
        chefs += 1; // Øker antall kokker med 1
        prices[1] = Math.ceil(prices[1] * 1.5); // Øker prisen for neste kokk
        printClicksEL.innerText = tellClicks; // Oppdaterer antall klikk i visningen
        printMoreChefsEL.innerText = chefs + " chefs (Koster: " + prices[1] + " sushi)"; // Oppdaterer visningen med antall kokker og ny pris
        errorMeldingEL.innerHTML = ""; // Fjerner eventuell feilmelding

        // Starter intervallet for kokkene som klikker hvis det ikke allerede kjører
        if (!chefInterval) {
            chefInterval = setInterval(() => {
                tellClicks += chefs * chefClickMultiplier; // Hver kokk klikker hvert sekund basert på multiplikatoren
                printClicksEL.innerText = tellClicks; // Oppdaterer antall klikk
            }, 1000); // Klikker hvert sekund
        }
    } else {
        errorMeldingEL.innerHTML = "Du har ikke nok sushi for å ansette en ny kokk!"; // Viser feilmelding
    }
}

// Event listener for å oppgradere kokkernes klikknivå
var moreChefClicksEL = document.getElementById("chefsClicks");  // Knappen for å oppgradere kokkernes klikk
moreChefClicksEL.addEventListener("click", moreChefClicks);

function moreChefClicks() {
    let upgradeCost = prices[2]; // Henter prisen for oppgradering
    if (tellClicks >= upgradeCost) {
        tellClicks -= upgradeCost;
        chefClickMultiplier += 1; // Øker multiplikatoren for kokkene
        prices[2] = Math.ceil(prices[2] * 3); // Øker prisen for neste oppgradering
        printClicksEL.innerText = tellClicks; // Oppdaterer antall klikk i visningen
        printChefClicksEL.innerText = "x " + chefClickMultiplier + " (Koster: " + prices[2] + " sushi)"; // Oppdaterer visningen av kokkernes multiplikator og prisen
        errorMeldingEL.innerHTML = ""; // Fjerner eventuell feilmelding

    } else {
        errorMeldingEL.innerHTML = "Du har ikke nok sushi for å oppgradere kokkernes klikk!"; // Viser feilmelding
    }
}
