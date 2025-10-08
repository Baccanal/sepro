
// &&&&&&&& PLAYERS  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

class Player {

        constructor(_fname, _lname, _dob, _id,_pic, _nickname, _bpaper, _position, _number, _house, _klass) {
            this.fname = _fname;
            this.lname = _lname;
            this.id = _id;
            this.dob = _dob;
            this.pic = _pic;
            this.nickname = _nickname;
            this.bpaper = _bpaper;
            this.position = _position;
            this.number = _number;
            this.house = _house;
            
            this.klass = _klass;
            
        }
    
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$         
        age() {
    
            
                const x = this.dob.split("-");  
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
                        ms = "mt";
                        }else{ms = "mts";}
                
                if(ageDay == 1){
                        ds = "day";
                        }else{ds = "days";}
    
            return `${ageYear} ${ys}, ${ageMonth} ${ms} and ${ageDay} ${ds}`
        
        }

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
        division() {
    
            let level;
            const limit_u15 = 2011;
            const limit_u17 = 2009;
            const x = this.dob.split("-");    
            const byear = x[0];
    
            if (byear >= limit_u15){level =  "U15 Player" }
            else if (byear >= limit_u17){level =  "U17 Player" }
            else{level =  "Open Player" }
            return level;
        }


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    
        fdate() {
            const x = this.dob.split("-");    
           const bdays = x[2];
            const bmonths = x[1]-1;
            const byear = x[0];
    
           const ctrldob = new Date(byear, bmonths, bdays);
           return ctrldob.toDateString();
    
        }
    
}




//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


const playerSep1001 = new Player("Daejanique", "Holder", "2008-11-08","Sep1001", "Sep1001.png", "&quotDaejan&quot","Sep1001.pdf", "Blocker/Defense", 19, "Martin", "4A2");
const playerSep1002 = new Player("Keira", "Davis", "2009-04-01", "Sep1002", "Sep1002.png","&quotFavorite&quot","Sep1001.pdf","Setter/Spiker/Defense", 12, "Rienzi", "4A5");
const playerSep1003 = new Player("Christina", "McKenzie", "2009-04-03","Sep1003", "Sep1003.png","&quotPurples&quot","Sep1003.pdf", " Setter/Spiker/Defense ", 3, "Cipriani", "3A4");
const playerSep1004 = new Player("Sirmyyah", "Burke", "2009-04-05","Sep1004", "Sep1004.png","&quotMya&quot","Sep1004.pdf","Setter",5, "Martin", "Martin.png", "4A1");
const playerSep1005 = new Player("Shiphrah", "Alleyne", "2009-12-11","Sep1005", "Sep1005.png","&quotFira&quot","Sep1005.pdf", "Setter/Spiker/Defense",11, "Quevado", "4A5");
const playerSep1006 = new Player("Sarai", "Cooper", "2010-02-27","Sep1006", "Sep1006.png", "&quotCooper&quot","Sep1006.pdf", "Blocker/Spiker",9, " ", "3A4");
const playerSep1007 = new Player("Kenyia", "Martin", "2010-09-17","Sep1007", "Sep1007.png","&quotNyia&quot","Sep1007.pdf", " - ",  17, "Martin", "3A3");
const playerSep1008 = new Player("Anella", "Browne", "2008-11-06","Sep1008", "Sep1008.png","&quotNella&quot","Sep1008.pdf", " Server ", 0, "Butler", "4A5");
const playerSep1009 = new Player("Kayla", "Walker", "2010-06-08","Sep1009", "Sep1009.png","&quotWalker&quot","Sep1009.pdf", "Setter/Libero", 8, "House", "3A3");
const playerSep1010 = new Player("Rachel", "Hernandez", "2010-11-23", "Sep1010", "Sep1010.png","&quotRachel&quot","Sep1010.pdf", " Setter/Defense ", 0, "House", "2A2");

const playerSep1011 = new Player("Safiya", "Joseph", "2008-11-16","Sep1011", "Sep1011.png","&quotFiya&quot","Sep1011.pdf", "Libero",16, "Rienzi",  "3A3");
const playerSep1012 = new Player("Naiesha", "Poyer", "2010-02-22","Sep1012", "Sep1012.png","&quotNatty&quot","Sep1012.pdf", "Server", 00, "House",  " ");
const playerSep1013 = new Player("Kareesa", "Alexander", "2009-11-11","Sep1013", "Sep1013.png","&quotCreasy&quot","Sep1013.pdf", "Setter", 00, "House", "3A2");
const playerSep1014 = new Player("Jenicia", "McFarlane", "2010-04-05", "Sep1014", "Sep1014.png","&quotJenicia&quot", "Sep1014.pdf", "Blocker/Spiker", 00, "Rienzi", "3A4");
const playerSep1015 = new Player("Sarah", "McLaren", "2008-12-05","Sep1015", "Sep1015.png","&quotSarah&quot","Sep1015.pdf", "Blocker",00, " ", "wh.png", "4A5");
const playerSep1016 = new Player("Chevelle", "Richards", "2012-04-03","Sep1016", "Sep1016.png","&quotChevelle&quot","Sep1016.pdf", " - ",2, "House", "1A4");
const playerSep1017 = new Player("Kelsey", "Bishop", "2012-03-15","Sep1017", "Sep1017.png","&quotKelsey&quot","Sep1017.pdf", "-",00, "House", "1A4");
const playerSep1018 = new Player("Isabella", "Lopez", "2012-08-30","Sep1018", "Sep1018.png","&quotIsa&quot","Sep1018.pdf", "-",00, "House",  "1A4");
const playerSep1019 = new Player("Adiola", "McHutchinson", "2012-08-07","Sep1019", "Sep1019.png","&quotAdiola&quot","Sep1019.pdf", "-",00, "House",  "1A4");
const playerSep1020 = new Player("Rayana", "Monsegue", "2012-01-27","Sep1020", "Sep1020.png","&quotRayana&quot","Sep1020.pdf", "-",00, "House", "1A4");

const playerSep1021 = new Player("Allissa", "Mark", "2010-07-24", "Sep1021", "Sep1021.png", "&quotAllissa&quot", "Sep1021.pdf", "4", 00, "House", "3A4");



const s_Array = [ 
        playerSep1001, playerSep1002, playerSep1003, playerSep1004, playerSep1005, playerSep1006, playerSep1007, playerSep1008, playerSep1009, playerSep1010,
        playerSep1011, playerSep1012, playerSep1013, playerSep1014, playerSep1015, playerSep1016, playerSep1017, playerSep1018, playerSep1019, playerSep1020, 
        playerSep1021
];



const s_sortedArray =  s_Array.sort(function(a,b) {
    
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);
    
        if (dateA < dateB) return 1;
        else if (dateA > dateB) return -1;
        return 0;
});



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


