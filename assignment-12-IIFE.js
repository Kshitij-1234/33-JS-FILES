
const app=(function() {
   let secret=123;
  return{
    getsecret(){
      return secret;
    }
  };
})();

console.log(app.getsecret()); //123

//so basically here we have created a IIFE which has a private variable secret and we can access it using the getsecret method but we cannot ACCESS it from outside the IIFE DIRECTLY.