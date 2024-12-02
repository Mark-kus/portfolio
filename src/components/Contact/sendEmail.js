import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const sendEmail = (inputs, setInputs, setSending, setSubmitted) => {
  const isDark = localStorage.getItem("theme") === "dark";

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      {
        from_name: inputs.name.trim(),
        message: inputs.message.trim(),
        from_email: inputs.email.trim(),
      },
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    )
    .then(() => {
      toast.success(dictionary.success, {
        autoClose: 4000,
        theme: isDark ? "dark" : "light",
      });
      setInputs({ name: "", email: "", message: "" });
      setSubmitted(false);
    })
    .catch(() => {
      toast.error(dictionary.error, {
        autoClose: 4000,
        theme: isDark ? "dark" : "light",
      });
    })
    .finally(() => {
      setSending(false);
    });
};

export default sendEmail;