const playerPro1001 = new Player("Aaliyah", "McKain", "2011-1-03", "Pro1001", "Pro1001.png","&quotMcKain&quot","Pro1001.pdf", "Spiker",3, "St_Gabriel", "2G");
const playerPro1002 = new Player("Darielle", "McQueen", "2011-7-04", "Pro1002", "Pro1002.png", "&quotDari&quot", "Pro1002.pdf", "Spiker", 0, "St_Cecilia","2G");
const playerPro1003 = new Player("Aria", "Pedro", "2010-9-11", "Pro1003", "Pro1003.png", "&quotAri&quot","Pro1003.pdf", "Setter", 11, "St_Rose", "2G" );
const playerPro1004 = new Player("Arianna", "Howard", "2011-11-08", "Pro1004", "Pro1004.png", "&quotArianna&quot","Pro1004.pdf", "Setter", 22, "St_Cecilia",  "2L");
const playerPro1005 = new Player("Lee-Andra", "Rogers", "2011-09-10", "Pro1005", "Pro1005.png", "&quotLee&quot", "Pro1005.pdf", "Setter", 10, "St_Rose",  "2L"  );
const playerPro1006 = new Player("Tyesha", "Ross", "2011-1-09", "Pro1006", "Pro1006.png", "&quotRoss&quot", "Pro1006.pdf", "Spiker", 9, "St_Patrick",  "2L");
const playerPro1007 = new Player("Laila", "Smart", "2011-3-01", "Pro1007", "Pro1007.png", "&quotLala&quot", "Pro1007.pdf", "Spiker", 13, "St_Thomas", "2L");
const playerPro1008 = new Player("Sunaria", "Warner","2011-9-04", "Pro1008", "Pro1008.png", "&quotNari&quot", "Pro1008.pdf", "Spiker", 21, "St_Cecilia",  "2L");
const playerPro1009 = new Player("Quiana", "Neptune","2009-10-07", "Pro1009", "Pro1009.png", "&quotAna&quot", "Pro1009.pdf", "Spiker", 37, "St_Thomas",  "2M");
const playerPro1010 = new Player("Chelsea", "Pierre", "2011-6-23", "Pro1010", "Pro1010.png", "&quotChello&quot", "Pro1010.pdf", "Spiker", 8, "St_Patrick", "2M");

const playerPro1011 = new Player("Kelly", "Durity", "2009-2-25", "Pro1011", "Pro1011.png", "&quotKelly&quot", "Pro1011.pdf", "Setter", 0, "St_Thomas", "3G");
const playerPro1012 = new Player("Gabriela", "Matamoros", "2010-6-29", "Pro1012", "Pro1012.png", "&quotGabi&quot", "Pro1012.pdf", "Setter", 29, "St_Cecilia", "3M");
const playerPro1013 = new Player("Jourden", "Charles", "2009-6-28", "Pro1013", "Pro1013.png", "&quotJourden&quot", "Pro1013.pdf", "Spiker", 14, "St_Patrick", "4L");
const playerPro1014 = new Player("Johanna", "Jacky", "2009-5-01", "Pro1014", "Pro1014.png", "&quotJacky&quot", "Pro1014.pdf", "Spiker", 19, "St_Gabriel", "4L");
const playerPro1015 = new Player("Naima", "Pompey", "2009-8-30", "Pro1015", "Pro1015.png", "&quotNaima&quot", "Pro1015.pdf", "Spiker", 4, "St_Gabriel", "4L");
const playerPro1016 = new Player("Nakima", "Pompey", "2007-11-26", "Pro1016", "Pro1016.png", "&quotKima&quot", "Pro1016.pdf", "Setter", 6, "St_Cecilia", "5G");
const playerPro1017 = new Player("Micaela", "Grant", "2009-8-24", "Pro1017", "Pro1017.png", "&quotMicki&quot", "Pro1017.pdf", "Setter", 23, "St_Cecilia", "4M");
const playerPro1018 = new Player("Raniyah", "Seebaran", "2008-12-23", "Pro1018", "Pro1018.png", "&quotRere&quot", "Pro1018.pdf", "Spiker", 7, "St_Cecilia",  "4M");
const playerPro1019 = new Player("Makaina", "Seijas", "2007-09-08", "Pro1019", "Pro1019.png", "&quotSeijas&quot", "Pro1019.pdf", "Spiker", 5, " ",  "L6");
const playerPro1020 = new Player("Carissa", "Newton", "2007-9-28", "Pro1020", "Pro1020.png", "&quotRissa&quot", "Pro1020.pdf", "Spiker", 16, "St_Thomas",  "L6");

const playerPro1021 = new Player("Jonique", "McKenna", "2010-7-25", "Pro1021", "Pro1021.png", "&quotNique&quot", "Pro1021.pdf", "Spiker", 25, "St_Thomas", "3G");
const playerPro1022 = new Player("Alisha", "Hamlet", "2010-3-27", "Pro1022", "Pro1022.png", "&quotAlisha&quot", "Pro1022.pdf", "Spiker", 20, " ", "3G");
const playerPro1023 = new Player("Aalayna", "Gervais", "2009-8-28", "Pro1023", "Pro1023.png", "&quotGervais&quot", "Pro1023.pdf", "Spiker", 0, "St_Rose", "4M");
const playerPro1024 = new Player("Kayleigh", "Moore", "2012-5-23", "Pro1024", "Pro1024.png", "&quotKaylz&quot", "Pro1024.pdf", "Spiker", 42, "St_Cecilia",  "1L");
const playerPro1025 = new Player("Jada-Marie", "Alexander", "2012-8-17", "Pro1025", "Pro1025.png", "&quotAlexander&quot", "Pro1025.pdf", "Spiker", 31, "St_Cecilia", "1G");
const playerPro1026 = new Player("Sarah-Cymone", "Solomon", "2012-11-07", "Pro1026", "Pro1026.png", "&quotSarah-Cymone&quot", "Pro1026.pdf", "Spiker", 48, "St_Cecilia", "1G");
const playerPro1027 = new Player("Cayleigh", "Wallace", "2012-8-07", "Pro1027", "Pro1027.png", "&quotCayls&quot", "Pro1027.pdf", "Spiker", 46, "St_Patrick",  "1L");
const playerPro1028 = new Player("Ania", "Duncan", "2012-8-12", "Pro1028", "Pro1028.png", "&quotAnia&quot", "Pro1028.pdf", "Spiker", 36, "St_Cecilia", "1G");
const playerPro1029 = new Player("Shiloh", "Salandy", "2012-11-20", "Pro1029", "Pro1029.png", "&quotShiloh&quot", "Pro1029.pdf", "Spiker", 17, "St_Cecilia",  "1M");
const playerPro1030 = new Player("Nya", "Nanton", "2011-8-07", "Pro1030", "Pro1030.png", "&quotNanton&quot", "Pro1030.pdf", "Spiker", 38, "St_Rose", "1G");

