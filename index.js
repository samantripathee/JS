// document.getElementById("zero").innerText = 5
// let count = 0
// console.log(count)

// let myAge = 20
// let humanDogRatio = 1/7
// myDogAge = myAge * humanDogRatio
// console.log("Your result is : ",myDogAge)


// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints +75-30
// console.log(bonusPoints)
let count = 0
let saveValue = 0
let saveLog = document.getElementById("save-bt")
let countEL = document.getElementById("zero")
let previousEL = document.getElementById("previous-el")
let previousValue = 0
function increment(){
    
    count += 1 
    countEL.textContent = count
    
}
function save(){
    previousValue = " " + count + " --"
    previousEL.textContent += previousValue
    countEL.textContent = 0
    count = 0
}

// let personName = "Saman"
// let greeting = "Hello,"
// let myGreeting = greeting + " " +personName+ "!"
// console.log(myGreeting)
