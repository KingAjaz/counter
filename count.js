

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
