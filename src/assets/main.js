document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownMenuSub = document.getElementById('dropdownMenuSub');
    
    dropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
        dropdownMenuSub.classList.toggle('hidden');
    });
});