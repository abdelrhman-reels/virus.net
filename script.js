"use strict";

// Toggle this to hide/show the admin add-item form
const ENABLE_ADD_FORM = true;

const LANG_KEY = "virus-lang";
const LOCAL_ITEMS_KEY = "virus-local-items";

const translations = {
  en: {
    nav_home: "Home",
    nav_menu: "Menu",
    nav_branches: "Branches",
    nav_contact: "Contact",
    hero_tag: "Fiber speed • Gaming rigs • Cozy lounge",
    hero_sub: "High Speed • Pro Gaming • Ultimate Café Experience",
    hero_whatsapp: "Chat on WhatsApp",
    chip_ping: "Low ping",
    chip_wifi: "Wi‑Fi 6 / LAN",
    chip_hours: "24/7 open",
    card_live: "Live status",
    card_ping: "Ping",
    card_seats: "Gaming seats",
    card_open: "Open",
    menu_tag: "Menu",
    menu_title: "Fuel your session",
    menu_sub: "Switch categories or search. View details for ingredients and prices.",
    search_placeholder: "Search menu...",
    menu_note: "Note: Viewing only. Order in-store or via our social channels.",
    admin_tag: "Admin",
    admin_title: "Add new item",
    admin_sub: "Local-only demo form. Data is saved in your browser storage.",
    admin_hint: "Tip: Use unique image file names and place them in /images.",
    field_category: "Category",
    field_price: "Price (EGP)",
    field_name_en: "Name (EN)",
    field_name_ar: "Name (AR)",
    field_desc_en: "Description (EN)",
    field_desc_ar: "Description (AR)",
    field_image: "Image path (e.g., images/new_item.jpg)",
    btn_add_item: "Add Item",
    btn_reset_items: "Reset Local Items",
    branches_tag: "Branches",
    branches_title: "Find your hub",
    branches_sub: "Addresses open Google Maps in a new tab.",
    branch_address: "Cairo, Egypt",
    btn_open_map: "Open Location",
    contact_tag: "Contact",
    contact_title: "Reach us fast",
    contact_sub: "WhatsApp and Facebook are the fastest ways to talk.",
    btn_whatsapp1: "WhatsApp +20 12 81898969",
    btn_whatsapp2: "WhatsApp +201020353245",
    btn_facebook: "Facebook Page",
    contact_facts: "Quick facts",
    fact_open: "Open",
    fact_wifi: "Wi‑Fi",
    fact_perks: "Perks",
    fact_support: "Support",
    btn_back_top: "Back to top",
    view_details: "View Details",
    price_label: "Price",
    modal_close: "Close",
    category_hot: "Hot Drinks",
    category_cold: "Cold Drinks",
    category_waffles: "Waffles",
    category_milkshakes: "Milkshakes",
    category_energy: "Energy Drinks",
    category_healthy: "Healthy Drinks",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_menu: "القائمة",
    nav_branches: "الفروع",
    nav_contact: "تواصل",
    hero_tag: "سرعة فايبر • أجهزة ألعاب • لاونج مريح",
    hero_sub: "سرعة عالية • محترفو الألعاب • تجربة كافيه مثالية",
    hero_whatsapp: "تحدث عبر واتساب",
    chip_ping: "بنغ منخفض",
    chip_wifi: "واي فاي 6 / كابل",
    chip_hours: "مفتوح 24/7",
    card_live: "حالة مباشرة",
    card_ping: "البنغ",
    card_seats: "أجهزة الألعاب",
    card_open: "مفتوح",
    menu_tag: "القائمة",
    menu_title: "اشحن جلسة اللعب",
    menu_sub: "بدّل التصنيفات أو ابحث. التفاصيل تعرض المكونات والأسعار.",
    search_placeholder: "ابحث في القائمة...",
    menu_note: "ملاحظة: عرض فقط. الطلب داخل الكافيه أو عبر السوشيال.",
    admin_tag: "الإدارة",
    admin_title: "إضافة صنف جديد",
    admin_sub: "نموذج محلي فقط. البيانات تحفظ في متصفحك.",
    admin_hint: "نصيحة: استخدم أسماء صور فريدة وضعها في مجلد images/.",
    field_category: "التصنيف",
    field_price: "السعر (جنيه)",
    field_name_en: "الاسم (إنجليزي)",
    field_name_ar: "الاسم (عربي)",
    field_desc_en: "الوصف (إنجليزي)",
    field_desc_ar: "الوصف (عربي)",
    field_image: "مسار الصورة (مثال: images/new_item.jpg)",
    btn_add_item: "إضافة الصنف",
    btn_reset_items: "مسح الأصناف المحلية",
    branches_tag: "الفروع",
    branches_title: "اختر أقرب فرع",
    branches_sub: "العناوين تفتح خرائط جوجل في نافذة جديدة.",
    branch_address: "القاهرة، مصر",
    btn_open_map: "فتح الموقع",
    contact_tag: "تواصل",
    contact_title: "تواصل بسرعة",
    contact_sub: "واتساب وفيسبوك أسرع طرق التواصل.",
    btn_whatsapp1: "واتساب +20 12 81898969",
    btn_whatsapp2: "واتساب +201020353245",
    btn_facebook: "صفحة فيسبوك",
    contact_facts: "معلومات سريعة",
    fact_open: "مفتوح",
    fact_wifi: "واي فاي",
    fact_perks: "مزايا",
    fact_support: "دعم",
    btn_back_top: "إلى الأعلى",
    view_details: "التفاصيل",
    price_label: "السعر",
    modal_close: "إغلاق",
    category_hot: "مشروبات ساخنة",
    category_cold: "مشروبات باردة",
    category_waffles: "وافل",
    category_milkshakes: "ميلك شيك",
    category_energy: "مشروبات طاقة",
    category_healthy: "مشروبات صحية",
  },
};

