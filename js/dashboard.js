//**********SEPRO DIVISIONS********************* */

const pro_u15 = players.filter(
  (player) =>
    player.active === "YES" &&
    player.school === "Provi" &&
    division(player.birthDay) === "U15 Player"
);

document.getElementById("pro15").innerText = pro_u15.length;

const pro_u17 = players.filter(
  (player) =>
    player.active === "YES" &&
    player.school === "Provi" &&
    division(player.birthDay) === "U17 Player"
);

//console.log(pro_u15);

document.getElementById("pro17").innerText = pro_u17.length + pro_u15.length;

const pro_u20 = players.filter(
  (player) =>
    player.active === "YES" &&
    player.school === "Provi" &&
    division(player.birthDay) === "Open Player"
);

document.getElementById("pro20").innerText =
  pro_u17.length + pro_u15.length + pro_u20.length;
document.getElementById("proTotal").innerText =
  pro_u15.length + pro_u17.length + pro_u20.length;

const sep_u15 = players.filter(
  (player) =>
    player.active === "YES" &&
    player.school === "sepos" &&
    division(player.birthDay) === "U15 Player"
);

document.getElementById("sep15").innerText = sep_u15.length;

const sep_u17 = players.filter(
  (player) =>
    player.active === "YES" &&
    player.school === "sepos" &&
    division(player.birthDay) === "U17 Player"
);

document.getElementById("sep17").innerText = sep_u15.length + sep_u17.length;

const sep_u20 = players.filter(
  (player) =>
    player.active === "YES" &&
    player.school === "sepos" &&
    division(player.birthDay) === "Open Player"
);

document.getElementById("sep20").innerText =
  sep_u15.length + sep_u17.length + sep_u20.length;
document.getElementById("sepTotal").innerText =
  sep_u15.length + sep_u17.length + sep_u20.length;

const proDivisionsCtx = document
  .getElementById("proDivisionsChart")
  .getContext("2d");

