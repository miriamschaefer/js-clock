'use strict';

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  if (secondsDeg === 90) {
    secondHand.style.transition = 'all 0s';
  } else {
    secondHand.style.transition = '';
  }

  if (minsDeg === 90) {
    minHand.style.transition = 'all 0s';
  } else {
    minHand.style.transition = '';
  }

  if (hoursDeg === 90) {
    hourHand.style.transition = 'all 0s';
  } else {
    hourHand.style.transition = '';
  }
}

setInterval(setDate, 1000);
