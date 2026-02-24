let currentStatus = "all";
// all data
const jobs = [
  {
    id: 1,
    companyName: "Brain Station 23",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "45,000 BDT",
    description:
      "Develop and maintain responsive web applications using modern JavaScript frameworks.",
    status: "All",
  },
  {
    id: 2,
    companyName: "Tiger IT",
    position: "Backend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "55,000 BDT",
    description:
      "Build secure APIs and manage databases using Node.js and Express.",
    status: "All",
  },
  {
    id: 3,
    companyName: "BJIT",
    position: "QA Engineer",
    location: "Remote",
    type: "Contract",
    salary: "40,000 BDT",
    description:
      "Perform manual and automated testing to ensure software quality.",
    status: "All",
  },
  {
    id: 4,
    companyName: "Pathao",
    position: "UI/UX Designer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "50,000 BDT",
    description:
      "Design user-friendly interfaces and improve user experience across platforms.",
    status: "All",
  },
  {
    id: 5,
    companyName: "Daraz Bangladesh",
    position: "Digital Marketing Executive",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "35,000 BDT",
    description:
      "Manage online campaigns, social media ads, and performance tracking.",
    status: "All",
  },
  {
    id: 6,
    companyName: "SSL Wireless",
    position: "Technical Support Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "30,000 BDT",
    description:
      "Provide technical assistance and resolve customer issues efficiently.",
    status: "All",
  },
  {
    id: 7,
    companyName: "Enosis Solutions",
    position: "Software Engineer",
    location: "Remote",
    type: "Full-Time",
    salary: "60,000 BDT",
    description:
      "Develop scalable web applications and collaborate with cross-functional teams.",
    status: "All",
  },
  {
    id: 8,
    companyName: "REVE Systems",
    position: "Network Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "42,000 BDT",
    description:
      "Maintain network infrastructure and ensure system security and performance.",
    status: "All",
  },
];

// interview tab
const interviewJobs = [];

// rejected tab
const rejectedJobs = [];

// tab btn
const allFilterBtn = document.getElementById("filter-all-btn");
const interviewFilterBtn = document.getElementById("filter-interview-btn");
const rejectedFilterBtn = document.getElementById("filter-rejected-btn");

// section
const mainContainer = document.querySelector("main");
const allCards = document.getElementById("all-section");
const rejectedCards = document.getElementById("rejected-section");
const interviewCards = document.getElementById("interview-section");

// countsection
let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

// calculate
function calculateCount() {
  total.innerText = jobs.length;
  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = rejectedJobs.length;
}
calculateCount();

// btn toggle
function toggle(id) {
  // bg add
  allFilterBtn.classList.add("border-gray-300", "text-black");
  interviewFilterBtn.classList.add("border-gray-300", "text-black");
  rejectedFilterBtn.classList.add("border-gray-300", "text-black");

  // bg remove
  allFilterBtn.classList.remove("bg-blue-500", "text-white");
  interviewFilterBtn.classList.remove("bg-blue-500", "text-white");
  rejectedFilterBtn.classList.remove("bg-blue-500", "text-white");

  //
  const selected = document.getElementById(id);

  currentStatus = id;

  // adding blue bg for current button
  selected.classList.remove("border-gray-300", "text-black");
  selected.classList.add("bg-blue-500", "text-white");

  // hidden adding and remove
  if (id == "filter-all-btn") {
    // allCards.classList.remove("hidden");
    interviewCards.classList.add("hidden");
    rejectedCards.classList.add("hidden");
    renderAllJobs()
  } else if (id == "filter-interview-btn") {
    interviewCards.classList.remove("hidden");
    rejectedCards.classList.add("hidden");
    allCards.classList.add("hidden");
    renderInterview();
  } else if (id == "filter-rejected-btn") {
    rejectedCards.classList.remove("hidden");
    interviewCards.classList.add("hidden");
    allCards.classList.add("hidden");
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interviewBtn")) {
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const deleteBtn = parentNode.querySelector(".deleteBtn").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const description = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".status").innerText = "Interview";

    const cardInfo = {
      companyName,
      position,
      deleteBtn,
      location,
      type,
      status: "Interview",
      description,
    };

    const jobExist = interviewJobs.find(
      (item) => item.companyName == cardInfo.companyName,
    );
    if (!jobExist) {
      interviewJobs.push(cardInfo);
    }

    rejectedJobs = rejectedJobs.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "filter-rejected-btn") {
      renderRejected();
    }
    calculateCount();
  } else if (event.target.classList.contains("rejectedBtn")) {
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const deleteBtn = parentNode.querySelector(".deleteBtn").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const description = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".status").innerText = "rejected";

    const cardInfo = {
      companyName,
      position,
      deleteBtn,
      location,
      type,
      status: "rejected",
      description,
    };

    const jobExist = rejectedJobs.find(
      (item) => item.companyName == cardInfo.companyName,
    );
    if (!jobExist) {
      rejectedJobs.push(cardInfo);
    }

    interviewJobs = interviewJobs.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "filter-interview-btn") {
      renderInterview();
    }
    calculateCount();
  }
});

