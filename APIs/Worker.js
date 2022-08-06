let w;

function startWorker() {
    if (typeof (w) == "undefined") {
        w = new Worker("./timer.js")
    }
    w.onmessage = function (event) {
        document.getElementById("result").innerHTML = `😀 ${event.data}`;
        console.log("😀",event.data);
    }
}

function stopWorker() {
    getText("./timer.js");
    if (w !== undefined) {
        w.terminate();
        w = undefined;
    }
}