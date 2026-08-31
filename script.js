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
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


/* =========================
   BRAND FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const brandCards =
    document.querySelectorAll(".brand-card");

const noResults =
    document.getElementById("noResults");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active button */
        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active button */
        button.classList.add("active");


        /* Get selected category */
        const filter = button.dataset.filter;


        let visibleBrands = 0;


        /* Check every brand */
        brandCards.forEach(function (card) {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "";

                visibleBrands++;

            } else {

                card.style.display = "none";

            }

        });


        /* No results message */

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

    category.addEventListener("click", function (event) {

        /*
        Prevent normal jump first
        */
        event.preventDefault();


        /*
        Get category from HTML
        */

        const categoryName =
            category.dataset.categoryLink;


        /*
        Find matching filter
        */

        filterButtons.forEach(function (button) {

            if (
                button.dataset.filter === categoryName
            ) {

                button.click();

            }

        });


        /*
        Move to brands section
        */

        const brandsSection =
            document.getElementById("brands");


        if (brandsSection) {

            brandsSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Styleora. All rights reserved.";

}


/* =========================
   WEBSITE LOADED
========================= */

console.log(
    "Styleora Fashion Website loaded successfully."
);
```
