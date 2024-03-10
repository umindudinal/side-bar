const sidebar = document.querySelector('.sidebar');
const faBars = document.querySelector('.fa-bars');

faBars.addEventListener('click', () => {
     sidebar.classList.toggle('active');
});