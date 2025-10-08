const proImages =["1","2","3","4","5"];

const sepImages =["1","2","3","4","5"];


function shuffleArray(array) {

    // Iterate over the array in reverse order
    for (let i = array.length - 1; i > 0; i--) {

        // Generate Random Index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffle_proImages = shuffleArray(proImages); 
const shuffle_sepImages = shuffleArray(sepImages); 
/*
document.getElementById('pro-images').innerHTML = `<img src="images/pro/${shuffle_proImages[0]}.png" alt="Provi Eye" class="responsive w3-border" width="350px"> `   ;
document.getElementById('sep-images').innerHTML = `<img src="images/sep/${shuffle_sepImages[0]}.png" alt="" class="responsive w3-border" width="350px"> `   ;
//console.log(shuffleQuotes[0]);
*/



let sepCount = 0; proCount = 0;

function newImage(){

    /*
    const random_pro = proImages[
        Math.floor(
            Math.random() * proImages.length
        )
    ];
   

    const random_sep = sepImages[
        Math.floor(
            Math.random() * sepImages.length
        )
    ];

    */



   let sepChosenImage = shuffle_sepImages[sepCount];
    let proChosenImage = shuffle_proImages[proCount];
    
    document.getElementById('pro-images').innerHTML = `<img src="proFotos/${proChosenImage}.png" alt="Provi Eye" class="responsive w3-border" width="550px"> `;
    document.getElementById('sep-images').innerHTML = `<img src="sepFotos/${sepChosenImage}.png" alt="" class="responsive w3-border" width="550px"> `;
   

    sepCount++; proCount++;
    if(proCount >= proImages.length){proCount = 0;}
    if(sepCount >= sepImages.length){sepCount = 0;}
    }


   // newImage();
//const button = document.querySelector('#newQuote');
    //button.addEventListener('click', newQuote);


    function pronewImage(){

       
        let proChosenImage = shuffle_proImages[proCount];
        
        document.getElementById('pro-images').innerHTML = `<img src="proFotos/${proChosenImage}.png" alt="Provi Eye" class="responsive w3-border" width="550px"> `;
        
       
    
        proCount++;
        if(proCount >= proImages.length){proCount = 0;}
        
        }


    
        function sepnewImage(){

            let sepChosenImage = shuffle_sepImages[sepCount];
             
             
             
             document.getElementById('sep-images').innerHTML = `<img src="sepFotos/${sepChosenImage}.png" alt="" class="responsive w3-border" width="550px"> `;
            
         
             sepCount++; 
             
             if(sepCount >= sepImages.length){sepCount = 0;}
             }
     