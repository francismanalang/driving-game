var $image = document.querySelector('img');

function carRotate(event) {
  if (event.keyCode === 37) {
    $image.className = 'rotate-left';
  } else if (event.keyCode === 38) {
    $image.className = 'rotate-up';
  } else if (event.keyCode === 39) {
    $image.className = 'rotate-right';
  } else if (event.keyCode === 40) {
    $image.className = 'rotate-down';
  }
}

document.addEventListener('keydown', carRotate);

// function carMove(event) {
//   if (event.keyCode === 32 && $image.className === 'rotate-right') {
//     $image.className = 'rotate-right go-right';
//   } else if (event.keyCode === 32 && $image.className === 'rotate-down') {
//     $image.className = 'rotate-down go-down';
//   }
// }

// document.addEventListener('keydown', carMove);
