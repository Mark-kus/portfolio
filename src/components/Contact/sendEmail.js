import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const {
    VITE_EMAIL_TEMPLATE,
    VITE_EMAIL_SERVICE,
    VITE_EMAIL_KEY
} = import.meta.env

export default (inputs, setInputs, setSending) => {
    
    emailjs.send(VITE_EMAIL_SERVICE, VITE_EMAIL_TEMPLATE, {
        from_name: inputs.name,
        message: inputs.message,
        from_email: inputs.email,
    }, VITE_EMAIL_KEY)

        .then(() => {
            toast.success("Mail sent!", {
                autoClose: 4000,
                theme: "dark",
            })
            setInputs({ name: '', email: '', message: '' })
            setSending(false)
        })
        .catch(() => {
            toast.error("An error ocurred!", {
                autoClose: 4000,
                theme: "dark",
            })
            setSending(false)
        })
}