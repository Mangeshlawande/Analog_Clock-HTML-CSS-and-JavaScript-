let sh = document.getElementById('second_hand');
let mh = document.getElementById('minute_hand');
let hh = document.getElementById('hour_hand');

function clock() {
    const date = new Date()
    const sec = date.getSeconds()/60
    const min = (sec + date.getMinutes())/60
    const hour = (min + date.getHours())/12

    
    rotateclk(sh, sec)
    rotateclk(mh, min)
    rotateclk(hh, hour)
    
}

function rotateclk(p1,p2) {
    p1.style.setProperty('--rotate',p2 * 360)
    
}

setInterval(clock, 5);

