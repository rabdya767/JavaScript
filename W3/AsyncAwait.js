/**
 * "async and await make promises easier to write"
 *
 * async makes a function return a Promise
 *
 * await makes a function wait for a Promise
 * 
 */
async function myFunction() {
    return "Hello";
}

//  function myFunction() {
//     return Promise.resolve("Hello");
//  }

myFunction().then((x) => {
    console.log(x);
}).catch((err) => { console.log("Error is " + err); });


async function myFun() {
    const myPromise1 = new Promise(function (resolve, reject) {
        setTimeout(() => { resolve("I Love You..!"); }, 3000);
        // reject("I hate You..!");
    });
    return await myPromise1;
}

myFun().then((x) => {
    console.log("Successful " + x);
}).catch((err) => {
    console.log("Error is ", err);
});


const getData = async () => {
    var data = "Hello World From async await Function";
    return await data;
}

getData().then(x=>console.log("mg raa "+x));

/**
 * gfg
 */

function aom() {
    let fp = new Promise((resolve , reject )=> resolve("Hello From GFG"));
    let sp= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" GeeksForGeeks");
        },4000);
    });

    return Promise.all([fp,sp])
}

async function displayPromise() {
    let promiseData = await aom();
    console.log("promise Data is "+ promiseData);
}

displayPromise();