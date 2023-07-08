/* eslint no-unused-vars: 0 */
const projects = [
  {
    id: "1",
    name: "Health Conference",
    info: {
      company_name: "Microverse",
      position: "Front-end Dev",
      date: "2023",
    },
    description:
      "This project is a simple conference app where users can check when and where the conference is going to take place, they can check the main events, and also get information about past summits. Built using HTML, CSS(bootstrap), and JavaScript.",
    image: "images/conference.PNG",
    technologies: ["html", "javascript", "css"],
    live: "https://zdnahom.github.io/health-conference/",
    source: "https://github.com/zdnahom/health-conference",
  },
  {
    id: "2",
    name: "Expense Planner",
    info: {
      company_name: "Microverse",
      position: "Fullstack Dev",
      date: "2023",
    },
    description:
      "Expense Planner is a mobile web application built with Ruby on Rails that helps users effectively manage their budget. It allows users to register, log in, and securely track their transactions by associating them with categories. Users can view the total amount spent in each category, add new transactions, and create custom categories. With Expense Planner, users can gain insights into their spending habits and maintain financial control.",
    image: "images/expense-planner.png",
    technologies: ["html", "Ruby on rails", "tailwind css"],
    live: "https://expense-planner.onrender.com/",
    source: "https://github.com/zdnahom/budget-app",
  },
  {
    id: "3",
    name: "Trading App",
    info: {
      company_name: "Microverse",
      position: "Front-end Dev",
      date: "2023",
    },
    description:
      "The Forex Trading App is a mobile web application built using react js which provides real-time information on currency pairs, empowering users to make informed trading decisions. Track exchange rates, view price charts, and set personalized alerts for potential trading opportunities. Stay connected to the currency markets and achieve your trading goals with ease.",
    image: "images/forex-project.PNG",
    technologies: ["react js", "redux","css","webpack"],
    live: "https://forex-trading.onrender.com/",
    source: "https://github.com/zdnahom/trading-app",
  },
  {
    id: "4",
    name: "Awesome Books",
    info: {
      company_name: "Microverse",
      position: "Front-end Dev",
      date: "2023",
    },
    description:
      "Awesome_books_ES6 is a SPA(single page app) that is built by following JavaScript ES6 best practices. The website allows a user to add and remove books to the books collection and also can navigate to different parts using navigation links.",
    image: "images/awesome.PNG",
    technologies: ["html", "javascript(ES6)", "css"],
    live: "https://zdnahom.github.io/awesome_books_ES6/",
    source: "https://github.com/zdnahom/awesome_books_ES6",
  },
  {
    id: "5",
    name: "Todo List",
    info: {
      company_name: "Microverse",
      position: "Front-end Dev",
      date: "2023",
    },
    description:
      "This project is a web application where users can add, remove, and update to-do tasks. Users can also mark tasks that they completed as completed tasks and clear them from their task collection. Built using HTML, CSS, JavaScript(ES6), and WebPack.",
    image: "images/todolist.PNG",
    technologies: ["html", "javascript(ES6)", "css","Webpack"],
    live: "https://zdnahom.github.io/to-do-list/",
    source: "https://github.com/zdnahom/to-do-list",
  },
];

const formData = {
  fullName: "",
  email: "",
  message: "",
};

const mobileMenu = document.querySelector(".mobile_menu");
const menuButton = document.querySelector(".portfolio-nav--menu");
const closeButton = document.querySelector(".mobile_menu button");
const menuOptions = document.querySelectorAll(".mobile_menu-content a");
const form = document.querySelector(".form");
const { fullName, email, msg } = form.elements;

const error = email.parentNode.querySelector("span");
const EMAIL_INVALID =
  "Invalid email : The content of the email field has to be in lower case";

function createCard(data) {
  data.forEach((item) => {
    const technologies = item.technologies
      .map((technology) => `<li>${technology}</li>`)
      .join("");
    const card = document.createElement("div");
    card.className = "works-card";
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
    document.getElementById("portfolio").appendChild(card);
  });
}

function openDetailWindow(id) {
  const openedDetail = projects.filter((item) => item.id === id.toString())[0];
  const technologies = openedDetail.technologies
    .map((technology) => `<li>${technology}</li>`)
    .join("");
  const detailContainer = document.querySelector(".detail-container");
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
<img src=${openedDetail.image} alt="project pic" />
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
  detailContainer.classList.remove("hide-detail");
}

function show() {
  mobileMenu.style.display = "block";
}
function close() {
  mobileMenu.style.display = "none";
}

function closeDetail() {
  const detailContainer = document.querySelector(".detail-container");
  detailContainer.classList.add("hide-detail");
}

function validateEmail(input) {
  const isInLowerCase = input.value
    .split("")
    .every((letter) => letter === letter.toLowerCase());
  return isInLowerCase;
}

function getFormData() {
  return JSON.parse(localStorage.getItem("formData"));
}

function storeFormData() {
  formData.fullName = fullName.value;
  formData.email = email.value;
  formData.message = msg.value;
  localStorage.setItem("formData", JSON.stringify(formData));
}

function setForm() {
  fullName.value = getFormData().fullName;
  email.value = getFormData().email;
  msg.value = getFormData().message;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateEmail(email)) {
    error.textContent = "";
    form.submit();
  } else {
    error.textContent = EMAIL_INVALID;
  }
});

if (localStorage.getItem("formData")) {
  setForm();
}

fullName.oninput = storeFormData;
email.oninput = storeFormData;
msg.oninput = storeFormData;
menuButton.addEventListener("click", show);
closeButton.addEventListener("click", close);
menuOptions.forEach((option) => {
  option.addEventListener("click", close);
});
createCard(projects);
