// Pakt alle dropdown buttons en voegt een event listener toe
const dropdownButtons = document.querySelectorAll(".dropdown-button");

// Hide all dropdowns initially
const hideAllDropdowns = () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    // Verstopt alle dropdowns door middel van de "hidden" class
    dropdowns.forEach((dropdown) => dropdown.classList.add("hidden"));
    dropdownButtons.forEach((button) => {
        // Verwijdert de "active" class van alle dropdown buttons
        button.classList.remove("active");
        // verwijderd alle stylings van de svg voor rotatie
        const svg = button.querySelector("svg");
        svg.classList.remove("rotate");
    });
};

// Verstopt alle dropdowns
hideAllDropdowns();

// Voegt een event listener toe aan alle dropdown buttons
// Dit betekent als je op een dropdown drukt dat eerst alle dropdowns worden verstopt en de dropdown die je hebt aangeklikt wordt geopend
dropdownButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        const target = button.getAttribute("data-target");
        const isAlreadyOpen = !document.querySelector(target).classList.contains("hidden");
        // Gebruikt de vorige functie om vervolgens maar 1 dropdown open te hebben
        hideAllDropdowns();
        if (!isAlreadyOpen) {
            // geeft alle styling toe aan de geopende knop en dropdown en laat de svg roteren
            document.querySelector(target).classList.toggle("hidden");
            // voegt de "active" class van de gekozen dropdown toe
            button.classList.add("active");
            // voegt de rotate class toe aan de svg
            const svg = button.querySelector("svg");
            svg.classList.toggle("rotate");
        }
    });
});