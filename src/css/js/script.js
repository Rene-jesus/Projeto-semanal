const toggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    toggle.textContent = '☀️';
} else {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'ligth');
}

toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    if (isDark) {
        toggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}); 