const validateForm = (inputs) => {
  const regularExpresions = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    name: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s´]+$/,
    message: /^[a-zA-Z0-9\s!?.,;:'"()-ñÑáéíóúÁÉÍÓÚ]+$/,
  };

  const errors = { name: null, email: null, message: null };

  if (inputs.name) {
    if (!regularExpresions.name.test(inputs.name))
      errors.name = "Can only contain letters, numbers and punctuation";
    else if (inputs.name.length > 50) errors.name = "Maximum length is 50";
  }

  if (inputs.email) {
    if (!regularExpresions.email.test(inputs.email))
      errors.email = "Must be a valid email";
    else if (inputs.email.length > 50) errors.email = "Maximum length is 50";
  }

  if (inputs.message) {
    if (!regularExpresions.message.test(inputs.message))
      errors.message = "Can only contain letters, numbers and punctuation";
    else if (inputs.message.length > 500)
      errors.message = "Maximum length is 500";
  }

  return errors;
};

export default validateForm;
