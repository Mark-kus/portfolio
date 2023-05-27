import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState('');

    const handleChange = (e) => {

    }

    return (
        <form>
            <label htmlFor="name"></label>
            <input id="name" type="text" onChange={handleChange} />
        </form>
    )
}