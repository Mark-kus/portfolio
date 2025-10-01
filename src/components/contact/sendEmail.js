import emailjs from "@emailjs/browser";

const sendEmail = async (inputs) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    {
      from_name: inputs.name.trim(),
      message: inputs.message.trim(),
      from_email: inputs.email.trim(),
    },
    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
  );
};

export default sendEmail;
