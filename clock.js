const seconddHand = document.getElementById("secondHand");
const firsttHand = document.getElementById("firstHand");
const hourrHand = document.getElementById("hourHand");

function analogClock() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const firsts = (seconds + date.getMinutes()) / 60;
  const hours = (firsts + date.getHours()) / 12;

  rotateClockHand(seconddHand, seconds);
  rotateClockHand(firsttHand, firsts);
  rotateClockHand(hourrHand, hours);
}

function rotateClockHand(element, rotation) {
  element.style.setProperty("--rotate", rotation * 360);
}

setInterval(analogClock, 1000);
