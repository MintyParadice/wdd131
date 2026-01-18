const themeSelect = document.querySelector("#theme-select");
const logo = document.querySelector(".logo"); // Select the logo image

function updateTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        logo.src = "images/byui-logo-white.png";
    } else {
        document.body.classList.remove("dark-mode");
        logo.src = "images/byui-logo-blue.webp";
    }
}


const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    themeSelect.value = currentTheme;
    updateTheme(currentTheme);
}


themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    updateTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
});