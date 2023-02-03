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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    image: 'images/works_images/Snapshoot_Portfolio5.png',
    technologies: ['html', 'javascript', 'css'],
    live: 'https://zdnahom.github.io/personal_portfolio/',
    source: 'https://github.com/zdnahom/personal_portfolio',
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    image: 'images/works_images/desktop_images/desktop1.png',
    technologies: ['html', 'javascript', 'css', 'python'],
    live: 'https://zdnahom.github.io/personal_portfolio/',
    source: 'https://github.com/zdnahom/personal_portfolio',
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    image: 'images/works_images/desktop_images/desktop2.png',
    technologies: ['html', 'javascript', 'css'],
    live: 'https://zdnahom.github.io/personal_portfolio/',
    source: 'https://github.com/zdnahom/personal_portfolio',
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release.",
    image: 'images/works_images/desktop_images/desktop3.png',
    technologies: ['html', 'javascript', 'css'],
    live: 'https://zdnahom.github.io/personal_portfolio/',
    source: 'https://github.com/zdnahom/personal_portfolio',
  },
];

const formData={
  full_name:"",
  email:"",
  message:"",
}


const mobileMenu = document.querySelector('.mobile_menu');
const menuButton = document.querySelector('.portfolio-nav--menu');
const closeButton = document.querySelector('.mobile_menu button');
const menuOptions = document.querySelectorAll('.mobile_menu-content a');
const form = document.querySelector('.form');
const { full_name,email,msg } = form.elements;

const error = email.parentNode.querySelector('span');
const EMAIL_INVALID = 'Invalid email : The content of the email field has to be in lower case';

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
<img src="images/works_images/detail.png" alt="project pic" />
<div class="bottom-part">
  <p>
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
</div>
`;
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

function validateEmail(input) {
  const isInLowerCase = input.value.split('').every((letter) => letter === letter.toLowerCase());
  return isInLowerCase;
}



form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  if (validateEmail(email)) {
    error.textContent = '';
    form.submit();
  } else {
    error.textContent = EMAIL_INVALID;
  }
});


menuButton.addEventListener('click', show);
closeButton.addEventListener('click', close);
menuOptions.forEach((option) => {
  option.addEventListener('click', close);
});
createCard(projects);
