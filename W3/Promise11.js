/**
 *                         "I Promise a Result!"
 *                 "Producing code" is code that can take some time
 *               "Consuming code" is code that must wait for the result
 *      A Promise is a JavaScript object that links producing code and consuming code
 */

//  let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)

//       myResolve(); // when successful
//       myReject();  // when error
//     });

//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );


let myPromise = new Promise(function (myResolve, myReject) {
    let x = 50;
    if (x == 0) {
        myResolve("OK!");
    } else {
        myReject("Failed..!");
    }
});

myPromise.then(
    function (value) { console.log("Success Value is ", value); }//,
    // function(error) { console.log("Error Value is ",error);}
).catch((error) => { console.log("error is " + error); });
