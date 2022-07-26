// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));//To get the attribute linked with the href

// //To set attribute

// link.setAttribute('href','https://www.instagram.com/');
// link.innerHTML='New';//To change the inner text

/*
To Change the Style attribute
const title=document.querySelector('h2');
title.setAttribute('style','margin: 50px');//Bad Syntax
console.log(title.style);//To see all properties

//Good Syntax
title.style.color='green';
console.log(title.style.color);

title.style.fontSize='60px';
*/

// //Adding and removing and classes
// const cls=document.querySelector('p');
// console.log(cls.classList);
// cls.classList.remove('error');

const cls=document.querySelectorAll('p');
cls.forEach(cl => {
    if(cl.textContent.includes('success'))
    {
        cl.classList.add('success');
    }

    if(cl.textContent.includes('fail'))
    {
        cl.classList.includes('fail');
    }
})