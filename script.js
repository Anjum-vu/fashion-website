/* ========================================
   STYLEHUB JAVASCRIPT
======================================== */


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


/* Close mobile menu */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


/* ========================================
   BRAND SEARCH
======================================== */

const searchInput = document.getElementById("brandSearch");
const brandCards = document.querySelectorAll(".brand-card");
const noResults = document.getElementById("noResults");


if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value.toLowerCase().trim();

        let found = 0;

        brandCards.forEach(function (card) {

            const brandName =
                card.querySelector("h3")?.textContent.toLowerCase() || "";

            const category =
                card.querySelector(".brand-category")?.textContent.toLowerCase() || "";

            const description =
                card.querySelector(".brand-content p")?.textContent.toLowerCase() || "";

            const matches =
                searchText === "" ||
                brandName.includes(searchText) ||
                category.includes(searchText) ||
                description.includes(searchText);

            if (matches) {
                card.style.display = "";
                found++;
            } else {
                card.style.display = "none";
            }

        });


        if (noResults) {
            noResults.style.display =
                found === 0 ? "block" : "none";
        }

    });

}


/* ========================================
   IMPORTANT:
   DO NOT HIDE BRAND CARDS
======================================== */

/* Cards are visible by default */


/* ========================================
   EXTERNAL LINKS
======================================== */

const visitLinks =
    document.querySelectorAll(".visit-link");

visitLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("Opening:", link.href);

    });

});
