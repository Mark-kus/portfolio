import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const {
    NEXT_PUBLIC_EMAIL_TEMPLATE,
    NEXT_PUBLIC_EMAIL_SERVICE,
    NEXT_PUBLIC_EMAIL_KEY
} = import.meta

const sendEmail = (inputs, setInputs, setSending) => {

    emailjs.send(NEXT_PUBLIC_EMAIL_SERVICE, NEXT_PUBLIC_EMAIL_TEMPLATE, {
        from_name: inputs.name,
        message: inputs.message,
        from_email: inputs.email,
    }, NEXT_PUBLIC_EMAIL_KEY)

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

export default sendEmail