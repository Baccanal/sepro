const   houseColor = {
    Martin:"green",
    Cipriani:"red",
    Quevado:"yellow",
    Rienzi:"orange",
    Butler:"blue",

    St_Patrick:"green",
    St_Rose:"red",
    St_Gabriel:"yellow",
    St_Cecilia:"purple",
    St_Thomas:"blue"
}

const monthNames = [
    {
        short:'Jan',
        long: 'January'
    },
    {
        short:"Feb",
        long: "February",
    },
    {
        short:"Mar",
        long: "March"
    },
    {
        short:"Apr",
        long: "April"
    },
    {
        short:"May",
        long: "May"
    },
    {
        short:"Jun",
        long: "June"
    },
    {
        short:"Jul",
        long: "July"
    },
    {
        short:"Aug",
        long: "August"
    },
    {
        short:"Sep",
        long: "September"
    },
    {
        short:"Oct",
        long: "October"
    },
    {
        short:"Nov",
        long: "November"
    },
    {
        short:"Dec",
        long: "December"
    },

    
];

function myBirthMonthDay(dob){

    const x = dob.split("-");    
    const bday = x[2];
     const bmonth = x[1]-1;
     const byear = x[0];

     return `${monthNames[bmonth].short} ${bday}`

}

function findZodiacSign(day, month) {
      
    if((month == 0 && day <= 19) || (month == 11 && day >=22)) {
      return "Capricorn";
    } else if ((month == 0 && day >= 20) || (month == 1 && day <= 18)) {
      return "Aquarius";
    } else if((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
      return "Pisces";
    } else if((month == 2 && day >= 21) || (month == 3 && day <= 19)) {
      return "Aries";
    } else if((month == 3 && day >= 20) || (month == 4 && day <= 20)) {
      return "Taurus";
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      return "Gemini";
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
      return "Cancer";
    } else if((month == 6 && day >= 23) || (month == 7 && day <= 22)) {
      return "Leo";
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      return "Virgo";
    } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      return "Libra";
    } else if((month == 9 && day >= 23) || (month == 10 && day <= 21)) {
      return "Scorpio";
    } else if((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
      return "Sagittarius";
    }
  };

  function zodiacSymbol(sign){
    let zee;
        switch (sign) {
        case 'Aries':
            zee = '<i>Ram</i>';
            break;
        case 'Taurus':
            zee = '<i>Bull</i>';
            break;
        case 'Gemini':
            zee = "<i>Twins</i> ";
            break;
        case 'Cancer':
            zee = "<i>Crab</i> ";
            break;
        case 'Leo':
            zee = "<i>Lion</i> ";
            break;
        
        case  'Virgo':
            zee = "<i>Virgin</i> ";
            break;

        case  'Libra':
            zee = "<i>Balance</i> ";
            break;
        
        case  'Scorpio':
            zee = "<i>Scorpion</i> ";
            break;

        case  'Sagittarius':
            zee = "<i>Archer</i> ";
            break;

        case  'Capricorn':
            zee = "<i>Goat</i> ";
            break;

        case  'Aquarius':
            zee = "<i>Water Bearer </i> ";
            break;

        case  'Pisces':
            zee = "<i>Fish</i> ";
            break;

                                    
            default:
        zee = "No value found";
        }
         
        return zee;
  }




  function zodiacTime(sign){
    let zee;
        switch (sign) {
        case 'Aries':
            zee = '<i>Mar21-Apr19</i>';
            break;
        case 'Taurus':
            zee = '<i>Apr20-May20</i>';
            break;
        case 'Gemini':
            zee = "<i>May21-Jun20</i> ";
            break;
        case 'Cancer':
            zee = "<i>Jun21-Jul22</i> ";
            break;
        case 'Leo':
            zee = "<i>Jul23-Aug22</i>";
            break;
        
        case  'Virgo':
            zee = "<i>Aug23-Sep22</i></i> ";
            break;

        case  'Libra':
            zee = "<i>Sep22-Oct22</i> ";
            break;
        
        case  'Scorpio':
            zee = "<i>Oct23-Nov21</i> ";
            break;

        case  'Sagittarius':
            zee = "<i>Nov22-Dec21</i>";
            break;

        case  'Capricorn':
            zee = "<i>Dec22-Jan19</i>";
            break;

        case  'Aquarius':
            zee = "<i>Jan20-Feb18</i>";
            break;

        case  'Pisces':
            zee = "<i>Feb19-Mar20</i> ";
            break;

                                    
            default:
        zee = "No value found";
        }
         
        return zee;
  }


function age(dob) {
    
            
    const x = dob.split("-");  
    const yearDob = x[0];
    const monthDob = x[1];
    const dayDob = x[2];

    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth() + 1;
    const dayNow = dateNow.getDate();

    let ageDay = 0; let ageMonth = 0; let ageYear = 0;
    let feb = 0;
    if(yearNow % 4 == 0){
    feb = 29;
    }else {feb = 28;}
    const daysInPreviousMonth = [31,31,feb,31,30,31,30,31,31,30,31,30];



    //AGE YEAR

    if( (monthNow > monthDob)  ||  (monthNow == monthDob  && dayNow >= dayDob) ) {
    ageYear = yearNow - yearDob;
     }else ageYear = yearNow - yearDob -1;

    //console.log(ageYear);

    //case-1 birthday has not yet happened
    if( (monthNow < monthDob) && (dayNow >= dayDob) ){
     ageMonth = 12 - (monthDob - monthNow);
     }else if((monthNow <= monthDob) && (dayNow < dayDob)){
     ageMonth = 12 - (monthDob - monthNow) -1;
     }else if((monthNow >= monthDob) && (dayNow >= dayDob)){
     ageMonth = monthNow - monthDob;
    }else if((monthNow >= monthDob) && (dayNow < dayDob)){
    ageMonth = monthNow - monthDob - 1;
     }


    //console.log(ageMonth);


    //AGE DAYS
    //CASE-1 => IF THE MONTH IS ALREADY COUNTED
     if(dayNow >= dayDob){
     ageDay = dayNow - dayDob;
     }else {
    ageDay = dayNow + (daysInPreviousMonth[monthNow] - dayDob)
     }

    //console.log(ageDay);

   let ys = ""; let ms = ""; let ds= "";

   if(ageYear == 1){
    ys = "yr";
    }else{ys = "yrs";}

    if(ageMonth == 1){
            ms = "mth";
            }else{ms = "mths";}
    
    if(ageDay == 1){
            ds = "day";
            }else{ds = "days";}

return `${ageYear} ${ys}, ${ageMonth} ${ms}, ${ageDay} ${ds}.`

}





//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
function division(dob) {
    
    let level;
    const limit_u15 = 2011;
    const limit_u17 = 2009;
    const x = dob.split("-");    
    const byear = x[0];

    if (byear >= limit_u15){level =  "U15 Player" }
    else if (byear >= limit_u17){level =  "U17 Player" }
    else{level =  "Open Player" }
    return level;
}


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function fdate(dob) {
    const x = dob.split("-");    
   const bdays = x[2];
    const bmonths = x[1]-1;
    const byear = x[0];

   const ctrldob = new Date(byear, bmonths, bdays);
   return ctrldob.toDateString();

}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function switchSchoolColor(school) {
    if (school.toUpperCase() == "PROVI"){return "light-blue";
  
} else if (school.toUpperCase() == "SEPOS"){return "amber";}

}

function switchSchoolPics(school) {
    if (school.toUpperCase() == "PROVI"){return "proPics";
  
} else if (school.toUpperCase() == "SEPOS"){return "sepPics";}

}