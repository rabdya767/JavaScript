/*
const para=document.querySelector('p');
//console.log(para.innerText);
para.innerText += ` Added text`;
console.log(para.innerText);
*/
// To change the multiple tags content

// const paras=document.querySelectorAll('p');
// paras.forEach(para=>
//     {
//         para.innerText += ` Newly Added content is 'Rabdya'`;
//         console.log(para.textContent);
//     })

//For a DIV tag
const content=document.querySelector('.error');
content.innerHTML += `<h2> This h2 heading is added</h2>`;
//console.log(content.innerHTML);

const people=['John','Walter','Peter'];
people.forEach(person=>
    {
        content.innerHTML += `<p> ${person} added </p>`;
        console.log(content.innerHTML);
    });
