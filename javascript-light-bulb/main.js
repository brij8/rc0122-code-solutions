var $room = document.querySelector('.room');
var $bulb = document.querySelector('.bulb');

function handleClick(event) {
  if ($room.className === 'light') {
    $room.className = 'dark';
  } else {
    $room.className = 'light';
  }
  if ($bulb.className === 'lit') {
    $bulb.className = 'dim';
  } else {
    $bulb.className = 'lit';
  }
}
var $clicked = document.querySelector('.room');
$clicked.addEventListener('click', handleClick, false);
