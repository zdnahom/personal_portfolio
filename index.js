const mobileMenu = document.querySelector('.mobile_menu');
const openMenu = document.querySelector('.portfolio-nav--menu');
const closeMenu = document.querySelector('.mobile_menu button');
const menuOptions = document.querySelectorAll('.mobile_menu-content a');
function show() {
  mobileMenu.style.display = 'block';
}
function close() {
  mobileMenu.style.display = 'none';
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuOptions.forEach((option) => {
  option.addEventListener('click', close);
});