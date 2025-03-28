var clickSushi = document.getElementById("sushiSvg")
clickSushi.addEventListener("click", addClicks)
var tellClicks = 0
var printClicksEL = document.getElementById("printClicks")

function addClicks() {
    tellClicks = tellClicks+1
    printClicksEL.innerText = tellClicks
    clickSushi.style.transform = "scale(1.03)"
    setTimeout(() => {
        clickSushi.style.transform = "scale(1.1)";
        setTimeout(() => {
            clickSushi.style.transform = ""; // Tilbakestiller til CSS-standarden
        }, 200);
    }, 100);
        
};