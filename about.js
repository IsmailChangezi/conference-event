const openNav = document.getElementById('open');
const closeNav = document.getElementById('close');
const navLinks = document.querySelector('.lower-nav-ul');

openNav.addEventListener('click', () => {
  navLinks.classList.add('show');
  openNav.style.display = 'none';
  closeNav.style.display = 'block';
});

closeNav.addEventListener('click', () => {
  navLinks.classList.remove('show');
  closeNav.style.display = 'none';
  openNav.style.display = 'block';
});
