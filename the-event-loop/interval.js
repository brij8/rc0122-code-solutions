let count = 3;

const timeout = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else if (count === 0) {
    console.log('Blast off!');
    clearInterval(timeout);
  }
}, [1000]);
