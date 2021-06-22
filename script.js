const toggleButton = document.getElementById('toggle-button')


toggleButton.addEventListener('click', () => {
    document.getElementById('navbar-menu').classList.toggle('active');
    document.getElementById('navbar').classList.toggle('active');
})