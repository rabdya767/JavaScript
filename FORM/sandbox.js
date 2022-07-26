const form=document.querySelector('.sign-up');
// const un=document.querySelector('#username');
// const password=document.querySelector('#password');
const pattern=/^[a-zA-Z]{6,12}$/;

form.addEventListener('submit',e =>{
    e.preventDefault();
    // console.log(`${username.value}  ${password.value}`);
    //console.log(`${form.username.value} ${form.password.value}`);
    

// const pattern=/[a-z]{6,}/;
// const un='rabdya';
// let res=pattern.test(un);
// console.log(res);

//const un=form.username.value;
const cu=document.querySelector('.checkuser');

if(pattern.test(form.username.value))
{
    cu.textContent = 'The user '+form.username.value+' is a valid user';
    //console.log(`User ${un} is a valid user`);
}
else
{
    cu.textContent = 'The user '+form.username.value+' is not a valid user';
    //console.log(`User ${un} is not a valid user`);
}
});

form.username.addEventListener('keyup', e=>{
    // console.log(e.target.value , form.username.value);
    if(pattern.test(e.target.value))
    {
        form.username.setAttribute('class','success');
        //console.log(`passed`);
    }
    else
    {    
        form.username.setAttribute('class','error');
        //console.log(`Failed`);
    }
});


const weakpattern=/[a-zA-Z0-9]{1,3}/;
const mediumpattern=/[a-zA-Z0-9]{3,6}/;
const strongpattern=/[a-zA-Z0-9]{7,10}/
form.password.addEventListener('keyup',e=>{
    if(weakpattern.test(e.target.value))
    {
        form.password.setAttribute('class','weak');
    }
    else if(mediumpattern.test(e.target.value))
    {
        form.password.setAttribute('class','medium');
    }
    else
    {
        form.password.setAttribute('class','strong');
    }
});