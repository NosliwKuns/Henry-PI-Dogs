//------- It's not a component -----------//

const validateForm = (input) => {
  let errors = {};

  if (!input.name) {
    errors.name = 'You must type a name'
  } else {
    errors.name = ''
  }
  return errors;
};

export default validateForm;