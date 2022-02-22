setInterval(bowie, 1000);

function bowie() {
  var h1msg = document.querySelector('.countdown-display');
  if (h1msg.textContent === '4') {
    h1msg.textContent = '3';
  } else if (h1msg.textContent === '3') {
    h1msg.textContent = '2';
  } else if
  (h1msg.textContent === '2') {
    h1msg.textContent = '1';
  } else if
  (h1msg.textContent === '1') {
    h1msg.textContent = '~Earth Beeeelooowww Us~';
  }
}

// if (oElem.className === "go") {
//   oElem.className = "stop";
// } else {
//   oElem.className = "go";
