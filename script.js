"use strict";

let gameBoard = [];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let randomArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

shuffle(randomArray);

// console.log(randomArray);

for (let i = 0; i < 16; i++) {
  let place = {
    symbol: randomArray[i],
  };
  gameBoard.push(place);
}

let placesDiv = document.querySelectorAll(".places");

let faceUpCards = [];

let display = () => {
  placesDiv.forEach((place, index) => {
    place.setAttribute("data-symbol", gameBoard[index].symbol);
    place.innerText = gameBoard[index].symbol;
    place.addEventListener("click", (e) => {
      let card = {
        index: e.target.getAttribute("data-index"),
        symbol: e.target.getAttribute("data-symbol"),
      };
      faceUpCards.push(card);
      console.log(faceUpCards);
    });
  });
};
display();
