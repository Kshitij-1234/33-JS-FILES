if(true) {
   var a = 10;
   let b = 20;
   const c = 30;
   console.log(b); //block scope works inside the same block of{}
   console.log(c); // same as above
}

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined