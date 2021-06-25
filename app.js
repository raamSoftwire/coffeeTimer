function start() {
  var stirTime = 4 * 60;
  var fullTime = 9 * 60;

  var t = 0;
  update(t, stirTime, fullTime)

  let timer = setInterval(() => {t++; update(t, stirTime, fullTime);}, 1000);
  setTimeout(() => {clearInterval(timer)}, fullTime * 1000);
}

function update(t, stirTime, fullTime) {
  if (t == stirTime || t == fullTime) {
    doubleDing();
  }
  document.getElementById('time').innerHTML = formatTime(t);
}

function doubleDing() {
  ding();
  setTimeout(() => ding(), 1800);
}

function ding() {
  new Audio('ding.mp3').play();
}

function formatTime(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;

  return minutes + ':' + seconds.toString().padStart(2, '0');
}
