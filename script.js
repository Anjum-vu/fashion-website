/* ========================================
   STYLEHUB JAVASCRIPT
======================================== */


/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


/* ---------- CLOSE MOBILE MENU ---------- */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ---------- BRAND SEARCH ---------- */

const searchInput = document.getElementById("brandSearch");
const brandCards = document.querySelectorAll(".brand-card");
const noResults = document.getElementById("noResults");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const searchText = searchInput.value.toLowerCase().trim();

        let found = 0;

        brandCards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchText)) {
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


/* ---------- CATEGORY FILTER ---------- */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        /* Active button */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        /* Show / hide brands */

        brandCards.forEach(card => {

            const category =
                card.querySelector(".brand-category")?.textContent.toLowerCase() || "";

            if (filter === "all") {

                card.style.display = "";

            } else if (category.includes(filter)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* ---------- EXTERNAL LINKS ---------- */

document.querySelectorAll(".visit-link").forEach(link => {

    link.addEventListener("click", () => {
        console.log("Opening:", link.href);
    });

});
