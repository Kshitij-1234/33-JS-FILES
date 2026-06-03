let globalVar = "global";

function outer() {
   let outerVar = "outer";
   console.log(outerVar);  

   function inner() {
      let innerVar = "inner";
       console.log(innerVar); 
      
   }
   inner();
   
   console.log(outerVar);
   //console.log(innerVar); 

}
//which variables accessible where
outer();
console.log(globalVar); 
//console.log(outerVar); 



