/* =========================================================
   OOPSWISH - OFFICIAL JAVASCRIPT
   Smooth, High Performance, Mobile & Desktop Friendly
   Features:
     - 27 Curated Templates (9 Birthday, 9 Anniversary, 9 Proposal)
     - Interactive Revolving Keepsake Frames (Touch/Swipe + Delta Time)
     - Smooth Navbar & ScrollSpy
     - Full Language Switch (English / বাংলা)
     - Google Apps Script + WhatsApp Order Submission
========================================================= */

/* =========================================================
   1. GLOBAL CONFIGURATION
========================================================= */
const CONFIG = {
    // Official OopsWish WhatsApp Number (Country code + Phone)
    whatsapp: "8801341078165",

    // Google Apps Script Web App Endpoint for Orders
    googleScriptUrl:
        "https://script.google.com/macros/s/AKfycbwLREYVXrTHO_6eptsYPl0EiqHvEmwGAP85ASjY-3GQ9oPXCVbVY_qRK_Y-YqFw10yofg/exec"
};


/* =========================================================
   2. SAMPLE TEMPLATES (27 TOTAL: 9+9+9 & 3+3+3 PER PACKAGE)
   (Easy to edit, replace images or update live preview links)
========================================================= */
const SAMPLE_TEMPLATES = [

    // =====================================================
    // BIRTHDAY TEMPLATES (9 Total: 3 Basic, 3 Premium, 3 Pro)
    // =====================================================
    // --- Basic (3) ---
    {
        id: "birthday-01",
        title: "Birthday Template 01",
        category: "Birthday",
        tier: "Basic",
        image: "assets/samples/birthday/birthday-01.jpg",
        link: "https://birthday-basic-temp-01.vercel.app/",
        price: "৳299"
    },
    {
        id: "birthday-02",
        title: "Birthday Template 02",
        category: "Birthday",
        tier: "Basic",
        image: "assets/samples/birthday/birthday-02.jpg",
        link: "https://birthday-basic-temp-02.vercel.app/",
        price: "৳299"
    },
    {
        id: "birthday-03",
        title: "Birthday Template 03",
        category: "Birthday",
        tier: "Basic",
        image: "assets/samples/birthday/birthday-03.jpg",
        link: "https://birthday-basic-temp-03.vercel.app/",
        price: "৳299"
    },

    // --- Premium (3) ---
    {
        id: "birthday-04",
        title: "Birthday Template 04",
        category: "Birthday",
        tier: "Premium",
        image: "assets/samples/birthday/birthday-04.jpg",
        link: "https://birthday-premium-temp-01.vercel.app/",
        price: "৳399"
    },
    {
        id: "birthday-05",
        title: "Birthday Template 05",
        category: "Birthday",
        tier: "Premium",
        image: "assets/samples/birthday/birthday-05.jpg",
        link: "https://birthday-premium-temp-02.vercel.app/",
        price: "৳399"
    },
    {
        id: "birthday-06",
        title: "Birthday Template 06",
        category: "Birthday",
        tier: "Premium",
        image: "assets/samples/birthday/birthday-06.jpg",
        link: "https://birthday-premium-temp-03.vercel.app/",
        price: "৳399"
    },

    // --- Pro (3) ---
    {
        id: "birthday-07",
        title: "Birthday Template 07",
        category: "Birthday",
        tier: "Pro",
        image: "assets/samples/birthday/birthday-07.jpg",
        link: "https://birthday-vip-temp-01.vercel.app/",
        price: "৳499"
    },
    {
        id: "birthday-08",
        title: "Birthday Template 08",
        category: "Birthday",
        tier: "Pro",
        image: "assets/samples/birthday/birthday-08.jpg",
        link: "https://birthday-vip-temp-02.vercel.app/",
        price: "৳499"
    },
    {
        id: "birthday-09",
        title: "Birthday Template 09",
        category: "Birthday",
        tier: "Pro",
        image: "assets/samples/birthday/birthday-09.jpg",
        link: "https://birthday-vip-temp-03.vercel.app/",
        price: "৳499"
    },


    // =====================================================
    // ANNIVERSARY TEMPLATES (9 Total: 3 Basic, 3 Premium, 3 Pro)
    // =====================================================
    // --- Basic (3) ---
    {
        id: "anniversary-01",
        title: "Anniversary Template 01",
        category: "Anniversary",
        tier: "Basic",
        image: "assets/samples/anniversary/anniversary-01.jpg",
        link: "https://aniversary-basic-temp-01.vercel.app/",
        price: "৳399"
    },
    {
        id: "anniversary-02",
        title: "Anniversary Template 02",
        category: "Anniversary",
        tier: "Basic",
        image: "assets/samples/anniversary/anniversary-02.jpg",
        link: "https://aniversary-basic-temp-02.vercel.app/",
        price: "৳399"
    },
    {
        id: "anniversary-03",
        title: "Anniversary Template 03",
        category: "Anniversary",
        tier: "Basic",
        image: "assets/samples/anniversary/anniversary-03.jpg",
        link: "https://aniversary-basic-temp-03.vercel.app/",
        price: "৳399"
    },

    // --- Premium (3) ---
    {
        id: "anniversary-04",
        title: "Anniversary Template 04",
        category: "Anniversary",
        tier: "Premium",
        image: "assets/samples/anniversary/anniversary-04.jpg",
        link: "https://aniversary-premium-temp-01.vercel.app/",
        price: "৳499"
    },
    {
        id: "anniversary-05",
        title: "Anniversary Template 05",
        category: "Anniversary",
        tier: "Premium",
        image: "assets/samples/anniversary/anniversary-05.jpg",
        link: "https://anniversary-premium-template-02.vercel.app/",
        price: "৳499"
    },
    {
        id: "anniversary-06",
        title: "Anniversary Template 06",
        category: "Anniversary",
        tier: "Premium",
        image: "assets/samples/anniversary/anniversary-06.jpg",
        link: "https://aniversary-premium-temp-03.vercel.app/",
        price: "৳499"
    },

    // --- Pro (3) ---
    {
        id: "anniversary-07",
        title: "Anniversary Template 07",
        category: "Anniversary",
        tier: "Pro",
        image: "assets/samples/anniversary/anniversary-07.jpg",
        link: "https://aniversary-vip-temp-01.vercel.app/",
        price: "৳599"
    },
    {
        id: "anniversary-08",
        title: "Anniversary Template 08",
        category: "Anniversary",
        tier: "Pro",
        image: "assets/samples/anniversary/anniversary-08.jpg",
        link: "https://aniversary-vip-temp-02.vercel.app/",
        price: "৳599"
    },
    {
        id: "anniversary-09",
        title: "Anniversary Template 09",
        category: "Anniversary",
        tier: "Pro",
        image: "assets/samples/anniversary/anniversary-09.jpg",
        link: "https://aniversary-vip-temp-03.vercel.app/",
        price: "৳599"
    },


    // =====================================================
    // PROPOSAL TEMPLATES (9 Total: 3 Basic, 3 Premium, 3 Pro)
    // =====================================================
    // --- Basic (3) ---
    {
        id: "proposal-01",
        title: "Proposal Template 01",
        category: "Proposal",
        tier: "Basic",
        image: "assets/samples/proposal/proposal-01.jpg",
        link: "https://propose-basic-temp-01.vercel.app/",
        price: "৳499"
    },
    {
        id: "proposal-02",
        title: "Proposal Template 02",
        category: "Proposal",
        tier: "Basic",
        image: "assets/samples/proposal/proposal-02.jpg",
        link: "https://proposal-basic-temp-02.vercel.app/",
        price: "৳499"
    },
    {
        id: "proposal-03",
        title: "Proposal Template 03",
        category: "Proposal",
        tier: "Basic",
        image: "assets/samples/proposal/proposal-03.jpg",
        link: "https://proposal-basic-temp-03.vercel.app/",
        price: "৳499"
    },

    // --- Premium (3) ---
    {
        id: "proposal-04",
        title: "Proposal Template 04",
        category: "Proposal",
        tier: "Premium",
        image: "assets/samples/proposal/proposal-04.jpg",
        link: "https://propose-premium-temp-01.vercel.app/",
        price: "৳599"
    },
    {
        id: "proposal-05",
        title: "Proposal Template 05",
        category: "Proposal",
        tier: "Premium",
        image: "assets/samples/proposal/proposal-05.jpg",
        link: "https://propose-premium-temp-02.vercel.app/",
        price: "৳599"
    },
    {
        id: "proposal-06",
        title: "Proposal Template 06",
        category: "Proposal",
        tier: "Premium",
        image: "assets/samples/proposal/proposal-06.jpg",
        link: "https://propose-premium-temp-03.vercel.app/",
        price: "৳599"
    },

    // --- Pro (3) ---
    {
        id: "proposal-07",
        title: "Proposal Template 07",
        category: "Proposal",
        tier: "Pro",
        image: "assets/samples/proposal/proposal-07.jpg",
        link: "#",
        price: "৳699"
    },
    {
        id: "proposal-08",
        title: "Proposal Template 08",
        category: "Proposal",
        tier: "Pro",
        image: "assets/samples/proposal/proposal-08.jpg",
        link: "https://propose-vip-temp-02.vercel.app/",
        price: "৳699"
    },
    {
        id: "proposal-09",
        title: "Proposal Template 09",
        category: "Proposal",
        tier: "Pro",
        image: "assets/samples/proposal/proposal-09.jpg",
        link: "https://propose-vip-temp-03.vercel.app/",
        price: "৳699"
    }

];


