const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

let pairsClickedElement = document.querySelector('#pairs-clicked');
let pairsGuessedElement = document.querySelector('#pairs-guessed');
let allCards = document.getElementsByClassName("card")

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if (memoryGame.pickedCards.length < 2) {
        
        card.classList.add("turned");
        memoryGame.pickedCards.push(card.getAttribute("data-card-name"));
        
      }
      
      let flippedCards = document.querySelectorAll(".turned")

      if (memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
        
        flippedCards[0].classList.add("blocked")
        flippedCards[1].classList.add("blocked")
        memoryGame.pickedCards = [];
      }
      


      
     setTimeout(() => {
      for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.remove("turned")
      } 
      memoryGame.pickedCards = [];
     }, 1500);
     
     
     
     
     
     
      // if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
        
      //   console.log(flippedCards)
      //   flippedCards[0].classList.add("blocked")
      //   flippedCards[1].classList.add("blocked")
      //   setTimeout(() => {
      //     memoryGame.pickedCards = [];
      //     flippedCards = document.querySelectorAll(".turned") ;
      //   }, 1000);
        
      // }else if(memoryGame.pickedCards.length == 2){
      //   let flippedCards = document.querySelectorAll(".turned")
      //   setTimeout(() => {
      //     flippedCards[0].classList.remove("turned")
      //     flippedCards[1].classList.remove("turned")   
      //     memoryGame.pickedCards = [];
      //   }, 2000);
                                                                     
        
        
      //  }
      
       
        
        
      
        
        
      
      
      
      console.log(memoryGame.pickedCards)
      console.log(memoryGame.pairsGuessed)
      console.log(memoryGame.pairsClicked)
      
      if (Number.isInteger(memoryGame.pairsClicked)){
        pairsClickedElement.textContent = memoryGame.pairsClicked;
      }
      pairsGuessedElement.textContent = memoryGame.pairsGuessed;
      console.log(`Card clicked: ${card}`);
    });

    
  });
  if (memoryGame.checkIfFinished()){
    console.log("you won")
  }
  
  
});

// pairsClickedScore.text = memoryGame.pairsClicked;

