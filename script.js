
//the function to do the math 

const add = function(...nums) {
    return nums.reduce((total, num) => total +num,0)
  };

  const subtract = function(...nums) {
    return nums.reduce((total, num) => total - num,0)
 };

 const multiply = function(...nums) {
    return nums.reduce((total, num) => total * num,0);
 };

 const divide = function(...nums) {
    return nums.reduce((total, num) => total / num,0);
 };
 
// to match  the input and send them to the right function for math 
 const addState=/\d*(\.\d+)?\s\+\s\d*(\.\d+)?/gm;
const subtractState= /\d*(\.\d+)?\s\-\s\d*(\.\d+)?/gm;
const multiplyState=/\d*(\.\d+)?\s\*\s\d*(\.\d+)?/gm;
const divideState=/\d*(\.\d+)?\s\/\s\d*(\.\d+)?/gm;
 

  function operator (input){
     
    
    
    
    
    
    
    
    return input.match(addState)? add(input): 
     input.match(subtractState)?subtract(input):
     
     input.match(multiplyState)?multiply(input):
     
     input.match(divideState)?divide(input):
     
     console.log("this didn't work");
    };




    const inputText = document.getElementById("input");
    
     function undoButton () { 
        const inputstring =String(inputText.textContent);
        
        const inputundo= inputstring.slice(0,-1);
        
        return inputText.textContent=`${inputundo}`;
    }
   
    
    
    
    
    function whatButton(buttonId){
        return buttonId=="clear"? inputText.textContent="": 
        
        buttonId=="="? operator(inputText.textContent):
        
        buttonId=="undo"? undoButton():
        
        inputText.textContent+=`${buttonId}`;

    }

        
    // make the the buttons work 
    const buttons =document.querySelectorAll(".button-style");
    
    buttons.forEach((button)=>{
        const idName= button.getAttribute("id");
         
         button.addEventListener("click",()=>{
             whatButton(idName);
            }
            
        );
       

    })
