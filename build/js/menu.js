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
    desc: "A Pearl Town Website for university ,I designed independently and build with other developer,on which mint and trade NFT",
  },
  {
    id: 8,
    title: "Translate App",
    img: "build/img/translate.png",
    githubLink: "https://github.com/bigliuliu/Tranlator/tree/main",
    live: "https://tranlator-eight.vercel.app/",
    desc: "A translate app integrated with Google API made in React and Tailwind CSS",
  },
  {
    id: 9,
    title: "Food Delivery",
    img: "build/img/food-delivery.png",
    githubLink: "https://github.com/bigliuliu/food-delivery",
    live: "https://food-delivery-frontend-8kro.onrender.com/",
    desc: "a MERN project called food delivery website build with React.js, Node.js(Express.js), MongoDB and Stripe as pay API",
   },
    {
    id: 3,
    title: "Gemini AI clone website",
    img: "build/img/gemini.png",
    githubLink: "https://github.com/bigliuliu/gemini-clone",
    live: "https://gemini-clone-smoky-seven.vercel.app/",
    desc: "This is Gemini AI clone chat website build with React.js and Vite",
  },
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
  {
    id: 1,
    title: "Acme",
    img: "build/img/hero-desktop.png",
    githubLink: "https://github.com/bigliuliu/nextjs-dashboard",
    live: "https://nextjs-dashboard-nine-eta-67.vercel.app/",
    desc: "A Acme website to show dashboard, Invoices, and Customers. Created using Next.js, React.js, PostgresQL and Tailwind CSS.",
  },
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
