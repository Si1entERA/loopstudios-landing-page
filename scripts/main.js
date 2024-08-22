
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const sidebar = document.querySelector('.top__sidebar');

const body = document.body;

const openMenu = () => {
  sidebar.classList.add('open');
  body.classList.add('lock');
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
}

const closeMenu = () => {
  sidebar.classList.remove('open');
  body.classList.remove('lock');
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
}

openBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)