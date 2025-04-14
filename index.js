
function updateTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();


  const hourTens = Math.floor(hours / 10);
  const hourOnes = hours % 10;
  const minuteTens = Math.floor(minutes / 10);
  const minuteOnes = minutes % 10;
  const secondTens = Math.floor(seconds / 10);
  const secondOnes = seconds % 10;

  document.getElementById('hour-tens').textContent = hourTens;
  document.getElementById('hour-ones').textContent = hourOnes;
  document.getElementById('minute-tens').textContent = minuteTens;
  document.getElementById('minute-ones').textContent = minuteOnes;
  document.getElementById('second-tens').textContent = secondTens;
  document.getElementById('second-ones').textContent = secondOnes;
}


setInterval(updateTime, 1000);


updateTime();