/* =========================================================
   3. FREE KEEPSAKE FRAMES SHOWCASE DATA
   (Complimentary with Premium & Pro Packages)
========================================================= */
const FRAME_DESIGNS = [
    {
        id: "frame-01",
        title: "Minimalist Rose Gold Couple Frame",
        title_bn: "মিনিমালিস্ট রোজ গোল্ড কাপল ফ্রেম",
        desc: "Custom portrait layout with your special date, memorable coordinates, and romantic aesthetic styling.",
        desc_bn: "আপনার বিশেষ তারিখ, নাম এবং রোমান্টিক ডিজাইন সমন্বিত হাই-রেজুলেশন প্রিন্টেবল আর্টওয়ার্ক।",
        image: "assets/frames/frame-01.jpg"
    },
    {
        id: "frame-02",
        title: "Vintage Polaroid Memory Collage",
        title_bn: "ভিন্টেজ পোলারয়েড মেমোরি কোলাজ",
        desc: "A charming 9-photo polaroid arrangement customized with personal handwritten dates and love notes.",
        desc_bn: "প্রিয় ৯টি ছবির সুন্দর পোলারয়েড ফ্রেম যা বেডরুমের দেয়ালে সাজিয়ে রাখার জন্য একদম পারফেক্ট।",
        image: "assets/frames/frame-02.jpg"
    },
    {
        id: "frame-03",
        title: "Galaxy Constellation Star Map",
        title_bn: "গ্যালাক্সি স্টার ম্যাপ ফ্রেম",
        desc: "Accurate astronomical map showing how the night sky and stars were aligned on the exact day you met.",
        desc_bn: "আপনাদের জীবনের বিশেষ দিনটিতে আকাশের তারামণ্ডল কেমন ছিল তার নিখুঁত স্টার ম্যাপ ডিজাইন।",
        image: "assets/frames/frame-03.jpg"
    },
    {
        id: "frame-04",
        title: "Luxury Golden Floral Monogram",
        title_bn: "লাক্সারি গোল্ডেন ফ্লোরাল মনোগ্রাম",
        desc: "Royal couple monogram crowned with golden botanical wreaths and high-end typographic styling.",
        desc_bn: "দম্পতির আদ্যক্ষর ও রাজকীয় সোনালী ফ্লোরাল বর্ডারে সাজানো এলিগ্যান্ট ফ্রেম ডিজাইন।",
        image: "assets/frames/frame-04.jpg"
    },
    {
        id: "frame-05",
        title: "Aesthetic Film Strip Story Frame",
        title_bn: "ফিল্ম স্ট্রিপ সিনেমাটিক ফ্রেম",
        desc: "Vintage film roll aesthetic featuring your journey pictures and favorite song lyrics at the base.",
        desc_bn: "মুভি রিল স্টাইলের স্মৃতিফ্রেম সাথে আপনার পছন্দের গানের কলি ও ডেডিকেশন মেসেজ।",
        image: "assets/frames/frame-05.jpg"
    },
    {
        id: "frame-06",
        title: "Heartfelt Typography Keepsake",
        title_bn: "লাভ নোট টাইপোগ্রাফি ফ্রেম",
        desc: "A timeless designer letter layout immortalizing your personal promise and wishes in high resolution.",
        desc_bn: "আপনার মনের ভালোবাসার চিঠিটি বাঁধিয়ে রাখার মতো সুন্দর টাইপোগ্রাফি আর্ট ফরম্যাটে।",
        image: "assets/frames/frame-06.jpg"
    }
];


