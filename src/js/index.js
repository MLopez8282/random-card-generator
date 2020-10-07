import "../style/styles.css";

window.onload = () => {
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suits = ["&spades;", "&clubs;", "	&hearts;", "&diams;"];

  function randomSuits() {
    document.querySelector(".top-suit").innerHTML = randomSuits(suits);
    console.log(suits[Math.floor(Math.random() * suits.length)]);
  }
  function randomNumbers() {
    document.querySelector(".num-letter").innerHTML = randomNumbers(numbers);
    console.log(numbers[Math.floor(Math.random() * numbers.length)]);
  }
};