const playerPro1031 = new Player("Sophie", "Story", "2011-3-13", "Pro1031", "Pro1031.png", "&quotSoph&quot", "Pro1031.pdf", "Spiker", 28, "St_Gabriel", "1G");
const playerPro1032 = new Player("Holeisha", "Joseph", "2012-4-26", "Pro1032", "Pro1032.png", "&quotPie&quot", "Pro1032.pdf", "Spiker", 44, "St_Patrick", "1L");
const playerPro1033 = new Player("Gianna", "Affonso", "2012-9-28", "Pro1033", "Pro1033.png", "&quotGigi&quot", "Pro1033.pdf", "Spiker", 12, "St_Rose", "1M");
const playerPro1034 = new Player("Keyah", "Gordon","2012-3-12", "Pro1034", "Pro1034.png", "&quotKeyah&quot", "Pro1034.pdf", "Spiker", 24, "St_Thomas", "1L");
const playerPro1035 = new Player("Erin", "Hassanali","2012-2-14", "Pro1035", "Pro1035.png", "&quotHassanali&quot", "Pro1035.pdf", "Spiker", 35, "St_Thomas", "1M");
const playerPro1036 = new Player("Milan", "Jones", "2012-7-03", "Pro1036", "Pro1036.png", "&quotLanii&quot", "Pro1036.pdf", "Spiker", 45, "St_Patrick", "1M");
const playerPro1037 = new Player("Soraiya", "Roach", "2013-1-14", "Pro1037", "Pro1037.png", "&quotSoraiya&quot", "Pro1037.pdf", "Spiker", 0, "St_Cecilia", "1L");
const playerPro1038 = new Player("Sarai", "Farrell","2011-3-16", "Pro1038", "Pro1038.png", "&quotSarai&quot", "Pro1038.pdf", "Spiker", 0, "St_Thomas", "2L");
const playerPro1039 = new Player("Asia-Lyn", "King","2011-12-15", "Pro1039", "Pro1039.png", "&quotLyn&quot", "Pro1039.pdf", "Spiker", 47, "St_Thomas", "2M");
const playerPro1040 = new Player("Alyssa", "Rose", "2011-12-14", "Pro1040", "Pro1040.png", "&quotAlyssa&quot", "Pro1040.pdf", "Spiker", 0, "St_Gabriel", "2L");

const playerPro1041 = new Player("Destiny", "Miller-Griffith", "2011-4-07", "Pro1041", "Pro1041.png", "&quotDestiny&quot", "Pro1041.pdf", "Spiker", 0, "St_Gabriel", "2G");
const playerPro1042 = new Player("Cassandra", "Newton", "2011-3-31", "Pro1042", "Pro1042.png", "&quotCassy&quot", "Pro1042.pdf", "Spiker", 33, "St_Patrick", "1G");
const playerPro1043 = new Player("Joian", "Paponette","2011-12-10", "Pro1043", "Pro1043.png", "&quotJoy&quot", "Pro1043.pdf", "Spiker", 32, "St_Thomas", "1G");
const playerPro1044 = new Player("Kourtney", "Howell", "2012-9-07", "Pro1044", "Pro1044.png", "&quotKourtz&quot", "Pro1044.pdf", "Spiker", 40, "St_Rose", "1L");
const playerPro1045 = new Player("Isabella", "De la Rosa", "2011-3-19", "Pro1045", "Pro1045.png", "&quotIzzy&quot", "Pro1045.pdf", "Spiker", 26, "St_Rose", "1L");
const playerPro1046 = new Player("Emily", "Dyett", "2011-6-01", "Pro1046", "Pro1046.png", "&quotEmily&quot", "Pro1046.pdf", "Spiker", 0, "St_Cecilia", "2L");
const playerPro1047 = new Player("Kaylee", "Seaton","2011-4-13", "Pro1047", "Pro1047.png", "&quotKay&quot", "Pro1047.pdf", "Spiker", 43, "St_Thomas", "1L");

const playerPro1048 = new Player("Mia", "Dolsingh", "2011-6-15", "Pro1048", "Pro1048.png", "&quotMia&quot", "Pro1048.pdf", "Spiker", 0, "St_Rose", "1L");
const playerPro1049 = new Player("Chloe", "John", "2012-4-13", "Pro1049", "Pro1049.png", "&quotChloe&quot", "Pro1049.pdf", "Spiker", 0, "St_Gabriel", "1M");
const playerPro1050 = new Player("Selena", "Mondezie","2011-9-02", "Pro1050", "Pro1050.png", "&quotMondezie&quot", "Pro1050.pdf", "Spiker", 0, "St_Thomas", "2L");
const playerPro1051 = new Player("Lia", "Everduim", "2010-5-24", "Pro1051", "Pro1051.png", "&quotLia&quot", "Pro1051.pdf", "Spiker", 0, "St_Patrick", "2L");
const playerPro1052 = new Player("Anya", "Burbury", "2020-1-1", "Pro1052", "Pro1052.png", "&quotLouisa&quot", "Pro1052.pdf", "Spiker", 15, "House", "1L");
const playerPro1053 = new Player("Lei-Lien", " ", "2011-12-23", "Pro1053", "Pro1053.png", "&quotLei-Lien&quot", "Pro1053.pdf", "Spiker", 0, "St_Cecilia", "1M");
const playerPro1054 = new Player("Zahara", "Thompson", "2020-1-1", "Pro1054", "Pro1054.png", "&quotZari&quot", "Pro1054.pdf", "Spiker", 41, "house", "klass");


p_Array = [ 
        playerPro1001, playerPro1002, playerPro1003, playerPro1004, playerPro1005, playerPro1006, playerPro1007, playerPro1008, playerPro1009, playerPro1010, 
        playerPro1011, playerPro1012, playerPro1013, playerPro1014, playerPro1015, playerPro1016, playerPro1017, playerPro1018, playerPro1019, playerPro1020, 
        playerPro1021, playerPro1022, playerPro1023, playerPro1024, playerPro1025, playerPro1026, playerPro1027, playerPro1028, playerPro1029, playerPro1030, 
        playerPro1031, playerPro1032, playerPro1033, playerPro1034, playerPro1035, playerPro1036, playerPro1037, playerPro1038, playerPro1039, playerPro1040,
        playerPro1041, playerPro1042, playerPro1043, playerPro1044, playerPro1045, playerPro1046, playerPro1047, playerPro1048, playerPro1049, playerPro1050, 
        playerPro1051, playerPro1052, playerPro1053, playerPro1054
];


const p_sortedArray =  p_Array.sort(function(a,b) {
    
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);
    
        if (dateA < dateB) return 1;
        else if (dateA > dateB) return -1;
        return 0;
});


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

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


function getPlayersByDivision(playerDivision,sortedArray,primaryColor){
        const u15_array = sortedArray.filter(element => {
                if(element.division() === playerDivision)
                return element });
                
                
                
                let datacard = '';
            
                u15_array.forEach(element => {
                    // Card takes up 1/3 of screen 
                datacard += '<div class="w3-third">'; 
        
                //Start Card
                datacard += `<div class="w3-card ${primaryColor} w3-margin w3-border w3-border-white">`  ;
                
                
                //Start Header
                datacard +='<header class=" w3-container w3-black ">';
    
                datacard += '<div class="w3-third">'; 
                datacard += `<p class="w3-small w3-center"> <i class="fa-solid fa-2x fa-house-chimney w3-text-${houseColor[element.house]}"> </i> ${element.house} </p>`;
                datacard += '</div>'; 
    
    
                datacard += '<div class="w3-third">'; 
                datacard +=`<p class="w3-large w3-center"><strong> ${element.division()} </strong></p>`;  
                datacard += '</div>'; 
    
    
                datacard += '<div class="w3-third">'; 
                datacard += ` <p class="w3-small w3-center"> Id:${element.id} </p> `;
                datacard += '</div>'; 
    
                
                
                datacard +='</header>';
                 //End Header
                
                
                //Start Body partitioned 1/3 to 2/3
                datacard += '<body class=" ">'; 
    
                datacard += '<div class="w3-third w3-center">'; 
                datacard += `<img class="w3-border w3-border-black w3-circle w3-sand w3-padding w3-image" src="foto/${element.pic}" width="100" height="100">`;
                datacard += `<h5 class="w3-center w3-text-white" style="text-shadow:2px 2px 0 #222">${element.fname} <br> ${element.lname} </h5>`;
                datacard += '</div>'; 
                
                
                datacard += ' <div class="w3-twothirds w3-center">';
                datacard += '<p> Position : '  + element.position + '</p>';
                datacard += '<p> Jersey:'+ element.nickname +' ' + element.number + '</p>';
                datacard += '<p> DOB: ' + element.fdate() + '</p>';  
                datacard += '<p> Age: ' + element.age() + '</p>';
                datacard += '</div>'; 
    
                datacard += '</body>'; 
        
               
               //Start Footer
               datacard +='<footer class="w3-container">';
    
               datacard += '<div class="w3-third">'; 
               datacard += `<p class="w3-center w3-small"> Class: ${element.klass} </p>`;
               datacard += '</div>'; 
    
               datacard += ' <div class="w3-twothirds">';
               datacard += '<p class="w3-small w3-center"> Birth Certificate:  <a href="pdf/'+ element.bpaper + '" target="_blank"> <button class="w3-button w3-border w3-border-black w3-round-xlarge w3-small w3-sand">Click</button> </a></p>';
               datacard += '</div>'; 
    
              
               datacard +='</footer>';
               
               
                //End card
                datacard += '</div>';
                
                //End i/3 screen division
                datacard += '</div>'; 
                
            });
            
            
            document.getElementById("contentdata").innerHTML = datacard;
            return ;
}

