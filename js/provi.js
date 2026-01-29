const activePlayers = players.filter(
  (player) => player.active == "YES"
  //&& new Date(player.birthDay).getDate() >= todayDate
);

const proviActivePlayers = activePlayers.filter(
  (player) => player.school == "Provi"
);

function u15players() {
  const pro_u15 = proviActivePlayers.filter(
    (element) => division(element.birthDay) === "U15 Player"
  );

  const topcard = `U15 PLAYERS`;
  let datacard = "";

  pro_u15.forEach((element) => {
    datacard += `
    <div class="w3-card-4 w3-border w3-border-black w3-${backColor(
      element.school
    )}" style="width:300px;padding:3px">
  <img class="w3-${picColor(
    element.school
  )} w3-round-large" src="/fotos/${switchSchoolPics(element.school)}/${
      element.id
    }.png" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-title">${element.fullName().toUpperCase()}</h4>
          <p>  <span class="pro card-text">DOB:</span> ${fdate(
            element.birthDay
          )} </p>
          <p>  <span class="pro card-text">AGE:</span> ${age(
            element.birthDay
          )} </p>
          <!-- <a href="${switchSchoolDob(element.school)}/${
      element.id
    }.pdf" target="_blank" class="btn btn-primary">My Birth Certificate</a> -->
        </div>
      </div>
        `;
  });

  document.getElementById("headcard").innerHTML = topcard;
  document.getElementById("players").innerHTML = ` ${datacard} `;
}

function u17players() {
  const pro_u17 = proviActivePlayers.filter(
    (element) => division(element.birthDay) === "U17 Player"
  );

  const topcard = `U17 PLAYERS`;

  let datacard = "";

  pro_u17.forEach((element) => {
    datacard += `
    <div class="w3-card-4 w3-border w3-border-black w3-${backColor(
      element.school
    )}" style="width:300px;padding:3px">
  <img class="w3-${picColor(
    element.school
  )} w3-round-large" src="/fotos/${switchSchoolPics(element.school)}/${
      element.id
    }.png" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-title">${element.fullName().toUpperCase()}</h4>
          <p>  <span class="pro card-text">DOB:</span> ${fdate(
            element.birthDay
          )} </p>
          <p>  <span class="pro card-text">AGE:</span> ${age(
            element.birthDay
          )} </p>
          <!-- <a href="${switchSchoolDob(element.school)}/${
      element.id
    }.pdf" target="_blank" class="btn btn-primary">My Birth Certificate</a> -->
        </div>
      </div>
        `;
  });

  document.getElementById("headcard").innerHTML = topcard;
  document.getElementById("players").innerHTML = `${datacard}`;
  return;
}

function u20players() {
  const pro_u20 = proviActivePlayers.filter(
    (element) => division(element.birthDay) === "U20 Player"
  );

  const topcard = `OPEN PLAYERS`;

  let datacard = "";

  pro_u20.forEach((element) => {
    datacard += `
    <div class="w3-card-4 w3-border w3-border-black w3-${backColor(
      element.school
    )}" style="width:300px;padding:3px">
  <img class="w3-${picColor(
    element.school
  )} w3-round-large" src="/fotos/${switchSchoolPics(element.school)}/${
      element.id
    }.png" alt="Card image" style="width:100%">
        <div class="card-body">
          <h4 class="card-title">${element.fullName().toUpperCase()}</h4>
          <p>  <span class="pro card-text">DOB:</span> ${fdate(
            element.birthDay
          )} </p>
          <p>  <span class="pro card-text">AGE:</span> ${age(
            element.birthDay
          )} </p>
          <!-- <a href="${switchSchoolDob(element.school)}/${
      element.id
    }.pdf" target="_blank" class="btn btn-primary">My Birth Certificate</a> -->
        </div>
      </div>
        `;
  });

  document.getElementById("headcard").innerHTML = topcard;
  document.getElementById("players").innerHTML = `${datacard}`;
  return;
}

document.getElementById("btn15").addEventListener("click", u15players);
document.getElementById("btn17").addEventListener("click", u17players);
document.getElementById("btn20").addEventListener("click", u20players);
