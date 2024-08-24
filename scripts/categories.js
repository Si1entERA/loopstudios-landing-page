const categoryBox = document.querySelector('.middle__categories');
const seeAllBtn = document.getElementById('seeAllBtn');


let fetchData = null;
let currentIndex = 8;

const fetchReport = fetch('./creation.json');

fetchReport
.then((response) => {
  if(!response.ok) {
    throw new Error (`Error: ${response.status}`);
  }
  else {
    console.log('Ok');
  }

  return response.json();
})
.then((data) => {
  console.log(data)
  fetchData = data;

  const limitData = data.slice(0, 8);

  limitData.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('middle__categories');
    card.innerHTML = `<div class="category__box">
        <img src="${item.image}">
        <p>${item.title}</p>
      </div>`;
  categoryBox.appendChild(card);
  // console.log(card)
  })
});

function loadMoreContent(){
  // const limitData = data.slice(0, 8);
  const nextBatch = fetchData.slice(currentIndex, currentIndex + 8);

  nextBatch.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('middle__categories');
    card.innerHTML = `<div class="category__box">
        <img src="${item.image}">
        <p>${item.title}</p>
      </div>`;
  categoryBox.appendChild(card);
  // console.log(card)
  });

  currentIndex += 8;

  if(currentIndex >= fetchData.length){
    seeAllBtn.style.display = 'none';
  }
}

seeAllBtn.addEventListener('click', loadMoreContent)
