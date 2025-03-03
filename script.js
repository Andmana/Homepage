const themeBtn = document.querySelector(".theme-button");
const themeIndicator = document.querySelector(".theme-indicator");

themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    themeIndicator.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
        document.documentElement.classList.add("dark");
        themeIndicator.classList.toggle("dark");
    }
});
