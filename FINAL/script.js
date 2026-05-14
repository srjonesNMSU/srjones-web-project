// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
  });
}

// High contrast mode
const contrastToggle = document.getElementById("contrast-toggle");

if (contrastToggle) {
  contrastToggle.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });
}

// Product search/filter
const productSearch = document.getElementById("product-search");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.getElementById("no-results");

if (productSearch) {
  productSearch.addEventListener("input", () => {
    const searchValue = productSearch.value.toLowerCase();
    let visibleCount = 0;

    productCards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      const keywords = card.dataset.keywords.toLowerCase();
      const matches = title.includes(searchValue) || keywords.includes(searchValue);

      card.classList.toggle("hidden", !matches);

      if (matches) {
        visibleCount++;
      }
    });

    noResults.classList.toggle("hidden", visibleCount !== 0);
  });
}

// Contact form validation
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !interest || !message) {
      formMessage.textContent = "Please complete every field before submitting.";
      formMessage.style.color = "#8b0000";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "#8b0000";
      return;
    }

    formMessage.textContent = "Thank you! Your message has been received.";
    formMessage.style.color = "#124734";
    contactForm.reset();
  });
}

// Newsletter form validation
const newsletterForm = document.getElementById("newsletter-form");
const newsletterMessage = document.getElementById("newsletter-message");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("newsletter-email").value.trim();

    if (!email.includes("@") || !email.includes(".")) {
      newsletterMessage.textContent = "Please enter a valid email address.";
      newsletterMessage.style.color = "#8b0000";
      return;
    }

    newsletterMessage.textContent = "Thanks for signing up for GreenTech tips!";
    newsletterMessage.style.color = "#124734";
    newsletterForm.reset();
  });
}
