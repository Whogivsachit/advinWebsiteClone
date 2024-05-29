document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    dropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
});