const mobileMenu = document.querySelector('.mobile_menu');
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const menuButton = document.querySelector('.portfolio-nav--menu');
const closeButton = document.querySelector('.mobile_menu button');
const menuOptions = document.querySelectorAll('.mobile_menu-content a');
function show() {
  mobileMenu.style.display = 'block';
  nav.style.filter = 'blur(5px)';
  sections.forEach((section) => {
    section.style.filter = 'blur(5px)';
  });
}
function close() {
  mobileMenu.style.display = 'none';
  nav.style.filter = 'blur(0)';
  sections.forEach((section) => {
    section.style.filter = 'blur(0)';
  });
}
menuButton.addEventListener('click', show);
closeButton.addEventListener('click', close);
menuOptions.forEach((option) => {
  option.addEventListener('click', close);
});
