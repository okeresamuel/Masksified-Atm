// return masked string

const usersATM = document.querySelector(".users-atm-numbers")
const btn  = document.querySelector('.show-hide');
const eye_icon = document.querySelector(".eye_image")
const Num_regex = /.{1,4}/g
  
function maskify(incommingString) {
       let theHashSymbol = [] 
       let string = incommingString.split(" ")
        
     //Loop through the string  with the map function and slice out the last four   
        let result =  string.map( element =>{  
     // inside the mapFunction use the for loop to hide the other numbers that are not the sliced out 4
       for(let i = 0; i < element.length -4; i++){  
        let hash = "*" 
        theHashSymbol.push(hash)
        } 
        return element.slice(-4) 
      })
       
    //  join both the hidden numbers and the lastfour and space the numbers using Regex
       let  theHashSymbols = theHashSymbol.join("")
       let  lastFour = result.join("")
       let HashedAndLastFour = `${theHashSymbols}${lastFour}`
       usersATM.innerText = HashedAndLastFour.match(Num_regex).join(" "); 

     // Hide and show functionality  
     btn.addEventListener('click', function () {  
     if(theHashSymbol){
       let HashedAndLastFour = incommingString
       usersATM.innerHTML = HashedAndLastFour.match(Num_regex).join(" ");  
       eye_icon.src = "./images/eyeimg.png"
       btn.style.backgroundColor="red"
       theHashSymbol = ""
     }else if(!theHashSymbol){
        let HashedAndLastFour = `${theHashSymbols}${lastFour}`
        usersATM.innerHTML = HashedAndLastFour.match(Num_regex).join(" ");
        eye_icon.src = "./images/closed_eye.png"  
        btn.style.backgroundColor="green"
        theHashSymbol = true              
    }
    });
}
console.log(maskify(usersATM.innerHTML="1234268107397295"))
