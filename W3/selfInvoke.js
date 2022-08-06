(function selfInvoke(){
    console.log("I am a self Invoke function");
})();

// (()=>{
//     console.log("I am a self Invoke function");
// })();

const x = sumAll(6,4,2,3,5,7,9,12,45,76);

console.log("Sum is ",x);

function sumAll(){
    let s=0;
    for(let i in arguments){
        s+=arguments[i];
    }
    return s;
}


function myFunction(a, b) {
    return a * b;
  }
console.log("Multiplication of "+10+" and "+2+" is "+myFunction(10, 2));   



const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.call(person1, "Oslo", "Norway"));
 
//The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
function time(){
for(let i=0;i<5;i++){
setTimeout(()=>{
  let d = new Date();
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  console.log("I love You !! After 3 seconds");
} , 2000);
}
}

setTimeout(time,2000);