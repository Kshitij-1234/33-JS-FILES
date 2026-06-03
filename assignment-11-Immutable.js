let name={Name:"KS", 
          Age:25, 
          City:"Pune"};
console.log(name);        
let update={
    ...name,
    Name:"Kshitij"
} ;                 
console.log(update);
object.freeze(update);
update.Name="KSHITIJ";//WILL ERROR BECUZ OBJ IS FROZEN
console.log(update);