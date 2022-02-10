function taskClick(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('will remove: event.target.closest(.task-list-item): ', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}

var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskClick);
