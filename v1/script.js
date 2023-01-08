"use strict";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM Element
const btnAddFact = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM element: render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://bmrkxzxnpnnauwhpukrg.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcmt4enhucG5uYXV3aHB1a3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxNzQyODcsImV4cCI6MTk4ODc1MDI4N30.bSnTq57-KnUPHL7eMQPiVk7s0ceiyKDyWynU60hQcB0",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcmt4enhucG5uYXV3aHB1a3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxNzQyODcsImV4cCI6MTk4ODc1MDI4N30.bSnTq57-KnUPHL7eMQPiVk7s0ceiyKDyWynU60hQcB0",
      },
    }
  );
  const data = await res.json();

  // filtering data
  // const filteredData = data.filter((fact) => fact.category === "society");

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact">
<p>${fact.text}
  <a class="source" href=${fact.source} target="_blank">(Source)</a>
</p>
<span class="tag" style="background-color: ${
      CATEGORIES.find((el) => el.name === fact.category).color
    }">${fact.category}</span>

<div class="vote-buttons">
  <button>👍${fact.votesInteresting}</button>
  <button>🤯${fact.votesMindblowing}</button>
  <button>⛔️${fact.votesFalse}</button>
</div>

</li>`
  );
  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btnAddFact.addEventListener("click", function (e) {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnAddFact.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btnAddFact.textContent = "Share a fact";
  }
});

const asd = [4, 5, 8, 5, 8, 11, 1, 30];

console.log(asd.find((el) => el > 10));