const categoryOrder = ["hot", "cold", "waffles", "milkshakes", "energy", "healthy"];

const MENU_ITEMS = [
  { id: "espresso", category: "hot", name_en: "Espresso", name_ar: "إسبريسو", desc_en: "Strong and bold shot.", desc_ar: "شوت قهوة قوي ومركز.", price: 25, image: "images/espresso.jpg" },
  { id: "cappuccino", category: "hot", name_en: "Cappuccino", name_ar: "كابتشينو", desc_en: "Creamy foam, rich taste.", desc_ar: "رغوة كريمية وطعم غني.", price: 35, image: "images/cappuccino.jpg" },
  { id: "latte", category: "hot", name_en: "Latte", name_ar: "لاتيه", desc_en: "Smooth milk coffee.", desc_ar: "قهوة بالحليب ناعمة.", price: 40, image: "images/latte.jpg" },
  { id: "hot_chocolate", category: "hot", name_en: "Hot Chocolate", name_ar: "هوت شوكليت", desc_en: "Warm chocolate comfort.", desc_ar: "شوكولاتة ساخنة مريحة.", price: 45, image: "images/hot_chocolate.jpg" },
  { id: "tea", category: "hot", name_en: "Tea", name_ar: "شاي", desc_en: "Classic black tea.", desc_ar: "شاي أسود كلاسيكي.", price: 20, image: "images/tea.jpg" },

  { id: "iced_coffee", category: "cold", name_en: "Iced Coffee", name_ar: "قهوة مثلجة", desc_en: "Chilled, refreshing.", desc_ar: "باردة ومنعشة.", price: 45, image: "images/iced_coffee.jpg" },
  { id: "iced_latte", category: "cold", name_en: "Iced Latte", name_ar: "لاتيه بارد", desc_en: "Cold milk coffee.", desc_ar: "قهوة بالحليب باردة.", price: 50, image: "images/iced_latte.jpg" },
  { id: "mango_juice", category: "cold", name_en: "Mango Juice", name_ar: "عصير مانجو", desc_en: "Fresh tropical taste.", desc_ar: "طعم استوائي طازج.", price: 35, image: "images/mango_juice.jpg" },
  { id: "strawberry_smoothie", category: "cold", name_en: "Strawberry Smoothie", name_ar: "سموذي فراولة", desc_en: "Fruity and thick.", desc_ar: "فواكه كثيفة ومنعشة.", price: 55, image: "images/strawberry_smoothie.jpg" },
  { id: "cola", category: "cold", name_en: "Cola", name_ar: "كولا", desc_en: "Ice-cold classic.", desc_ar: "مشروب غازي بارد.", price: 25, image: "images/cola.jpg" },

  { id: "classic_waffle", category: "waffles", name_en: "Classic Waffle", name_ar: "وافل كلاسيك", desc_en: "Crispy outside, soft inside.", desc_ar: "مقرمش من الخارج وهش من الداخل.", price: 60, image: "images/classic_waffle.jpg" },
  { id: "nutella_waffle", category: "waffles", name_en: "Nutella Waffle", name_ar: "وافل نوتيلا", desc_en: "Nutella drizzle.", desc_ar: "مغطى بنوتيلا لذيذة.", price: 80, image: "images/nutella_waffle.jpg" },
  { id: "lotus_waffle", category: "waffles", name_en: "Lotus Waffle", name_ar: "وافل لوتس", desc_en: "Biscoff / Lotus flavor.", desc_ar: "نكهة بيسكوف / لوتس.", price: 85, image: "images/lotus_waffle.jpg" },
  { id: "fruits_cream_waffle", category: "waffles", name_en: "Fruits & Cream Waffle", name_ar: "وافل فواكه وكريمة", desc_en: "Seasonal fruits + cream.", desc_ar: "فواكه موسمية مع كريمة.", price: 90, image: "images/fruits_cream_waffle.jpg" },

  { id: "vanilla_milkshake", category: "milkshakes", name_en: "Vanilla Milkshake", name_ar: "ميلك شيك فانيليا", desc_en: "Creamy vanilla.", desc_ar: "فانيليا كريمية.", price: 60, image: "images/vanilla_milkshake.jpg" },
  { id: "chocolate_milkshake", category: "milkshakes", name_en: "Chocolate Milkshake", name_ar: "ميلك شيك شوكولاتة", desc_en: "Chocolate rich shake.", desc_ar: "شوكولاتة غنية.", price: 65, image: "images/chocolate_milkshake.jpg" },
  { id: "strawberry_milkshake", category: "milkshakes", name_en: "Strawberry Milkshake", name_ar: "ميلك شيك فراولة", desc_en: "Strawberry sweet shake.", desc_ar: "فراولة حلوة.", price: 65, image: "images/strawberry_milkshake.jpg" },
  { id: "oreo_milkshake", category: "milkshakes", name_en: "Oreo Milkshake", name_ar: "ميلك شيك أوريو", desc_en: "Cookies and cream vibes.", desc_ar: "كوكيز وكريمة.", price: 75, image: "images/oreo_milkshake.jpg" },

  { id: "redbull", category: "energy", name_en: "Red Bull", name_ar: "ريد بول", desc_en: "Energy boost.", desc_ar: "دفعة طاقة.", price: 55, image: "images/redbull.jpg" },
  { id: "monster", category: "energy", name_en: "Monster", name_ar: "مونستر", desc_en: "Big can, big energy.", desc_ar: "طاقة كبيرة.", price: 65, image: "images/monster.jpg" },
  { id: "sting", category: "energy", name_en: "Sting", name_ar: "ستنغ", desc_en: "Quick energy.", desc_ar: "طاقة سريعة.", price: 35, image: "images/sting.jpg" },

  { id: "greek_yogurt_honey", category: "healthy", name_en: "Greek Yogurt + Honey", name_ar: "زبادي يوناني بالعسل", desc_en: "Protein & honey.", desc_ar: "بروتين مع عسل.", price: 55, image: "images/greek_yogurt_honey.jpg" },
  { id: "oat_milk_latte_cold", category: "healthy", name_en: "Oat Milk Latte (Cold)", name_ar: "لاتيه شوفان بارد", desc_en: "Light and healthy.", desc_ar: "خفيف وصحي.", price: 60, image: "images/oat_milk_latte_cold.jpg" },
  { id: "fresh_orange_juice", category: "healthy", name_en: "Fresh Orange Juice", name_ar: "عصير برتقال طازج", desc_en: "Vitamin C.", desc_ar: "غني بفيتامين سي.", price: 40, image: "images/fresh_orange_juice.jpg" },
  { id: "detox_mix", category: "healthy", name_en: "Detox Mix", name_ar: "ديتوكس", desc_en: "Lemon + mint style.", desc_ar: "ليمون ونعناع منعش.", price: 50, image: "images/detox_mix.jpg" },
];