/* =========================================================
   3. SMART IMAGE LOADER & EXTENSION FALLBACK
   (Automatically tries .png, .jpeg, .webp, .JPG, .PNG if .jpg fails)
========================================================= */
function handleImageError(img) {
    if (!img) return;

    const rawSrc = img.getAttribute("src") || "";
    if (!rawSrc || rawSrc.includes("placeholder.jpg")) return;

    // Clean any query string or hash
    const cleanSrc = rawSrc.split("?")[0].split("#")[0];

    // Candidate extensions to automatically cycle through
    const EXTENSIONS = [".png", ".jpeg", ".webp", ".jpg.png", ".jpg.jpg", ".JPG", ".PNG", ".JPEG", ".WEBP", ".jpg"];

    const lastDotIndex = cleanSrc.lastIndexOf(".");
    if (lastDotIndex === -1) {
        img.onerror = null;
        img.src = "assets/placeholder.jpg";
        return;
    }

    const basePath = cleanSrc.substring(0, lastDotIndex);
    const currentExt = cleanSrc.substring(lastDotIndex);

    let attemptIndex = parseInt(img.dataset.extAttempt || "0", 10);
    const tried = (img.dataset.triedExts || currentExt).split(",");

    let nextExt = null;
    while (attemptIndex < EXTENSIONS.length) {
        const candidate = EXTENSIONS[attemptIndex];
        attemptIndex++;
        if (!tried.includes(candidate)) {
            nextExt = candidate;
            break;
        }
    }

    if (nextExt) {
        img.dataset.extAttempt = attemptIndex;
        img.dataset.triedExts = tried.concat(nextExt).join(",");
        img.src = basePath + nextExt;
    } else {
        img.onerror = null;
        img.src = "assets/placeholder.jpg";
        console.warn(`[OopsWish Image Loader] Image not found at "${basePath}" with any common extension (.jpg, .png, .jpeg, .webp). Falling back to placeholder.`);
    }
}
window.handleImageError = handleImageError;


/* =========================================================
   4. STATE MANAGEMENT
========================================================= */
let currentLanguage = "bn";
let selectedCategory = "all";
let selectedTier = "all";
let currentMobilePage = 1;
const ITEMS_PER_PAGE_MOBILE = 9;


/* =========================================================
   5. APPLICATION INITIALIZATION
========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    initNavbar();
    initScrollSpy();
    initLanguage();
    initSamples();
    initSampleFilters();
    initRevolvingFrames();
    initFrameLightbox();
    initOrderForm();
    initCategorySelection();
    initBackToTop();
    initSmoothScrolling();
    initFAQ();
});


/* =========================================================
   6. NAVBAR & MOBILE DRAWER (SMOOTH & USER FRIENDLY)
========================================================= */
function initNavbar() {
    const header = document.getElementById("site-header");
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Header shadow on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }
    }, { passive: true });

    if (!menuButton || !navLinks) return;

    // Toggle menu
    function toggleMenu() {
        const isOpen = navLinks.classList.toggle("open");
        menuButton.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.classList.toggle("menu-open", isOpen);
    }

    function closeMenu() {
        navLinks.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    }

    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            closeMenu();
        });
    });

    // Close when clicking outside on mobile
    document.addEventListener("click", function (event) {
        if (
            navLinks.classList.contains("open") &&
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && navLinks.classList.contains("open")) {
            closeMenu();
        }
    });
}


/* =========================================================
   7. SCROLLSPY (ACTIVE NAV LINK HIGHLIGHT)
========================================================= */
function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links .nav-link");

    if (!sections.length || !navLinks.length) return;

    function onScroll() {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
}


