//------- It's not a component -----------//

const validateForm = (input) => {
  let errors = {};
  let regExp = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)/;
  let regexpN = /^[0-9]{1,2}( - [0-9]{1,2}$)/

  if (!input.name) {
    errors.name = 'It cannot be empty'
  } else if (input.name.length > 30) {
    errors.name = 'Name cannot be longer than 30 characters'
  }
  if (!input.image) {
    errors.image = 'It cannot be empty'
  } else if (!regExp.test(input.image)) {
    errors.image = 'Url invalid'
  } 
  if (!input.height) {
    errors.height = 'It cannot be empty'
  } else if (!regexpN.test(input.height)) {
    errors.height = 'Invalid input'
  } else if (input.height?.length > 4) {
    let a = parseInt(input.height.slice(0, 2))
    let b = parseInt(input.height.slice(-2))
    if (a >= b) {
      errors.height = 'The second parameter must be greater'
    }
  }
  if (!input.weight) {
    errors.weight = 'It cannot be empty'
  } else if (!regexpN.test(input.weight)) {
    errors.weight = 'Invalid input'
  }
  if (!input.life_span) {
    errors.life_span = 'It cannot be empty'
  } else if (!regexpN.test(input.life_span)) {
    errors.life_span = 'Invalid input'
  }
  return errors;
};

export default validateForm;