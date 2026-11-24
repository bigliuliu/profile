// Theme toggle (dark by default, like avesh.tech)
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

// Mobile menu
const menuIcon = document.getElementById("menu");
const dropdownMenu = document.getElementById("dropdownMenu");
if (menuIcon && dropdownMenu) {
  menuIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("open");
  });
  dropdownMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      dropdownMenu.classList.remove("open");
    });
  });
}

// Table of contents scroll-spy
const tocLinks = document.querySelectorAll(".toc a[data-spy]");
const sections = [...tocLinks]
  .map((link) => document.getElementById(link.getAttribute("data-spy")))
  .filter(Boolean);
if (tocLinks.length && sections.length && "IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        tocLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("data-spy") === entry.target.id
          )
        );
      });
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );
  sections.forEach((section) => spy.observe(section));
}

// Experience accordions (first job open, the rest collapsed)
document.querySelectorAll(".job").forEach((job) => {
  const head = job.querySelector(".role-head");
  const label = job.querySelector(".toggle-label");
  if (!head) return;
  head.addEventListener("click", () => {
    const collapsed = job.classList.toggle("collapsed");
    head.setAttribute("aria-expanded", String(!collapsed));
    if (label) label.textContent = collapsed ? "Show details" : "Hide details";
  });
});

// Copy for agents
const copyBtn = document.getElementById("copy-agents");
if (copyBtn) {
  const bio =
    "Tiana Lau is a Software Engineer at Serko in Xi'an, China, building the Zeno travel platform with React, TypeScript and C#/.NET. She ships with AI in the loop: a Claude Code plugin backed by a 16-tool TypeScript MCP server, spec-driven development with OpenSpec, and an LLM PR review pipeline. Contact: sweetliu666@gmail.com, https://www.linkedin.com/in/tiana-liu-a99303293/, https://github.com/bigliuliu";
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bio);
      copyBtn.textContent = "Copied";
    } catch (e) {
      copyBtn.textContent = "Copy failed";
    }
    setTimeout(() => {
      copyBtn.textContent = "Copy for agents";
    }, 2000);
  });
}
