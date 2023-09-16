"use client"

import sendEmail from "./sendEmail";
import validateForm from "./validateForm"
import { useState } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
    const [inputs, setInputs] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' })
    const [disable, setDisable] = useState(false)
    const [sending, setSending] = useState(false)

    const inputCls = "bg-slate-600 p-2 rounded"
    const errorCls = "text-red-500 transition-opacity"

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
        setErrors(validateForm({ ...inputs, [name]: value }))
        if (disable) setDisable(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errorCount = Object.values(errors).some(err => err !== '')
        const unfilledFields = Object.values(inputs).some(input => input.length < 1)

        if (errorCount || unfilledFields) return setDisable(true)
        else {
            setSending(true)
            sendEmail(inputs, setInputs, setSending)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-5/6 md:w-2/3 mx-auto text-sm md:text-base">

            <ToastContainer />

            <div className="flex justify-between">
                <label htmlFor="name" className="m">Name</label>
                <p className={`${errors?.name ? 'opacity-100' : 'opacity-0'} ${errorCls}`}>{errors?.name}</p>
            </div>

            <input id="name" name="name" type="text" onChange={handleChange} value={inputs.name}
                placeholder="Peter Pan / GarfioTech"
                className={`mb-2 ${inputCls}`} />

            <div className="flex justify-between">
                <label htmlFor="email" className="m">Email to respond</label>
                <p className={`${errors?.email ? 'opacity-100' : 'opacity-0'} ${errorCls}`}>{errors?.email}</p>
            </div>

            <input id="email" name="email" type="email" onChange={handleChange} value={inputs.email}
                placeholder="wendyrecruiter@gmail.com"
                className={`mb-2 ${inputCls}`} />

            <div className="flex justify-between">
                <label htmlFor="message" className="m">Message</label>
                <p className={`${errors?.message ? 'opacity-100' : 'opacity-0'} ${errorCls}`}>{errors?.message}</p>
            </div>
            <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} value={inputs.message}
                className={`resize-none rounded-b-none ${inputCls}`} placeholder="Hi! I like your projects..." />

            <button className={`p-2 ${disable ? 'bg-red-500 ' : 'bg-blue-400'}`}
                disabled={disable || sending}>
                {disable ? 'Fill the fields correctly' : 'Send Email'}
            </button>

        </form>
    )
}