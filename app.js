/* =========================================================
   TERETERE — Datos de la Carta e Interactividad
   ========================================================= */

const MENU_DATA = [
  {
    id: "arepas",
    title: "AREPAS",
    subtitle: "Maíz recién hecho, rellenas al momento",
    column: 1,
    items: [
      { id: "arepa-carne", name: "Carne mechada", desc: "", price: 7.0 },
      { id: "arepa-pollo", name: "Pollo", desc: "", price: 7.0 },
      { id: "arepa-pelua", name: "Pelúa", desc: "Carne mechada y queso", price: 8.0 },
      { id: "arepa-reina", name: "Reina Pepiada", desc: "Pollo, mayonesa y aguacate", price: 8.0 },
      { id: "arepa-catira", name: "Catira", desc: "Pollo con queso gouda", price: 8.0 },
      { id: "arepa-calamar", name: "Calamar guisado", desc: "", price: 8.0 }
    ]
  },
  {
    id: "empanadas",
    title: "EMPANADAS",
    subtitle: "",
    column: 1,
    items: [
      { id: "emp-pabellon", name: "Pabellón", desc: "Plátano, frijoles negros y queso rallado", price: 6.5 },
      { id: "emp-pelua", name: "Pelúa", desc: "Carne mechada y queso", price: 6.5 },
      { id: "emp-camaron", name: "Camarón guisado", desc: "", price: 6.0 },
      { id: "emp-pollo", name: "Pollo", desc: "", price: 5.5 },
      { id: "emp-carne", name: "Carne mechada", desc: "", price: 5.0 },
      { id: "emp-queso", name: "Queso", desc: "", price: 5.0 }
    ]
  },
  {
    id: "bocadillos",
    title: "BOCADILLOS",
    subtitle: "Y tostas",
    column: 2,
    items: [
      { id: "boc-iberico", name: "Jamón ibérico", desc: "", price: 10.0 },
      { id: "boc-teretere", name: "Bocata Teretere", desc: "Tiras de ternera, cebolla caramelizada y queso gouda", price: 8.5 },
      { id: "boc-tosta", name: "Tosta de aguacate y salmón", desc: "Con tomate y rúcula", price: 8.5 },
      { id: "boc-atun-anchoas", name: "Atún con anchoas y pimientos", desc: "", price: 7.5 },
      { id: "boc-serranito", name: "Serranito", desc: "Lomo, jamón serrano y pimiento verde", price: 7.0 },
      { id: "boc-veg-pollo", name: "Vegetal de pollo con queso", desc: "", price: 6.8 },
      { id: "boc-queso-curado", name: "Queso curado", desc: "", price: 6.5 },
      { id: "boc-lomo-cabra", name: "Lomo con queso de cabra", desc: "", price: 6.5 },
      { id: "boc-veg-atun", name: "Vegetal de atún", desc: "Lechuga, mayonesa, atún y huevo duro", price: 5.5 },
      { id: "boc-serrano", name: "Jamón serrano", desc: "", price: 5.5 },
      { id: "boc-lomo", name: "Lomo", desc: "", price: 5.3 },
      { id: "boc-atun", name: "Atún", desc: "", price: 5.0 },
      { id: "boc-fuet", name: "Fuet", desc: "", price: 5.0 },
      { id: "boc-pollo-plancha", name: "Pollo a la plancha", desc: "", price: 5.0 },
      { id: "boc-tortilla", name: "Tortilla francesa", desc: "", price: 4.8 },
      { id: "boc-bacon", name: "Bacon", desc: "", price: 4.7 },
      { id: "boc-bikini-mall", name: "Bikini mallorquín", desc: "Sobrasada y queso", price: 4.5 },
      { id: "boc-bikini", name: "Bikini", desc: "", price: 3.7 }
    ]
  },
  {
    id: "hamburguesas",
    title: "HAMBURGUESAS",
    subtitle: "",
    column: 3,
    isBurgerBox: true,
    intro: "150 g de carne en pan brioche, con queso de cabra, cebolla caramelizada, tomate y lechuga. Servida con patatas fritas.",
    fixedPrice: 11.0,
    items: [
      { id: "burg-ternera", name: "Ternera", desc: "Hamburguesa en pan brioche con patatas fritas", price: 11.0 },
      { id: "burg-chorizo", name: "Ternera con chorizo", desc: "Hamburguesa en pan brioche con patatas fritas", price: 11.0 },
      { id: "burg-pollo", name: "Pollo", desc: "Hamburguesa en pan brioche con patatas fritas", price: 11.0 },
      { id: "burg-chuleta", name: "Chuleta ahumada", desc: "Hamburguesa en pan brioche con patatas fritas", price: 11.0 }
    ]
  },
  {
    id: "perritos",
    title: "PERRITOS CALIENTES",
    subtitle: "",
    column: 3,
    items: [
      { id: "perro-sencillo", name: "Sencillo", desc: "Pan, salchicha, repollo o cebolla y salsas", price: 3.7 },
      { id: "perro-especial", name: "Especial", desc: "Con pico de gallo, papas fritas y queso", price: 4.5 }
    ]
  },
  {
    id: "tapas",
    title: "TAPAS",
    subtitle: "Para picar y compartir",
    column: 3,
    groups: [
      {
        label: "CALIENTES",
        items: [
          { id: "tapa-tequenos", name: "Tequeños", desc: "6 unidades", price: 6.0 },
          { id: "tapa-arepitas", name: "Arepitas surtidas", desc: "5 unidades", price: 6.5 },
          { id: "tapa-bravas", name: "Papas bravas", desc: "", price: 5.8 },
          { id: "tapa-rabas", name: "Rabas de puntilla", desc: "", price: 9.0 },
          { id: "tapa-tortilla", name: "Tortilla de patatas", desc: "", price: 5.5 },
          { id: "tapa-croquetas", name: "Croquetas de pollo y jamón", desc: "Precio por unidad", price: 2.0 },
          { id: "tapa-callos", name: "Callos", desc: "", price: 10.5 },
          { id: "tapa-pinchos", name: "Pinchos", desc: "", price: 8.0 },
          { id: "tapa-calamares", name: "Calamares a la andaluza", desc: "", price: 9.5 },
          { id: "tapa-morros", name: "Morros fritos", desc: "", price: 6.5 }
        ]
      },
      {
        label: "FRÍAS",
        items: [
          { id: "tapa-ensaladilla", name: "Ensaladilla rusa", desc: "", price: 5.0 },
          { id: "tapa-banderillas", name: "Banderillas", desc: "Precio por unidad", price: 2.6 },
          { id: "tapa-boquerones", name: "Boquerones en vinagre", desc: "", price: 8.0 },
          { id: "tapa-embutidos", name: "Embutidos mixtos", desc: "", price: 10.5 },
          { id: "tapa-olivas", name: "Olivas", desc: "", price: 3.5 }
        ]
      }
    ]
  }
];

