const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  //   console.log("Hi");
  const now = new Date();

  // * get seconds *********************************************
  const cstOffset = -6; // CST if UTC - 6
  const cstTime = new Date(now.getTime() + cstOffset * 60 * 60 * 1000);

  // * get seconds *********************************************
  const seconds = cstTime.getSeconds(); //gets the seconds of every minute
  //   console.log(seconds);
  const secondsDegrees = (seconds / 60) * 360 + 90; //moves the clock hand degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //   console.log(seconds);

  // * get minutes *********************************************
  const minutes = cstTime.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // * get hour *********************************************
  const hour = cstTime.getMinutes();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// will have the clock run every second
setInterval(setDate, 1000);
