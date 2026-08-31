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
   BRAND SEARCH & FILTER
========================= */

const searchInput = document.getElementById("brandSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const brandCards = document.querySelectorAll(".brand-card");
const noResults = document.getElementById("noResults");


let currentFilter = "all";


function filterBrands() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleBrands = 0;


    brandCards.forEach(function (card) {

        const brandName =
            card.querySelector("h3").textContent.toLowerCase();

        const category =
            card.getAttribute("data-category").toLowerCase();


        // Check search
        const matchesSearch =
            brandName.includes(searchText);


        // Check category
        const matchesFilter =
            currentFilter === "all" ||
            category.includes(currentFilter);


        // Show / Hide
        if (matchesSearch && matchesFilter) {

            card.style.display = "";

            visibleBrands++;

        } else {

            card.style.display = "none";

        }

    });


    // No results message

    if (noResults) {

        if (visibleBrands === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }

}


/* =========================
   SEARCH EVENT
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


        // Remove active class

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active class

        button.classList.add("active");


        // Get selected filter

        currentFilter =
            button.getAttribute("data-filter");


        // Apply filter

        filterBrands();

    });

});


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
========================= */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   BRAND COUNT
========================= */

function updateBrandCount() {

    const brandCount =
        document.querySelectorAll(".brand-card").length;

    const badgeNumber =
        document.querySelector(".hero-badge strong");

    if (badgeNumber) {

        badgeNumber.textContent =
            brandCount + "+";

    }

}


/* Run brand count */

updateBrandCount();


/* =========================
   YEAR AUTOMATICALLY
========================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.innerHTML =
        "© " + currentYear +
        " StyleGate. All rights reserved.";

}
```
