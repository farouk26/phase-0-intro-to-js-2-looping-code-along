// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"]
function wrapGifts(gifts){
    const message = [];
    for (let i = 0; i < gifts.length; i++) {
        message.push(`Wrapped ${gifts[i]} and added a bow!`);
        
        
    }
    return gifts;
}
const cards = ["Guadalupe", "Ollie", "Aki"]
const eventName = "surprise"
function writeCards(cards, eventName){
    const arrayMessage = [];
    for (let index = 0; index < cards.length; index++) {
        arrayMessage.push(`Thank you, ${cards[index]}, for the wonderful ${eventName} gift!`)
    }
    return arrayMessage;
}
function countDown(count) {
    for (let count = 10; count >= 0; count--) {
        console.log(count)
    }
}



