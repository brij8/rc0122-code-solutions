var clicks = 0;
var $hotbutton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');

$hotbutton.addEventListener('click', handleHotButtonClick);

function handleHotButtonClick(event) {
  clicks++;
  var temp;
  if (clicks < 4) {
    temp = 'cold';
  } else if (clicks < 7) {
    temp = 'cool';
  } else if (clicks < 10) {
    temp = 'tepid';
  } else if (clicks < 13) {
    temp = 'warm';
  } else if (clicks < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $hotbutton.className = 'hot-button ' + temp;
  $clickcount.textContent = 'Clicks: ' + clicks;
}

// $hotbutt.addEventListener('click', function (event) {
//   $clicks++;
//   $clickcount.textContent = $clicks;
//   if ($clicks < 4) {
//     $hotbutt.className = 'hot-button cold';
//   } else {
//     if ($clicks < 7) {
//       $hotbutt.className = 'hot-button cool';
//     } else {
//       if ($clicks < 10) {
//         $hotbutt.className = 'hot-button tepid';
//       } else {
//         if ($clicks < 13) {
//           $hotbutt.className = 'hot-button warm';
//         } else {
//           if ($clicks < 16) {
//             $hotbutt.className = 'hot-button hot';
//           } else {
//             if ($clicks >= 17) {
//               $hotbutt.className = 'hot-button nuclear';
//             }
//           }
//         }
//       }
//     }
//   }
// });
