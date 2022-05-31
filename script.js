
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
    
    //for the calcular parmeter
    function parRule(meter){
        return  console.log(meter);
    }
    
    
    
    
    function Whatbutton(buttonid){
        return buttonid=="c"? inputText.textContent="": 
        
        buttonid=="="? operator(inputText.textContent):
        
        buttonid=="undo"?inputText.slice(1,inputText.length-1):
        
        buttonid=="()"? parRule(inputText.textContent): 
        
        inputText.textContent=`${buttonid}`;

    }



    // make the the buttons work 
    const buttons =document.querySelectorAll(".button-style");
    
    buttons.forEach((button)=>{
        const idName= button.getAttribute("id");
         
         button.addEventListener("click",()=>{
             Whatbutton(idName);
            }
            
        );
       

    })
