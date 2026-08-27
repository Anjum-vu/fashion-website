
/* ========================================
   STYLEHUB JAVASCRIPT
======================================== */


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* ========================================
   BRAND SEARCH
======================================== */

const searchInput =
    document.getElementById("brandSearch");


const brandCards =
    document.querySelectorAll(".brand-card");


const noResults =
    document.getElementById("noResults");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase().trim();


    let found = 0;


    brandCards.forEach(function (card) {

        const brandName =
            card.querySelector("h3")
                .textContent
                .toLowerCase();


        const category =
            card.querySelector(".brand-category")
                .textContent
                .toLowerCase();


        const description =
            card.querySelector("p")
                .textContent
                .toLowerCase();


        const matches =
            brandName.includes(searchText) ||
            category.includes(searchText) ||
            description.includes(searchText);


        if (matches) {

            card.style.display = "block";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    if (found === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


/* ========================================
   SCROLL ANIMATION
======================================== */

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.1
        }
    );


const animatedElements =
    document.querySelectorAll(
        ".brand-card, .category-card"
    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";


    observer.observe(element);

});


/* Add visible animation */

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        animatedElements.forEach(function (element) {

            element.classList.add("show");

        });

    }, 300);

});


/* ========================================
   EXTERNAL LINK FEEDBACK
======================================== */

const visitLinks =
    document.querySelectorAll(".visit-link");


visitLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Opening:",
            link.href
        );

    });

});
/* ========================================
   SCROLL ANIMATION FIX
======================================== */

.brand-card.show,
.category-card.show {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
