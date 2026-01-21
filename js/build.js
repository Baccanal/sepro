// &&&&&&&& PLAYERS  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

header_data = `
<header class="header w3-deep-purple ">
  
    <div class="w3-col m2 logo padding-5  w3-flex" style="align-items:center"> 
      <img class="w3-image" src="../images/vip/logo.png" alt="TORNADO LOGO">  
    </div>

    <div class="w3-col m10 club padding-3 w3-flex" style="align-items:center ; justify-content:center; flex-direction:column">
      <p class="clubName"> TORNADO STARS VOLLEYBALL ACADEMY </p>
      <p class="clubMotto w3-cobalt w3-border w3-border-red"><i class="ri-star-fill w3-text-red"></i> &quot Out Of Strife, Stars Arise &quot <i class="ri-star-fill w3-text-red"></i></p> 
    </div>    
  
</header>
`;

footer_data = `
        <footer class="footer w3-deep-purple">
             <p>  TORNADO STARS &copy; ${new Date().getFullYear()}. <span class="w3-small"> Established 2025 by SAMMY-99 </span></p>
        </footer>
    `;

nav_data = `
<div class="w3-bar w3-black">
<a href="index.html" class="w3-bar-item w3-button w3-mobile w3-metro-dark-blue"><i class="ri-home-heart-fill w3-text-red"></i>  TORNADO STARS  <i class="ri-star-line w3-text-red"></i>  </a>
<a href="birthdays.html" class="w3-bar-item w3-button w3-mobile w3-right"><i class="ri-cake-2-fill w3-text-purple"></i>  Birthdays</a>
<div class="w3-dropdown-click w3-mobile w3-right">
  <button onclick="myPlayers()" class="w3-button"><i class="ri-team-fill w3-text-red">  </i>Players <i class="ri-arrow-down-s-fill"></i></button>
  <div id="play" class="w3-dropdown-content w3-bar-block w3-dark-grey">
    <a href="provi.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-cross-line w3-text-light-blue"></i>  PRO Players</a>
    <a href="sepos.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-shield-star-line w3-text-amber"></i>  SEP Players</a>
    
  </div>
</div>

<div class="w3-dropdown-click w3-mobile w3-right">
  <button onclick="myAttendance()" class="w3-button"><i class="ri-calendar-check-line w3-text-blue"></i>  Attendance <i class="ri-arrow-down-s-fill"></i></button>
  <div id="attend" class="w3-dropdown-content w3-bar-block w3-dark-grey">
    <a href="proAtt.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-cross-line w3-text-light-blue"></i>  PRO Attendance</a>
    <a href="sepAtt.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-shield-star-line w3-text-amber"></i>  SEP Attendance</a>
    
  </div>
  </div>

  <div class="w3-dropdown-click w3-mobile w3-right">
  <button onclick="myExtras()" class="w3-button"><i class="ri-archive-drawer-line w3-text-green"></i>  Extras <i class="ri-arrow-down-s-fill"></i></i></button>
  <div id="extra" class="w3-dropdown-content w3-bar-block w3-dark-grey">
    <a href="quotes.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-chat-quote-line w3-text-teal"></i>  Sport Quotes</a>
    <a href="jokes.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-emotion-laugh-line w3-text-deep-orange"></i>  Sport Riddles</a>
    <a href="photos.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-image-fill w3-text-yellow"></i>  Photo Gallery</a>
    <a href="videos.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-movie-line w3-text-cyan"></i>  Special Videos</a>
    <a href="memory.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-game-line w3-text-pink"></i>  Memory Game</a>
    <a href="dashboard.html" class="w3-bar-item w3-button w3-mobile"><i class="ri-bar-chart-2-fill w3-text-aqua"></i>  Dashboard</a>


  </div>
  </div>

</div>
</div>
    
    `;

//document.getElementById("head").innerHTML = `${(head_data)}`;
document.getElementById("header").innerHTML = `${header_data}`;
document.getElementById("navigation").innerHTML = `${nav_data}`;

document.getElementById("footer").innerHTML = `${footer_data}`;

function myPlayers() {
  var x = document.getElementById("play");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function myAttendance() {
  var x = document.getElementById("attend");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function myExtras() {
  var x = document.getElementById("extra");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}
