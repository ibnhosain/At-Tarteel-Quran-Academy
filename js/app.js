/* ========================= CONFIG ========================= */
const WHATSAPP_NUMBER = "8801402499027";
const WHATSAPP_DEFAULT_TEXT =
  "Assalamu Alaikum. I want to book a free trial class for At-Tarteel Quran Academy.";

/* ========================= HELPERS ========================= */
function openWhatsApp(message) {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}

/* ========================= ELEMENTS ========================= */
const yearEl          = document.getElementById("year");
const backdrop        = document.getElementById("backdrop");
const btnCloseModal   = document.getElementById("btnCloseModal");
const btnCancel       = document.getElementById("btnCancel");
const trialForm       = document.getElementById("trialForm");
const btnTrialTop     = document.getElementById("btnTrialTop");//btn for admition form 
const btnTrialHero    = document.getElementById("btnTrialHero"); 
const btnTrialPill = document.getElementById("btnTrialPill");//whatsapp massage btn
const btnTrialBottom  = document.getElementById("btnTrialBottom");
const btnWhatsappTop    = document.getElementById("btnWhatsappTop");
const btnWhatsappHero   = document.getElementById("btnWhatsappHero");
const btnWhatsappBottom = document.getElementById("btnWhatsappBottom");
const whatsappLinkText  = document.getElementById("whatsappLinkText");
const hamburger = document.getElementById("hamburger");
const menu      = document.getElementById("menu");

/* ========================= YEAR ========================= */
yearEl.textContent = new Date().getFullYear();

/* ========================= WHATSAPP LINK ========================= */
whatsappLinkText.addEventListener("click", (e) => {
  e.preventDefault();
  openWhatsApp(WHATSAPP_DEFAULT_TEXT);
});
btnTrialPill.addEventListener("click", () => {
  openWhatsApp(WHATSAPP_DEFAULT_TEXT);
});
/* ========================= MODAL ========================= */
function openModal() {
  backdrop.classList.add("show");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.classList.remove("show");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

[btnTrialTop, btnTrialHero].forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnTrialBottom.addEventListener("click", () => openWhatsApp(WHATSAPP_DEFAULT_TEXT));

btnCloseModal.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ========================= WHATSAPP BUTTONS ========================= */
[btnWhatsappTop, btnWhatsappHero, btnWhatsappBottom].forEach((btn) => {
  btn.addEventListener("click", () => openWhatsApp(WHATSAPP_DEFAULT_TEXT));
});

/* ========================= TRIAL FORM ========================= */
trialForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(trialForm);

  const finalMessage = `
Assalamu Alaikum,
I want to book a FREE trial class.

Name: ${data.get("name")}
Age: ${data.get("age")}
Country: ${data.get("country")}
Course: ${data.get("course")}
Preferred Time: ${data.get("time")}
WhatsApp: ${data.get("whatsapp")}
Message: ${data.get("message") || "N/A"}

At-Tarteel Quran Academy
`.trim();

  openWhatsApp(finalMessage);
  closeModal();
  trialForm.reset();
});

/* ========================= MOBILE MENU ========================= */
hamburger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("show");
  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.textContent = isOpen ? "✕" : "☰";
});

/* Close menu when a nav link is clicked */
menu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    menu.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.textContent = "☰";
  });
});

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.textContent = "☰";
  }
});

/* ========================= CONTACT FORM ========================= */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);

    const finalMessage = `
Assalamu Alaikum,

New contact message from website:

Name: ${data.get("name")}
Email: ${data.get("email") || "N/A"}
Country: ${data.get("country")}
Message: ${data.get("message")}

At-Tarteel Quran Academy
`.trim();

    openWhatsApp(finalMessage);
    contactForm.reset();
  });
}
