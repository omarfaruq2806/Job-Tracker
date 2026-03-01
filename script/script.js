let currentTab = "all";

const tabActive = ["bg-blue-600", "text-white"];
const tabInactive = ["bg-white", "text-black", "border", "border-gray-300"];

// sections
const allSection = document.getElementById("allSection");
const interviewSection = document.getElementById("interviewSection");
const rejectedSection = document.getElementById("rejectedSection");

function switchTab(tab) {
  const tabs = ["all", "interview", "reject"];

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

  //   const sections = {
  //     all: allSection,
  //     interview: interviewSection,
  //     reject: rejectedSection,
  //   };
  const sections = [allSection, interviewSection, rejectedSection];
  for (let section of sections) {
    section.classList.add("hidden");
  }
  if (tab === "all") {
    allSection.classList.remove("hidden");
  } else if (tab === "interview") {
    interviewSection.classList.remove("hidden");
  } else if (tab === "reject") {
    rejectedSection.classList.remove("hidden");
  }
}
switchTab(currentTab);
