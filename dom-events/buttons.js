function handleClick(event) {
  console.log('"Click Me!" button clicked');
  console.log('event: ', event);
  console.log('target property: ', event.target);
}
var $clicked = document.querySelector('.click-button');
$clicked.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('"Hover me!" button moused over');
  console.log('event: ', event);
  console.log('target property: ', event.target);
}
var $hovered = document.querySelector('.hover-button');
$hovered.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('"Double Click Me!" button double-clicked');
  console.log('event: ', event);
  console.log('target property: ', event.target);
}
var $dubclick = document.querySelector('.double-click-button', handleDoubleClick);
$dubclick.addEventListener('dblclick', handleDoubleClick, false);
