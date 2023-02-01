/* eslint no-unused-vars: 0 */
const projects = [
  {
    id: '1',
    name: 'Tonic',
    info: {
      company_name: 'CANOPY',
      position: 'Back End Dev',
      date: '2015',
    },
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/works_images/detail.png',
    technologies: ['html', 'javascript', 'css'],
    live: '#',
    source: '#',
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    info: {
      company_name: 'FACEBOOK',
      position: 'Full Stack Dev',
      date: '2015',
    },
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'images/works_images/desktop_images/desktop1.png',
    technologies: ['html', 'javascript', 'css', 'python'],
    live: '#',
    source: '#',
  },
  {
    id: '3',
    name: 'Facebook 360',
    info: {
      company_name: 'FACEBOOK',
      position: 'Back End Dev',
      date: '2015',
    },
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    image: 'images/works_images/desktop_images/desktop2.png',
    technologies: ['html', 'javascript', 'css'],
    live: '#',
    source: '#',
  },
  {
    id: '4',
    name: 'Uber Navigation',
    info: {
      company_name: 'Uber',
      position: 'Back End Dev',
      date: '2015',
    },
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'images/works_images/desktop_images/desktop3.png',
    technologies: ['html', 'javascript', 'css'],
    live: '#',
    source: '#',
  },
];
const mobileMenu = document.querySelector('.mobile_menu');
const menuButton = document.querySelector('.portfolio-nav--menu');
const closeButton = document.querySelector('.mobile_menu button');
const menuOptions = document.querySelectorAll('.mobile_menu-content a');
function createCard(data) {
  data.forEach((item) => {
    const technologies = item.technologies
      .map((technology) => `<li>${technology}</li>`)
      .join('');
    const card = document.createElement('div');
    card.className = 'works-card';
    card.innerHTML = `
    <img
      class="works-card--img"
      src=${item.image}
      alt="project pic"
    />
    <div class="works-card--desc">
      <h2 class="works-card--title">${item.name}</h2>
      <ul class="works-card--info">
        <li>${item.info.company_name}</li>
        <li>
          <img src="images/works_images/Counter.png" alt="dot icon" />
        </li>
        <li>${item.info.position}</li>
        <li>
          <img src="images/works_images/Counter.png" alt="dot icon" />
        </li>
        <li>${item.info.date}</li>
      </ul>
      <p class="works-card--detail">
        ${item.description}
      </p>
      <ul class="works-card--languages">
         ${technologies}
      </ul>
      <button class="portfolio-button" type="button" onclick="openDetailWindow(${item.id})">See Project</button>
    </div>
    `;
    document.getElementById('portfolio').appendChild(card);
  });
}
function openDetailWindow(id) {
  const openedDetail = projects.filter((item) => item.id === id.toString())[0];
  const technologies = openedDetail.technologies
    .map((technology) => `<li>${technology}</li>`)
    .join('');
  const detailContainer = document.querySelector('.detail-container');
  detailContainer.innerHTML = `
  <div>
  <div class="detail-card">
  <div class="upper-part">
  <div class="first">
    <h2 class="works-card--title">${openedDetail.name}</h2>
    <button type="button" class="close-detail" onclick="closeDetail()">
      <img src="images/closeDetail.png" alt="close icon" />
    </button>
  </div>
  <ul class="works-card--info">
  <li>${openedDetail.info.company_name}</li>
  <li>
    <img src="images/works_images/Counter.png" alt="dot icon" />
  </li>
  <li>${openedDetail.info.position}</li>
  <li>
    <img src="images/works_images/Counter.png" alt="dot icon" />
  </li>
  <li>${openedDetail.info.date}</li>
  </ul>
</div>
<img src=${openedDetail.image} alt="project pic" />
<div class="bottom-part">
  <p class="works-card--detail">
    ${openedDetail.description}
  </p>
  <div>
    <ul class="works-card--languages">
      ${technologies}
    </ul>
    <hr />
    <div class="buttons-container">
      <a class="portfolio-button" href=${openedDetail.live}>
        <span>See live</span
        ><img src="images/live_icon.png" alt="live icon" />
      </a>
      <a class="portfolio-button" href=${openedDetail.source}>
        <span>See source</span
        ><img src="images/source_icon.png" alt="source icon" />
      </a>
    </div>
  </div>
</div>
</div>
<div class="home_indicator"></div>
</div>
</div>`;
  detailContainer.classList.remove('hide-detail');
}
function show() {
  mobileMenu.style.display = 'block';
}
function close() {
  mobileMenu.style.display = 'none';
}
function closeDetail() {
  const detailContainer = document.querySelector('.detail-container');
  detailContainer.classList.add('hide-detail');
}
menuButton.addEventListener('click', show);
closeButton.addEventListener('click', close);
menuOptions.forEach((option) => {
  option.addEventListener('click', close);
});
createCard(projects);