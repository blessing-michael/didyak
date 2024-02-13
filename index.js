const Navicon = document.querySelector('.bar-div');
const linksContainer = document.querySelector('.links-container');
const closeIcon = document.querySelector('.close-icon');
const allNavlinks = document.querySelectorAll('.nav-info');
const logo = document.querySelectorAll('.logo');


Navicon.addEventListener('click', () => {
    linksContainer.classList.add('active');
    console.log('clicked')
  });
  
  function closeMenu() {
    linksContainer.classList.remove('active');
  }
  closeIcon.addEventListener('click', () => {
    closeMenu();
  });
