api_url = "https://api.github.com/users";

fetch(api_url)
.then((response)=>{console.log(response);})
.then((data)=>{ console.log(data);})
.catch((err)=>{ console.log(err);})