/* =========================================================
   8. LANGUAGE SWITCH (ENGLISH / বাংলা)
========================================================= */
function initLanguage() {
    const languageButton = document.getElementById("language-toggle");
    if (!languageButton) return;

    // Set initial button text and apply default language
    languageButton.textContent = currentLanguage === "bn" ? "English" : "বাংলা";
    updatePageLanguage();

    languageButton.addEventListener("click", function () {
        if (currentLanguage === "bn") {
            currentLanguage = "en";
            languageButton.textContent = "বাংলা";
        } else {
            currentLanguage = "bn";
            languageButton.textContent = "English";
        }

        updatePageLanguage();
        renderSamples();
        renderRevolvingFrames();
    });
}

function updatePageLanguage() {
    const elements = document.querySelectorAll("[data-en][data-bn]");
    elements.forEach(function (element) {
        const text = currentLanguage === "bn"
            ? element.getAttribute("data-bn")
            : element.getAttribute("data-en");

        if (text) {
            element.textContent = text;
        }
    });
}


/* =========================================================
   9. SAMPLE TEMPLATES (CATEGORY & TIER FILTERS + MOBILE 9-ITEM LIMIT)
========================================================= */
function initSamples() {
    renderSamples();
}

function updateTierCountBadges() {
    const cat = selectedCategory.toLowerCase();
    const isAll = cat === "all";

    const allCount = isAll ? 27 : 9;
    const basicCount = isAll ? 9 : 3;
    const premiumCount = isAll ? 9 : 3;
    const proCount = isAll ? 9 : 3;

    const bAll = document.getElementById("badge-all");
    const bBasic = document.getElementById("badge-basic");
    const bPremium = document.getElementById("badge-premium");
    const bPro = document.getElementById("badge-pro");

    if (bAll) bAll.textContent = allCount;
    if (bBasic) bBasic.textContent = basicCount;
    if (bPremium) bPremium.textContent = premiumCount;
    if (bPro) bPro.textContent = proCount;
}