const state = {
  activeCategory: "all",
  searchQuery: ""
};

const els = {
  categoryPills: document.getElementById("categoryPills"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  searchStatus: document.getElementById("searchStatus"),
  menuGrid: document.getElementById("menuGrid"),
  emptyState: document.getElementById("emptyState"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn")
};

function formatPrice(value) {
  return value.toFixed(2).replace(".", ",") + " €";
}

function normalizeText(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderCategoryPills() {
  const pills = [
    { id: "all", label: "Toda la carta" },
    ...MENU_DATA.map((cat) => ({
      id: cat.id,
      label: cat.title.charAt(0) + cat.title.slice(1).toLowerCase()
    }))
  ];

  els.categoryPills.innerHTML = pills
    .map(
      (pill) => `
      <button
        type="button"
        class="pill ${state.activeCategory === pill.id ? "is-active" : ""}"
        data-category="${pill.id}"
        role="tab"
        aria-selected="${state.activeCategory === pill.id}"
      >
        ${pill.label}
      </button>
    `
    )
    .join("");
}

function matchesSearch(item, query) {
  if (!query) return true;
  const q = normalizeText(query);
  return normalizeText(item.name).includes(q) || normalizeText(item.desc).includes(q);
}

function createItemRowHtml(item) {
  return `
    <li class="menu-item">
      <div class="menu-item__info">
        <p class="menu-item__name">${item.name}</p>
        ${item.desc ? `<p class="menu-item__desc">${item.desc}</p>` : ""}
      </div>
      <div class="menu-item__right">
        <span class="menu-item__price">${formatPrice(item.price)}</span>
      </div>
    </li>
  `;
}

function createBurgerSectionHtml(cat, filteredItems) {
  return `
    <section class="menu-section" id="cat-${cat.id}">
      <header class="menu-section__header">
        <h2 class="menu-section__title">${cat.title}</h2>
      </header>
      <div class="burger-box">
        <p class="burger-box__intro">${cat.intro}</p>
        <span class="burger-box__label">A elegir</span>
        <ul class="burger-options">
          ${filteredItems
            .map(
              (item) => `
                <li class="burger-option">
                  <span class="burger-option__name">${item.name}</span>
                </li>
              `
            )
            .join("")}
        </ul>
        <div class="burger-box__price-row">
          <span class="burger-box__price-note">Cualquier variedad</span>
          <span class="burger-box__price">${formatPrice(cat.fixedPrice)}</span>
        </div>
      </div>
    </section>
  `;
}

function createStandardSectionHtml(cat, query) {
  let contentHtml = "";

  if (cat.groups) {
    const visibleGroups = cat.groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => matchesSearch(item, query))
      }))
      .filter((group) => group.items.length > 0);

    if (visibleGroups.length === 0) return "";

    contentHtml = visibleGroups
      .map(
        (group) => `
        <div class="menu-subgroup">
          <h3 class="menu-subgroup__title">${group.label}</h3>
          <ul class="menu-list">
            ${group.items.map(createItemRowHtml).join("")}
          </ul>
        </div>
      `
      )
      .join("");
  } else {
    const visibleItems = cat.items.filter((item) => matchesSearch(item, query));
    if (visibleItems.length === 0) return "";

    if (cat.isBurgerBox) {
      return createBurgerSectionHtml(cat, visibleItems);
    }

    contentHtml = `
      <ul class="menu-list">
        ${visibleItems.map(createItemRowHtml).join("")}
      </ul>
    `;
  }

  return `
    <section class="menu-section" id="cat-${cat.id}">
      <header class="menu-section__header">
        <h2 class="menu-section__title">${cat.title}</h2>
        ${cat.subtitle ? `<p class="menu-section__subtitle">${cat.subtitle}</p>` : ""}
      </header>
      ${contentHtml}
    </section>
  `;
}

