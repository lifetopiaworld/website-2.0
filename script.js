const body = document.body;

/* =========================
   LOADING SCREEN
========================= */
const siteLoader = document.getElementById("siteLoader");

if (body) {
  body.classList.add("is-loading");
}

function hideSiteLoader() {
  if (!siteLoader) return;

  siteLoader.classList.add("hide");
  body.classList.remove("is-loading");

  setTimeout(() => {
    siteLoader.style.display = "none";
  }, 500);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    hideSiteLoader();
    handleReveal();
  }, 500);
});

/* fallback kalau ada asset yang lama banget */
setTimeout(() => {
  hideSiteLoader();
  handleReveal();
}, 4500);

/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll("#mobileMenu a");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }
  });
});

/* =========================
   GAMEPLAY GALLERY
========================= */
const mainImage = document.getElementById("mainImage");
const mainTitle = document.getElementById("mainTitle");
const mainDesc = document.getElementById("mainDesc");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const image = thumb.dataset.image;
    const title = thumb.dataset.title;
    const desc = thumb.dataset.desc;

    if (mainImage) {
      mainImage.src = image;
      mainImage.alt = title;
    }

    if (mainTitle) {
      mainTitle.textContent = title;
    }

    if (mainDesc) {
      mainDesc.textContent = desc;
    }

    thumbs.forEach((item) => item.classList.remove("active"));
    thumb.classList.add("active");
  });
});

/* =========================
   COPY MINT ADDRESS
========================= */
const copyButton = document.getElementById("copyButton");
const mintAddress = document.getElementById("mintAddress");
const copyMessage = document.getElementById("copyMessage");

if (copyButton && mintAddress && copyMessage) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(mintAddress.textContent.trim());
      copyMessage.textContent = "Mint address copied.";
    } catch (error) {
      copyMessage.textContent = "Failed to copy mint address.";
    }

    setTimeout(() => {
      copyMessage.textContent = "";
    }, 2200);
  });
}

/* =========================
   REVEAL ON SCROLL
========================= */
const revealItems = document.querySelectorAll(".reveal");

function handleReveal() {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const trigger = window.innerHeight - 90;

    if (rect.top < trigger) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("resize", handleReveal);
document.addEventListener("DOMContentLoaded", handleReveal);

/* =========================
   MOBILE DEV MODAL
========================= */
const mobileDevButton = document.getElementById("mobileDevButton");
const mobileDevModal = document.getElementById("mobileDevModal");
const mobileDevBackdrop = document.getElementById("mobileDevBackdrop");
const mobileDevClose = document.getElementById("mobileDevClose");
const mobileDevOkay = document.getElementById("mobileDevOkay");

function openMobileDevModal() {
  if (!mobileDevModal) return;
  mobileDevModal.classList.add("show");
  body.classList.add("modal-open");
}

function closeMobileDevModal() {
  if (!mobileDevModal) return;
  mobileDevModal.classList.remove("show");
  body.classList.remove("modal-open");
}

if (mobileDevButton) {
  mobileDevButton.addEventListener("click", openMobileDevModal);
}

if (mobileDevBackdrop) {
  mobileDevBackdrop.addEventListener("click", closeMobileDevModal);
}

if (mobileDevClose) {
  mobileDevClose.addEventListener("click", closeMobileDevModal);
}

if (mobileDevOkay) {
  mobileDevOkay.addEventListener("click", closeMobileDevModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileDevModal();
  }
});