function s_u15(){
        getPlayersByDivision("U15 Player",s_sortedArray,"w3-2019-biking-red");
}

function s_u17(){
        getPlayersByDivision("U17 Player",s_sortedArray,"w3-2019-biking-red");
}

function s_open(){
        getPlayersByDivision("Open Player",s_sortedArray,"w3-2019-biking-red");
}



function p_u15(){
        getPlayersByDivision("U15 Player",p_sortedArray,"w3-vivid-greenish-blue");
}

function p_u17(){
        getPlayersByDivision("U17 Player",p_sortedArray,"w3-vivid-greenish-blue");
}

function p_open(){
        getPlayersByDivision("Open Player",p_sortedArray,"w3-vivid-greenish-blue");
}


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Houses


function getPlayersByHouse(playerHouse, sortedArray){

        const houseArray = sortedArray.filter(element => {
                if(element.house === playerHouse)
                return element });

        let count = 1;
            let bdata = '';
                bdata += '<div class="w3-container w3-responsive">';
                bdata += ' <table class="w3-table w3-2021-inkwell w3-bordered">';
                bdata += `<tr> <th colspan="4"> <h2 class="w3-center">Players of ${playerHouse} House</h2> </th>  </tr>`;

                bdata += '<tr>';

                bdata += '<th>#</th>  <th>NAME</th>  <th>CLASS</th> <th>DIVISION</th>';

                bdata += '</tr>';
                
            
                houseArray.forEach(element =>{
                       
                        bdata += '<tr>';
                        bdata += ` <td>${count++}</td>    <td>${element.fname + ' '+ element.lname} </td>    <td>${element.klass} </td>     <td>${element.division()}</td>`;
                        bdata += '</tr>';
    
                });
                bdata += '</table>';
                bdata += '</div>';

                document.getElementById("contentdata").innerHTML = bdata;

}


function s_Martin(){
        getPlayersByHouse("Martin",s_sortedArray);
}


function s_Butler(){
        getPlayersByHouse("Butler",s_sortedArray);
}


function s_Cipriani(){
        getPlayersByHouse("Cipriani",s_sortedArray);
}


function s_Rienzi(){
        getPlayersByHouse("Rienzi",s_sortedArray);
}


function s_Quevado(){
        getPlayersByHouse("Quevado",s_sortedArray);
}








function p_StCecilia(){
        getPlayersByHouse("St_Cecilia",p_sortedArray);
}


function p_StGabriel(){
        getPlayersByHouse("St_Gabriel",p_sortedArray);
}


function p_StPatrick(){
        getPlayersByHouse("St_Patrick",p_sortedArray);
}


function p_StRose(){
        getPlayersByHouse("St_Rose",p_sortedArray);
}


function p_StThomas(){
        getPlayersByHouse("St_Thomas",p_sortedArray);
}





function getPlayersByJersey(Array){

const jerseyArray =  Array.sort(function(a,b) {
    
        const jerseyA = a.number;
        const jerseyB = b.number;
    
        if (jerseyA > jerseyB) return 1;
        else if (jerseyA < jerseyB) return -1;
        return 0;
});


        let count = 1;
        let bdata = '';
        bdata += '<div class="w3-container w3-responsive">';
        bdata += ' <table class="w3-table w3-2021-inkwell w3-bordered">';
        bdata += '<tr> <th colspan="4"> <h2 class="w3-center">Players by Jersey Number</h2> </th>  </tr>';

        bdata += '<tr>';

        bdata += '<th>#</th>  <th>NAME</th>  <th>Jersey Number</th>   <th>Jersey Name</th>';

        bdata += '</tr>';
        

        jerseyArray.forEach(element =>{
                
                bdata += '<tr>';
                bdata += ` <td>${count++}</td>    <td>${element.fname + ' '+ element.lname} </td>    <td>${element.number} </td>     <td>${element.nickname}</td>`;
                bdata += '</tr>';

        });
        bdata += '</table>';
        bdata += '</div>';

        document.getElementById("contentdata").innerHTML = bdata;
        document.getElementById("contentNav").innerHTML = '<i><img src="images/fenix.png" width="80"> "From the Ashes, we Rise as gems" <img src="images/gem2.png" width="60"></i>';
}


function s_Jersey(){
        getPlayersByJersey(s_Array);
}


function p_Jersey(){
        getPlayersByJersey(p_Array);
}
//**********************************************************/
//                 WEBPAGES                                */
//**********************************************************/

function seposs() {
        mainData = '';
        mainData += '<section class="w3-container w3-2021-burnt-coral">';
        mainData += '<div class="w3-panel w3-2019-biking-red w3-card-4 w3-center w3-padding w3-mobile w3-border w3-border-white" >';
        mainData += '<h2 class=" w3-center  w3-text-amber" style="text-shadow:2px 2px 0 #222"><img src="images/sepos-logo.png" width="120" height="120"> SOUTH EAST  </h2>';
        mainData += '</div>';
        

        
        mainData += '<div class=" w3-container w3-bar w3-white w3-border w3-border-black">';
        mainData += `<button class="w3-bar-item w3-button " onclick="s_players()"> <strong>Players</strong> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="s_birthday()"> <strong>Birthdays</strong> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="s_houses()"> <strong>Houses</strong> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="s_Jersey()"> <strong>Jersey</strong> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="s_attendance()"> <strong>Attendance</strong> </button>`;
        mainData += '</div>';
        mainData += '</section>';

        document.getElementById("maindata").innerHTML = mainData;
        document.getElementById("contentNav").innerHTML = '';
        document.getElementById("contentdata").innerHTML = '';
        

         contentData = ' <div class="w3-container">';
         contentData += '<div class="w3-panel w3-leftbar w3-sand">';
         contentData += `<button class=" w3-button w3-block w3-2021-inkwell w3-center w3-border w3-border-black"  onclick="newQuote()"> <h4>GET A NEW QUOTE</h4> </button>`;
         contentData += `<p class="w3-xxlarge w3-serif"><i id = "myQuote"><img src="images/gem2.png" width="80">"They say, 'East POS Ghettos'. We say, 'Gems of the Eastern Sky'."</i></p>`;
         contentData += '<p id="myAuthor">SEPOSS Volleyball Team</p>';
         contentData += '</div> </div>';


         document.getElementById("contentdata").innerHTML = contentData;

         
}



