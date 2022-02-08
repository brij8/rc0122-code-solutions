var $clicks = 0;
var $hotbutt = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');

$hotbutt.addEventListener('click', function (event) {
  $clicks++;
  $clickcount.textContent = $clicks;
  if ($clicks < 4) {
    $hotbutt.className = 'hot-button cold';
  } else {
    if ($clicks < 7) {
      $hotbutt.className = 'hot-button cool';
    } else {
      if ($clicks < 10) {
        $hotbutt.className = 'hot-button tepid';
      } else {
        if ($clicks < 13) {
          $hotbutt.className = 'hot-button warm';
        } else {
          if ($clicks < 16) {
            $hotbutt.className = 'hot-button hot';
          } else {
            if ($clicks >= 17) {
              $hotbutt.className = 'hot-button nuclear';
            }
          }
        }
      }
    }
  }
});
