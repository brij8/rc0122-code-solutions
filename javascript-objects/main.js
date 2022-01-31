var student = {
  firstName: 'brij',
  lastName: 'lu',
  age: 500
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'wizard';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic CRX Si',
  year: 1990
};

vehicle['color'] = 'yellow';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('the value of vehicle: ', vehicle);

var pet = {
  name: 'Scridle',
  type: 'womp rat'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
