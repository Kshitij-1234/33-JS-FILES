/*Counter closure:

Create function:

createCounter()

that returns another function.

Every call should increase count:

1
2
3

This is your closure assignment.*/
function createcounter()
{
    let count = 0;
    function counter(){

            count++
         return count;
        
    }
    return counter;
}
 
const counter = createcounter();
console.log(counter());
console.log(counter());
console.log(counter());
