console.log('CL#1'); // prints 1st
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    console.log('Response: ', res, 'CL#1.5'); // prints 3rd
    console.log('CL#2'); // prints 4th
    return res.json();
  })
  .then(users => console.log('users: ', users, 'CL#3')) // prints 5th
  .catch(err => console.log('fetch failed!', err));

console.log('CL#4'); // prints 2nd

// returns:
// CL#1
// CL#4
// Response: res, CL#1.5
// CL#2
// users: [users] CL#3

// v----- turned in solution --------v
// fetch('https://jsonplaceholder.typicode.com/users');
// .then(response => response.json())
// .then(data => console.log('data: ', data));
