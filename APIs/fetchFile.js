async function getText(fileName) {
    let fileObject = await fetch(fileName);
    let text = await fileObject.text();
    console.log(text);
}

// getText("./timer.js");