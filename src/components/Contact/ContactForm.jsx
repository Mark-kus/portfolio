import emailjs from "@emailjs/browser";
import sendEmail from "./sendEmail";
import { useState } from "react";

export default function ContactForm() {
    const [inputs, setInputs] = useState({});

    const inputCls = "bg-slate-600 p-2 rounded"

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendEmail(inputs, setInputs)
        e.target.reset()
    };

    return (
        <form onSubmit={handleSubmit} className="text-black flex flex-col w-2/3 mx-auto">

            <label htmlFor="name">Nombre/Empresa</label>
            <input id="name" name="name" type="text" onChange={handleChange} value={inputs.name}
            placeholder="Peter Pan / GarfioTech"
            className={`${inputCls}`} />

            <label htmlFor="email">Email al que responder</label>
            <input id="email" name="email" type="email" onChange={handleChange} value={inputs.email}
            placeholder="wendyrecruiter@gmail.com"
            className={`${inputCls}`} />

            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} value={inputs.message}
            className={`resize-none rounded-b-none ${inputCls}`} placeholder="Hola! Me intereso uno de tus proyectos y..." />

            <button className="p-2 bg-blue-400">Enviar</button>

        </form>
    )
}