(function () {
  const params = new URLSearchParams(location.search);
  let lab = Number(params.get("lab"));
  if (!Number.isInteger(lab) || lab < 0 || lab > 7) lab = 0;

  let lang = "kk";
  try {
    const saved = localStorage.getItem("eq-lang");
    if (saved === "kk" || saved === "ru" || saved === "en") lang = saved;
  } catch (error) { /* keep kk */ }

  const UI = {
    kk: { back: "Зертханаға оралу", principle: "Жұмыс принципі" },
    ru: { back: "Назад к лабораторным", principle: "Принцип работы" },
    en: { back: "Back to the labs", principle: "How it works" }
  };

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("eq-theme", theme); } catch (error) { /* ignore */ }
    const button = document.getElementById("theme-toggle");
    const light = theme === "light";
    button.textContent = light ? "☾" : "☀";
    button.setAttribute("aria-pressed", light ? "true" : "false");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = light ? "#f7f4ee" : "#08120f";
  }

  function render() {
    const ui = UI[lang];
    const head = (window.LAB_HEAD[lab] && window.LAB_HEAD[lab][lang]) || "";
    document.documentElement.lang = lang === "kk" ? "kk" : lang;
    document.title = head + " — " + ui.principle;
    document.getElementById("back").textContent = ui.back;
    document.getElementById("method-kicker").textContent = ui.principle;
    document.getElementById("method-title").textContent = head;
    document.getElementById("method").innerHTML = window.labManual(lab, lang);
    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.setLang === lang);
    });
    applyTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      lang = button.dataset.setLang;
      try { localStorage.setItem("eq-lang", lang); } catch (error) { /* ignore */ }
      render();
    });
  });
  document.getElementById("theme-toggle").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
  });
  render();
})();
