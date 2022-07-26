/*
//const para=document.querySelector('p');//First P tag
//const para=document.querySelector('.error'); //Error Class tag
const para=document.querySelector('body > div:nth-child(2) > p:nth-child(1)');//Div and Error Class 

console.log(para);

*/

const paras=document.querySelectorAll('error');
/*console.log(paras[0]);
console.log(paras[1]);
console.log(paras[2]);
*/
paras.forEach(para=>{
    console.log(para);
})