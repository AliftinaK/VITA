const asideMenuCloseBtn = document.getElementById('aside-menu-close');
const mobileMenuContainer = document.getElementById('mobile-menu-container');
const asideMenuOpenBtn = document.getElementById('burger-menu-open');

// close mobile-menu
asideMenuCloseBtn.addEventListener('click', () => {
    // Remove the "active" class and add the "non-active" class
    mobileMenuContainer.classList.remove('active');
    mobileMenuContainer.classList.add('non-active');
  });

// open mobile-menu
asideMenuOpenBtn.addEventListener('click', () => {
    // Remove the "non-active" class and add the "active" class
    mobileMenuContainer.classList.remove('non-active');
    mobileMenuContainer.classList.add('active');
  });

  const currentYear = new Date().getFullYear();
  const currentDateElement = document.getElementById("current-date");
  currentDateElement.textContent = currentYear;