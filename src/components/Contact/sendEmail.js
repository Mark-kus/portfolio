import emailjs from "@emailjs/browser";
const {
    EMAIL_TEMPLATE,
    EMAIL_SERVICE,
    EMAIL_KEY
} = import.meta.env

export default (inputs, setInputs) => {
    console.log(inputs);
    // emailjs.send(EMAIL_SERVICE, EMAIL_TEMPLATE, {
    //     from_name: inputs.name,
    //     message: inputs.message,
    //     from_email: inputs.email,
    // });
    setInputs({ name: '', email: '', message: '' })
}