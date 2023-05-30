export default function validateForm(inputs) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexMessage = /^[a-zA-Z0-9\s!?.,;:'"()-ñÑáéíóúÁÉÍÓÚ]+$/;
    const regexName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s´]+$/;

    const errors = { name: '', email: '', message: '' }

    if (inputs.name) {
        if (!regexName.test(inputs.name)) errors.name = "It shouldn't contain special characters"
        else if (inputs.name.length > 50) errors.name = "The text is too long, summarize it"
    }

    if (inputs.email) {
        if (!regexEmail.test(inputs.email)) errors.email = 'Must be a valid email'
        else if (inputs.name.length > 50) errors.name = "The text is too long, summarize it"
    }

    if (inputs.message) {
        if (!regexMessage.test(inputs.message)) errors.message = "It shouldn't contain special characters"
        else if (inputs.name.length > 500) errors.name = "The text is too long, summarize it"
    }

    return errors
}