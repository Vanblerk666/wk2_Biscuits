// declare variables
// <span> enables an ID to be applied inline without moving stuff around like a div would

const addBtn = document.getElementById("addBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const biscuitsSpan = document.getElementById("biscuitsSpan");
const cpsSpan = document.getElementById("cpsSpan");

// set start values for 'stats' function - dynamic updates

const stats = {
    biscuitCount: 0,
    cps: 0,
};

// Pull stats in from ls

const storageStats = JSON.parse(localStorage.getItem("stats"));


// Check to see if there is anything stored, and if there isn't set from current count - prevents error on start

if (storageStats !== null) {
    stats.biscuitCount = storageStats.biscuitCount;
    stats.cps = storageStats.cps;
    updatePage();  
 }

// add biscuit function

 function buyBiscuit() {
    stats.biscuitCount++;
    updatePage ();
    updateStorage();
 } 

 // add upgrade function: initial cost = 10.

 function buyUpgrade() {
    stats.cps++;
    stats.biscuitCount -= 10;
    updatePage ();
    updateStorage();
 }

 // update page and storage functions

 function updatePage() {
    biscuitsSpan.textContent = stats.biscuitCount;
    cpsSpan.textContent = stats.cps;
 }

// stringify to update storage

 function updateStorage() {
    localStorage.setItem("stats" , JSON.stringify(stats));
 }

 // add event listeners to buttons

 addBtn.addEventListener("click" , buyBiscuit);
 upgradeBtn.addEventListener("click" , buyUpgrade);

 // start the timer, which according to Tim runs forever!

 setInterval(function () {
     stats.biscuitCount += stats.cps;
     updatePage();
     updateStorage();
 }, 1000);

