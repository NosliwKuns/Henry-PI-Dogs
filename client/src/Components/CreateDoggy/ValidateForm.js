//--------------- It's not a component ----------------//

const validateForm = (input) => {
  let errors = {};
  let regExp = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)($|\?.*$)/;
  let regexpN = /^[0-9]{1,2}( - [0-9]{1,2}$)/

  //-------------------------name-----------------------//
  if (!input.name) {
    errors.name = 'It cannot be empty'
  } else if (input.name.length > 30) {
    errors.name = 'Name cannot be longer than 30 characters'
  }

  //-------------------------image-----------------------//
  /* if (!input.image) {
    errors.image = 'It cannot be empty'
  } else  */if (input.image.length && !regExp.test(input.image)) {
    errors.image = 'Url invalid'
  } 

  //-------------------------height-----------------------//
  if(!input.min_height && !input.max_height) {
    errors.height = 'Height must have min and max values.'
  } else if (input.min_height.length > 2 || input.max_height.length > 2) {
    errors.height = 'Must be a number with a maximum of 2 digits'
  } else if (input.min_height && !input.min_height.match(/\d/)) {
    errors.height = 'Min value must be a number'
  } else if (input.max_height && !input.max_height.match(/\d/)) {
    errors.height = 'Max value must be a number'
  } else if (input.max_height && Number(input.min_height) > Number(input.max_height)) {
    errors.height = 'Min value must be lower than max value'
  }

  //-------------------------weight-----------------------//
  if(!input.min_weight && !input.max_weight) {
    errors.weight = 'Weight must have min and max values.'
  } else if (input.min_weight.length > 2 || input.max_weight.length > 2) {
    errors.weight = 'Must be a number with a maximum of 2 digits'
  } else if (input.min_weight && !input.min_weight.match(/\d/)) {
    errors.weight = 'Min value must be a number'
  } else if (input.max_weight && !input.max_weight.match(/\d/)) {
    errors.weight = 'Max value must be a number'
  } else if (input.max_weight && Number(input.min_weight) > Number(input.max_weight)) {
    errors.weight = 'Min value must be lower than max value'
  }

  //-------------------------Life Span-----------------------//
  if (!input.life_span) {
    errors.life_span = 'It cannot be empty'
  } else if (!regexpN.test(input.life_span)) {
    errors.life_span = 'Invalid input'
  }

  return errors;
};

export default validateForm;