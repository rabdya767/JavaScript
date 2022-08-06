let p = new Promise((resolve, reject) => {
    let a = 1 + 2 - 1;
    if (a == 2) {
        resolve("success");
    }
    else {
        reject("Failed");
    }
})

p.then((message) => {
    console.log("This message from then " + message);
}).catch((message) => {
    console.log("From reject " + message);
}).finally((message = "Finally") => {
    console.log("Hello World " + message);
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded");
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded");
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded");
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).catch(()=>{reject("Failed")});

fetchUsers.then(x => {
    for(i in x){
        console.log(x[i].id+" --> "+x[i].name+" --> "+x[i].username);
    }
}).catch((err) => {
    console.log(err);
})