function renderMenu() {
  const query = state.searchQuery.trim();
  const isFilteredByCategory = state.activeCategory !== "all";
  const targetCategories = isFilteredByCategory
    ? MENU_DATA.filter((c) => c.id === state.activeCategory)
    : MENU_DATA;

  els.menuGrid.classList.toggle("is-filtered", isFilteredByCategory);

  let renderedCount = 0;

  if (!isFilteredByCategory && !query) {
    // Disposición editorial en 3 columnas (equilibrada como el tríptico en desktop)
    const columns = [1, 2, 3].map((colNum) => {
      const colSections = targetCategories
        .filter((cat) => cat.column === colNum)
        .map((cat) => createStandardSectionHtml(cat, query))
        .filter(Boolean);
      renderedCount += colSections.length;
      return `<div class="menu-column">${colSections.join("")}</div>`;
    });
    els.menuGrid.innerHTML = columns.join("");
  } else {
    const sections = targetCategories
      .map((cat) => createStandardSectionHtml(cat, query))
      .filter(Boolean);
    renderedCount = sections.length;

    if (isFilteredByCategory || sections.length === 1) {
      els.menuGrid.classList.add("is-filtered");
      els.menuGrid.innerHTML = `<div class="menu-column">${sections.join("")}</div>`;
    } else {
      els.menuGrid.classList.remove("is-filtered");
      els.menuGrid.innerHTML = sections.join("");
    }
  }

  els.emptyState.hidden = renderedCount > 0;
  els.menuGrid.hidden = renderedCount === 0;

  if (query) {
    els.searchStatus.hidden = false;
    els.searchStatus.textContent = `Resultados para "${query}"`;
  } else {
    els.searchStatus.hidden = true;
  }
}

function bindEvents() {
  els.categoryPills.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-category]");
    if (!btn) return;
    state.activeCategory = btn.dataset.category;
    renderCategoryPills();
    renderMenu();
  });

  els.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    els.clearSearchBtn.hidden = !state.searchQuery;
    renderMenu();
  });

  els.clearSearchBtn.addEventListener("click", () => {
    state.searchQuery = "";
    els.searchInput.value = "";
    els.clearSearchBtn.hidden = true;
    renderMenu();
    els.searchInput.focus();
  });

  els.resetFiltersBtn.addEventListener("click", () => {
    state.activeCategory = "all";
    state.searchQuery = "";
    els.searchInput.value = "";
    els.clearSearchBtn.hidden = true;
    renderCategoryPills();
    renderMenu();
  });
}

// Inicialización
renderCategoryPills();
renderMenu();
bindEvents();
