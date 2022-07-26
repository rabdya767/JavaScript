/*
 const scores=[10,30,15,25,50,40,5];

// const filterScore=scores.filter((score)=>{
//     return score > 20;
// });

// console.log(filterScore);
const users=[
    {name: 'mario' , premium : true},
    {name: 'peter' , premium : false},
    {name: 'Walter' , premium : true},
    {name: 'john' , premium : false},
    {name: 'luigi' , premium : true}
];

const premiumUsers=users.filter(user=>user.premium);
console.log(premiumUsers);


//Map
const Product=[10,30,15,25,50,40,5];

const SalesPrice=Product.map((x)=>{
    if(x>30)
    {
        return x/2;
    }
    else
    {
        return x;
    }
});
console.log(Product,SalesPrice);

*/
const scores=[10,20,60,40,70,,90,30];
// var count=0;
const res=scores.reduce((count,score) =>{
    if(score>50){
        count++;
    }
    return count;
},0);

console.log(`There are ${res} half-centuries`);