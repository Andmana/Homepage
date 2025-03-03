document.addEventListener("DOMContentLoaded", () => {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
        document.documentElement.classList.add("dark");
        document.querySelector(".theme-indicator").classList.toggle("dark");
    }
});
