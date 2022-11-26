

// let counte = document.getElementById("counter")

// console.log(counte)
// let counted = 0

// function increase() {
//     counted += 1;
//     counte.innerText = counted
//     console.log(counted)
// }

let countor = document.getElementById("counter");
let saveHere = document.getElementById("savehere")

let counted = 0;

function increase(){
    counted += 1;
    countor.textContent = counted;
}


//console.log(saveHere)
function save(){
    let countStr = counted + " - ";
    saveHere.textContent += countStr ;
    counted = 0
    countor.textContent = counted;
}

let homeScore = document.getElementById("home-el")
let guestScore = document.getElementById("guest-el")
console.log(homeScore)
console.log(guestScore)
let homePlus = 0
let guestPlus= 0

function plus1(){
    homePlus += 1
    homeScore.textContent = homePlus
}
function plus2(){
    homePlus += 2
    homeScore.textContent = homePlus
}
function plus3(){
    homePlus += 3
    homeScore.textContent = homePlus
}

function plus11(){
    guestPlus += 1
    guestScore.textContent = guestPlus
}
function plus22(){
    guestPlus += 2
    guestScore.textContent = guestPlus
}
function plus33(){
    guestPlus += 3
    guestScore.textContent = guestPlus
}

function reset(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    homePlus = 0
    guestPlus = 0
}