function s_players() {
        contentNav = '<div class=" w3-container w3-bar w3-2021-burnt-coral  w3-margin">';
        contentNav += `<button class="w3-bar-item w3-button w3-2019-biking-red w3-border w3-border-black" onclick="s_u15()">Under15</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-2019-biking-red w3-border w3-border-black" onclick="s_u17()">Under17</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-2019-biking-red w3-border w3-border-black" onclick="s_open()">Open</button>`;
        contentNav += '</div>';

        
        document.getElementById("contentNav").innerHTML = contentNav;
        
        document.getElementById("contentdata").innerHTML = '<i><img src="images/fenix.png" width="80"> "From the Ashes, we Rise as gems" <img src="images/gem2.png" width="60"></i>';
}



function s_birthday() {
        contentNav = '<div class=" w3-container kw3-bar w3-2021-burnt-coral  w3-margin ">';
        contentNav += `<button class="w3-bar-item w3-button w3-black w3-border w3-border-white" onclick="s_oldest()">Players by Age</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-black w3-border w3-border-white" onclick="s_birthmonth()">Players by Birthdate</button>`;
        contentNav += '</div>';

        
        document.getElementById("contentNav").innerHTML = contentNav;
        document.getElementById("contentdata").innerHTML = '<i><img src="images/fenix.png" width="80"> "From the Ashes, we Rise as gems" <img src="images/gem2.png" width="60"></i>';
}



function s_houses() {
        contentNav = '<div class=" w3-container w3-bar w3-2021-burnt-coral  w3-margin">';
        contentNav += `<button class="w3-bar-item w3-button w3-blue w3-border w3-border-black" onclick="s_Butler()">Butler</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-red w3-border w3-border-black" onclick="s_Cipriani()">Cipriani</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-green w3-border w3-border-black" onclick="s_Martin()">Martin</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-orange w3-border w3-border-black" onclick="s_Rienzi()">Rienzi</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-yellow w3-border w3-border-black" onclick="s_Quevado()">Quevado</button>`;
        
        contentNav += '</div>';

        
        document.getElementById("contentNav").innerHTML = contentNav;
        
        document.getElementById("contentdata").innerHTML = '<i><img src="images/fenix.png" width="80"> "From the Ashes, we Rise as gems" <img src="images/gem2.png" width="60"></i>';
}






function provi() {
        mainData = '';
        mainData += '<section class="w3-container w3-2021-burnt-coral">';
        mainData += '<div class="w3-panel w3-flat-peter-river w3-card-4 w3-center w3-padding w3-mobile w3-border w3-border-white" >';
        mainData += '<h2 class=" w3-center w3-text-white" style="text-shadow:2px 2px 0 #222"><img src="images/provi-logo.png" width="120" height="120"> PROVIDENCE  </h2>';
        mainData += '</div>';
        

        mainData += '<div class=" w3-container w3-bar w3-white w3-border w3-border-black">';
        mainData += `<button class="w3-bar-item w3-button " onclick="p_players()"> <strong>Players</strong> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="p_birthday()"> <strong>Birthdays</strong> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="p_houses()"> <strong>Houses</strong> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="p_Jersey()"> <strong>Jersey</strong> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="p_attendance()"> <strong>Attendance</strong> </button>`;
        mainData += '</div>';
        mainData += '</section>';

        document.getElementById("maindata").innerHTML = mainData;
        document.getElementById("contentNav").innerHTML = '';
        document.getElementById("contentdata").innerHTML = '';


        contentData = ' <div class="w3-container">';
         contentData += '<div class="w3-panel w3-leftbar w3-sand">';
         contentData += `<button class=" w3-button w3-block w3-2021-inkwell w3-center w3-border w3-border-black"  onclick="newQuote()"> <h4>GET A NEW QUOTE</h4> </button>`;
         contentData += '<p class="w3-xxlarge w3-serif"><i id = "myQuote"><img src="images/fenix.png" width="150"> "From the Ashes, we Rise."</i></p>';
         contentData += '<p id="myAuthor">Provi Volleyball Team</p>';
         contentData += '</div> </div>';


         document.getElementById("contentdata").innerHTML = contentData;

}




function p_players() {
        contentNav = '<div class=" w3-container w3-bar w3-2021-burnt-coral  w3-margin">';
        contentNav += `<button class="w3-bar-item w3-button w3-vivid-greenish-blue w3-border w3-border-white" onclick="p_u15()">Under15</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-vivid-greenish-blue w3-border w3-border-white" onclick="p_u17()">Under17</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-vivid-greenish-blue w3-border w3-border-white" onclick="p_open()">Open</button>`;
        contentNav += '</div>';
        document.getElementById("contentNav").innerHTML = contentNav;
        document.getElementById("contentdata").innerHTML = '<i><img src="images/fenix.png" width="80"> "From the Ashes, we Rise as gems" <img src="images/gem2.png" width="60"></i>';
}






function p_birthday() {
        contentNav = '<div class=" w3-container kw3-bar w3-2021-burnt-coral  w3-margin">';
        contentNav += `<button class="w3-bar-item w3-button w3-vivid-greenish-blue w3-border w3-border-white" onclick="p_oldest()">Players by Age</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-vivid-greenish-blue w3-border w3-border-white" onclick="p_birthmonth()">Players by Birthdate</button>`;
        contentNav += '</div>';

        
        document.getElementById("contentNav").innerHTML = contentNav;
        document.getElementById("contentdata").innerHTML = '<i><img src="images/fenix.png" width="80"> "From the Ashes, we Rise as gems" <img src="images/gem2.png" width="60"></i>';
}



