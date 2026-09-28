function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const button = document.getElementById("theme-toggle");
    button.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Close the mobile navbar after selecting a section.
document.querySelectorAll(".navbar .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const nav = document.getElementById("navbarNav");
        if (nav.classList.contains("show")) {
            const collapse = bootstrap.Collapse.getInstance(nav) || new bootstrap.Collapse(nav, {toggle:false});
            collapse.hide();
        }
    });
});
