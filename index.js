let countHome = document.getElementById("count-el-home")
let countGuest = document.getElementById("count-el-guest")
let endingGame = document.getElementById("winner")
let homeCount = 0
let guestCount = 0

function updateHome1() {
    homeCount += 1
    countHome.textContent = homeCount
}

function updateHome2() {
    homeCount += 2
    countHome.textContent = homeCount
}

function updateHome3() {
    homeCount += 3
    countHome.textContent = homeCount
}

function incrementGuest1() {
    guestCount += 1
    countGuest.textContent = guestCount
}

function incrementGuest2() {
    guestCount += 2
    countGuest.textContent = guestCount
}

function incrementGuest3() {
    guestCount += 3
    countGuest.textContent = guestCount
}

function resetScore(){
    countHome.textContent = 0
    countGuest.textContent = 0
    homeCount = 0
    guestCount = 0
    countHome.style.background = '#080001'
    countGuest.style.background = '#080001'
}

function endGame() {
    if (homeCount > guestCount) {
       countHome.style.background = "#6EE7B7"
    } else if (homeCount < guestCount) {
        countGuest.style.background = "#6EE7B7"
    } else {
        countHome.style.background = "#FCD34D"
        countGuest.style.background = "#FCD34D"
    }
}