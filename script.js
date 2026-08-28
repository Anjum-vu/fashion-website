/* =========================
STYLEGATE JAVASCRIPT
========================= */

/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav-links a").forEach(link => {

```
link.addEventListener("click", () => {
    navLinks.classList.remove("active");
});
```

});

/* SEARCH + FILTER */

const searchInput = document.getElementById("brandSearch");
const cards = document.querySelectorAll(".brand-card");
const filters = document.querySelectorAll(".filter");
const noResults = document.getElementById("noResults");

let currentFilter = "all";

function showBrands() {

```
const search = searchInput.value.toLowerCase().trim();

let visible = 0;


cards.forEach(card => {

    const name =
        card.querySelector("h3").textContent.toLowerCase();

    const info =
        card.querySelector(".brand-content").textContent.toLowerCase();

    const country =
        card.dataset.country;

    const category =
        card.dataset.category;


    const matchesSearch =
        name.includes(search) ||
        info.includes(search);


    let matchesFilter = true;


    if (currentFilter === "pakistan") {
        matchesFilter = country === "pakistan";
    }

    else if (currentFilter === "india") {
        matchesFilter = country === "india";
    }

    else if (currentFilter === "international") {
        matchesFilter = country === "international";
    }

    else if (currentFilter === "sports") {
        matchesFilter = category === "sports";
    }

    else if (currentFilter === "luxury") {
        matchesFilter = category === "luxury";
    }

    else if (currentFilter === "footwear") {
        matchesFilter = category === "footwear";
    }


    if (matchesSearch && matchesFilter) {

        card.style.display = "";

        visible++;

    } else {

        card.style.display = "none";

    }

});


noResults.style.display =
    visible === 0 ? "block" : "none";
```

}

searchInput.addEventListener("input", showBrands);

/* FILTER BUTTONS */

filters.forEach(button => {

```
button.addEventListener("click", () => {

    filters.forEach(btn =>
        btn.classList.remove("active")
    );

    button.classList.add("active");

    currentFilter = button.dataset.filter;

    showBrands();

});
```

});
