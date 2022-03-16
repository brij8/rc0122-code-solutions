let count = 3;

const timeout = setInterval(() => {
  console.log(count);
  count--;
  if (count === -1) {
    console.log('Blast off!');
    clearInterval(timeout);
  }
}, [1000]);
