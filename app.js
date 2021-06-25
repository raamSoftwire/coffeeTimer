function start() {
  count(5);
}

function count(upperLimitInSeconds) {
  var t = 0;
  setTimeout(() => update(t), 50);

  let timer = setInterval(() => {
    t++;
    update(t);
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, upperLimitInSeconds * 1000);
}

function update(t) {
  if (t == 2) {
    doubleDing();
  }

  document.getElementById('time').innerHTML = t;
}

function doubleDing() {
  ding();
  setTimeout(() => ding(), 1800);
}

function ding() {
  new Audio('ding.mp3').play();
}
