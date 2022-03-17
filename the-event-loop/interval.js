let count = 3;

// const timeout = setInterval(() => {
//   if (count > 0) {
//     console.log(count);
//     count--;
//   } else if (count === 0) {
//     console.log('Blast off!');
//     clearInterval(timeout);
//   }
// }, [1000]);

// v---- better versions - don't check a direct opposite in an if-loop ----v

// const timeout = setInterval(() => {
//   if (count === 0) {
//     console.log(count);
//     count--;
//   } else {
//     console.log('Blast off!');
//     clearInterval(timeout);
//   }
// }, [1000]);

// const timeout = setInterval(() => {
//   if (count !== 0) {
//     console.log(count);
//     count--;
//   } else {
//     console.log('Blast off!');
//     clearInterval(timeout);
//   }
// }, [1000]);

// v----- best version ------v

const timeout = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(timeout);
  } else {
    console.log(count);
    count--;
  }
}, [1000]);
