/**
  * The keystone of AJAX is the XMLHttpRequest object.
  *
  * Create an XMLHttpRequest object
  * Define a callback function
  * Open the XMLHttpRequest object
  * Send a Request to a server
  * 
  */
function loadDoc() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        console.log("readyState is ", xhttp.readyState);
        console.log("Status is ", xhttp.status, " and statusText is ", xhttp.statusText);
    }
    xhttp.onload = function () {
        console.log("Status is ", xhttp.status, " and statusText is ", xhttp.statusText);
        console.log("Ready state is -", xhttp.readyState);
        // What to do when the response is ready
        console.log(this.responseText);
        document.getElementById("demo").innerHTML = `<h2>${this.responseText}</h2>`;
    }
    // console.log("Ready state is -- ", xhttp.readyState);
    xhttp.open("GET", "README.md");
    // console.log("Ready state is ---", xhttp.readyState);
    xhttp.send();
    // console.log("Ready state is ----", xhttp.readyState);
}