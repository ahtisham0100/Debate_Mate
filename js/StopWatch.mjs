export default function StopWatch(secondContainer, minuteContainer) {
  let sec = 59;
  let min = 1;

  // Initial display
  secondContainer.textContent = sec < 10 ? "0" + sec : sec;
  minuteContainer.textContent = min < 10 ? "0" + min : min;

  const interval = setInterval(() => {
    if (sec === 0) {
      if (min === 0) {
        clearInterval(interval);
        return;
      } else {
        min--;
        sec = 59;
      }
    } else {
      sec--;
    }

    secondContainer.textContent = sec < 10 ? "0" + sec : sec;
    minuteContainer.textContent = min < 10 ? "0" + min : min;
  }, 1000);
}
