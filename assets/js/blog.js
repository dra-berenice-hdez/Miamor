const filterArticles = () => {
  const searchInput = document.querySelector("#searchInput");
  const categorySelect = document.querySelector("#categorySelect");
  const cards = document.querySelectorAll("[data-article]");

  if (!searchInput || !categorySelect || cards.length === 0) {
    return;
  }

  const searchValue = searchInput.value.toLowerCase();
  const categoryValue = categorySelect.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.dataset.title || "";
    const summary = card.dataset.summary || "";
    const category = card.dataset.category || "";
    const matchesText = title.includes(searchValue) || summary.includes(searchValue);
    const matchesCategory = categoryValue === "todas" || category === categoryValue;

    card.classList.toggle("d-none", !(matchesText && matchesCategory));
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#searchInput");
  const categorySelect = document.querySelector("#categorySelect");

  if (searchInput) {
    searchInput.addEventListener("input", filterArticles);
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", filterArticles);
  }
});
