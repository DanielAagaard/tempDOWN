let currentTime = 0;
let currentScore = 0;
let chosenImages = [];

function gameTimer() {
    currentTime++
    document.getElementById("timer").innerHTML = `Time: ${currentTime} sec`;
}

let inviFoto = [];

function gameStart() {
    
    
    let fotoOptions = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    
    function shuffle(array) {
        var m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
      }

    let newFotoOptions = shuffle(fotoOptions)

    for (let i = 0; i < 16; i++) {
        inviFoto.push(newFotoOptions[0]);
        newFotoOptions.shift();
    }

    document.getElementById("img1").alt = `${inviFoto[0]}.png`;
    document.getElementById("img2").alt = `${inviFoto[1]}.png`;
    document.getElementById("img3").alt = `${inviFoto[2]}.png`;
    document.getElementById("img4").alt = `${inviFoto[3]}.png`;
    document.getElementById("img5").alt = `${inviFoto[4]}.png`;
    document.getElementById("img6").alt = `${inviFoto[5]}.png`;
    document.getElementById("img7").alt = `${inviFoto[6]}.png`;
    document.getElementById("img8").alt = `${inviFoto[7]}.png`;
    document.getElementById("img9").alt = `${inviFoto[8]}.png`;
    document.getElementById("img10").alt = `${inviFoto[9]}.png`;
    document.getElementById("img11").alt = `${inviFoto[10]}.png`;
    document.getElementById("img12").alt = `${inviFoto[11]}.png`;
    document.getElementById("img13").alt = `${inviFoto[12]}.png`;
    document.getElementById("img14").alt = `${inviFoto[13]}.png`;
    document.getElementById("img15").alt = `${inviFoto[14]}.png`;
    document.getElementById("img16").alt = `${inviFoto[15]}.png`;
    document.getElementById("score").innerHTML = `Score: ${currentScore} pairs`;

    setInterval(gameTimer, 1000)
};

function Chooser(para) {
    srcSolve = para - 1;
    srcConse = inviFoto[srcSolve];
    document.getElementById(`img${para}`).src = `/Vendespil/pics/${srcConse}.png`;
    saver(`${srcConse}`, para);
};

function saver(chose, para) {
    chosenImages.push(chose);
    if(chosenImages.length == 1){
        document.getElementById("timer2").innerHTML = `${chosenImages}`;
    } else if (chosenImages.length > 1){
        document.getElementById("timer2").innerHTML = `${chosenImages}`;
        choiceEval(chosenImages[0], chosenImages[1], para);
    }
    
}

function choiceEval(choi1, choi2, para) {
    if(choi1 == choi2) {
        currentScore += 1;
        document.getElementById("score").innerHTML = `Score: ${currentScore} pairs`;
        chosenImages = [];
        document.getElementById("timer2").innerHTML = `${chosenImages}`;
        document.getElementById(`img${para}`).style.visibility = "hidden"
    } else {
        chosenImages = [];
        document.getElementById("timer2").innerHTML = `${chosenImages}`;
        document.getElementById(`img${para}`).src = `/Vendespil/pics/black.png`
    }
}
    

    
    