const state = {
  lang: "en",
  activeCategory: "hot",
};

document.addEventListener("DOMContentLoaded", () => {
  state.lang = loadLanguage();
  applyDir();
  buildTabs();
  populateCategorySelect();
  renderMenu();
  applyTranslations();
  toggleAdminSection();
  setupListeners();
  highlightOnScroll();
  backToTopHandler();
});

function loadLanguage() {
  const stored = localStorage.getItem(LANG_KEY);
  return stored === "ar" ? "ar" : "en";
}

function saveLanguage(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

function applyDir() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", state.lang === "ar");
  const toggle = document.getElementById("langToggle");
  toggle.textContent = state.lang === "ar" ? "EN" : "AR";
}

function t(key) {
  return translations[state.lang][key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  populateCategorySelect();
  renderTabs();
  renderMenu();
}

function buildTabs() {
  const tabs = document.getElementById("menuTabs");
  tabs.innerHTML = "";
  categoryOrder.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "tab";
    btn.type = "button";
    btn.dataset.cat = cat;
    btn.textContent = categoryLabel(cat);
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", cat === state.activeCategory ? "true" : "false");
    if (cat === state.activeCategory) btn.classList.add("active");
    btn.addEventListener("click", () => {
      state.activeCategory = cat;
      renderTabs();
      renderMenu(true);
    });
    tabs.appendChild(btn);
  });
}

