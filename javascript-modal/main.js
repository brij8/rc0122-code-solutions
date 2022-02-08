var $open = document.querySelector('.open');
var $popup = document.querySelector('.modal');
var $close = document.querySelector('.close');

function openClick(event) {
  if ($popup.className === 'modal hidden') {
    $popup.className = 'modal';
  } else {
    $popup.className = 'modal hidden';
  }
}

$open.addEventListener('click', openClick);
$close.addEventListener('click', openClick);
