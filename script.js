
let logo = document.getElementById("connector_2_");

console.log("hiss");

var i = 1;                   

function rotate () {      
    setTimeout(function () {   
         logo.style.transform = "rotate(" + i + "deg)";
        i++;                    
        if (i > 0) {       
            rotate();            
        }        
    }, 3);
}

rotate();           