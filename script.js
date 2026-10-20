(() => {
    const menuToggle = document.getElementById("hamburger-menu");
    const navigation = document.getElementById("navbar-nav");
    if (!menuToggle || !navigation) return;
    const setMenuOpen = (isOpen, returnFocus = false) => {
        navigation.classList.toggle("active", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
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
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) setMenuOpen(false);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") setMenuOpen(false, true);
    });
    const desktopViewport = window.matchMedia("(min-width: 1025px)");
    const closeOnDesktop = (event) => { if (event.matches) setMenuOpen(false); };
    if (desktopViewport.addEventListener) desktopViewport.addEventListener("change", closeOnDesktop);
    else desktopViewport.addListener(closeOnDesktop);
    setMenuOpen(false);
})();
(() => {
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    if (!contactForm || !formStatus) return;
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const senderName = contactForm.elements.namedItem("name");
    const titleField = contactForm.elements.namedItem("title");
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!window.emailjs) {
            formStatus.textContent = "The email service is unavailable right now. Please try again later.";
            return;
        }
        if (titleField && senderName) titleField.value = senderName.value.trim();
        formStatus.textContent = "Sending your message…";
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.setAttribute("aria-busy", "true");
        }
        try {
            await window.emailjs.sendForm(
                "service_r7tfi5c",
                "template_0cx3q1r",
                contactForm,
                { publicKey: "3duX9L_cdusJolNFc" }
            );
            formStatus.textContent = "Thanks! Your message was sent. I’ll get back to you soon.";
            contactForm.reset();
        } catch (error) {
            console.error("EmailJS contact form error:", error);
            const detail = error?.text || error?.message;
            formStatus.textContent = detail
                ? "Message not sent: " + detail
                : "Sorry, your message could not be sent. Please try again in a moment.";
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.removeAttribute("aria-busy");
            }
        }
    });
})();
