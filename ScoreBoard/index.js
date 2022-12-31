let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let count = 0;

function add1(){
    count = count+1;
    scoreHome.textContent = count;
}

function add2(){
    count = count+2;
    scoreHome.textContent = count;
}
function add3(){
    count = count+3;
    scoreHome.textContent = count;
}

let guestCount = 0;
function guestScore1(){
    guestCount += 1;
    scoreGuest.textContent = guestCount;
}

function guestScore2(){
    guestCount += 2;
    scoreGuest.textContent = guestCount;
}
function guestScore3(){
    guestCount += 3;
    scoreGuest.textContent = guestCount;
}