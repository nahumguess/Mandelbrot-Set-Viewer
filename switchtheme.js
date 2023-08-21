const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const themeIcon = document.getElementById('theme-icon');

// Update the theme icon
function updateThemeIcon() {
    // If the theme is dark, show the moon icon. Otherwise, show the sun icon.
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
    themeIcon.src = "moon-svgrepo-com.svg";
    } else {
    themeIcon.src = "sun-svgrepo-com.svg";
    }
}
// If the user has a theme set, use it. Otherwise, use the default theme.
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    }
}

// Switch the theme
function switchTheme(e) {
    if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    }
    updateThemeIcon();
}
// Listen for the switch to be toggled.
toggleSwitch.addEventListener('change', switchTheme, false);

