
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
 

  function pickOperator (input){
     
    return input.match(addState)? add(input): 
     input.match(subtractState)?subtract(input):
     
     input.match(multiplyState)?multiply(input):
     
     input.match(divideState)?divide(input):
     
     console.log("this didn't work");
    };

    function middleAnswer(str){
        const mid= str.length/2;
        console.log(mid);
        const wholeNum= Math.floor(mid);
        console.log(wholeNum);
        return mid== wholeNum? mid: wholeNum+1;
    }
    
    
    function breakProblem (str){
        
        const middlePoint= middleAnswer(str);
        console.log(middlePoint);
        if(str.indexOf("+")== middlePoint){
            const addMid= str.split("+");
            console.log(addMid);
        } 
        else if(str.indexOf("-")== middlePoint){
            const subMid= str.split("-");
            console.log(subMid);
        }
        else if(str.indexOf("*")== middlePoint){
            const timeMid= str.split("*");
            console.log(timeMid);
        } 
        else if(str.indexOf("/")== middlePoint){
            const divideMid= str.split("/");
            console.log(divideMid);
        } 
        else{
            console.log("this didn't work")
        }
    }


    const inputText = document.getElementById("input");
    
     function undoButton () { 
        const inputstring =String(inputText.textContent);
        
        const inputundo= inputstring.slice(0,-1);
        
        return inputText.textContent=`${inputundo}`;
    }
   
    
    
    
    
    function whatButton(buttonId){
        return buttonId=="clear"? inputText.textContent="": 
        
        buttonId=="="? breakProblem(inputText.textContent):
        
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