// renderall in UI
function renderAllJobs() {
  const container = document.getElementById("all-section");
  container.innerHTML = "";

  for (const job of jobs) {
    const div = document.createElement("div");

    div.className = "border p-8 rounded-2xl";

    div.innerHTML = `
        <div class="flex justify-between">
                    <div>
                        <h1 class="companyNmae text-2xl font-semibold">${job.companyName}</h1>
                        <h3 class="position text-gray-500">${job.position}</h3>
                    </div>
                    <!-- delete btn -->
                     <div class="deleteBtn">
                        <button><img src="./img/Group 1.png" alt=""></button>
                     </div>
                </div>
                <!-- location -->
                <div>
                    <p class= "location text-gray-500">${job.location}</p>
                </div>
                <!-- work type -->
                <div class="type flex gap-5">
                    <p class="text-gray-500">full time .</p><p class="text-gray-500">Full Time</p><p class="text-gray-500">$1200</p>
                </div>
                <!-- status -->
                <div>
                    <p class="status bg-gray-300 py-1.5 px-3 rounded-[4px] inline-block">${job.status}</p>
                </div>
                <!-- notes -->
                <div><p class="description">${job.description}</p></div>
                <!-- status controler btn -->
                <div class="flex gap-4">
                    <button class="interviewBtn" class="border border-green-500 text-green-500 py-1.5 px-3 rounded-[4px]">interview</button>
                    <button class="rejectedBtn"  class="border border-red-500 text-red-500 py-1.5 px-3 rounded-[4px]">Rejected</button>
                </div>
               `;
    container.appendChild(div);
  }
}

renderAllJobs();

// render interview
function renderInterview() {
  interviewCards.innerHTML = "";

  for (let interview of interviewJobs) {
    let div = document.createElement("div");

    // div.className = 'border border-black p-8 rounded-[8px] space-y-3.5';

    div.innerHTML = `
    <!-- head -->
                <div class="flex justify-between">
                    <div>
                        <h1 class="companyNmae text-2xl font-semibold">Mobile First Corp</h1>
                        <h3 class="position text-gray-500">React Native Developer</h3>
                    </div>
                    <!-- delete btn -->
                     <div class="deleteBtn">
                        <button><img src="./img/Group 1.png" alt=""></button>
                     </div>
                </div>
                <!-- location -->
                <div>
                    <p class= "location text-gray-500">remote</p>
                </div>
                <!-- work type -->
                <div class="type flex gap-5">
                    <p class="text-gray-500">full time .</p><p class="text-gray-500">Full Time</p><p class="text-gray-500">$1200</p>
                </div>
                <!-- status -->
                <div>
                    <p class="status bg-gray-300 py-1.5 px-3 rounded-[4px] inline-block">Not Applied</p>
                </div>
                <!-- notes -->
                <div><p class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p></div>
                <!-- status controler btn -->
                <div class="flex gap-4">
                    <button class="interviewBtn" class="border border-green-500 text-green-500 py-1.5 px-3 rounded-[4px]">interview</button>
                    <button class="rejectedBtn"  class="border border-red-500 text-red-500 py-1.5 px-3 rounded-[4px]">Rejected</button>
                </div>
    `;
    interviewCards.appendChild(div);
  }
}

// render rejected
function renderRejected() {
  rejectedCards.innerHTML = "";

  interviewCards.innerHTML = "";

  for (let reject of rejectedJobs) {
    let div = document.createElement("div");

    // div.className = 'border border-black p-8 rounded-[8px] space-y-3.5';

    div.innerHTML = `
    <!-- head -->
                <div class="flex justify-between">
                    <div>
                        <h1 class="companyNmae text-2xl font-semibold">Mobile First Corp</h1>
                        <h3 class="position text-gray-500">React Native Developer</h3>
                    </div>
                    <!-- delete btn -->
                     <div class="deleteBtn">
                        <button><img src="./img/Group 1.png" alt=""></button>
                     </div>
                </div>
                <!-- location -->
                <div>
                    <p class= "location text-gray-500">remote</p>
                </div>
                <!-- work type -->
                <div class="type flex gap-5">
                    <p class="text-gray-500">full time .</p><p class="text-gray-500">Full Time</p><p class="text-gray-500">$1200</p>
                </div>
                <!-- status -->
                <div>
                    <p class="status bg-gray-300 py-1.5 px-3 rounded-[4px] inline-block">Not Applied</p>
                </div>
                <!-- notes -->
                <div><p class="description">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p></div>
                <!-- status controler btn -->
                <div class="flex gap-4">
                    <button class="interviewBtn" class="border border-green-500 text-green-500 py-1.5 px-3 rounded-[4px]">interview</button>
                    <button class="rejectedBtn"  class="border border-red-500 text-red-500 py-1.5 px-3 rounded-[4px]">Rejected</button>
                </div>
    `;
    rejectedCards.appendChild(div);
  }
}
