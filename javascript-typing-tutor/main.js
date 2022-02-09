var $spans = document.querySelectorAll('span');
var curL = 0;
var $scorebox = document.querySelector('.scorebox');
var $scoreboxDiv = document.querySelector('.scorebox div');
var correct = 0;
var errors = 0;
var $again = document.querySelector('.again');

function input(event) {
  if (curL < $spans.length) {
    if (event.key === $spans[curL].textContent) {
      $spans[curL].className = 'black';
      correct++;
      curL++;
      if (curL === $spans.length) {
        score();
      } else {
        $spans[curL].className = 'line';
      }
    } else {
      $spans[curL].className = 'line red';
      errors++;
    }
  }
}

function score() {
  $scorebox.className = 'scorebox';
  $scoreboxDiv.innerHTML = '<p>accuracy:  ' + Math.round((correct / (correct + errors)) * 100) + '%</p> <p>errors:  ' + errors + '</p>';
  $again.addEventListener('click', playAgain);
}

function playAgain(event) {
  $again.removeEventListener('click', playAgain);
  $scorebox.className = 'scorebox scorebox-vis';
  $scoreboxDiv.innerHTML = '';
  for (let i = 1; i < $spans.length; i++) {
    $spans[i].className = '';
  }
  $spans[0].className = 'line';
  errors = 0;
  correct = 0;
  curL = 0;
}

document.addEventListener('keydown', input);
