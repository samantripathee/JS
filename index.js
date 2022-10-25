
let hasBlackJack = false
let isOver = false
cards = []
totalCards = 0
result = 0
let text =""
let messageEl = document.getElementById("question")
let sumEL = document.getElementById("final-row")
let cardsEl = document.getElementById("third-row")
function startGame(){
    let firstCard = getCards()
    let secondCard = getCards()
    cards = [firstCard,secondCard]
    totalCards = 2
    result = firstCard + secondCard
    renderGame()
}
function getCards(){
    randomCard = Math.floor(Math.random() * 12) + 1
    if (randomCard === 1){
        return 11
    }
    else if(randomCard >= 11){
        return 10
    }
     else{
        return randomCard
     }
}
function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " / " + cards[1] 
    for(count = 2; count<totalCards ; count++){
        cardsEl.textContent += " / " + cards[count] 
    }
    sumEL.textContent = "Sum : "+result
    if(result === 21){
        text = "You have a blackjack!"
        hasBlackJack = true
        messageEl.textContent = text
    }
    else if(result>21){
        text = "You Lost!\n Better Luck Next Time!"
        isOver = true
        messageEl.textContent = text
    }
    else{
        text = "Would you like to draw a card?"
        messageEl.textContent = text
    }

}
function newCard(){
    if(isOver === false && hasBlackJack === false){
        let newCard = getCards()
        totalCards +=1
        cards.push(newCard)
        result += newCard
       renderGame()
   }
   else if (isOver === true && hasBlackJack ===false){
        messageEl.textContent = "Congratulations! You have Won!"
   }
   else if (isOver === true && hasBlackJack ===false){
    messageEl.textContent = "Sorry You have Lost! Do you want to play again?"
   }

}
