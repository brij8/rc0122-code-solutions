var $room = document.querySelector('.room');
var $bulb = document.querySelector('.bulb');

function handleClick(event) {
  if ($room.className === 'room light') {
    $room.className = 'room dark';
  } else {
    $room.className = 'room light';
  }
  if ($bulb.className === 'bulb lit') {
    $bulb.className = 'bulb dim';
  } else {
    $bulb.className = 'bulb lit';
  }
}
var $clicked = document.querySelector('.room');
$clicked.addEventListener('click', handleClick, false);
