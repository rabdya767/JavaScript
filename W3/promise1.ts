const PromiseFunction = new Promise((resolve, reject) => {
    let a : number = 1 + 2;
    if (a == 2) {
        resolve("success");
    }
    else {
        reject("Failed");
    }
})

PromiseFunction.then((message)=>{
    console.log("This message from then "+message);
}).catch((message)=>{
    console.log("From reject "+message);
}).finally((message="Finally")=>{
    console.log("Hello World "+message);
})