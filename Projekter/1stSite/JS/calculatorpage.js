function insert(num){
    document.form.textview.value = document.form.textview.value+num
    }

function chgclr(ctr){
    for(let te = 0;te < 19; te++){
        let ar = ["chgg1","chgg2","chgg3","chgg4","chgg5","chgg6","chgg7","chgg8","chgg9","chgg10","chgg11","chgg12","chgg13","chgg14","chgg15","chgg16","nulknap","ansbox","bhndansbox"]
        document.getElementById(ar[te]).style.backgroundColor = ctr;
        }
    }

function chgcalclr(crr){
    document.getElementById('fullcal').style.backgroundColor = crr;
}

function chgtxtclr(crt){
    for(let tee = 0;tee < 19; tee++){
        let arr = ["chgg1","chgg2","chgg3","chgg4","chgg5","chgg6","chgg7","chgg8","chgg9","chgg10","chgg11","chgg12","chgg13","chgg14","chgg15","chgg16","nulknap","ansbox","bhndansbox"]
        document.getElementById(arr[tee]).style.color = crt;
        }
}

function chgbckclr(tcr){
    document.body.style.backgroundColor = tcr;
}