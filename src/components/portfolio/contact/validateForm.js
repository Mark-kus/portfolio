const validateForm = (inputs, dictionary) => {
  const regularExpresions = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    name: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s´]+$/,
    message: /^[a-zA-Z0-9\s!?.,;:'"()-ñÑáéíóúÁÉÍÓÚ]+$/,
  };

  const errors = { name: null, email: null, message: null };

  if (inputs.name) {
    if (!regularExpresions.name.test(inputs.name))
      errors.name = dictionary.name.errors.regex;
    else if (inputs.name.length > 50)
      errors.name = dictionary.name.errors.length;
  }

  if (inputs.email && !regularExpresions.email.test(inputs.email)) {
    errors.email = dictionary.email.errors.regex;
  }

  if (inputs.message) {
    if (!regularExpresions.message.test(inputs.message))
      errors.message = dictionary.message.errors.regex;
    else if (inputs.message.length > 500)
      errors.message = dictionary.message.errors.length;
  }

  return errors;
};

export default validateForm;
