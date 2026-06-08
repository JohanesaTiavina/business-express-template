// Pack Business Express Template
// Objectif : modifier rapidement une page client sans toucher à toute la structure.
// Remplacez les informations ci-dessous puis adaptez les textes dans index.html si besoin.

const BUSINESS_CONFIG = {
  businessName: "Saveurs Miakatra",
  whatsappNumberInternational: "261340000000",
  defaultWhatsappMessage:
    "Bonjour, je souhaite demander un devis pour un événement.",
};

// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Liens WhatsApp globaux
function buildWhatsappUrl(message) {
  const phone = BUSINESS_CONFIG.whatsappNumberInternational.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = buildWhatsappUrl(BUSINESS_CONFIG.defaultWhatsappMessage);
});

// Révélation douce au scroll
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Bouton retour en haut
const backToTop = document.querySelector("[data-back-to-top]");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 700);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Formulaire : version rapide qui ouvre WhatsApp avec le message prérempli.
// Pour connecter à Google Forms, Tally, Netlify Forms ou une API, remplacez ce bloc.
const leadForm = document.querySelector("#leadForm");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(leadForm);
    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const eventType = formData.get("eventType") || "";
    const date = formData.get("date") || "";
    const guests = formData.get("guests") || "";
    const budget = formData.get("budget") || "";
    const message = formData.get("message") || "";

    const whatsappMessage = [
      "Bonjour, je souhaite demander un devis.",
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `Type d'événement : ${eventType}`,
      `Date souhaitée : ${date}`,
      `Nombre d'invités : ${guests}`,
      `Budget approximatif : ${budget}`,
      `Message : ${message}`,
    ].join("\n");

    window.open(buildWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  });
}
