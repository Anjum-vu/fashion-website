```javascript
/* =====================================================
   STYLEGATE — MAIN JAVASCRIPT
   Fashion Affiliate Discovery Website
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTS
    ================================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    const searchInput = document.getElementById("brandSearch");
    const brandGrid = document.getElementById("brandGrid");
    const brandCards = Array.from(
        document.querySelectorAll(".brand-card")
    );

    const filterButtons = Array.from(
        document.querySelectorAll(".filter-btn")
    );

    const noResults = document.getElementById("noResults");

    const categoryCards = Array.from(
        document.querySelectorAll(".category-card")
    );


    /* =================================================
       CURRENT FILTER
    ================================================= */

    let currentFilter = "all";


    /* =================================================
       MOBILE MENU
    ================================================= */

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");
            document.body.classList.toggle("menu-open");

            const isOpen =
                navLinks.classList.contains("active");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            /*
             * Change hamburger icon
             */

            menuBtn.textContent = isOpen
                ? "✕"
                : "☰";
        });


        /*
         * Close mobile menu
         * when navigation link is clicked
         */

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                document.body.classList.remove("menu-open");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuBtn.textContent = "☰";
            });

        });

    }


    /* =================================================
       SEARCH + FILTER FUNCTION
    ================================================= */

    function filterBrands() {

        const searchTerm = searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

        let visibleCount = 0;


        brandCards.forEach(card => {

            /*
             * Get searchable text
             */

            const searchableText =
                card.textContent.toLowerCase();


            /*
             * Get category information
             */

            const categories =
                (card.dataset.category || "")
                    .toLowerCase()
                    .split(/\s+/);


            /*
             * Search match
             */

            const matchesSearch =
                searchTerm === "" ||
                searchableText.includes(searchTerm);


            /*
             * Filter match
             */

            const matchesFilter =
                currentFilter === "all" ||
                categories.includes(currentFilter);


            /*
             * Final result
             */

            const shouldShow =
                matchesSearch &&
                matchesFilter;


            if (shouldShow) {

                card.classList.remove("hidden");

                visibleCount++;

            } else {

                card.classList.add("hidden");

            }

        });


        /*
         * Show / hide no results message
         */

        if (noResults) {

            if (visibleCount === 0) {

                noResults.classList.add("show");

            } else {

                noResults.classList.remove("show");

            }

        }

    }


    /* =================================================
       FILTER BUTTONS
    ================================================= */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            /*
             * Remove active state
             */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            /*
             * Activate clicked button
             */

            button.classList.add("active");


            /*
             * Get selected category
             */

            currentFilter =
                button.dataset.filter
                    .toLowerCase();


            /*
             * Apply filter
             */

            filterBrands();

        });

    });


    /* =================================================
       LIVE SEARCH
    ================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                filterBrands();

            }
        );

    }


    /* =================================================
       CATEGORY CARDS
       Fashion / Sports / Footwear / Luxury
    ================================================= */

    categoryCards.forEach(categoryCard => {

        categoryCard.addEventListener("click", event => {

            /*
             * Prevent default anchor jump temporarily
             */

            event.preventDefault();


            /*
             * Read category title
             */

            const categoryTitle =
                categoryCard
                    .querySelector("h3")
                    ?.textContent
                    .trim()
                    .toLowerCase();


            /*
             * Convert category name
             * to filter value
             */

            let categoryFilter = "all";


            if (categoryTitle === "fashion") {

                categoryFilter = "fashion";

            } else if (categoryTitle === "sports") {

                categoryFilter = "sports";

            } else if (categoryTitle === "footwear") {

                categoryFilter = "footwear";

            } else if (categoryTitle === "luxury") {

                categoryFilter = "luxury";

            }


            /*
             * Update active filter button
             */

            filterButtons.forEach(button => {

                const buttonFilter =
                    button.dataset.filter
                        .toLowerCase();

                button.classList.toggle(
                    "active",
                    buttonFilter === categoryFilter
                );

            });


            /*
             * Update current filter
             */

            currentFilter = categoryFilter;


            /*
             * Clear search
             */

            if (searchInput) {
                searchInput.value = "";
            }


            /*
             * Apply category filter
             */

            filterBrands();


            /*
             * Scroll to brands section
             */

            const brandsSection =
                document.getElementById("brands");

            if (brandsSection) {

                brandsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =================================================
       BRAND CARD INTERACTION
    ================================================= */

    brandCards.forEach(card => {

        /*
         * Keyboard accessibility
         */

        card.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                const visitButton =
                    card.querySelector(".visit-btn");

                if (visitButton) {

                    event.preventDefault();

                    visitButton.click();

                }

            }

        });

    });


    /* =================================================
       AFFILIATE LINK TRACKING
       
       NOTE:
       Your current links are normal URLs.
       Later replace them with your real
       affiliate tracking URLs.
    ================================================= */

    const affiliateLinks =
        document.querySelectorAll(".visit-btn");


    affiliateLinks.forEach(link => {

        link.addEventListener("click", () => {

            /*
             * Brand name for analytics
             */

            const card =
                link.closest(".brand-card");

            const brandName =
                card
                    ?.querySelector("h3")
                    ?.textContent
                    .trim();


            /*
             * Save last clicked brand locally
             *
             * This does NOT create affiliate earnings.
             * It is only useful for basic local tracking.
             */

            if (brandName) {

                localStorage.setItem(
                    "stylegate_last_brand",
                    brandName
                );

            }

        });

    });


    /* =================================================
       EXTERNAL LINKS
    ================================================= */

    affiliateLinks.forEach(link => {

        /*
         * Open external stores safely
         */

        link.setAttribute(
            "target",
            "_blank"
        );

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =================================================
       RESET SEARCH WHEN ESC IS PRESSED
    ================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Escape") {

                    searchInput.value = "";

                    currentFilter = "all";


                    filterButtons.forEach(button => {

                        button.classList.toggle(
                            "active",
                            button.dataset.filter === "all"
                        );

                    });


                    filterBrands();

                    searchInput.blur();

                }

            }
        );

    }


    /* =================================================
       NAVBAR SHADOW ON SCROLL
    ================================================= */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        () => {

            if (!navbar) return;


            if (window.scrollY > 20) {

                navbar.style.boxShadow =
                    "0 5px 25px rgba(0,0,0,.06)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        },
        { passive: true }
    );


    /* =================================================
       INITIALIZE
    ================================================= */

    filterBrands();


    /*
     * Set accessibility attribute
     */

    if (menuBtn) {

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    /* =================================================
       CONSOLE MESSAGE
       Developer information only
    ================================================= */

    console.log(
        "%cStyleGate",
        "color:#bd9150;font-size:20px;font-weight:bold;"
    );

    console.log(
        "Fashion discovery website initialized."
    );

});
```
