//------- It's not a component -----------//

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
  } else  */if (!regExp.test(input.image)) {
    errors.image = 'Url invalid'
  } 

  //-------------------------height-----------------------//
  //----min------//
  if(!input.min_height) {
    errors.min_height = 'Height must have min values.'
  } else if (!input.min_height.match(/\d/)) {
    errors.min_height = 'Min value must be a number'
  } else if (input.min_height.length > 2) {
    errors.min_height = 'Must be a number with a maximum of 2 digits'
  } else if (input.max_height && Number(input.min_height) > Number(input.max_height)) {
    errors.min_height = 'Min value must be lower than max value'
  }
  //----max------//
  if(!input.max_height) {
    errors.max_height = 'Height must have max values.'
  } else if (!input.max_height.match(/\d/)) {
    errors.max_height = 'Max value must be a number'
  } else if (input.max_height.length > 2) {
    errors.max_height = 'Must be a number with a maximum of 2 digits'
  }

  //-------------------------weight-----------------------//
  //----min------//
  if(!input.min_weight) {
    errors.min_weight = 'Weight must have min values.'
  } else if (!input.min_weight.match(/\d/)) {
    errors.min_weight = 'Min value must be a number'
  } else if (input.min_weight.length > 2) {
    errors.min_weight = 'Must be a number with a maximum of 2 digits'
  } else if (input.max_weight && Number(input.min_weight) > Number(input.max_weight)) {
    errors.min_weight = 'Min value must be lower than max value'
  }
  //----max------//
  if(!input.max_weight) {
    errors.max_weight = 'Height must have max values.'
  } else if (!input.max_weight.match(/\d/)) {
    errors.max_weight = 'Max value must be a number'
  } else if (input.max_weight.length > 2) {
    errors.max_weight = 'Must be a number with a maximum of 2 digits'
  }

  if (!input.life_span) {
    errors.life_span = 'It cannot be empty'
  } else if (!regexpN.test(input.life_span)) {
    errors.life_span = 'Invalid input'
  }

  
  return errors;
};

export default validateForm;