const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  //   console.log("Hi");
  const now = new Date();

  // * get central standard time *********************************************
  const cstOffset = -6; // CST if UTC - 6
  const cstTime = new Date(now.getTime() + cstOffset * 60 * 60 * 1000);

  // * get seconds ***********************************************************
  const seconds = cstTime.getSeconds(); //gets the seconds of every minute
  //   console.log(seconds);
  const secondsDegrees = (seconds / 60) * 360 + 90; //moves the clock hand degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //   console.log(seconds);

  // * get minutes **********************************************************
  const minutes = cstTime.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // * get hour **************************************************************
  const hour = cstTime.getHours();
  const hourDegrees = ((hour % 12) / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// will have the clock run every second
setInterval(setDate, 1000);

// * ChatGPT notes on cstOffset and cstTime ****************************************************
// now.getTime(): This part retrieves the current timestamp in milliseconds since January 1, 1970 (Unix epoch) for the current time in the local timezone. getTime() is a method of the Date object that returns the number of milliseconds elapsed since the epoch for the date and time specified by the Date instance (now in this case).

// cstOffset * 60 * 60 * 1000: This part calculates the offset in milliseconds for the CST timezone. Let's break it down further:

// cstOffset is the offset in hours between the local timezone and CST.
// 60 * 60 * 1000 converts the hours to milliseconds. There are 60 seconds in a minute (60 * 1000 milliseconds), 60 minutes in an hour (60 * 60 * 1000 milliseconds), so this part converts hours to milliseconds.
// now.getTime() + cstOffset * 60 * 60 * 1000: This part adds the calculated offset to the current timestamp (now.getTime()) to get the timestamp for the current time in the CST timezone. This calculation effectively shifts the current time to the CST timezone by adding the offset.

// new Date(...): Finally, this part creates a new Date object using the adjusted timestamp calculated above. This new Date object represents the current time in the CST timezone, which is stored in the cstTime variable.

// So, in summary, const cstTime = new Date(now.getTime() + cstOffset * 60 * 60 * 1000); calculates the current time in the CST timezone by adding the offset to the current time in the local timezone and creates a Date object representing that time.

// * ChatGPT notes on:  const hourDegrees = ((hour % 12) / 12) * 360 + 90; *********************
// (hour % 12): This part calculates the hour in a 12-hour format. The % operator is the modulo operator, which gives the remainder of the division of two numbers. In this case, hour % 12 ensures that the hour value is always within the range of 0 to 11 (inclusive), effectively converting the hour to a 12-hour format.

// ((hour % 12) / 12): This part normalizes the hour value to a range between 0 and 1. Since the hour value is now in a 12-hour format (ranging from 0 to 11), dividing it by 12 ensures that it falls within the range of 0 to 1.

// ((hour % 12) / 12) * 360: This part converts the normalized hour value to degrees on a circle. Since a full circle has 360 degrees, multiplying the normalized hour value by 360 gives us the corresponding angle in degrees.

// ((hour % 12) / 12) * 360 + 90: Finally, adding 90 degrees adjusts the rotation so that the hour hand starts pointing vertically upwards (at the 12 o'clock position). This adjustment ensures that the hour hand aligns correctly with the clock face.

// So, in summary, const hourDegrees = ((hour % 12) / 12) * 360 + 90; calculates the rotation angle (in degrees) for the hour hand based on the current hour, ensuring it aligns properly with the clock face.
