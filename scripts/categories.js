const categoryBox = document.querySelector('.middle__categories');
const seeAllBtn = document.getElementById('seeAllBtn');

let fetchData = null;
let currentIndex = 8;

const fetchReport = fetch('./creation.json');

fetchReport
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    } else {
      console.log('Ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    fetchData = data;

    // Load the initial 8 items
    const limitData = data.slice(0, 8);

    limitData.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('category__box');  // Update to category__box instead of middle__categories
      const imageSrc = window.innerWidth > 700 ? item.desktopImage : item.image;
      card.innerHTML = `
        <img src="${imageSrc}">
        <p>${item.title}</p>`;
      categoryBox.appendChild(card);
    });
  });

function loadMoreContent() {
  const nextBatch = fetchData.slice(currentIndex, currentIndex + 8);

  nextBatch.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('category__box');  // Update to category__box instead of middle__categories
    const imageSrc = window.innerWidth > 700 ? item.desktopImage : item.image;
    card.innerHTML = `
      <img src="${imageSrc}">
      <p>${item.title}</p>`;
    categoryBox.appendChild(card);
  });

  currentIndex += 8;

  if (currentIndex >= fetchData.length) {
    seeAllBtn.style.display = 'none';
  }
}

seeAllBtn.addEventListener('click', loadMoreContent);
