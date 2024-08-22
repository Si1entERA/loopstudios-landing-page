
const openBtn = document.getElementById('open-menu');
const sidebar = document.querySelector('.top__sidebar');

const openMenu = () => {
  sidebar.classList.add('open');
}

openBtn.addEventListener('click', openMenu)