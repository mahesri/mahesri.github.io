(() => {
    const menuToggle = document.getElementById("hamburger-menu");
    const navigation = document.getElementById("navbar-nav");

    if (!menuToggle || !navigation) return;

    const setMenuOpen = (isOpen, returnFocus = false) => {
        navigation.classList.toggle("active", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        menuToggle.innerHTML = isOpen
            ? '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"></path></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>';

        if (!isOpen && returnFocus) menuToggle.focus();
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    navigation.querySelectorAll("a[href]").forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("click", (event) => {
        if (
            !navigation.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            menuToggle.getAttribute("aria-expanded") === "true"
        ) {
            setMenuOpen(false, true);
        }
    });

    const desktopViewport = window.matchMedia("(min-width: 1025px)");
    const closeOnDesktop = (event) => {
        if (event.matches) setMenuOpen(false);
    };

    if (desktopViewport.addEventListener) {
        desktopViewport.addEventListener("change", closeOnDesktop);
    } else {
        desktopViewport.addListener(closeOnDesktop);
    }

    setMenuOpen(false);
})();
