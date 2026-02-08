document.addEventListener("DOMContentLoaded", () => {
  const ORDER_LINK = "https://x.com/yourhandle";

  const categories = {
    hot: "Hot Drinks",
    cold: "Cold Drinks",
    waffles: "Waffles",
    milkshakes: "Milkshakes",
    energy: "Energy Drinks",
    healthy: "Healthy Drinks",
  };

  const menuItems = [
    { id: "espresso", category: categories.hot, name: "Espresso", desc: "Strong and bold shot.", price: 25, imageUrl: "https://source.unsplash.com/800x600/?espresso" },
    { id: "cappuccino", category: categories.hot, name: "Cappuccino", desc: "Creamy foam, rich taste.", price: 35, imageUrl: "https://source.unsplash.com/800x600/?cappuccino" },
    { id: "latte", category: categories.hot, name: "Latte", desc: "Smooth milk coffee.", price: 40, imageUrl: "https://source.unsplash.com/800x600/?latte-art" },
    { id: "hot-chocolate", category: categories.hot, name: "Hot Chocolate", desc: "Warm chocolate comfort.", price: 45, imageUrl: "https://source.unsplash.com/800x600/?hot-chocolate" },
    { id: "tea", category: categories.hot, name: "Tea", desc: "Classic black tea.", price: 20, imageUrl: "https://source.unsplash.com/800x600/?black-tea" },
    { id: "mocha", category: categories.hot, name: "Mocha Boost", desc: "Chocolate meets espresso.", price: 42, imageUrl: "https://source.unsplash.com/800x600/?mocha-coffee" },

    { id: "iced-coffee", category: categories.cold, name: "Iced Coffee", desc: "Chilled, refreshing.", price: 45, imageUrl: "https://source.unsplash.com/800x600/?iced-coffee" },
    { id: "iced-latte", category: categories.cold, name: "Iced Latte", desc: "Cold milk coffee.", price: 50, imageUrl: "https://source.unsplash.com/800x600/?iced-latte" },
    { id: "mango-juice", category: categories.cold, name: "Mango Juice", desc: "Fresh tropical taste.", price: 35, imageUrl: "https://source.unsplash.com/800x600/?mango-juice" },
    { id: "strawberry-smoothie", category: categories.cold, name: "Strawberry Smoothie", desc: "Fruity and thick.", price: 55, imageUrl: "https://source.unsplash.com/800x600/?strawberry-smoothie" },
    { id: "cola", category: categories.cold, name: "Cola", desc: "Ice-cold classic.", price: 25, imageUrl: "https://source.unsplash.com/800x600/?cola" },
    { id: "lemonade", category: categories.cold, name: "Citrus Lemonade", desc: "Sharp and refreshing.", price: 30, imageUrl: "https://source.unsplash.com/800x600/?lemonade" },

    { id: "classic-waffle", category: categories.waffles, name: "Classic Waffle", desc: "Crispy outside, soft inside.", price: 60, imageUrl: "https://source.unsplash.com/800x600/?waffle" },
    { id: "nutella-waffle", category: categories.waffles, name: "Nutella Waffle", desc: "Nutella drizzle.", price: 80, imageUrl: "https://source.unsplash.com/800x600/?nutella-waffle" },
    { id: "lotus-waffle", category: categories.waffles, name: "Lotus Waffle", desc: "Biscoff / Lotus flavor.", price: 85, imageUrl: "https://source.unsplash.com/800x600/?biscoff-waffle" },
    { id: "fruits-cream-waffle", category: categories.waffles, name: "Fruits & Cream Waffle", desc: "Seasonal fruits + cream.", price: 90, imageUrl: "https://source.unsplash.com/800x600/?fruit-waffle" },
    { id: "dark-choco-waffle", category: categories.waffles, name: "Dark Chocolate Waffle", desc: "Extra cocoa crunch.", price: 82, imageUrl: "https://source.unsplash.com/800x600/?chocolate-waffle" },

    { id: "vanilla-milkshake", category: categories.milkshakes, name: "Vanilla Milkshake", desc: "Creamy vanilla.", price: 60, imageUrl: "https://source.unsplash.com/800x600/?vanilla-milkshake" },
    { id: "chocolate-milkshake", category: categories.milkshakes, name: "Chocolate Milkshake", desc: "Chocolate rich shake.", price: 65, imageUrl: "https://source.unsplash.com/800x600/?chocolate-milkshake" },
    { id: "strawberry-milkshake", category: categories.milkshakes, name: "Strawberry Milkshake", desc: "Strawberry sweet shake.", price: 65, imageUrl: "https://source.unsplash.com/800x600/?strawberry-milkshake" },
    { id: "oreo-milkshake", category: categories.milkshakes, name: "Oreo Milkshake", desc: "Cookies and cream vibes.", price: 75, imageUrl: "https://source.unsplash.com/800x600/?oreo-milkshake" },
    { id: "salted-caramel-shake", category: categories.milkshakes, name: "Salted Caramel Milkshake", desc: "Sweet and salty blend.", price: 70, imageUrl: "https://source.unsplash.com/800x600/?caramel-milkshake" },

    { id: "red-bull", category: categories.energy, name: "Red Bull", desc: "Energy boost.", price: 55, imageUrl: "https://source.unsplash.com/800x600/?redbull" },
    { id: "monster", category: categories.energy, name: "Monster", desc: "Big can, big energy.", price: 65, imageUrl: "https://source.unsplash.com/800x600/?monster-energy" },
    { id: "sting", category: categories.energy, name: "Sting", desc: "Quick energy.", price: 35, imageUrl: "https://source.unsplash.com/800x600/?energy-drink" },
    { id: "rockstar", category: categories.energy, name: "Rockstar Punch", desc: "Fruity charge.", price: 60, imageUrl: "https://source.unsplash.com/800x600/?rockstar-energy" },

    { id: "yogurt-honey", category: categories.healthy, name: "Greek Yogurt + Honey", desc: "Protein and honey.", price: 55, imageUrl: "https://source.unsplash.com/800x600/?yogurt-honey" },
    { id: "oat-latte", category: categories.healthy, name: "Oat Milk Latte (cold)", desc: "Light and healthy.", price: 60, imageUrl: "https://source.unsplash.com/800x600/?oat-latte" },
    { id: "orange-juice", category: categories.healthy, name: "Fresh Orange Juice", desc: "Vitamin C.", price: 40, imageUrl: "https://source.unsplash.com/800x600/?orange-juice" },
    { id: "detox-mix", category: categories.healthy, name: "Detox Mix", desc: "Lemon + mint style.", price: 50, imageUrl: "https://source.unsplash.com/800x600/?detox-drink" },
    { id: "berry-blast", category: categories.healthy, name: "Berry Blast", desc: "Mixed berries smoothie.", price: 58, imageUrl: "https://source.unsplash.com/800x600/?berry-smoothie" },
  ];

  const branches = [
    { id: "branch-1", title: "VIRus.net - Ard El Hadded", address: "Ard El Hadded", mapLink: "#" },
    { id: "branch-2", title: "VIRus.net - Ard El Gam3eya", address: "Ard El Gam3eya", mapLink: "#" },
    { id: "branch-3", title: "VIRus.net - Sharea El Wehda", address: "Sharea El Wehda", mapLink: "#" },
  ];

  let activeCategory = categories.hot;

  const navToggle = document.querySelector(".nav-toggle");
  const navLinksWrap = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.querySelector(".back-to-top");
  const menuGrid = document.querySelector("#menuGrid");
  const searchInput = document.querySelector("#menuSearch");
  const tabButtons = document.querySelectorAll("[data-cat]");
  const branchGrid = document.querySelector("#branchGrid");
  const header = document.querySelector(".navbar");

  function setOrderLinks() {
    document.querySelectorAll("[data-order-link]").forEach((link) => {
      link.href = ORDER_LINK;
      link.target = "_blank";
      link.rel = "noopener";
    });
  }

  setOrderLinks();

  function renderBranches() {
    branchGrid.innerHTML = "";
    const frag = document.createDocumentFragment();
    branches.forEach((branch) => {
      const card = document.createElement("article");
      card.className = "branch-card";
      card.innerHTML = `
        <p class="eyebrow">Branch</p>
        <h3>${branch.title}</h3>
        <p class="muted">${branch.address}</p>
        <a class="link" href="${branch.mapLink}" target="_blank" rel="noopener">Open Location</a>
      `;
      frag.appendChild(card);
    });
    branchGrid.appendChild(frag);
  }

  renderBranches();

  function renderMenu() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = menuItems.filter(
      (item) => item.category === activeCategory && item.name.toLowerCase().includes(query)
    );

    menuGrid.innerHTML = "";
    if (!filtered.length) {
      const msg = document.createElement("p");
      msg.className = "muted";
      msg.textContent = "No items match your search in this category.";
      menuGrid.appendChild(msg);
      return;
    }

    const frag = document.createDocumentFragment();
    filtered.forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-card";
      card.innerHTML = `
        <div class="card-image">
          <img src="${item.imageUrl}" alt="${item.name}">
        </div>
        <div class="card-body">
          <div class="card-top">
            <h3>${item.name}</h3>
            <span class="badge">${item.category}</span>
          </div>
          <p class="muted">${item.desc}</p>
          <div class="card-bottom">
            <span class="price">${item.price} EGP</span>
            <button class="details-btn" data-id="${item.id}">View Details</button>
          </div>
        </div>
      `;
      frag.appendChild(card);
    });
    menuGrid.appendChild(frag);
    menuGrid.classList.add("animate");
    setTimeout(() => menuGrid.classList.remove("animate"), 260);
  }

  renderMenu();

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      activeCategory = categories[btn.dataset.cat];
      renderMenu();
    });
  });

  searchInput.addEventListener("input", renderMenu);

  menuGrid.addEventListener("click", (event) => {
    const detailsBtn = event.target.closest(".details-btn");
    if (!detailsBtn) return;
    const item = menuItems.find((m) => m.id === detailsBtn.dataset.id);
    if (item) openModal(item);
  });

  function openModal(item) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-label="${item.name} details">
        <button class="close-modal" aria-label="Close">&times;</button>
        <img src="${item.imageUrl}" alt="${item.name}">
        <div class="modal-body">
          <span class="badge">${item.category}</span>
          <h3>${item.name}</h3>
          <p class="muted">${item.desc}</p>
          <p class="price">${item.price} EGP</p>
          <a class="btn btn-primary" data-order-link target="_blank" rel="noopener">Order via X (Twitter)</a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    setOrderLinks();

    function closeModal() {
      document.body.style.overflow = "";
      overlay.remove();
      document.removeEventListener("keydown", onEsc);
    }

    const closeBtn = overlay.querySelector(".close-modal");
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });

    function onEsc(e) {
      if (e.key === "Escape") closeModal();
    }

    document.addEventListener("keydown", onEsc);
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navLinksWrap.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinksWrap.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navLinksWrap.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              navLinks.forEach((l) => l.classList.remove("active"));
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  );
  sections.forEach((section) => observer.observe(section));

  window.addEventListener("scroll", () => {
    if (window.scrollY > 140) {
      backToTop.classList.add("show");
      header.style.boxShadow = "0 8px 40px rgba(0,0,0,0.6)";
    } else {
      backToTop.classList.remove("show");
      header.style.boxShadow = "0 8px 40px rgba(0,0,0,0.45)";
    }
  });

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});
