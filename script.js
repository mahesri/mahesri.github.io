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


(() => {
    const slideshow = document.getElementById("project-slideshow");
    if (!slideshow) return;

    const slides = Array.from(slideshow.querySelectorAll(".project-slide"));
    const dots = Array.from(slideshow.querySelectorAll("[data-project-dot]"));
    const previous = slideshow.querySelector("[data-project-prev]");
    const next = slideshow.querySelector("[data-project-next]");
    const pauseButton = slideshow.querySelector("[data-project-pause]");
    if (slides.length < 2 || !previous || !next || !pauseButton) return;

    let activeIndex = 0;
    let timer = null;
    let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const stopTimer = () => {
        if (timer !== null) window.clearInterval(timer);
        timer = null;
    };

    const startTimer = () => {
        stopTimer();
        if (!paused && !document.hidden) {
            timer = window.setInterval(() => showSlide(activeIndex + 1), 5000);
        }
    };

    const showSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            const active = slideIndex === activeIndex;
            slide.hidden = !active;
            slide.classList.toggle("is-active", active);
            slide.setAttribute("aria-hidden", String(!active));
        });
        dots.forEach((dot, dotIndex) => {
            const active = dotIndex === activeIndex;
            dot.classList.toggle("is-active", active);
            if (active) dot.setAttribute("aria-current", "true");
            else dot.removeAttribute("aria-current");
        });
    };

    const setPaused = (value) => {
        paused = value;
        pauseButton.textContent = paused ? "▶" : "Ⅱ";
        pauseButton.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
        if (paused) stopTimer();
        else startTimer();
    };

    previous.addEventListener("click", () => { showSlide(activeIndex - 1); startTimer(); });
    next.addEventListener("click", () => { showSlide(activeIndex + 1); startTimer(); });
    dots.forEach((dot) => dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.projectDot));
        startTimer();
    }));
    pauseButton.addEventListener("click", () => setPaused(!paused));
    slideshow.addEventListener("mouseenter", stopTimer);
    slideshow.addEventListener("mouseleave", startTimer);
    slideshow.addEventListener("focusin", stopTimer);
    slideshow.addEventListener("focusout", (event) => {
        if (!slideshow.contains(event.relatedTarget)) startTimer();
    });
    document.addEventListener("visibilitychange", () => document.hidden ? stopTimer() : startTimer());

    showSlide(0);
    setPaused(paused);
})();
