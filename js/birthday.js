const todayMonth = new Date().getMonth();
//const todayMonth = 2;

const todayDate = new Date().getDate();
//const todayDate = 2;

const zodiac_sign = `${findZodiacSign(todayDate, todayMonth)}`;

/* ********** order all players by birthday *********** */
/* sort by month then by day */
function sortArrayByBirthday(array) {
  const reorder = array.sort(function (a, b) {
    const monthA = new Date(a.birthDay).getMonth();
    const monthB = new Date(b.birthDay).getMonth();

    const dayA = new Date(a.birthDay).getDate();
    const dayB = new Date(b.birthDay).getDate();

    if (monthA > monthB) return 1;
    else if (monthA < monthB) return -1;
    else {
      if (dayA > dayB) return 1;
      else if (dayA < dayB) return -1;
      return 0;
    }
  });

  return reorder;
}

function checkBirthday(player) {
  if (
    new Date(player.birthDay).getMonth() > todayMonth ||
    (new Date(player.birthDay).getMonth() == todayMonth &&
      new Date(player.birthDay).getDate() > todayDate)
  )
    return player;
}

function getBirthday(player) {
  if (
    new Date(player.birthDay).getMonth() == todayMonth &&
    new Date(player.birthDay).getDate() == todayDate
  )
    return player;
}

allSortedBirthdays = sortArrayByBirthday(players);
nextBirthdays = allSortedBirthdays.filter(checkBirthday);
//console.log(sortedList);

//Next four //////////////////////////////////////////////////////////////////////////////////////

let num = 6;
nextFour_data = [];
if (nextBirthdays.length >= num) {
  for (let i = 0; i < num; i++) {
    nextFour_data.push(nextBirthdays[i]);
  }
} else {
  for (let i = 0; i < nextBirthdays.length; i++) {
    nextFour_data.push(nextBirthdays[i]);
  }

  for (let i = 0; i < num - nextBirthdays.length; i++) {
    nextFour_data.push(allSortedBirthdays[i]);
  }
}

/*
const activePlayers = players.filter( 
  (player) => 
  player.active == "YES" 
  //&& new Date(player.birthDay).getDate() >= todayDate
  );
 

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

 */

let playerMonth = " ";
let playerDay = ``;

let zodiacDay = ``;
let schoolColor = "w3-white";

//Output the players upcoming birthdays
nextFour_data.forEach((element) => {
  playerMonth += `
<div class="w3-card-4 w3-border w3-border-black  w3-${backColor(
    element.school
  )}" style="width:300px;padding:3px">
<img class="w3-${picColor(
    element.school
  )} w3-round-large" src="../fotos/${switchSchoolPics(element.school)}/${
    element.id
  }.png" alt="Card image" style="width:100%">
<div class="card-body">
  <h3 class="card-title"> ${element.fullName()} </h3>
  <p class="${switchSchool(element.school)}">  ${myBirthMonthDay(
    element.birthDay
  )} (${findZodiacSign(
    new Date(element.birthDay).getDate(),
    new Date(element.birthDay).getMonth()
  )}) </p>
</div>
</div>

`;
});

//**********************BIRTHDAYS**********************************************
zodiacDay += `
<div class="w3-card-4" style="width:40%;">
<header class="w3-container w3-blue">
<h3 id ="today"></h3><hr>
<h2> ${zodiac_sign} the ${zodiacSymbol(zodiac_sign)}</h2>
</header>

<div class="w3-container">
<h3 class="zodiacRead"> ${
  zodiacTraits[zodiac_sign]
} Kerry Ward Cosmopolitan online.</h3>
</div>

<footer class="w3-container w3-blue">
  <h5>
  <div class="cheer">
  <canvas id="confettiCanvas" width="2px" height="10px"> </canvas> <button  id="confettiBtn" class="btn btn-success btn-lg bold p-3"> Celebrate!!! </button>
   </div>
  </h5>
</footer>
</div>
</div>
`;

// Filter the month players to get the ones whose birthday (date) is today.
const birthdayPlayers = allSortedBirthdays.filter(getBirthday);

birthdayPlayers.forEach(
  (element) =>
    (playerDay += `
    <div class="w3-card-4 w3-border w3-border-black w3-${backColor(
      element.school
    )}" style="width:400px;padding:3px">
  <img class="w3-${picColor(
    element.school
  )} w3-round-large" src="../fotos/${switchSchoolPics(element.school)}/${
      element.id
    }.png" alt="Card image" style="width:100%">
    <div class="card-body">
      <h3 class="card-title"> ${element.fullName().toUpperCase()} </h3>
      <p class="card-text"><span class="${switchSchool(
        element.school
      )}">AGE:</span> ${age(element.birthDay)}</p>

      <p class="card-text"><span class="${switchSchool(
        element.school
      )}">SIGN:</span> ${findZodiacSign(
      new Date(element.birthDay).getDate(),
      new Date(element.birthDay).getMonth()
    )}

      <div class="mx-auto" style="width:100%"> <img class = "img-fluid" src="./images/vip/birthDay.png" alt="Pic" style="width:100%"> </div>
    </div>
  </div>
    `)
  /*
`
    
    <div class="w3-card-4 w3-center w3-padding w3-asphalt happy">
    <p class="w3-xlarge w3-${switchSchoolColor(element.school)}" style="text-shadow:1px 1px 0 #444"> ${element.school.toUpperCase()} </p>
    <div> <img class = "happy responsive" src="images/birthDay.png" alt="Pic" width="150px"> </div>
    <p>${element.fullName().toUpperCase()}</p>
    <img src="${switchSchoolPics(element.school)}/${element.id}.png" class="w3-${switchSchoolColor(element.school)} w3-circle" alt="Pic" width="140px">
    <p> <span class="w3-text-${switchSchoolColor(element.school)}">AGE:</span> ${age(element.birthDay)} </p>
    </div>  

`
*/
);

if (birthdayPlayers.length !== 0) {
  document.getElementById("birthday").innerHTML = `${zodiacDay} ${playerDay} `;
}
if (playerMonth !== " ") {
  document.getElementById("birthmonth").innerHTML = `${playerMonth}`;
}

const zodiacImage = `<img class="kzodiac-image image-fluid krounded-circle kborder kborder-dark" src="images/${zodiac_sign}.png" alt="Pic">`;

const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const longDateFormat = today.toLocaleString("en-US", options);

document.getElementById("today").innerText = `${longDateFormat}`;
