function add(A,B){
    return A + B;

}   
console.log(add(5,10));//this is pure function becuz it does affect actuial value of a,b and returns  output
let total=0;
function sum(x){
    total+=x;
    return total;
}
console.log(sum(5));
console.log(total);//the one with x is impure becuz it also causes changes outside the function 
