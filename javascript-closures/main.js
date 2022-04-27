function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const medschool = medicalSchool('Full Name');
const lawschool = lawSchool('Full Name');

console.log('medschool: ', medschool, 'lawschool: ', lawschool);
