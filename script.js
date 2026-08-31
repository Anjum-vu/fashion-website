```javascript
/* =========================
   STYLEGATE JAVASCRIPT
   Simple & Easy to Edit
========================= */


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


/* =========================
   BRAND SEARCH + FILTER
========================= */

const searchInput =
    document.getElementById("brandSearch");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const brandCards =
    document.querySelectorAll(".brand-card");

const noResults =
    document.getElementById("noResults");


let currentFilter = "all";


function filterBrands() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    let visibleBrands = 0;


    brandCards.forEach(function (card) {

        const brandName =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        const category =
            card.getAttribute("data-category")
                .toLowerCase();


        const matchesSearch =
            brandName.includes(searchText);


        const matchesFilter =
            currentFilter === "all" ||
            category.includes(currentFilter);


        if (matchesSearch && matchesFilter) {

            card.style.display = "";

            visibleBrands++;

        } else {

            card.style.display = "none";

        }

    });


    if (noResults) {

        if (visibleBrands === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }

}


/* =========================
   SEARCH
========================= */

if (searchInput) {

    searchInput.addEventListener("input", function () {

        filterBrands();

    });

}


/* =========================
   FILTER BUTTONS
========================= */

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentFilter =
            button.getAttribute("data-filter");


        filterBrands();


        // Scroll to brands

        document.getElementById("brands")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================
   CATEGORY CARDS
========================= */

const categoryLinks =
    document.querySelectorAll(
        ".category-card"
    );


categoryLinks.forEach(function (card) {

    card.addEventListener("click", function () {

        const category =
            card.getAttribute("data-category-link");


        if (!category) {
            return;
        }


        currentFilter = category;


        filterButtons.forEach(function (button) {

            if (
                button.getAttribute("data-filter")
                === category
            ) {

                filterButtons.forEach(function (btn) {

                    btn.classList.remove("active");

                });

                button.classList.add("active");

            }

        });


        filterBrands();

    });

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   BRAND COUNT
========================= */

function updateBrandCount() {

    const count =
        document.querySelectorAll(
            ".brand-card"
        ).length;


    const heroCount =
        document.getElementById(
            "heroBrandCount"
        );


    if (heroCount) {

        heroCount.textContent =
            count + "+";

    }

}


updateBrandCount();


/* =========================
   CURRENT YEAR
========================= */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    const year =
        new Date().getFullYear();


    copyright.innerHTML =
        "© " +
        year +
        " StyleGate. All rights reserved.";

}
```
