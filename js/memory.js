class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked =0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    
    for (let i = 0; i < this.cards.length; i++) {
      let x=Math.floor(Math.random(this.cards.length))
      let y=Math.floor(Math.random(this.cards.length))
      let temporary = this.cards[i]
      this.cards[i] = this.cards[x];
      this.cards[x] = temporary;
      
    }
    
    
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 0.5;
    if(card1 == card2){
      this.pairsGuessed += 1;
      console.log(true)
      return true
    }else{
      console.log(false)
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === (this.cards.length/2)){
      return true;
    }else{
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
