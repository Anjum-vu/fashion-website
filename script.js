```javascript
/* =========================
   STYLEORA - SIMPLE JS
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
   CLOSE MOBILE MENU
   AFTER CLICKING LINK
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   BRAND FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const brandCards = document.querySelectorAll(".brand-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active class */
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        /* Add active class */
        button.classList.add("active");

        const filter = button.dataset.filter;

        let visibleBrands = 0;

        brandCards.forEach(function (card) {

            const categories = card.dataset.category;

            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                card.style.display = "block";

                visibleBrands++;

            } else {

                card.style.display = "none";

            }

        });

        /* Show / hide no result message */

        const noResults =
            document.getElementById("noResults");

        if (noResults) {

            if (visibleBrands === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    });

});


/* =========================
   CATEGORY CARDS
========================= */

const categoryCards =
    document.querySelectorAll(".category-card");

categoryCards.forEach(function (category) {

    category.addEventListener("click", function () {

        const categoryName =
            category.classList[1];

        /* Find matching filter */

        filterButtons.forEach(function (button) {

            if (button.dataset.filter === categoryName) {

                button.click();

            }

        });

    });

});


/* =========================
   CURRENT YEAR
========================= */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        "© " + new Date().getFullYear() +
        " Styleora. All rights reserved.";

}


/* =========================
   LOG MESSAGE
========================= */

console.log(
    "Styleora Fashion Website loaded successfully."
);
```
