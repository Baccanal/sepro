const todayMonth = new Date().getMonth();
//const todayMonth = 10;

const todayDate = new Date().getDate();
//const todayDate = 7;


/*
const activePlayers = players.filter( 
  (player) => 
  player.active == "YES" 
  //&& new Date(player.birthDay).getDate() >= todayDate
  );
  */

const playersTodayMonth = players.filter( 
    (player) => 
    new Date(player.birthDay).getMonth() == todayMonth 
    //&& new Date(player.birthDay).getDate() >= todayDate
    );


//sort the array of players who have birthdays this month by date.
const playersTodayMonthSorted = playersTodayMonth.sort(function(a,b) {
    const dateA = new Date(a.birthDay).getDate();
    const dateB = new Date(b.birthDay).getDate();

    if (dateA > dateB) return 1;
    else if (dateA < dateB) return -1;
    return 0;
});



let playerMonth = " "; let playerDay = " "  ; let schoolColor = "w3-white";

//Output the players of this month
playersTodayMonthSorted.forEach( (element) => 

{

playerMonth += 

`
    <div class="w3-card-4 w3-center w3-padding w3-asphalt ">
    <p class="w3-${switchSchoolColor(element.school)}" style="text-shadow:1px 1px 0 #444"> ${element.school.toUpperCase()} </p>
    <p>${element.fullName().toUpperCase()}</p>
    <img src="${switchSchoolPics(element.school)}/${element.id}.png" class="w3-${switchSchoolColor(element.school)} w3-circle" alt="Pic" width="60px">
    <p> <span class="w3-text-${switchSchoolColor(element.school)}">BIRTHDAY:</span> ${myBirthMonthDay(element.birthDay)} (${findZodiacSign(new Date(element.birthDay).getDate(), new Date(element.birthDay).getMonth())}) </p>
    </div>

`
});







//**********************BIRTHDAYS**********************************************

// Filter the month players to get the ones whose birthday (date) is today.
const playersTodayDate = playersTodayMonthSorted.filter( (player) => new Date(player.birthDay).getDate() == todayDate);

playersTodayDate.forEach( (element) => 

playerDay += 

`
    <div class="w3-card-4 w3-center w3-padding w3-asphalt ">
    <p class="w3-${switchSchoolColor(element.school)}" style="text-shadow:1px 1px 0 #444"> ${element.school.toUpperCase()} </p>
    <p>${element.fullName().toUpperCase()}</p>
    <img src="${switchSchoolPics(element.school)}/${element.id}.png" class="w3-${switchSchoolColor(element.school)} w3-circle" alt="Pic" width="60px">
    <p> <span class="w3-text-${switchSchoolColor(element.school)}">AGE:</span> ${age(element.birthDay)} </p>
    </div>  

`


);

if(playerDay !== " ") {document.getElementById("birthday").innerHTML = ` <div class="w3-flex" style="gap:50px;flex-wrap:wrap; justify-content:center"> <div> <img src="images/birthDay.png" alt="Pic" width="150px"> </div> ${playerDay} </div>`; }
if(playerMonth !== " "){document.getElementById("birthmonth").innerHTML = `<div class="w3-flex" style="gap:50px;flex-wrap:wrap; justify-content:center"> ${playerMonth} </div>` ;}



const zodiacSign = findZodiacSign(todayDate, todayMonth);
const zodiacImage = `<img src="images/${zodiacSign}.png" alt="Pic" width="200px">`;










const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const longDateFormat = today.toLocaleString('en-US', options);


document.getElementById("today").innerText = `Today: ${longDateFormat}`; 
document.getElementById("zodiacsign").innerText = `Sign: ${zodiacSign} `; 
document.getElementById("zodiacimage").innerHTML = `${ zodiacImage } `; 
document.getElementById("zodiacSymbol").innerHTML = `Symbol: ${zodiacSymbol(zodiacSign)}`; 
document.getElementById("zodiacTime").innerHTML = `Period: ${zodiacTime(zodiacSign)}`; 

document.getElementById("thisMonth").innerText = `Birthdays in ${monthNames[todayMonth].long} `; 
