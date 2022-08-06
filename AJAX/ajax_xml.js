const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    const xmlDoc = this.responseXML;
    const x = xmlDoc.getElementsByTagName("ARTIST");
    const pr = xmlDoc.getElementsByTagName("PRICE");
    const yr = xmlDoc.getElementsByTagName("YEAR");
    let text = "";
    for (let i = 0; i < x.length; i++) {
        text = text + x[i].childNodes[0].nodeValue + "------" + yr[i].childNodes[0].nodeValue + "---" + pr[i].childNodes[0].nodeValue + "<br>";
    }

    // document.getElementById("demo").innerHTML = `<h4>${text}</h4>`;
    // document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
    console.log(text);
}

xhttp.open("GET", "catalog.xml");
xhttp.send();



function loadData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        injectData(this);
    }
    xhttp.open("GET", "catalog.xml");
    xhttp.send();
}

function injectData(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table = "<tr><th>TITLE</th><th>COUNTRY</th><th>PRICE</th><th>YEAR</th></tr>";
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            (x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue).toUpperCase() +
            "</td><td>" +
            x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("table_id").innerHTML = table;
}