function p_houses() {
        contentNav = '<div class=" w3-container w3-bar w3-2021-burnt-coral  w3-margin">';
        contentNav += `<button class="w3-bar-item w3-button w3-purple w3-border w3-border-black" onclick="p_StCecilia()">St.Cecilia</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-yellow w3-border w3-border-black" onclick="p_StGabriel()">St.Gabriel</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-green w3-border w3-border-black" onclick="p_StPatrick()">St.Patrick</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-red w3-border w3-border-black" onclick="p_StRose()">St.Rose</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-blue w3-border w3-border-black" onclick="p_StThomas()">St.Thomas</button>`;
        
        contentNav += '</div>';

        
        document.getElementById("contentNav").innerHTML = contentNav;
        
        document.getElementById("contentdata").innerHTML = '<i><img src="images/fenix.png" width="80"> "From the Ashes, we Rise as gems" <img src="images/gem2.png" width="60"></i>';
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//%%%%%%%%%%%%%%%%%%%%%%%  BIRTHDAYS  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


function happyBirthday() {
        let happydata = '';
        const d = new Date().getDate();
        const m = new Date().getMonth();

        //const sepro_Array = s_Array.concat(p_Array);

        s_Array.forEach(element =>{
                if (new Date(element.dob).getMonth() == m && new Date(element.dob).getDate() == d) {
                        happydata += `<p class="w3-container  w3-center"> HAPPY BIRTHDAY to ${element.fname +' '+ element.lname + ' (SEPOSS) !'} </p>`;
                        }

                });

        p_Array.forEach(element =>{
                if (new Date(element.dob).getMonth() == m && new Date(element.dob).getDate() == d) {
                                happydata += `<p class="w3-container w3-center"> HAPPY BIRTHDAY to ${element.fname +' '+ element.lname + ' (PROVI) !'} </p>`;
                        }
        
                });



        document.getElementById("happydata").innerHTML = happydata;
}

happyBirthday();





function s_oldest() {
        
        let count = 1;
            let bdata = '';
                bdata += '<div class="w3-container w3-responsive">';
                bdata += ' <table class="w3-table w3-2021-inkwell w3-bordered">';
                bdata += '<tr> <th colspan="4"> <h2 class="w3-center">PLAYERS BY AGE</h2> </th>  </tr>';

                bdata += '<tr>';

                bdata += '<th>#</th>  <th>NAME</th>  <th>AGE</th> <th>DIVISION</th>';

                bdata += '</tr>';
                
            
                s_sortedArray.forEach(element =>{
                       
                        bdata += '<tr>';
                        bdata += ` <td>${count++}</td>    <td>${element.fname + ' '+ element.lname} </td>    <td>${element.age()} </td>     <td>${element.division()}</td>`;
                        bdata += '</tr>';
    
                });
                bdata += '</table>';
                bdata += '</div>';

                document.getElementById("contentdata").innerHTML = bdata;
}




function p_oldest() {

            let count = 1;
            let bdata = '';
                bdata += '<div class="w3-container w3-responsive">';
                bdata += ' <table class="w3-table w3-2021-inkwell w3-bordered">';
                bdata += '<tr> <th colspan="4"> <h2 class="w3-center">PLAYERS BY AGE</h2> </th>  </tr>';

                bdata += '<tr>';

                bdata += '<th>#</th>  <th>NAME</th>  <th>AGE</th> <th>DIVISION</th>';

                bdata += '</tr>';
                
            
                p_sortedArray.forEach(element =>{
                       
                        bdata += '<tr>';
                        bdata += ` <td>${count++}</td>    <td>${element.fname + ' '+ element.lname} </td>    <td>${element.age()} </td>     <td>${element.division()}</td>`;
                        bdata += '</tr>';
    
                });
                bdata += '</table>';
                bdata += '</div>';

                document.getElementById("contentdata").innerHTML = bdata;


}




function s_birthmonth() {

        const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            
    
       
    
        const birthdayArray =  s_Array.sort(function(a,b) {
    
            const monthA = new Date(a.dob).getMonth();
            const monthB = new Date(b.dob).getMonth();
    
            const dayA = new Date(a.dob).getDate();
            const dayB = new Date(b.dob).getDate();
        
            if (monthA > monthB) return 1;
            else if (monthA < monthB) return -1;
    
            else if (dayA > dayB) return 1;
            else if (dayA < dayB) return -1;
            return 0;
        });
        
        let count = 1;
            let bdata = '';
                bdata += '<div class="w3-container w3-responsive">';
                bdata += ' <table class="w3-table w3-2021-inkwell w3-bordered">';
                bdata += '<tr> <th colspan="4"> <h2 class="w3-center">PLAYERS BY BIRTHDATE</h2> </th>  </tr>';

                bdata += '<tr>';

                bdata += '<th>#</th>  <th>NAME</th>  <th>BIRTHDATE</th> <th>ZODIAC</th>';

                bdata += '</tr>';
                
            
                birthdayArray.forEach(element =>{

                        const x = element.dob.split("-");  
                        const y = x[0];
                        const m = x[1]-1;
                        const d = x[2];

                        
                       
                        bdata += '<tr>';
                        bdata += ` <td>${count++}</td>    <td>${element.fname + ' '+ element.lname} </td>    <td>${monthNames[m] + ' '+ d} </td>     <td>${findZodiacSign(d, m)}</td>`;
                        bdata += '</tr>';
    
                });
                bdata += '</table>';
                bdata += '</div>';
                
                document.getElementById("contentdata").innerHTML = bdata;
}




function p_birthmonth() {

        const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            
    
        
        
    
        const birthdayArray =  p_Array.sort(function(a,b) {
    
            const monthA = new Date(a.dob).getMonth();
            const monthB = new Date(b.dob).getMonth();
    
            const dayA = new Date(a.dob).getDate();
            const dayB = new Date(b.dob).getDate();
        
            if (monthA > monthB) return 1;
            else if (monthA < monthB) return -1;
    
            else if (dayA > dayB) return 1;
            else if (dayA < dayB) return -1;
            return 0;
        });
            let count = 1;
            let bdata = '';
                bdata += '<div class="w3-container w3-responsive">';
                
                bdata += ' <table class="w3-table w3-2021-inkwell w3-bordered">';

                bdata += '<tr> <th colspan="4"> <h2 class="w3-center">PLAYERS BY BIRTHDATE</h2> </th>  </tr>';

                bdata += '<tr class = "center">';

                bdata += '<th>#</th>  <th>NAME</th>  <th>BIRTHDATE</th> <th>ZODIAC</th>';

                bdata += '</tr>';
                
            
                birthdayArray.forEach(element =>{

                        const x = element.dob.split("-");  
                        const y = x[0];
                        const m = x[1]-1;
                        const d = x[2];
                       
                        bdata += '<tr>';
                        bdata += ` <td>${count++}</td>    <td>${element.fname + ' '+ element.lname} </td>    <td>${monthNames[m] + ' '+ d} </td>     <td>${findZodiacSign(d, m)}</td>`;
                        bdata += '</tr>';
    
                });
                bdata += '</table>';
                bdata += '</div>';
                
                document.getElementById("contentdata").innerHTML = bdata;
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
      }








//**********************************************************/
//                 ATTENDANCE PAGE                         */
//***********************************************************/

function openMonth(monthName) {
        var i;
        var x = document.getElementsByClassName("month");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        document.getElementById(monthName).style.display = "block";  
}



function s_attendance() {
        contentNav = '<div class=" w3-container w3-bar w3-2021-burnt-coral  w3-margin">';
        contentNav += `<button class="w3-bar-item w3-button w3-2019-biking-red w3-border w3-border-black" onclick="openMonth('Jan')">January</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-2019-biking-red w3-border w3-border-black" onclick="openMonth('Feb')">Feburary</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-2019-biking-red w3-border w3-border-black" onclick="openMonth('Mar')">March</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-2019-biking-red w3-border w3-border-black" onclick="openMonth('Apr')">April</button>`;
        contentNav += '</div>';
        document.getElementById("contentNav").innerHTML = contentNav;


        contentData = '<div id="Jan" class="month">';
        contentData += '<p class="w3-center">';
        contentData += '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcI4ZHGxX6Nrb3aPnQeVeushOBg8xphCJ11GSG0PJs0yqlmXm8FzxUzTJHjj53ivIskKL2vyN1c2Q5/pubhtml?gid=647894006&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="550" ></iframe>';
        contentData += '</div>';


        contentData += '<div id="Feb" class="w3-container month" style="display:none"> ';
        contentData += '<p class="w3-center">';
        contentData += '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcI4ZHGxX6Nrb3aPnQeVeushOBg8xphCJ11GSG0PJs0yqlmXm8FzxUzTJHjj53ivIskKL2vyN1c2Q5/pubhtml?gid=634536015&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="550" ></iframe>';
        contentData += '</div>';

        contentData += '<div id="Mar" class="w3-container month" style="display:none"> ';
        contentData += '<p class="w3-center">';
        contentData += '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcI4ZHGxX6Nrb3aPnQeVeushOBg8xphCJ11GSG0PJs0yqlmXm8FzxUzTJHjj53ivIskKL2vyN1c2Q5/pubhtml?gid=737177492&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="550"></iframe>';
        contentData += '</div>';

        contentData += '<div id="Apr" class="w3-container month" style="display:none"> ';
        contentData += '<p class="w3-center">';
        contentData += '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQcI4ZHGxX6Nrb3aPnQeVeushOBg8xphCJ11GSG0PJs0yqlmXm8FzxUzTJHjj53ivIskKL2vyN1c2Q5/pubhtml?gid=1892411215&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="550"></iframe>';
        contentData += '</div>';

        document.getElementById("contentdata").innerHTML = contentData;
        
}








function p_attendance() {
        contentNav = '<div class=" w3-container w3-bar w3-2021-burnt-coral  w3-margin">';
        contentNav += `<button class="w3-bar-item w3-button w3-highway-blue" onclick="openMonth('Jan')">January</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-highway-blue" onclick="openMonth('Feb')">Feburary</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-highway-blue" onclick="openMonth('Mar')">March</button>`;
        contentNav += `<button class="w3-bar-item w3-button w3-highway-blue" onclick="openMonth('Apr')">April</button>`;
        contentNav += '</div>';
        document.getElementById("contentNav").innerHTML = contentNav;


        contentData = '<div id="Jan" class="month">';
        contentData += '<p class="w3-center">';
        contentData += '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRv9lxf2JYUCTyiyAHsB5N07R4bx4UluUp-vn-H_eaRtL_gRPF5vlxNj35CNLhH8hb3gHGygeQS8oqQ/pubhtml?gid=647894006&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="550"></iframe>';
        contentData += '</div>';


        contentData += '<div id="Feb" class="w3-container month" style="display:none"> ';
        contentData += '<p class="w3-center">';
        contentData += '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRv9lxf2JYUCTyiyAHsB5N07R4bx4UluUp-vn-H_eaRtL_gRPF5vlxNj35CNLhH8hb3gHGygeQS8oqQ/pubhtml?gid=2136878454&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="550" ></iframe>';
        contentData += '</div>';

        contentData += '<div id="Mar" class="w3-container month" style="display:none"> ';
        contentData += '<p class="w3-center">';
        contentData += '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRv9lxf2JYUCTyiyAHsB5N07R4bx4UluUp-vn-H_eaRtL_gRPF5vlxNj35CNLhH8hb3gHGygeQS8oqQ/pubhtml?gid=1364115287&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="550"></iframe>';
        contentData += '</div>';

        contentData += '<div id="Apr" class="w3-container month" style="display:none"> ';
        contentData += '<p class="w3-center">';
        contentData += '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRv9lxf2JYUCTyiyAHsB5N07R4bx4UluUp-vn-H_eaRtL_gRPF5vlxNj35CNLhH8hb3gHGygeQS8oqQ/pubhtml?gid=1048079267&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="550"></iframe>';
        contentData += '</div>';

        document.getElementById("contentdata").innerHTML = contentData;
}


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%








//**********************************************************/
//                 WEBSITES PAGE                           */
//**********************************************************/


function websites() {
        mainData = '';
        mainData += '<section class="w3-container w3-2021-burnt-coral">';
        mainData += '<div class="w3-panel w3-2017-shaded-spruce w3-card-4 w3-center w3-padding w3-mobile w3-border w3-border-white" >';
        mainData += '<h2 class=" w3-center w3-text-white" style="text-shadow:2px 2px 0 #222">Websites Page <i class="fa-solid fa-globe fa-2x"></i> </h2>';
        mainData += '</div>';
        
        mainData += '<div class=" w3-container w3-bar w3-white w3-border w3-border-black">';
        mainData += `<button class="w3-bar-item w3-button" onclick="frontPage()"> <h6>FRONTPAGE</h6> </button>`;
        mainData += `<button class="w3-bar-item w3-button" onclick="sites()"> <h6>THE WEBSITES</h6> </button>`;
        
        mainData += '</div>';
        mainData += '</section>';

        document.getElementById("maindata").innerHTML = mainData;
        document.getElementById("contentNav").innerHTML = '';
        document.getElementById("contentdata").innerHTML = '<i><img src="images/fenix.png" width="80"> "From the Ashes, we Rise as gems" <img src="images/gem2.png" width="60"></i>';

}



function sites() {

        contentData = '';
        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-2021-french-blue"> <h4 class="w3-center">  FIVB </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/fivb-logo.png" alt="" width = "150" height = "100"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="https://www.fivb.com" class="w3-btn w3-small w3-2021-french-blue w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';
       
        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-highway-blue"> <h4 class="w3-center">  NORCECA </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/norceca-logo.png"  alt="" width = "150" height = "100"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="https://norceca.net" class="w3-btn w3-small w3-highway-blue w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';

        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-red"> <h4 class="w3-center">  CAZOVA </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/cazova-logo.png"  alt="" width = "150" height = "100"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="https://cazova.org/" class="w3-btn w3-small w3-red w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';

        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-cyan"> <h4 class="w3-center">  ECVA </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/ecva-logo.png"  alt="" width = "150" height = "100"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="https://ecvolleyball.com" class="w3-btn w3-small w3-cyan w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';
       
       
        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-indigo"> <h4 class="w3-center">  BARBADOS </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/bva-logo.png" alt="" width = "150" height = "100"> <img src="images/bar.svg" alt="" width = "45" height = "45"></div> </section>';
        contentData += '<section class="w3-center"> <a href="https://volleybarbados.com" class="w3-btn w3-small w3-indigo w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';


        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-green"> <h4 class="w3-center">  JAMAICA </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/ja-logo.png" alt="" width = "150" height = "100"> <img src="images/JAM.svg" alt="" width = "45" height = "45"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="https://jamaicavolleyball.wixsite.com/jamaicanvballassoc" class="w3-btn w3-small w3-green w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';

        
        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-2020-navy-blazer"> <h4 class="w3-center">  CAYMAN ISLANDS </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/cay-logo.png" alt="" width = "150" height = "100"> <img src="images/cay.svg" alt="" width = "45" height = "45"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="https://www.civf.ky/" class="w3-btn w3-small w3-2020-navy-blazer w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';

        
        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-light-blue"> <h4 class="w3-center">  ST.LUCIA </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/stlucia-logo.png" alt="" width = "150" height = "100"> <img src="images/SLU.svg" alt="" width = "45" height = "45"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="https://stluciavolleyball.org" class="w3-btn w3-small w3-light-blue w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';

        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-highway-red"> <h4 class="w3-center">  BERMUDA </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/bermuda-logo.png" alt="" width = "150" height = "100"> <img src="images/ber.svg" alt="" width = "45" height = "45"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="http://www.bva.bm" class="w3-btn w3-small w3-highway-red w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';

        contentData += '<div class="w3-quarter">';
        contentData += '<div class="w3-card w3-white w3-margin w3-border w3-border-white w3-round-large">';
        contentData += '<header class="w3-2021-illuminating"> <h4 class="w3-center">  ST VINCENT </h4> </header>';
        contentData += '<section class="w3-margin w3-white"> <div class="w3-center "> <img src="images/svgvolleyball-logo.png" alt="" width = "150" height = "100"> <img src="images/SVG.svg" alt="" width = "45" height = "45"> </div> </section>';
        contentData += '<section class="w3-center"> <a href="https://svgnoc.org/affiliates/volleyball/" class="w3-btn w3-small w3-2021-illuminating w3-border w3-border-black w3-round-xxlarge"> Go to site  </a> </section>';
        contentData += '</div> </div>';

        
        // contentData += '';
        //contentData += '';
        //contentData += '';

        document.getElementById("contentdata").innerHTML = contentData;
        document.getElementById("contentNav").innerHTML = '';
}

        
        

function frontPage() {


        datacard = '<div class="w3-card-4 w3-margin">';
        datacard +='<header class="w3-container w3-2019-sugar-almond">';
        datacard +='<h4 class="w3-center">THE FIVB <i class="fa-solid fa-volleyball fa-1x w3-center "></i></h4>';
        datacard +='</header>';
        datacard +='<main class="w3-container w3-sand">';
        datacard +='<dl>';
        datacard +='<dt class="w3-text-brown"><h4>FIVB</h4></dt>';
        datacard +=' <dd>FIVB stands for &quot Fédération Internationale de Volleyball &quot and is the International governing body for all forms of Volleyball. There are 222 National Associations afiliated to FIVB. Around the world FIVB divides itself into 5 confederations. These are AVC(Asia), CAVB(Africa), CEV(Europe), CSV(South America) and NORCECA (North America, Central America and Caribbean). </dd>';
        datacard +='<dt class="w3-text-brown"><h4>NORCECA</h4></dt>';
        datacard +='<dd>NORCECA divides itself into three zones - Central America zone, CAZOVA zone and ECVA zone. The six countries not placed into zones are commonly called &quotThe Big Six&quot and they are USA, Cuba, Mexico, Puerto Rico, Dominican Republic and Canada.</dd>';
        datacard +=' <dt class="w3-text-brown"><h4>CAZOVA</h4></dt> ';
        datacard +=' <dd>Caribbean Zonal Volleyball Association. Includes Trinidad and Tobago, Jamaica, Barbados, Bahamas, Surinam, Aruba, Curacao, Bonaire, Cayman Islands, Turks and Caicos Islands, US Virgin Islands, Martinique, Guadaloupe and Haiti. </dd> ';
        datacard +=' <dt class="w3-text-brown"> <h4>ECVA</h4> </dt> ';
        datacard +='  <dd>Eastern Caribbean Volleyball Association. Includes the islands of Anguilla, British Virgin Islands, Montserrat, St.Kitts and Nevis, St.Vincent and The Grenadines, Grenada, Antigua and Barbuda, Dominica, St.Eustatius, St.Lucia, Bermuda and St.Maarten.</dd> ';
        datacard +=' </dl> ';
        datacard +=' </main> ';
        datacard +=' </div> ';

        document.getElementById("contentdata").innerHTML = datacard;
        document.getElementById("contentNav").innerHTML = '';
}

  
  
 

//**********************************************************/
//                 LANDING PAGE                            */
//**********************************************************/

 
function landing() {
        mainData = '';
        mainData += '<section class="w3-container w3-2021-burnt-coral">';
        mainData += '<div class="w3-panel w3-2019-sugar-almond w3-card-4 w3-center w3-padding w3-mobile w3-border w3-border-white" >';
        mainData += '<h2 class=" w3-center w3-text-white" style="text-shadow:2px 2px 0 #444">LANDING PAGE <i class="fa-solid fa-anchor fa-2x"></i> </h2>';
        mainData += '</div>';
        mainData += '</section>';

        document.getElementById("maindata").innerHTML = mainData;



        datacard = '';
        datacard += '<div class="w3-quarter">'; 

        //Start SEPOSS Card
        datacard += '<div class="w3-card w3-2019-chili-pepper w3-margin w3-padding w3-border w3-border-white w3-round-large">'  ;
        
        //Start Header
        datacard +='<header>';
        datacard +='<p class="w3-large w3-center w3-sand w3-text-black  w3-round-xlarge w3-border w3-border-white"> SEPOSS PAGE </p>';
        datacard +='</header>';
        
        
        //Start Body 
        datacard += '<div class="w3-center">'; 
        datacard +='<p class="w3-large"> A Volleyball site of South East POS Secondary </p>';
        datacard += ' </div>';
        

       
       //Start Footer
       datacard +='<Footer class="w3-center">';
       datacard += ' <button class="w3-btn w3-small w3-sand w3-text-black  w3-border w3-border-white w3-round-xxlarge" onclick="seposs()">Go to SEPOSS page </button>';
       datacard +='</footer>';
       
       
        //End card
        datacard += '</div>';
        
        //End i/3 screen division
        datacard += '</div>'; 



        datacard += '<div class="w3-quarter">'; 

        //Start PROVI Card
        datacard += '<div class="w3-card w3-light-blue  w3-margin w3-padding w3-border w3-border-white w3-round-large">'  ;
        
        //Start Header
        datacard +='<header>';
        datacard +='<p class="w3-large w3-center w3-sand w3-round-xlarge w3-border w3-border-black w3-text-black "> PROVI PAGE </p>';
        datacard +='</header>';
        
        
        //Start Body 
        datacard += '<div class="w3-center">'; 
        datacard +='<p class="w3-large"> A Volleyball site of Providence Girls Catholic School  </p>';
        datacard += ' </div>';
        

       
       //Start Footer
       datacard +='<Footer class="w3-center">';
       datacard += ' <button class="w3-btn w3-small w3-sand w3-text-black  w3-border w3-border-black w3-round-xxlarge" onclick="provi()">Go to PROVI page </button>';
       datacard +='</footer>';
       
       
        //End card
        datacard += '</div>';
        
        //End i/3 screen division
        datacard += '</div>'; 



        datacard += '<div class="w3-quarter">'; 

        //Start WEBSITES Card
        datacard += '<div class="w3-card w3-2017-shaded-spruce  w3-margin w3-padding w3-border w3-border-white w3-round-large">'  ;
        
        //Start Header
        datacard +='<header>';
        datacard +='<p class="w3-large w3-center w3-sand  w3-round-xlarge w3-border w3-border-white"> WEBSITES PAGE </p>';
        datacard +='</header>';
        
        
        //Start Body 
        datacard += '<div class="w3-center">'; 
        datacard +='<p class="w3-large"> A collection of Volleyball websites. Mainly Caribbean.  </p>';
        datacard += ' </div>';
        

       
       //Start Footer
       datacard +='<Footer class="w3-center">';
       datacard += '<button class="w3-btn w3-small w3-sand  w3-border w3-border-white w3-round-xxlarge" onclick="websites()">Go to WEBSITES page </button>' ;
       datacard +='</footer>';
       
       
        //End card
        datacard += '</div>';
        
        //End i/3 screen division
        datacard += '</div>'; 

        document.getElementById("contentdata").innerHTML = datacard;
        document.getElementById("contentNav").innerHTML = '';
        
}

  
         
        
    

    
    

    
    

    
   
  


