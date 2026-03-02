let currentTab = "all";

const tabActive = ["bg-blue-600", "text-white"];
const tabInactive = ["bg-white", "text-black", "border", "border-gray-300"];

// sections
const allSection = document.getElementById("allSection");
const interviewSection = document.getElementById("interviewSection");
const rejectedSection = document.getElementById("rejectedSection");
const emptySection = document.getElementById("emptySection");
let availableJobs = document.getElementById("available");

// count update
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectCount = document.getElementById("rejectCount");

function switchTab(tab) {
  const tabs = ["all", "interview", "reject"];
  currentTab = tab;

  for (let t of tabs) {
    let tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }
  const sections = [allSection, interviewSection, rejectedSection];
  for (let section of sections) {
    section.classList.add("hidden");
  }

  emptySection.classList.add("hidden");

  if (tab === "all") {
    allSection.classList.remove("hidden");
    if (allSection.children.length < 1) {
      emptySection.classList.remove("hidden");
    }
  } else if (tab === "interview") {
    interviewSection.classList.remove("hidden");
    if (interviewSection.children.length < 1) {
      emptySection.classList.remove("hidden");
    }
  } else if (tab === "reject") {
    rejectedSection.classList.remove("hidden");
    if (rejectedSection.children.length < 1) {
      emptySection.classList.remove("hidden");
    }
  }
  updateCounts();
}
switchTab(currentTab);

document
  .getElementById("jobsContainer")
  .addEventListener("click", function (event) {
    const target = event.target;
    const card = target.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if (target.classList.contains("interview")) {
      status.innerText = "Interviewed";
      interviewSection.appendChild(card);
      updateCounts();
    }
    if (target.classList.contains("reject")) {
      status.innerText = "Rejected";
      rejectedSection.appendChild(card);
      updateCounts();
    }
    if (target.classList.contains("delete")) {
      parent.removeChild(card);
      updateCounts();
    }
  });

// update counts
function updateCounts() {
  // totalCount.innerText = allSection.children.length;
  // interviewCount.innerText = interviewSection.children.length;
  // rejectCount.innerText = rejectedSection.children.length;

  const counts = {
    all: allSection.children.length,
    interview: interviewSection.children.length,
    reject: rejectedSection.children.length,
  };
  totalCount.innerText = counts.all;
  interviewCount.innerText = counts.interview;
  rejectCount.innerText = counts.reject;
  availableJobs.innerText = counts[currentTab];

  if (counts[currentTab] < 1) {
    emptySection.classList.remove("hidden");
  } else {
    emptySection.classList.add("hidden");
  }
}
updateCounts();
