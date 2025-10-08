

  
function u15players() {

  
const activePlayers = players.filter( 
  (player) => 
  player.active == "YES" 
  //&& new Date(player.birthDay).getDate() >= todayDate
  );

const seposActivePlayers = activePlayers.filter( 
    (player) => 
    player.school == "sepos"
    
    );

  const sep_u15 = seposActivePlayers.filter(
    (element) => 
      division(element.birthDay) === "U15 Player"
      );





      
      const topcard = `<p class="w3-xXlarge w3-win8-crimson"> U15 PLAYERS </p>`;
      
      let datacard = '';
  
      sep_u15.forEach(element => {
      datacard += 
      `
      <div class="w3-card-4 w3-border w3-border-red w3-center w3-padding w3-asphalt w3-quarter w3-container">
      <h3>${element.fullName().toUpperCase()}</h3>
    <img src="sepPics/${element.id}.png" class="w3-${myColor(element.school)} w3-circle" alt="Pic" width="85px">
    <p>  <span class="w3-text-red">DOB:</span> ${fdate(element.birthDay)} </p>
      <p>  <span class="w3-text-red">AGE:</span> ${age(element.birthDay)} </p>
    <a href="sepDob/${element.id}.pdf" target="_blank"><button class="w3-btn w3-round-large w3-amber">My Birth Certificate</button> </a>
      </div>
      `
      
      
          
      
          /*
          datacard += '<div class="profile-info">'; 
          
              datacard += '<div>'; 
              datacard += '<p> <span class="sep"> DOB: </span> '  + element.fdate() + '</p>';    
              datacard += '<p> <span class="sep"> Age: </span> ' + element.age() + '</p>';
                  datacard += '<p> <span class="sep"> Div: </span> ' + element.division() + '</p>';
                  datacard += '<p> <span class="sep"> POS: </span> '  + element.position + '</p>';
              datacard += '</div>';

              datacard += '<div>'; 
                  datacard += '<p> <span class="sep"> Aka: </span> ' + element.nickname + '</p>';
                  datacard += '<p> <span class="sep"> Num: </span> ' + element.number + '</p>';
                  datacard += '<p> <span class="sep"> BC: </span> <a href="dob/'+ element.bpaper + '" target="_blank"><button><i class="fa-solid fa-certificate"></i> CLICK </button> </a></p>';
      
                  
              datacard += '</div>';

          
          
          
          
          
          
          
          datacard += '</div>';
      
      
      datacard += '</div>';
      */
      
  });
  
  document.getElementById("headcard").innerHTML = topcard;
  document.getElementById("players").innerHTML = `<div class="w3-flex" style="gap:25px;  flex-flow:row wrap"> ${datacard} </div>`;
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
      player.school == "sepos"
      
      );
  
    const pro_u17 = proviActivePlayers.filter(
      (element) => 
        division(element.birthDay) === "U17 Player"
        );
  
  
  
        
  
        
        const topcard = `<p class="w3-xXlarge w3-win8-crimson"> U17 PLAYERS </p>`;
        
        let datacard = '';
    
        pro_u17.forEach(element => {
        datacard += 
        `
        <div class="w3-card-4 w3-border w3-border-red w3-center w3-padding w3-asphalt w3-quarter w3-container">
        <h3>${element.fullName().toUpperCase()}</h3>
      <img src="sepPics/${element.id}.png" class="w3-${myColor(element.school)} w3-circle" alt="Pic" width="85px">
      <p>  <span class="w3-text-red">DOB:</span> ${fdate(element.birthDay)} </p>
      <p>  <span class="w3-text-red">AGE:</span> ${age(element.birthDay)} </p>
      <a href="sepDob/${element.id}.pdf" target="_blank"><button class="w3-btn w3-round-large w3-amber">My Birth Certificate</button> </a>
        </div>
        `
        
        
            
        
            
        
    });
    
    document.getElementById("headcard").innerHTML = topcard;
    document.getElementById("players").innerHTML = `<div class="w3-flex" style="gap:25px;  flex-flow:row wrap"> ${datacard} </div>`;
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
        player.school == "sepos"
        
        );
    
      const pro_u20 = proviActivePlayers.filter(
        (element) => 
          division(element.birthDay) === "Open Player"
          );
    
    
    
    
    
          
          const topcard = `<p class="w3-xXlarge w3-win8-crimson"> OPEN PLAYERS </p>`;
          
          let datacard = '';
      
          pro_u20.forEach(element => {
          datacard += 
          `
          <div class="w3-card-4 w3-border w3-border-red w3-center w3-padding w3-asphalt w3-quarter w3-container">
          <h3>${element.fullName().toUpperCase()}</h3>
      <img src="sepPics/${element.id}.png" class="w3-${myColor(element.school)} w3-circle" alt="Pic" width="85px">
      <p>  <span class="w3-text-red">DOB:</span> ${fdate(element.birthDay)} </p>
      <p>  <span class="w3-text-red">AGE:</span> ${age(element.birthDay)} </p>
        <a href="sepDob/${element.id}.pdf" target="_blank"><button class="w3-btn w3-round-large w3-amber">My Birth Certificate</button> </a>
          </div>
          `
          
          
              
          
              
          
      });
      
      document.getElementById("headcard").innerHTML = topcard;
      document.getElementById("players").innerHTML = `<div class="w3-flex" style="gap:25px;  flex-flow:row wrap"> ${datacard} </div>`;
      return ;
    
    }


document.getElementById("btn15").addEventListener("click", u15players);
document.getElementById("btn17").addEventListener("click", u17players);
document.getElementById("btn20").addEventListener("click", u20players);