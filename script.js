// DOM Elements
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const settingsBtn = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');
const themeToggle = document.getElementById('theme-toggle');
const searchEngineSelect = document.getElementById('search-engine');
const clearDataBtn = document.getElementById('clear-data');
const quickLinks = document.getElementById('quick-links');

// Event Listeners
searchBtn.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) {
        const searchEngine = searchEngineSelect.value;
        window.open(`${searchEngine}${encodeURIComponent(query)}`, '_blank');
    }
});

settingsBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('hidden');
});

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeToggle.checked);
    localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
});

clearDataBtn.addEventListener('click', () => {
    localStorage.clear();
    alert('All data cleared!');
    location.reload();
});

// Load Preferences
window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Load quick links (example data)
    const links = JSON.parse(localStorage.getItem('quickLinks')) || [
        { name: 'GitHub', url: 'https://github.com' },
        { name: 'Google', url: 'https://google.com' },
    ];

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        quickLinks.appendChild(a);
    });
});