/* ====== CONFIG: Replace with your WhatsApp number ======
   Format: Country code + number (no +, no spaces)
   Example BD: 8801XXXXXXXXX
   Example USA: 1XXXXXXXXXX
   Example UK: 44XXXXXXXXXX
======================================================== */
const WHATSAPP_NUMBER = "8801402499027"; // <-- তোমার WhatsApp নম্বর বসাও

const WHATSAPP_DEFAULT_TEXT =
  "Assalamu Alaikum. I want to book a free trial class for At-Tarteel Quran Academy.";

/* Open WhatsApp with prefilled message */
function openWhatsApp(message) {
  const text = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank");
}

/* Elements */
const yearEl = document.getElementById("year");
const backdrop = document.getElementById("backdrop");
const btnCloseModal = document.getElementById("btnCloseModal");
const btnCancel = document.getElementById("btnCancel");
const trialForm = document.getElementById("trialForm");

const btnTrialTop = document.getElementById("btnTrialTop");
const btnTrialHero = document.getElementById("btnTrialHero");
const btnTrialBottom = document.getElementById("btnTrialBottom");

const btnWhatsappTop = document.getElementById("btnWhatsappTop");
const btnWhatsappHero = document.getElementById("btnWhatsappHero");
const btnWhatsappBottom = document.getElementById("btnWhatsappBottom");

const whatsappLinkText = document.getElementById("whatsappLinkText");

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

/* Init year */
yearEl.textContent = "2020";

/* Contact link => WhatsApp */
whatsappLinkText.addEventListener("click", (e) => {
  e.preventDefault();
  openWhatsApp(WHATSAPP_DEFAULT_TEXT);
});

/* Modal controls */
function openModal() {
  backdrop.classList.add("show");
  backdrop.setAttribute("aria-hidden", "false");
}
function closeModal() {
  backdrop.classList.remove("show");
  backdrop.setAttribute("aria-hidden", "true");
}

/* Open modal buttons */
[btnTrialTop, btnTrialHero, btnTrialBottom].forEach((btn) => {
  btn.addEventListener("click", openModal);
});

/* Close modal buttons */
btnCloseModal.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);

/* Click outside modal closes */
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});

/* ESC closes modal */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* WhatsApp buttons */
[btnWhatsappTop, btnWhatsappHero, btnWhatsappBottom].forEach((btn) => {
  btn.addEventListener("click", () => openWhatsApp(WHATSAPP_DEFAULT_TEXT));
});

/* Form submit => WhatsApp message */
trialForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(trialForm);

  const name = formData.get("name");
  const age = formData.get("age");
  const country = formData.get("country");
  const course = formData.get("course");
  const time = formData.get("time");
  const whatsapp = formData.get("whatsapp");
  const message = formData.get("message");

  const finalMessage = `
Assalamu Alaikum,
I want to book a FREE trial class.

Name: ${name}
Age: ${age}
Country: ${country}
Course: ${course}
Preferred Time: ${time}
WhatsApp: ${whatsapp}
Message: ${message || "N/A"}

At-Tarteel Quran Academy
`.trim();

  openWhatsApp(finalMessage);
  closeModal();
  trialForm.reset();
});

/* Mobile menu toggle */
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

/* Close menu after clicking link */
menu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => menu.classList.remove("show"));
});

/* Contact form => WhatsApp */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);

    const name = data.get("name");
    const email = data.get("email") || "N/A";
    const country = data.get("country");
    const message = data.get("message");

    const finalMessage = `
Assalamu Alaikum,

New contact message from website:

Name: ${name}
Email: ${email}
Country: ${country}
Message: ${message}

At-Tarteel Quran Academy
`.trim();

    openWhatsApp(finalMessage);
    contactForm.reset();
  });
}