function renderSamples() {
    const container = document.getElementById("sample-grid");
    const countElement = document.getElementById("template-count");
    const paginationContainer = document.getElementById("sample-pagination");
    if (!container) return;

    container.innerHTML = "";

    // Apply combined filter (Category + Package Tier)
    const filteredSamples = SAMPLE_TEMPLATES.filter(function (s) {
        const matchCategory =
            selectedCategory === "all" ||
            s.category.toLowerCase() === selectedCategory.toLowerCase();

        const matchTier =
            selectedTier === "all" ||
            s.tier.toLowerCase() === selectedTier.toLowerCase();

        return matchCategory && matchTier;
    });

    updateTierCountBadges();

    const isMobile = window.innerWidth <= 680;
    const totalMatching = filteredSamples.length;
    let displaySamples = filteredSamples;

    // Mobile Friendly Rule: No more than 9 templates visible together at once
    if (isMobile && totalMatching > ITEMS_PER_PAGE_MOBILE) {
        const totalPages = Math.ceil(totalMatching / ITEMS_PER_PAGE_MOBILE);
        if (currentMobilePage > totalPages) {
            currentMobilePage = 1;
        }

        const startIndex = (currentMobilePage - 1) * ITEMS_PER_PAGE_MOBILE;
        const endIndex = Math.min(startIndex + ITEMS_PER_PAGE_MOBILE, totalMatching);
        displaySamples = filteredSamples.slice(startIndex, endIndex);

        if (countElement) {
            if (currentLanguage === "bn") {
                countElement.textContent = `মোট ${totalMatching}টির মধ্যে ${startIndex + 1}–${endIndex}টি প্রদর্শিত হচ্ছে (পেজ ${currentMobilePage}/${totalPages})`;
            } else {
                countElement.textContent = `Showing ${startIndex + 1}–${endIndex} of ${totalMatching} templates (Page ${currentMobilePage} of ${totalPages})`;
            }
        }

        renderPagination(totalPages, paginationContainer);
    } else {
        currentMobilePage = 1;
        if (paginationContainer) paginationContainer.innerHTML = "";

        if (countElement) {
            if (totalMatching === 0) {
                countElement.textContent = "";
            } else if (currentLanguage === "bn") {
                countElement.textContent = `মোট ${totalMatching}টি টেমপ্লেট প্রদর্শিত হচ্ছে`;
            } else {
                countElement.textContent = `Showing ${totalMatching} templates`;
            }
        }
    }

    if (totalMatching === 0) {
        const emptyMsg = currentLanguage === "bn"
            ? "এই ফিল্টারে কোনো টেমপ্লেট পাওয়া যায়নি।"
            : "No templates match this filter combination.";
        container.innerHTML = `
            <div class="empty-samples">
                <p>${emptyMsg}</p>
            </div>
        `;
        return;
    }

    displaySamples.forEach(function (sample) {
        const card = document.createElement("article");
        card.className = "sample-card";

        const viewBtnText = currentLanguage === "bn" ? "টেমপ্লেট দেখুন ↗" : "View Template ↗";
        const orderBtnText = currentLanguage === "bn" ? "অর্ডার করুন 🚀" : "Order Now 🚀";

        const tierIcon =
            sample.tier === "Basic"
                ? "🟢"
                : sample.tier === "Premium"
                    ? "⭐"
                    : "👑";

        const tierClass = "tier-tag-" + sample.tier.toLowerCase();

        card.innerHTML = `
            <div class="sample-image-wrapper">
                <img
                    src="${sample.image}"
                    alt="${sample.title}"
                    class="sample-image"
                    loading="lazy"
                    onerror="handleImageError(this)"
                >
                <span class="sample-tier-badge ${tierClass}">
                    ${tierIcon} ${sample.tier}
                </span>
            </div>

            <div class="sample-content">
                <span class="sample-category">
                    ${sample.category}
                </span>

                <h3>
                    ${sample.title}
                </h3>

                <div class="sample-footer">
                    <strong>
                        ${sample.price}
                    </strong>

                    <div class="sample-btn-group">
                        <a
                            href="${sample.link}"
                            class="small-btn view-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View ${sample.title}"
                        >
                            ${viewBtnText}
                        </a>

                        <button
                            type="button"
                            class="small-btn order-card-btn"
                            data-category="${sample.category}"
                            data-tier="${sample.tier}"
                            aria-label="Order ${sample.title}"
                        >
                            ${orderBtnText}
                        </button>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // Handle template view buttons (external link or preview fallback if #)
    container.querySelectorAll(".view-btn").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (!href || href === "#") {
                e.preventDefault();
                const card = this.closest(".sample-card");
                const img = card?.querySelector(".sample-image")?.getAttribute("src");
                const title = card?.querySelector("h3")?.textContent?.trim() || "";
                if (img) {
                    openFrameLightbox({
                        image: img,
                        title: title,
                        title_bn: title,
                        desc: "Live website link is being set up. You can order this design directly now!",
                        desc_bn: "এই সারপ্রাইজ ওয়েবসাইট ডিজাইনটির লাইভ ডেমো লিংক শিগগিরই যুক্ত হচ্ছে। আপনি এখনই সরাসরি এটি অর্ডার করতে পারেন!"
                    });
                }
            }
        });
    });

    // Handle order card buttons to jump to order form
    container.querySelectorAll(".order-card-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            if (category) {
                const select = document.getElementById("surprise-type");
                if (select) select.value = category;
            }
            const orderSec = document.getElementById("order");
            if (orderSec) {
                const headerOffset = document.getElementById("site-header")?.offsetHeight || 72;
                const pos = orderSec.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                window.scrollTo({ top: pos, behavior: "smooth" });
            }
        });
    });
}

function renderPagination(totalPages, container) {
    if (!container) return;
    container.innerHTML = "";

    const prevText = currentLanguage === "bn" ? "‹ পূর্ববর্তী" : "‹ Prev";
    const nextText = currentLanguage === "bn" ? "পরবর্তী ›" : "Next ›";

    const nav = document.createElement("div");
    nav.className = "pagination-buttons";

    // Previous Button
    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "page-btn page-nav-btn" + (currentMobilePage === 1 ? " disabled" : "");
    prevBtn.disabled = currentMobilePage === 1;
    prevBtn.textContent = prevText;
    prevBtn.setAttribute("aria-label", "Previous page");
    prevBtn.addEventListener("click", function () {
        if (currentMobilePage > 1) {
            currentMobilePage--;
            renderSamples();
            scrollToTemplatesTop();
        }
    });
    nav.appendChild(prevBtn);

    // Page Number Buttons
    for (let p = 1; p <= totalPages; p++) {
        const pageBtn = document.createElement("button");
        pageBtn.type = "button";
        pageBtn.className = "page-btn page-num-btn" + (p === currentMobilePage ? " active" : "");
        pageBtn.textContent = p;
        pageBtn.setAttribute("aria-label", `Page ${p}`);
        pageBtn.addEventListener("click", function () {
            if (p !== currentMobilePage) {
                currentMobilePage = p;
                renderSamples();
                scrollToTemplatesTop();
            }
        });
        nav.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "page-btn page-nav-btn" + (currentMobilePage === totalPages ? " disabled" : "");
    nextBtn.disabled = currentMobilePage === totalPages;
    nextBtn.textContent = nextText;
    nextBtn.setAttribute("aria-label", "Next page");
    nextBtn.addEventListener("click", function () {
        if (currentMobilePage < totalPages) {
            currentMobilePage++;
            renderSamples();
            scrollToTemplatesTop();
        }
    });
    nav.appendChild(nextBtn);

    container.appendChild(nav);
}

function scrollToTemplatesTop() {
    const templatesSec = document.getElementById("templates");
    if (templatesSec) {
        const headerOffset = document.getElementById("site-header")?.offsetHeight || 72;
        const pos = templatesSec.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: pos, behavior: "smooth" });
    }
}


/* =========================================================
   10. SAMPLE FILTER HANDLERS (CATEGORY & TIER SELECTION)
========================================================= */
function initSampleFilters() {
    // 1. Category Filter Buttons
    const categoryButtons = document.querySelectorAll(".filter-btn");
    categoryButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            categoryButtons.forEach(function (btn) {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-selected", "true");

            selectedCategory = button.getAttribute("data-filter") || "all";
            currentMobilePage = 1;
            renderSamples();
        });
    });

    // 2. Package Tier Sub-filter Buttons
    const tierButtons = document.querySelectorAll(".tier-btn");
    tierButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            tierButtons.forEach(function (btn) {
                btn.classList.remove("active");
                btn.setAttribute("aria-selected", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-selected", "true");

            selectedTier = button.getAttribute("data-tier") || "all";
            currentMobilePage = 1;
            renderSamples();
        });
    });

    // 3. Responsive resize listener for mobile 9-item boundary
    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            renderSamples();
        }, 150);
    }, { passive: true });
}


/* =========================================================
   11. REVOLVING CIRCLE SHOWCASE (SMOOTH 60FPS + SWIPE/DRAG)
========================================================= */
let orbitAngle = 0;
let isOrbitPaused = false;
let orbitAnimationId = null;
let lastFrameTimestamp = performance.now();
const ORBIT_SPEED = 14; // Degrees per second (silky smooth)

// Interactive touch / drag variables
let isDraggingOrbit = false;
let dragStartX = 0;
let dragStartAngle = 0;
let hasDragged = false;
let autoResumeTimeout = null;

function initRevolvingFrames() {
    renderRevolvingFrames();
    startOrbitLoop();
    initOrbitDragAndControls();
}

function renderRevolvingFrames() {
    const container = document.getElementById("orbit-items-container");
    if (!container) return;

    container.innerHTML = "";

    FRAME_DESIGNS.forEach(function (frame, index) {
        const card = document.createElement("div");
        card.className = "revolving-frame-card";
        card.setAttribute("data-frame-index", index);
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `View ${frame.title}`);

        const title = currentLanguage === "bn" ? frame.title_bn : frame.title;

        card.innerHTML = `
            <div class="frame-thumb-box">
                <img
                    src="${frame.image}"
                    alt="${title}"
                    class="frame-thumb-img"
                    loading="lazy"
                    onerror="handleImageError(this)"
                >
                <div class="frame-zoom-badge">🔍 Click to Enlarge</div>
            </div>
            <span class="frame-card-title">${title}</span>
        `;

        card.addEventListener("click", function () {
            // Only trigger click if user didn't perform a drag gesture
            if (!hasDragged) {
                openFrameLightbox(frame);
            }
        });

        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openFrameLightbox(frame);
            }
        });

        container.appendChild(card);
    });

    updateOrbitCardPositions();
}

function startOrbitLoop() {
    lastFrameTimestamp = performance.now();

    function loop(currentTimestamp) {
        // Delta time for smooth, display-refresh independent motion (60Hz/120Hz)
        const deltaSeconds = Math.min((currentTimestamp - lastFrameTimestamp) / 1000, 0.1);
        lastFrameTimestamp = currentTimestamp;

        if (!isOrbitPaused && !isDraggingOrbit) {
            orbitAngle = (orbitAngle + (ORBIT_SPEED * deltaSeconds)) % 360;
            updateOrbitCardPositions();
        }

        orbitAnimationId = requestAnimationFrame(loop);
    }

    if (orbitAnimationId) {
        cancelAnimationFrame(orbitAnimationId);
    }

    orbitAnimationId = requestAnimationFrame(loop);
}

function updateOrbitCardPositions() {
    const cards = document.querySelectorAll(".revolving-frame-card");
    if (!cards.length) return;

    const total = cards.length;
    const isSmallMobile = window.innerWidth <= 380;
    const isMobile = window.innerWidth <= 680 && !isSmallMobile;
    const isTablet = window.innerWidth <= 992 && !isMobile && !isSmallMobile;

    const radius = isSmallMobile ? 96 : isMobile ? 125 : isTablet ? 175 : 225;

    cards.forEach(function (card, index) {
        const cardAngleDeg = (orbitAngle + (index * (360 / total))) % 360;
        const cardAngleRad = cardAngleDeg * (Math.PI / 180);

        const x = Math.cos(cardAngleRad) * radius;
        const y = Math.sin(cardAngleRad) * (radius * 0.7);

        const depthRatio = (Math.sin(cardAngleRad) + 1) / 2;
        const scale = 0.82 + (depthRatio * 0.28);
        const zIndex = Math.round(depthRatio * 50) + 10;
        const opacity = 0.75 + (depthRatio * 0.25);

        // Hardware-accelerated 3D transform
        card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        card.style.zIndex = zIndex;
        card.style.opacity = opacity;
    });
}

function initOrbitDragAndControls() {
    const stage = document.getElementById("revolving-stage");
    const pauseBtn = document.getElementById("orbit-pause-btn");
    const prevBtn = document.getElementById("orbit-prev-btn");
    const nextBtn = document.getElementById("orbit-next-btn");

    if (!stage) return;

    // --- Mouse & Touch Drag Support ---
    function onDragStart(clientX) {
        isDraggingOrbit = true;
        hasDragged = false;
        dragStartX = clientX;
        dragStartAngle = orbitAngle;
        stage.classList.add("grabbing");

        if (autoResumeTimeout) {
            clearTimeout(autoResumeTimeout);
        }
    }

    function onDragMove(clientX) {
        if (!isDraggingOrbit) return;

        const deltaX = clientX - dragStartX;
        if (Math.abs(deltaX) > 6) {
            hasDragged = true;
        }

        // Adjust rotation angle proportionally
        const sensitivity = 0.35;
        orbitAngle = (dragStartAngle + (deltaX * sensitivity) + 3600) % 360;
        updateOrbitCardPositions();
    }

    function onDragEnd() {
        if (!isDraggingOrbit) return;
        isDraggingOrbit = false;
        stage.classList.remove("grabbing");

        // Temporarily keep auto-spin paused after user drag, then resume
        autoResumeTimeout = setTimeout(function () {
            hasDragged = false;
        }, 1200);
    }

    // Touch events (Mobile)
    stage.addEventListener("touchstart", function (e) {
        if (e.touches.length === 1) {
            onDragStart(e.touches[0].clientX);
        }
    }, { passive: true });

    window.addEventListener("touchmove", function (e) {
        if (isDraggingOrbit && e.touches.length === 1) {
            onDragMove(e.touches[0].clientX);
        }
    }, { passive: true });

    window.addEventListener("touchend", onDragEnd, { passive: true });

    // Mouse events (Desktop)
    stage.addEventListener("mousedown", function (e) {
        if (e.button === 0) { // Left click
            onDragStart(e.clientX);
        }
    });

    window.addEventListener("mousemove", function (e) {
        if (isDraggingOrbit) {
            onDragMove(e.clientX);
        }
    });

    window.addEventListener("mouseup", onDragEnd);

    // Hover Pause on desktop
    stage.addEventListener("mouseenter", function () {
        isOrbitPaused = true;
    });

    stage.addEventListener("mouseleave", function () {
        if (!isDraggingOrbit) {
            isOrbitPaused = false;
        }
    });

    // Control Buttons
    if (pauseBtn) {
        pauseBtn.addEventListener("click", function () {
            isOrbitPaused = !isOrbitPaused;
            pauseBtn.textContent = isOrbitPaused ? "▶️" : "⏸️";
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            orbitAngle = (orbitAngle - 60 + 360) % 360;
            updateOrbitCardPositions();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            orbitAngle = (orbitAngle + 60) % 360;
            updateOrbitCardPositions();
        });
    }

    // Resize listener for responsive layout
    window.addEventListener("resize", function () {
        updateOrbitCardPositions();
    }, { passive: true });
}


/* =========================================================
   12. FRAME LIGHTBOX MODAL
========================================================= */
function initFrameLightbox() {
    const modal = document.getElementById("frame-lightbox-modal");
    const closeBtn = document.getElementById("lightbox-close-btn");
    const dismissBtn = document.getElementById("lightbox-dismiss-btn");
    const orderBtn = document.getElementById("lightbox-order-btn");

    function closeLightbox() {
        if (modal) {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
            document.body.classList.remove("menu-open");
        }
    }

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (dismissBtn) dismissBtn.addEventListener("click", closeLightbox);

    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                closeLightbox();
            }
        });
    }

    if (orderBtn) {
        orderBtn.addEventListener("click", function () {
            closeLightbox();
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal?.classList.contains("open")) {
            closeLightbox();
        }
    });
}

function openFrameLightbox(frame) {
    const modal = document.getElementById("frame-lightbox-modal");
    const img = document.getElementById("lightbox-image");
    const title = document.getElementById("lightbox-title");
    const desc = document.getElementById("lightbox-desc");

    if (!modal || !frame) return;

    if (img) {
        img.dataset.extAttempt = "0";
        img.dataset.triedExts = "";
        img.onerror = function() {
            handleImageError(this);
        };
        img.src = frame.image;
        img.alt = currentLanguage === "bn" ? frame.title_bn : frame.title;
    }

    if (title) {
        title.textContent = currentLanguage === "bn" ? frame.title_bn : frame.title;
    }

    if (desc) {
        desc.textContent = currentLanguage === "bn" ? frame.desc_bn : frame.desc;
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
}


/* =========================================================
   13. CATEGORY PRE-SELECTION
========================================================= */
function initCategorySelection() {
    document.querySelectorAll(".product-order-btn, .pricing-order-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            if (category) {
                const selectElement = document.getElementById("surprise-type");
                if (selectElement) {
                    selectElement.value = category;
                }
            }
        });
    });
}


/* =========================================================
   14. ORDER FORM SUBMISSION
========================================================= */
function initOrderForm() {
    const form = document.getElementById("surprise-order-form");
    if (!form) return;

    // Live validation error clearing on input/change
    const inputsToWatch = [
        { id: "customer-name", errorId: "customerName" },
        { id: "customer-whatsapp", errorId: "customerWhatsApp" },
        { id: "surprise-type", errorId: "surpriseType", event: "change" },
        { id: "recipient-name", errorId: "recipientName" }
    ];

    inputsToWatch.forEach(function (item) {
        const elem = document.getElementById(item.id);
        if (elem) {
            elem.addEventListener(item.event || "input", function () {
                const errorElement = document.getElementById(item.errorId + "-error");
                if (errorElement) {
                    errorElement.textContent = "";
                    errorElement.classList.remove("visible");
                }
                elem.classList.remove("is-invalid");
            });
        }
    });

    // WhatsApp Fallback Button
    const whatsappButton = document.getElementById("notice-whatsapp-btn");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", function () {
            sendOrderByWhatsApp();
        });
    }

    // Success Modal Close Handlers
    const successModal = document.getElementById("order-success-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    if (modalCloseBtn && successModal) {
        modalCloseBtn.addEventListener("click", closeSuccessModal);
        successModal.addEventListener("click", function (event) {
            if (event.target === successModal) {
                closeSuccessModal();
            }
        });
    }

    // Form Submit Event
    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        clearFormErrors();

        const customerName = document.getElementById("customer-name")?.value.trim() || "";
        const whatsapp = document.getElementById("customer-whatsapp")?.value.trim() || "";
        const email = document.getElementById("customer-email")?.value.trim() || "";
        const surpriseType = document.getElementById("surprise-type")?.value || "";
        const recipientName = document.getElementById("recipient-name")?.value.trim() || "";
        const relationship = document.getElementById("relationship")?.value || "";

        // Form Validation
        let valid = true;

        if (!customerName) {
            showFieldError("customerName", "Please enter your name.");
            valid = false;
        }

        if (!whatsapp || whatsapp.length < 9) {
            showFieldError("customerWhatsApp", "Please enter a valid WhatsApp number.");
            valid = false;
        }

        if (!surpriseType) {
            showFieldError("surpriseType", "Please select a surprise type.");
            valid = false;
        }

        // recipientName is optional

        if (!valid) return;

        const orderData = {
            customerName: customerName,
            customerWhatsApp: whatsapp,
            whatsapp: whatsapp,
            customerEmail: email,
            email: email,
            surpriseType: surpriseType,
            recipientName: recipientName || "Not provided",
            relationship: relationship || "Not provided"
        };

        // Fallback if Google Script URL is unset
        if (!CONFIG.googleScriptUrl || CONFIG.googleScriptUrl === "YOUR_GOOGLE_APPS_SCRIPT_URL") {
            sendOrderByWhatsApp();
            return;
        }

        setFormLoading(true);

        try {
            const response = await fetch(CONFIG.googleScriptUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(orderData)
            });

            let result;
            try {
                result = await response.json();
            } catch (jsonError) {
                console.warn("Could not parse JSON response:", jsonError);
                showGenericSuccess();
                return;
            }

            if (result && (result.success === true || result.status === "success")) {
                const officialOrderId = result.orderId;
                showOrderSuccess(officialOrderId);
                form.reset();
            } else {
                throw new Error(result?.error || result?.message || "Order submission failed.");
            }

        } catch (error) {
            console.error("Order submission error:", error);
            alert("We couldn't submit your order automatically. Please order directly on WhatsApp.");
            sendOrderByWhatsApp();
        } finally {
            setFormLoading(false);
        }
    });
}


/* =========================================================
   15. FORM VALIDATION HELPERS
========================================================= */
function showFieldError(fieldName, message) {
    const errorElement = document.getElementById(fieldName + "-error");
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add("visible");
    }

    const fieldMap = {
        customerName: "customer-name",
        customerWhatsApp: "customer-whatsapp",
        surpriseType: "surprise-type",
        recipientName: "recipient-name"
    };

    const fieldId = fieldMap[fieldName];
    if (fieldId) {
        const field = document.getElementById(fieldId);
        field?.classList.add("is-invalid");
    }
}

function clearFormErrors() {
    document.querySelectorAll(".form-error").forEach(function (element) {
        element.textContent = "";
        element.classList.remove("visible");
    });

    document.querySelectorAll(".form-control").forEach(function (element) {
        element.classList.remove("is-invalid");
    });
}

function setFormLoading(isLoading) {
    const button = document.getElementById("submit-order-btn");
    if (!button) return;

    const normalText = button.querySelector(".submit-text");
    const loadingText = button.querySelector(".submit-loading");

    if (isLoading) {
        button.disabled = true;
        button.classList.add("loading");
        if (normalText) normalText.hidden = true;
        if (loadingText) loadingText.hidden = false;
    } else {
        button.disabled = false;
        button.classList.remove("loading");
        if (normalText) normalText.hidden = false;
        if (loadingText) loadingText.hidden = true;
    }
}


/* =========================================================
   16. ORDER SUCCESS MODAL
========================================================= */
function showOrderSuccess(orderId) {
    const modal = document.getElementById("order-success-modal");
    const orderIdElement = document.getElementById("success-order-id");
    const whatsappBtn = document.getElementById("modal-whatsapp-btn");

    const id = orderId || "OW-" + Math.floor(100000 + Math.random() * 900000);

    if (orderIdElement) {
        orderIdElement.textContent = id;
    }

    if (whatsappBtn) {
        const msg = encodeURIComponent(`Hello OopsWish! 🎁\nI just placed an order on your website.\nOrder ID: ${id}\nPlease let me know how to send photos & song!`);
        whatsappBtn.href = `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, "")}?text=${msg}`;
    }

    if (modal) {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("menu-open");
    }
}

function showGenericSuccess() {
    showOrderSuccess("OW-" + Math.floor(100000 + Math.random() * 900000));
    document.getElementById("surprise-order-form")?.reset();
}

function closeSuccessModal() {
    const modal = document.getElementById("order-success-modal");
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
}


/* =========================================================
   17. DIRECT WHATSAPP ORDER
========================================================= */
function sendOrderByWhatsApp() {
    const phone = CONFIG.whatsapp.replace(/\D/g, "");
    const customerName = document.getElementById("customer-name")?.value.trim() || "Not provided";
    const whatsapp = document.getElementById("customer-whatsapp")?.value.trim() || "Not provided";
    const email = document.getElementById("customer-email")?.value.trim() || "Not provided";
    const surpriseType = document.getElementById("surprise-type")?.value || "Not selected";
    const recipientName = document.getElementById("recipient-name")?.value.trim() || "Not provided";
    const relationship = document.getElementById("relationship")?.value || "Not provided";

    const message = `Hello OopsWish! 🎁
I want to place an order for a surprise website.

Customer Name: ${customerName}
WhatsApp: ${whatsapp}
Email: ${email}
Surprise Type: ${surpriseType}
Recipient Name: ${recipientName}
Relationship: ${relationship}`;

    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank", "noopener,noreferrer");
}


/* =========================================================
   18. BACK TO TOP
========================================================= */
function initBackToTop() {
    const button = document.getElementById("back-to-top");
    if (!button) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            button.classList.add("show");
        } else {
            button.classList.remove("show");
        }
    }, { passive: true });

    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =========================================================
   19. SMOOTH SCROLLING WITH NAVBAR OFFSET
========================================================= */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();

            const headerOffset = document.getElementById("site-header")?.offsetHeight || 72;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
}


/* =========================================================
   20. FAQ ACCORDION (SINGLE ITEM OPEN)
========================================================= */
function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(function (item) {
        item.addEventListener("toggle", function () {
            if (item.open) {
                faqItems.forEach(function (otherItem) {
                    if (otherItem !== item) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });
}
