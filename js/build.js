
// &&&&&&&& PLAYERS  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
nav_data = `


<div class="w3-bar w3-black">
<a href="index.html" class="w3-bar-item w3-button w3-mobile"><i class="w3-text-green fa-solid fa-house"></i> HOME</a>
<a href="quotes.html" class="w3-bar-item w3-button w3-mobile"><i class="w3-text-orange fa-solid fa-quote-left"></i> QUOTES</a>
<a href="birthdays.html" class="w3-bar-item w3-button w3-mobile"><i class="w3-text-red fa-solid fa-cake-candles"></i> BIRTHDAYS</a>
<a href="sepos.html" class="w3-bar-item w3-button w3-mobile"><i class="w3-text-amber fa-solid fa-school"></i> SEPOSS</a>
<a href="provi.html" class="w3-bar-item w3-button w3-mobile"><i class="w3-text-light-blue fa-solid fa-cross"></i> PROVI</a>
<a href="att-pro.html" class="w3-bar-item w3-button w3-mobile"><i class="w3-text-light-blue fa-solid fa-user-group"></i> ATT-PROVI</a>
<a href="att-sep.html" class="w3-bar-item w3-button w3-mobile"><i class="w3-text-amber fa-solid fa-user-group"></i> ATT-SEPOSS</a>
</div> 
`;
  

header_data = `
<div class="w3-container w3-deep-purple w3-topbar w3-border-black">

<header >
        <h1 class="w3-center">
            <img src="images/logo.png" alt="TORNADO STARS VC LOGO" class="responsive" width="200px">  <span class="w3-xxlarge w3-container w3-lobster" style="text-shadow:1px 1px 0 #444">TORNADO STARS VOLLEYBALL ACADEMY</span>            </h1>
</header>

</div>
`;



    
    

    footer_data = `
        
        <footer class="w3-container w3-deep-purple w3-border w3-border-black w3-center w3-topbar w3-bottombar">
            
             <p>   &copy; <span id = "copyright"></span> TORNADO STARS VOLLEYBALL ACADEMY </p>
             <p class="w3-small"> (Established 2025 by SAMMY-99) </p>


        </footer>
    
    `;
   
  
    document.getElementById("header").innerHTML = `${(header_data)}`; 
    document.getElementById("navigation").innerHTML = `${(nav_data)}`; 
    
    document.getElementById("footer").innerHTML = `${(footer_data)}`; 
    document.getElementById("copyright").innerHTML = `${(new Date().getFullYear())}`; 


