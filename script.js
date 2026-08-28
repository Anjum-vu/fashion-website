/* STYLEHUB JAVASCRIPT */

/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
navLinks.classList.toggle("active");
});

/* CLOSE MENU */

document.querySelectorAll(".nav-links a").forEach(function (link) {

```
link.addEventListener("click", function () {
    navLinks.classList.remove("active");
});
```

});

/* BRAND SEARCH + FILTER */

const search = document.getElementById("brandSearch");
const cards = document.querySelectorAll(".brand-card");
const buttons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");

let selectedFilter = "all";

function showBrands() {

```
const text = search.value.toLowerCase().trim();

let visibleCards = 0;


cards.forEach(function (card) {

    const name = card.querySelector("h3").textContent.toLowerCase();
    const category = card.querySelector("small").textContent.toLowerCase();
    const description = card.querySelector("p").textContent.toLowerCase();


    const searchMatch =
        name.includes(text) ||
        category.includes(text) ||
        description.includes(text);


    const filterMatch =
        selectedFilter === "all" ||
        category.includes(selectedFilter);


    if (searchMatch && filterMatch) {

        card.style.display = "";

        visibleCards++;

    } else {

        card.style.display = "none";

    }

});


if (visibleCards === 0) {
    noResults.style.display = "block";
} else {
    noResults.style.display = "none";
}
```

}

/* SEARCH */

search.addEventListener("input", showBrands);

/* FILTER BUTTONS */

buttons.forEach(function (button) {

```
button.addEventListener("click", function () {

    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedFilter = button.dataset.filter;

    showBrands();

});
```

});
