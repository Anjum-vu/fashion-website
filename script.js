```javascript
/* =========================
   STYLEGATE JAVASCRIPT
   Simple & Easy to Edit
========================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close mobile menu after clicking a link
        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach(function (item) {
            item.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }


    /* =========================
       BRAND FILTERS
    ========================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const brandCards = document.querySelectorAll(".brand-card");
    const noResults = document.getElementById("noResults");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Make clicked button active
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            let visibleBrands = 0;

            brandCards.forEach(function (card) {

                const categories = card
                    .getAttribute("data-category")
                    .toLowerCase();

                // Show all brands
                if (filter === "all") {

                    card.style.display = "";

                    visibleBrands++;

                }

                // Show matching brands
                else if (categories.includes(filter)) {

                    card.style.display = "";

                    visibleBrands++;

                }

                // Hide non-matching brands
                else {

                    card.style.display = "none";

                }

            });


            // Show / hide "No brand found"
            if (visibleBrands === 0) {
                noResults.style.display = "block";
            } else {
                noResults.style.display = "none";
            }

        });

    });


    /* =========================
       CATEGORY CARDS
    ========================= */

    const categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach(function (category) {

        category.addEventListener("click", function (event) {

            event.preventDefault();

            const categoryClass = Array.from(category.classList)
                .find(function (className) {

                    return ["fashion", "sports", "shoes", "luxury"]
                        .includes(className);

                });


            if (!categoryClass) {
                return;
            }


            // Convert category name to filter name
            let filterName = categoryClass;

            if (categoryClass === "shoes") {
                filterName = "footwear";
            }


            // Find matching filter button
            const matchingButton = document.querySelector(
                `.filter-btn[data-filter="${filterName}"]`
            );


            if (matchingButton) {

                // Activate the filter
                matchingButton.click();

                // Scroll to brands section
                const brandsSection =
                    document.getElementById("brands");

                if (brandsSection) {

                    brandsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


});
```