function renderTabs() {
  const tabs = document.querySelectorAll("#menuTabs .tab");
  tabs.forEach((btn) => {
    const cat = btn.dataset.cat;
    btn.textContent = categoryLabel(cat);
    btn.classList.toggle("active", cat === state.activeCategory);
    btn.setAttribute("aria-selected", cat === state.activeCategory ? "true" : "false");
  });
}

function getAllItems() {
  const local = loadLocalItems();
  return [...MENU_ITEMS, ...local];
}

function renderMenu(animate = false) {
  const grid = document.getElementById("menuGrid");
  if (animate) {
    grid.classList.add("animate");
    setTimeout(() => grid.classList.remove("animate"), 260);
  }
  const query = document.getElementById("menuSearch").value.trim().toLowerCase();
  const items = getAllItems().filter((item) => item.category === state.activeCategory && matchesQuery(item, query));

  grid.innerHTML = "";
  if (!items.length) {
    const msg = document.createElement("p");
    msg.className = "muted";
    msg.textContent = state.lang === "ar" ? "لا توجد أصناف مطابقة." : "No items match your search.";
    grid.appendChild(msg);
    return;
  }

  const frag = document.createDocumentFragment();
  items.forEach((item) => frag.appendChild(menuCard(item)));
  grid.appendChild(frag);
}

function matchesQuery(item, query) {
  if (!query) return true;
  const en = item.name_en.toLowerCase();
  const ar = item.name_ar.toLowerCase();
  return en.includes(query) || ar.includes(query);
}

function menuCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";
  card.innerHTML = `
    <div class="card-image">
      <img src="${item.image}" alt="${currentName(item)}">
    </div>
    <div class="card-body">
      <div class="card-top">
        <h3>${currentName(item)}</h3>
        <span class="badge">${categoryLabel(item.category)}</span>
      </div>
      <p class="muted">${currentDesc(item)}</p>
      <div class="card-bottom">
        <span class="price">${item.price} EGP</span>
        <button class="details-btn" type="button" data-id="${item.id}">${t("view_details")}</button>
      </div>
    </div>
  `;
  card.querySelector(".details-btn").addEventListener("click", () => openModal(item));
  return card;
}

function currentName(item) {
  return state.lang === "ar" ? item.name_ar : item.name_en;
}

function currentDesc(item) {
  return state.lang === "ar" ? item.desc_ar : item.desc_en;
}

function categoryLabel(cat) {
  return t(`category_${cat}`);
}

function openModal(item) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = "";
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="${currentName(item)}">
      <button class="close-modal" aria-label="${t("modal_close")}">&times;</button>
      <img src="${item.image}" alt="${currentName(item)}">
      <div class="modal-body">
        <span class="badge">${categoryLabel(item.category)}</span>
        <h3>${currentName(item)}</h3>
        <p class="muted">${currentDesc(item)}</p>
        <p class="price">${t("price_label")}: ${item.price} EGP</p>
      </div>
    </div>
  `;
  const closeBtn = overlay.querySelector(".close-modal");
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", escClose);
  root.appendChild(overlay);
  closeBtn.focus();

  function closeModal() {
    document.removeEventListener("keydown", escClose);
    overlay.remove();
  }
  function escClose(e) {
    if (e.key === "Escape") closeModal();
  }
}

function setupListeners() {
  document.getElementById("menuSearch").addEventListener("input", () => renderMenu(true));

  const langToggle = document.getElementById("langToggle");
  langToggle.addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    saveLanguage(state.lang);
    applyDir();
    applyTranslations();
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  if (ENABLE_ADD_FORM) {
    document.getElementById("addItemForm").addEventListener("submit", handleAddItem);
    document.getElementById("resetLocalBtn").addEventListener("click", resetLocalItems);
  }
}

function toggleAdminSection() {
  const admin = document.getElementById("adminPanel");
  admin.style.display = ENABLE_ADD_FORM ? "block" : "none";
}

function populateCategorySelect() {
  const select = document.getElementById("fieldCategory");
  if (!select) return;
  const currentValue = select.value;
  select.innerHTML = "";
  categoryOrder.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = categoryLabel(cat);
    select.appendChild(opt);
  });
  if (currentValue) select.value = currentValue;
}

function handleAddItem(e) {
  e.preventDefault();
  const newItem = {
    id: `local_${Date.now()}`,
    category: document.getElementById("fieldCategory").value,
    name_en: document.getElementById("fieldNameEn").value.trim(),
    name_ar: document.getElementById("fieldNameAr").value.trim(),
    desc_en: document.getElementById("fieldDescEn").value.trim(),
    desc_ar: document.getElementById("fieldDescAr").value.trim(),
    price: Number(document.getElementById("fieldPrice").value),
    image: document.getElementById("fieldImage").value.trim(),
  };

  if (!newItem.name_en || !newItem.name_ar || !newItem.desc_en || !newItem.desc_ar || !newItem.image || Number.isNaN(newItem.price)) {
    alert(state.lang === "ar" ? "أكمل جميع الحقول بشكل صحيح." : "Please complete all fields correctly.");
    return;
  }

  const locals = loadLocalItems();
  locals.push(newItem);
  localStorage.setItem(LOCAL_ITEMS_KEY, JSON.stringify(locals));
  e.target.reset();
  populateCategorySelect();
  renderMenu(true);
}

function loadLocalItems() {
  try {
    const raw = localStorage.getItem(LOCAL_ITEMS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function resetLocalItems() {
  localStorage.removeItem(LOCAL_ITEMS_KEY);
  renderMenu(true);
}

function highlightOnScroll() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const target = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (target) target.classList.add("active");
        }
      });
    },
    { threshold: 0.6 }
  );
  sections.forEach((section) => observer.observe(section));
}

function backToTopHandler() {
  const btn = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 140) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
