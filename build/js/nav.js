const toggleButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');
const mobileMenu = document.querySelector('#mobile-menu-2');

toggleButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
  const expanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
  toggleButton.setAttribute('aria-expanded', expanded);
});