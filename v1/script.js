const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

//selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// creating DOM elements:Render facts in list
factsList.innerHTML = "";

// load data from supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://lrmdscxglapmyvpbzlgw.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxybWRzY3hnbGFwbXl2cGJ6bGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MjU3NzcsImV4cCI6MTk5MDUwMTc3N30.pXdp6dCSgliHxiU-b5T7X45plfbbO6jMD_NmLYpN-8Q",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxybWRzY3hnbGFwbXl2cGJ6bGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MjU3NzcsImV4cCI6MTk5MDUwMTc3N30.pXdp6dCSgliHxiU-b5T7X45plfbbO6jMD_NmLYpN-8Q",
      },
    }
  );

  const data = await res.json();
  console.log(data);
  createFactsList(data);
}

// createFactsList(initialFacts);
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
      <p>
      ${fact.text}
        <a
          class="source"
          href=${fact.source}
          target="_blank"
        >(Source)</a>
      </p>
      <span class="tag" style="background-color:
      ${CATEGORIES.find((cat) => cat.name === fact.category).color}">${
      fact.category
    }</span>
      </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
/*values,variables & operators*/
/*let values can be updated whereas const values wont*/
// let votesInteresting = 23;
// let votesMindblowing = 5;
// const text = "Lisbon is the capital of Portugal";

// votesInteresting = votesInteresting + 1;
// votesInteresting++;
// console.log(votesInteresting);

// let totalupvotes = votesInteresting + votesMindblowing;
// console.log("Upvotes:", totalupvotes);

// let votesFalse = 4;
// const x = votesFalse < totalupvotes;
// console.log(x);

// /*Functions*/
// function calcFactAge(year) {
//   const currentyr = new Date().getFullYear();
//   const age = currentyr - year;
//   return age;
// }
// const age1 = calcFactAge(2002);
// console.log(age1);

/*

let votesInteresting = 20;
let votesMindblowing = 0;
if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting as well as mind blowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact!");
} else if (votesInteresting < votesMindblowing) {
  console.log("Minblowing fact!");
}

// falsy values:0, '', null, undefined
//truthy value: everything else..
if (votesMindblowing) {
  console.log("MINDBLOWING FACT!");
} else {
  console.log("Not so special..");
}

//Ternary operator
let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;
const mssge = totalUpvotes > votesFalse ? "true" : "false";
// alert(mssge);

let txt = "lisbon is capital of Portugal";
let upperText = txt.toUpperCase();
console.log(upperText);

const y = `The current fact is ${upperText} . `;
console.log(y);
// It is ${calcFactAge(2015)} years
// old
// It is propabably ${totalUpvotes>votesFalse ? "c" : "f"}.
let user = "Bob";
console.log(`We love ${user}.`);
*/

// const a2 = (year) => 2022 - year;
// console.log(a2(2002));
/*
const a2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `impossible year.yr need to be less or equal 
${new Date().getFullYear()}`;
console.log(a2(2002));
*/

/*
const stu = ["john", 21, true];
console.log(stu);
console.log(stu[2]);
console.log(stu.length);
console.log(stu[stu.length - 1]);

const [x, y] = stu;
console.log(x);

const newstu = [...stu, "king"];
console.log(newstu);
*/

/*
const factobj = {
  text: "france is beautiful",
  category: "society",
  c: true,
  createsummary: function () {
    return `the fact ${
      this.text
    } is from category ${this.category.toUpperCase()}`;
  },
};
console.log(factobj.text);
console.log(factobj["text"]);

const { category, c } = factobj;
console.log(category);
console.log(factobj.createsummary());
*/

/*
const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);
*/

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

/*
const cat = CATEGORIES.map((el) => el.name);
console.log(cat);
console.log(cat.join("-"));
*/