new Chart(proDivisionsCtx, {
  type: "bar",
  data: {
    labels: ["U15", "U17", "Open", "Total"],
    datasets: [
      {
        label: "PRO Volleyball",
        data: [
          pro_u15.length,
          pro_u17.length,
          pro_u20.length,
          pro_u15.length + pro_u17.length + pro_u20.length,
        ],
        borderWidth: 1,
        backgroundColor: "#00A9EF",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const sepDivisionsCtx = document
  .getElementById("sepDivisionsChart")
  .getContext("2d");

new Chart(sepDivisionsCtx, {
  type: "bar",
  data: {
    labels: ["U15", "U17", "Open", "Total"],
    datasets: [
      {
        label: "SEP Volleyball",
        data: [
          sep_u15.length,
          sep_u17.length,
          sep_u20.length,
          sep_u15.length + sep_u17.length + sep_u20.length,
        ],
        borderWidth: 1,
        backgroundColor: "#660033",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//*********************** */

const sep_Butler = players.filter((player) => player.house === "Butler");
const numButler = sep_Butler.length;

const sep_Cipriani = players.filter((player) => player.house === "Cipriani");
const numCipriani = sep_Cipriani.length;

const sep_Martin = players.filter((player) => player.house === "Martin");
const numMartin = sep_Martin.length;

const sep_Rienzi = players.filter((player) => player.house === "Rienzi");
const numRienzi = sep_Rienzi.length;

const sep_Quevado = players.filter((player) => player.house === "Quevado");
const numQuevado = sep_Quevado.length;

const pro_stcecelia = players.filter((player) => player.house === "St.Cecilia");
const numstcecelia = pro_stcecelia.length;

const pro_stgabriel = players.filter((player) => player.house === "St.Gabriel");
const numstgabriel = pro_stgabriel.length;

const pro_stpatrick = players.filter((player) => player.house === "St.Patrick");
const numstpatrick = pro_stpatrick.length;

const pro_strose = players.filter((player) => player.house === "St.Rose");
const numstrose = pro_strose.length;

const pro_stthomas = players.filter((player) => player.house === "St.Thomas");
const numstthomas = pro_stthomas.length;

//************HOUSES***************** */

function seproNames(schoolName) {
  let houseResults;
  let selectValue;

  /*
    if(schoolName == "sep")
    {
        selectValue = sepHouse.value;
        //console.log(selectValue);
        document.getElementById('sepHouseColor').style.color = houseColor[selectValue]; 
    }
    else if(schoolName == "pro")
    {
        selectValue = proHouse.value;
        document.getElementById('proHouseColor').style.color = houseColor[selectValue]; 
    }
    */

  if (schoolName == "sep") {
    selectValue = sepHouse.value;
    //console.log(selectValue);
    document.getElementById(
      "sepHouseColor"
    ).innerHTML = `<img src="images/houses/${selectValue}.png" class="w3-image" alt="School house Pic" style="width:150px">`;
  } else if (schoolName == "pro") {
    selectValue = proHouse.value;
    document.getElementById(
      "proHouseColor"
    ).innerHTML = `<img src="images/houses/${selectValue}.png" class="w3-image" alt="School house Pic" style="width:170px">`;
  }

  houseResults = players.filter((player) => player.house === selectValue);
  let bar;
  schoolName == "sep" ? (bar = "w3-amber") : (bar = "w3-blue");
  let toScreen = `
        
        <div class="table-responsive-sm w3-center">          
        <table class="w3-table w3-border w3-centered ">
          <thead>
            <tr class="${bar}">
              <th>Id</th>
              <th>Name</th>
              <th>Division</th>
              
              
            </tr>
          </thead>
          <tbody>
            
            `;

  houseResults.forEach(
    (player) =>
      (toScreen += `
                <tr>
                <td>${player.id}</td>
                <td>${player.fullName()}</td>
                <td>${division(player.birthDay)}</td>
                </tr>
                `)
  );

  toScreen += `  
          </tbody>
        </table>
    </div>
        `;

  if (schoolName == "pro") {
    document.getElementById("proHouseNames").innerHTML = toScreen;
  } else if (schoolName == "sep") {
    bar = "w3-amber";
    document.getElementById("sepHouseNames").innerHTML = toScreen;
  }
}

//**********Charts */

const proctx = document.getElementById("proHouseChart").getContext("2d");

new Chart(proctx, {
  type: "pie",
  data: {
    labels: [
      "St. Cecelia",
      "St. Gabriel",
      "St. Patrick",
      "St. Rose",
      "St. Thomas",
    ],
    datasets: [
      {
        label: "PRO Volleyball",
        data: [
          `${numstcecelia}`,
          numstgabriel,
          numstpatrick,
          numstrose,
          numstthomas,
        ],
        data2: ["10%", "10%", "10%", "10%", "10%"],
        borderWidth: 3,
        backgroundColor: [
          "#6A38A0",
          "#FFFF00",
          "#0B6B66",
          "#FF0000",
          "#0000FF",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          let percentage =
            (
              (value / context.chart._metasets[context.datasetIndex].total) *
              100
            ).toFixed(1) + "%";
          return percentage + "\n" + value;
        },
        color: "#000",
        font: {
          size: 14,
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});

const sepctx = document.getElementById("sepHouseChart").getContext("2d");

new Chart(sepctx, {
  type: "pie",
  data: {
    labels: ["Butler", "Cipriani", "Martin", "Rienzi", "Quevado"],
    datasets: [
      {
        label: "SEP Volleyball",
        data: [numButler, numCipriani, numMartin, numRienzi, numQuevado],
        borderWidth: 3,
        backgroundColor: [
          "#0000FF",
          "#FF0000",
          "#0B6B66",
          "#F96407",
          "#FFFF00",
        ],
        borderColor: "#FFF",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          let percentage =
            (
              (value / context.chart._metasets[context.datasetIndex].total) *
              100
            ).toFixed(1) + "%";
          return percentage + "\n" + value;
        },
        color: "#000",
        font: {
          size: 14,
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});
