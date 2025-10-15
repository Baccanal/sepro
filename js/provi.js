

  
function u15players() {

  
const activePlayers = players.filter( 
  (player) => 
  player.active == "YES" 
  //&& new Date(player.birthDay).getDate() >= todayDate
  );

const proviActivePlayers = activePlayers.filter( 
    (player) => 
    player.school == "Provi"
    
    );

  const pro_u15 = proviActivePlayers.filter(
    (element) => 
      division(element.birthDay) === "U15 Player"
      );

      
      const topcard = `<p class="w3-XXlarge w3-light-blue"> U15 PLAYERS </p>`;      
      let datacard = '';
  
      pro_u15.forEach(element => {
      datacard += 
      `
      <div class="w3-card-4 w3-border w3-border-cyan w3-center w3-padding w3-asphalt w3-quarter w3-container picture">
      <h3>${element.fullName().toUpperCase()}</h3>
    <img src="${switchSchoolPics(element.school)}/${element.id}.png" class="w3-${switchSchoolColor(element.school)} w3-circle" alt="Pic" width="150px">
    <p>  <span class="w3-text-cyan">DOB:</span> ${fdate(element.birthDay)} </p>
      <p>  <span class="w3-text-cyan">AGE:</span> ${age(element.birthDay)} </p>
    <a href="${switchSchoolDob(element.school)}/${element.id}.pdf" target="_blank"><button class="w3-btn w3-round-large w3-light-blue">My Birth Certificate</button> </a>
      </div>
      `   
      
  });
  
  document.getElementById("headcard").innerHTML = topcard;
  document.getElementById("players").innerHTML = `<div class="wrapper"> ${datacard} </div>`;
  return ;

}








function u17players() {

  const activePlayers = players.filter( 
    (player) => 
    player.active == "YES" 
    //&& new Date(player.birthDay).getDate() >= todayDate
    );
  
  const proviActivePlayers = activePlayers.filter( 
      (player) => 
      player.school == "Provi"
      
      );
  
    const pro_u17 = proviActivePlayers.filter(
      (element) => 
        division(element.birthDay) === "U17 Player"
        );
  
        const topcard = `<p class="w3-XXlarge w3-light-blue"> U17 PLAYERS </p>`;
        
        let datacard = '';
    
        pro_u17.forEach(element => {
        datacard += 
        `
        <div class="w3-card-4 w3-border w3-border-white w3-center w3-padding w3-asphalt w3-quarter w3-container picture">
        <h3>${element.fullName().toUpperCase()}</h3>
      <img src="${switchSchoolPics(element.school)}/${element.id}.png" class="w3-${switchSchoolColor(element.school)} w3-circle" alt="Pic" width="150px">
      <p>  <span class="w3-text-cyan">DOB:</span> ${fdate(element.birthDay)} </p>
      <p>  <span class="w3-text-cyan">AGE:</span> ${age(element.birthDay)} </p>
      <a href="${switchSchoolDob(element.school)}/${element.id}.pdf" target="_blank"><button class="w3-btn w3-round-large w3-light-blue">My Birth Certificate</button> </a>
        </div>
        `
     
    });
    
    document.getElementById("headcard").innerHTML = topcard;
    document.getElementById("players").innerHTML = `<div class="wrapper"> ${datacard} </div>`;
    return ;
  
  }




  function u20players() {

  
    const activePlayers = players.filter( 
      (player) => 
      player.active == "YES" 
      //&& new Date(player.birthDay).getDate() >= todayDate
      );
    
    const proviActivePlayers = activePlayers.filter( 
        (player) => 
        player.school == "Provi"
        
        );
    
      const pro_u20 = proviActivePlayers.filter(
        (element) => 
          division(element.birthDay) === "Open Player"
          );
    
          
          const topcard = `<p class="w3-XXlarge w3-light-blue"> OPEN PLAYERS </p>`;
          
          let datacard = '';
      
          pro_u20.forEach(element => {
          datacard += 
          `
          <div class="w3-card-4 w3-border w3-border-white w3-center w3-padding w3-asphalt w3-quarter w3-container picture">
          <h3>${element.fullName().toUpperCase()}</h3>
        <img src="${switchSchoolPics(element.school)}/${element.id}.png" class="w3-${switchSchoolColor(element.school)} w3-circle" alt="Pic" width="150px">
        <p>  <span class="w3-text-cyan">DOB:</span> ${fdate(element.birthDay)} </p>
        <p>  <span class="w3-text-cyan">AGE:</span> ${age(element.birthDay)} </p>
        <a href="${switchSchoolDob(element.school)}/${element.id}.pdf" target="_blank"><button class="w3-btn w3-round-large w3-light-blue">My Birth Certificate</button> </a>
          </div>
          `
           
      });
      
      document.getElementById("headcard").innerHTML = topcard;
      document.getElementById("players").innerHTML = `<div class="wrapper"> ${datacard} </div>`;
      return ;
    
    }

document.getElementById("btn15").addEventListener("click", u15players);
document.getElementById("btn17").addEventListener("click", u17players);
document.getElementById("btn20").addEventListener("click", u20players);