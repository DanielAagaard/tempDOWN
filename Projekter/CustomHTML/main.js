window.onload = function() {
    document.getElementById('h1-text').addEventListener("click", showTable);
    document.getElementById('shownImage').addEventListener("click", ImgUrlInput);
  }

let Fotos = ['./Fotos/display1.jpeg', "./Fotos/display2.png", "./Fotos/display3.png"]

function makeChanges() {
    let styler = document.getElementById('stylerSelector').value;
    const textField = document.getElementById('newText').value;

    if(styler == 'text') {
        let curId = document.getElementById('elementSelector').value
        document.getElementById(curId).innerHTML = textField;
    } else if (styler == 'color') {
        let curId = document.getElementById('elementSelector').value
        document.getElementById(curId).style.color = textField;
    } else if (styler == 'size') {
        let curId = document.getElementById('elementSelector').value
        document.getElementById(curId).style.fontSize = `${textField}px`;
    } 
    
    
};

function showTable() {
    document.getElementById('changesTable').style.visibility = 'visible';
}

function ImgUrlInput() {
    document.getElementById('urlInput').style.visibility = 'visible';
}

function imgMakeChanges () {
    let imager = document.getElementById('imageStdSelector').value;

    if (imager == 'asStd') {
        document.getElementById('shownImage').src = document.getElementById('imageStdSelector').value
    }
};

function newImageApply () {
    let hei = document.getElementById('newerImageH').value
    let wid = document.getElementById('newerImageW').value

    document.getElementById('shownImage').style.width = `${wid}px`;
    document.getElementById('shownImage').style.height = `${hei}px`;
    document.getElementById('shownImage').src = document.getElementById('newerImage').value;
}