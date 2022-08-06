localStorage.setItem("name","Santhosh");
localStorage.setItem("college","OUCE");
localStorage.setItem("rnumber","100518733041");
localStorage.setItem("branch","CSE");

const n = localStorage.length;

for(let i=0; i<n;i++){
    console.log(localStorage.key(i),"--->",localStorage.getItem(localStorage.key(i)));
}

localStorage.removeItem("rnumber");