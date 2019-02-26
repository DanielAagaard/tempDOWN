

const stats = {     // Objekt som indeholder variabler og arrays
currentTime: 0,
currentScore: 0,
chosenImages: [],
chosenField: [],
inviFoto: []
};

function gameTimer() {      // Funktion som tæller sekunder og viser på skærmen som timer
    stats.currentTime++
    document.getElementById("timer").innerHTML = `Time: ${stats.currentTime} sec`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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
        stats.inviFoto.push(newFotoOptions[0]);
        newFotoOptions.shift();
    }

    document.getElementById("img1").alt = `${stats.inviFoto[0]}.png`;
    document.getElementById("img2").alt = `${stats.inviFoto[1]}.png`;
    document.getElementById("img3").alt = `${stats.inviFoto[2]}.png`;
    document.getElementById("img4").alt = `${stats.inviFoto[3]}.png`;
    document.getElementById("img5").alt = `${stats.inviFoto[4]}.png`;
    document.getElementById("img6").alt = `${stats.inviFoto[5]}.png`;
    document.getElementById("img7").alt = `${stats.inviFoto[6]}.png`;
    document.getElementById("img8").alt = `${stats.inviFoto[7]}.png`;
    document.getElementById("img9").alt = `${stats.inviFoto[8]}.png`;
    document.getElementById("img10").alt = `${stats.inviFoto[9]}.png`;
    document.getElementById("img11").alt = `${stats.inviFoto[10]}.png`;
    document.getElementById("img12").alt = `${stats.inviFoto[11]}.png`;
    document.getElementById("img13").alt = `${stats.inviFoto[12]}.png`;
    document.getElementById("img14").alt = `${stats.inviFoto[13]}.png`;
    document.getElementById("img15").alt = `${stats.inviFoto[14]}.png`;
    document.getElementById("img16").alt = `${stats.inviFoto[15]}.png`;
    document.getElementById("score").innerHTML = `Score: ${stats.currentScore} pairs`;

    setInterval(gameTimer, 1000)
};

function Chooser(para) {
    stats.chosenField.push(para)
    srcSolve = para - 1;
    srcConse = stats.inviFoto[srcSolve];
    document.getElementById(`img${para}`).src = `./pics/${srcConse}.png`;
    saver(`${srcConse}`);
};

function saver(chose) {
    stats.chosenImages.push(chose);
    if(stats.chosenImages.length == 1){
        document.getElementById("timer2").innerHTML = `${stats.chosenImages}`;
    } else if (stats.chosenImages.length > 1){
        document.getElementById("timer2").innerHTML = `${stats.chosenImages}`;
        choiceEval(stats.chosenImages[0], stats.chosenImages[1]);
    }
    
}

async function choiceEval(choi1, choi2) {
    await sleep(300);
    if(choi1 == choi2) {
        stats.currentScore += 1;
        document.getElementById("score").innerHTML = `Score: ${stats.currentScore} pairs`;
        document.getElementById("timer2").innerHTML = `${stats.chosenImages}`;
        document.getElementById(`img${chosenField[0]}`).style.visibility = "hidden"
        document.getElementById(`img${stats.chosenField[1]}`).style.visibility = "hidden"
        stats.chosenImages = [];
        stats.chosenField = [];
    } else {
        document.getElementById("timer2").innerHTML = `${stats.chosenImages}`;
        document.getElementById(`img${stats.chosenField[0]}`).src = `./pics/black.png`
        document.getElementById(`img${stats.chosenField[1]}`).src = `./pics/black.png`
        stats.chosenImages = [];
        stats.chosenField = [];
    }
}
    

    
    
