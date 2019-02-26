let coinAmount = 99999999;
let cpc = 1;

let cps = 1;                        // Værdi tilføjet pr. interval
let cpsPerSec = 1;                  // Interval (antal iterationer pr. sekund)
let cPerSecInterval = 1000 / cpsPerSec;   // Total interval (antal iter pr. sekund i MS)

let curCar = 1;
let curHouse = 1;

var levelUpgrade = new Object();
    levelUpgrade.nextCpc = cpc * 2;
    levelUpgrade.cpcprice = cpc * 10;
    levelUpgrade.nextCps = cps + 1;
    levelUpgrade.cpsprice = cpc * 10;
    
window.onload = function(){
    document.getElementById('coins').placeholder = coinAmount;
    document.getElementById('upgr').innerHTML = `Next CPC: ${levelUpgrade.nextCpc}`;
    document.getElementById('upgr2').innerHTML = `Price: ${levelUpgrade.cpcprice}`;
    document.getElementById('upgr4').innerHTML = `Next CPS: ${levelUpgrade.nextCps}`;
    document.getElementById('upgr5').innerHTML = `Price: ${levelUpgrade.cpsprice}`;
    document.getElementById('stat-perclick').innerHTML = `Coins /click:&emsp;${cpc}`;
    document.getElementById('stat-persec').innerHTML = `Coins /sec:&emsp;&nbsp;&nbsp;&nbsp;${cps}`;
    document.getElementById("currentHouse").src = `./image/upgrade-visuals/house-${curHouse}.png`;
    document.getElementById("currentCar").src = `./image/upgrade-visuals/car-${curCar}.png`;
};

function clicker() {
    coinAmount += cpc;
    document.getElementById('coins').value = coinAmount;
};

function cPerSec() {
    coinAmount += cps;
    document.getElementById('coins').value = coinAmount;
};

function nextLevelCpc(){

    levelUpgrade.nextCpc = cpc * 2;
    levelUpgrade.cpcprice = cpc * 10;

    if (coinAmount >= levelUpgrade.cpcprice) {
        coinAmount -= levelUpgrade.cpcprice;
          document.getElementById('coins').value = coinAmount;
        cpc *= 2;
          document.getElementById('stat-perclick').innerHTML = `Coins /click:&emsp;${cpc}`;
        levelUpgrade.cpcprice = cpc * 10;
          document.getElementById('upgr2').innerHTML = `Price: ${levelUpgrade.cpcprice}`;
        levelUpgrade.nextCpc = cpc * 2;
          document.getElementById('upgr').innerHTML = `Next CPC: ${levelUpgrade.nextCpc}`;
        
        if(curHouse < 10){
            curHouse += 1;
              document.getElementById("currentHouse").src = `./image/upgrade-visuals/house-${curHouse}.png`;
        } else {};
          
    } else {
        alert('Not enough coins');
    };
};

setInterval(cPerSec, cPerSecInterval);

function nextLevelCps() {
    if (coinAmount >= levelUpgrade.cpsprice) {
        coinAmount -= levelUpgrade.cpsprice;
          document.getElementById('coins').value = coinAmount;
        cps += 1;
        document.getElementById('stat-persec').innerHTML = `Coins /sec:&emsp;&nbsp;&nbsp;&nbsp;${cps}`;
        levelUpgrade.cpsprice = cps * 10;
          document.getElementById('upgr5').innerHTML = `Price: ${levelUpgrade.cpsprice}`;
        levelUpgrade.nextCps = cps + 1;
          document.getElementById('upgr4').innerHTML = `Next CPS: ${levelUpgrade.nextCps}`;
        
        if(curCar < 10){
            curCar += 1;
          document.getElementById("currentCar").src = `./image/upgrade-visuals/car-${curCar}.png`;
        } else {};

        
    } else {
        alert('Not enough coins');
    };
};