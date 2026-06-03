let user = {
  name: "Sam",
  address: {
    city: "Pune"
  }
};
copy=[...user];
console.log(user.address.city );    
copy.address.city.push("Mumbai");
console.log(user.address.city ); //output in nested chnages according to copy


//this assignment shows whts the issue in shallow copy