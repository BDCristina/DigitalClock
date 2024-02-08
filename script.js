const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const am_pmEl = document.getElementById("am-pm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am_pm = "AM";

  if (h > 12) {
    h = h - 12;
    am_pm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minEl.innerText = m;
  secEl.innerText = s;
  am_pmEl.innerText = am_pm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

const background = document.querySelector('body');

function setBackground() {
    const currentTime = new Date().getHours();

    if (currentTime < 10) {
        // morning
        background.style.backgroundImage = "url('images/morning.jpg')";
    } else if (currentTime < 18) {
        // afertnoon
        background.style.backgroundImage = "url('images/afternoon.jpg')";
    } else if (18 >currentTime < 21) {
      // sunset
      background.style.backgroundImage = "url('images/sunset.jpg')";
    }else {
        // evening
        background.style.backgroundImage = "url('images/night.jpg')";
    }
}

setBackground(); //set inital bachground

// update background every hour
setInterval(setBackground, 3600000); // 3600000 milisec = 1 hour
