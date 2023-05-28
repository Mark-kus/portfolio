import sendEmail from "./sendEmail";
import { useState } from "react";

export default function ContactForm() {
    const [inputs, setInputs] = useState({ name: '', email: '', message: '' });

    const inputCls = "bg-slate-600 p-2 rounded"

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendEmail(inputs, setInputs)
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-2/3 mx-auto">

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" onChange={handleChange} value={inputs.name}
                placeholder="Peter Pan / GarfioTech"
                className={`mb-2 ${inputCls}`} />

            <label htmlFor="email">Email to respond</label>
            <input id="email" name="email" type="email" onChange={handleChange} value={inputs.email}
                placeholder="wendyrecruiter@gmail.com"
                className={`mb-2 ${inputCls}`} />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} value={inputs.message}
                className={`resize-none rounded-b-none ${inputCls}`} placeholder="Hi! I like your projects..." />

            <button className="p-2 bg-blue-400">Enviar</button>

        </form>
    )
}