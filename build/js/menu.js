const dropdownMenu = document.querySelector("#dropdownMenu");
const menuIcon = document.querySelector("#menu");
const list = document.querySelector(".toggle-list");

menuIcon.addEventListener("click", () => {
  menuToggle();
  menuIcon.classList.toggle("scale-105");
  list.addEventListener("click", () => {
    dropdownMenu.classList.remove("flex");
    dropdownMenu.classList.add("hidden");
  });
});

function menuToggle(params) {
  dropdownMenu.classList.toggle("hidden");
  dropdownMenu.classList.toggle("flex");
}

//Projects Lists

const projectList = [
  {
    id: 5,
    title: "Pearl Town",
    img: "build/img/medware.png",
    // githubLink: "https://github.com/tanpreetjolly/Medware",
    live: "",
    desc: "A Pearl Town Website for university ,I designed independently and build with other developer,on which mint and trade NFT made in Vue, Ant Design, SCSS and Java",
  },
  {
    id: 8,
    title: "Translate App",
    img: "build/img/translate.png",
    githubLink: "https://github.com/bigliuliu/Tranlator/tree/main",
    live: "https://tranlator-eight.vercel.app/",
    desc: "A translate app integrated with Google API made in React and Tailwind CSS",
  },
  // {
  //   id: 9,
  //   title: "Vetmedman",
  //   img: "https://i.imgur.com/aAFZsbY.png",
  //   githubLink: "",
  //   // live: "https://vetmedman.com",
  //   desc: "A shopping store I created for a freelance client. GithubRepo not available for this private project",

  //  },
  //   {
  //   id: 3,
  //   title: "Landing Page - Freelance",
  //   img: "https://i.imgur.com/cAzrTyh.png",
  //   githubLink: "",
  //   // live: "https://genci-io.vercel.app",
  //   desc: "A simple static landing page for a startup I worked at that. Github Repo not avaailable as per the company's terms",
  // },
  // {
  //   id: 7,
  //   title: "Ebazar Online Store",
  //   img: "build/img/ebazar.png",
  //   // githubLink: "https://github.com/tanpreetjolly/eBazaar",
  //   // live: "https://ebazardeploy.onrender.com",
  //   desc: "Simple E-commerce website made in React, Redux, Firebase and Stripe for payment gateway.",
  // },
  // {
  //   id: 6,
  //   title: "Grocery App",
  //   img: "build/img/grocery.png",
  //   // githubLink: "https://github.com/tanpreetjolly/groceryListApp",
  //   // live: "https://groceryapp-tanpreet.netlify.app/",
  //   desc: "A grocery list app build in React to add or remove tems for grocery shopping",
  // },
  // {
  //   id: 1,
  //   title: "Tribute Page",
  //   img: "build/img/tribute-thumbnail.jpg",
  //   // githubLink: "https://github.com/tanpreetjolly/fcc-project-tributePage",
  //   // live: "https://tributepage-tanpreet.netlify.app/",
  //   desc: "A tribute page for the freeCodeCamp RWD Certification. Created using HTML5 and CSS3.",
  // },
  {
    id: 2,
    title: "React Demos",
    img: "build/img/react-demos.png",
    githubLink: "https://github.com/bigliuliu/react-demos",
    live: "https://react-demos-orpin.vercel.app/",
    desc: "A collection of ReactJS demos to help ReactJS beginners learning how to build ReactJS projects",
  },
  {
    id: 4,
    title: "Portfolio Website",
    img: "build/img/portfolio-thumbnail.jpg",
    githubLink: "https://github.com/bigliuliu/profile/tree/main",
    live: "https://profile-umber-five.vercel.app/",
    desc: "A personal portfolio created using HTML5, CSS3 and JavaScript showcasing my work.",
  },
];
/* <a href=${item.live} target="_blank"><p class="text-sm lg:text-lg">View Project</p></a>
              <a href="${item.githubLink}" target="_blank"><img src="build/img/footer-github.png" alt="github-link""></a> */

// function to return project-card
const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList) {
  let displayProjects = projectsList.map(function (item) {
    if (item.id === 5) {
      return `
    <div class="project-card" class="text-gray-300">
        <div id='player-1' ></div>
        <h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1 underline underline-offset-8">${item.title}</h2>
        <p class="m-1 w-4/5 text-xs lg:text-base">${item.desc}</p>
    </div>`;
    } else {
      return `
      <div class="project-card" class="text-gray-300">
          <img src= ${item.img} alt=${item.title}>
          <h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1 underline underline-offset-8">${item.title}</h2>
          <div class="flex justify-between w-full px-4  projectLinkContainer items-center" >
          <a href=${item.live} target="_blank"><p class="text-sm lg:text-lg">View Project</p></a>
          <a href="${item.githubLink}" target="_blank"><img src="build/img/footer-github.png" alt="github-link""></a>
          </div>
          <p class="m-1 w-4/5 text-xs lg:text-base">${item.desc}</p>
      </div>`;
    }
  });
  displayProjects = displayProjects.join("");
  projectContainer.innerHTML = displayProjects;
  setTimeout(() => {
    var player1, firstStateChange;
    player1 = new YT.Player("player-1", {
      videoId: "KLc7isg2IyA",
    });
  }, 1000);
}

window.addEventListener("DOMContentLoaded", function () {
  displayAllProjects(projectList);
});
