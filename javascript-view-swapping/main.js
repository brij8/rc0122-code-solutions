var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

function checkMatch(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNodeList.length; i++) {
      if ($tabNodeList[i] === event.target) {
        $tabNodeList[i].className = 'tab active';
      } else {
        $tabNodeList[i].className = 'tab';
      }
    }
    var $attr = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewNodeList.length; i++) {
      if ($viewNodeList[i].getAttribute('data-view') === $attr) {
        $viewNodeList[i].className = 'view';
      } else {
        $viewNodeList[i].className = 'view hidden';
      }
    }
  }

}

$tabContainer.addEventListener('click', checkMatch);

// add event listener:
// - callback function goes above
// - var $element = doc.querySelector('element');
// - $element.addEventListener('event', callBack);
// let attribute = element.getAttribute(attributeName);
