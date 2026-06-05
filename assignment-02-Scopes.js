const A="global";//this is global and can be called from anywhere

function TEST()
{

  if(true)
 {    
var a="i am function scope ";//  this string is declared by var  and var belongs to the functon not to the blockso can be be called in the function but not ouside the function
let b="blocke scope";// this will only work inside this block cannot use it even the nested funciton
console.log(b);
console.log(A);
  }
  
function block()
{
   console.log(a+"  \n");
   console.log(A);
}
block();

}
TEST();
console.log(A);