var $spans = document.querySelectorAll('span');
var curL = 0;

var $scorebox = document.querySelector('.scorebox');
var correct = 0;
var errors = 0;

function input(event) {
  if (curL < $spans.length) {
    if (event.key === $spans[curL].textContent) {
      $spans[curL].className = 'green';
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
  $scorebox.innerHTML = '<p>accuracy:  ' + Math.round((correct / (correct + errors)) * 100) + '%</p> <p>errors:  ' + errors + '</p>' +
  '<button class="again">play again? click to reset</button>';
  var $again = document.querySelector('.again');
  $again.addEventListener('click', playAgain);
//  document.removeEventListener('keydown', input);
}

function playAgain(event) {
  location.reload();
}

document.addEventListener('keydown', input);
