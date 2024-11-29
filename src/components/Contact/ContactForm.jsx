"use client";

import sendEmail from "./sendEmail";
import validateForm from "./validateForm";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [disable, setDisable] = useState(false);
  const [sending, setSending] = useState(false);

  const formIsValid = (inputs, errors) => {
    const errorCount = Object.values(errors).some((err) => err !== "");
    const unfilledFields = Object.values(inputs).some(
      (input) => input.length < 1
    );

    return !errorCount && !unfilledFields;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });

    const new_errors = validateForm({ ...inputs, [name]: value });
    setErrors(new_errors);

    const disable = !formIsValid({ ...inputs, [name]: value }, new_errors);
    setDisable(disable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const disable = !formIsValid(inputs, errors);
    setDisable(disable);

    if (disable) return;

    setSending(true);
    sendEmail(inputs, setInputs, setSending);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:w-1/2 md:pr-20 md:pt-8 px-8 md:pb-12 pb-8"
    >
      <ToastContainer />
      <h3 className="text-2xl font-bold py-8">Send me a message!</h3>
      <input
        onChange={handleChange}
        id="nombre"
        placeholder="Name"
        className="py-2 px-4 my-4 bg-white bg-opacity-30 rounded-lg shadow-xl"
        name="name"
        value=""
      />
      <input
        onChange={handleChange}
        id="Email"
        placeholder="Email"
        className="py-2 px-4 my-4 bg-white bg-opacity-30 rounded-lg shadow-xl"
        name="email"
      />
      <textarea
        onChange={handleChange}
        id="mensaje"
        placeholder="Message"
        className="py-2 px-4 my-4 bg-white bg-opacity-30 rounded-lg shadow-xl resize-none h-40"
        name="message"
      ></textarea>
      <button
        type="submit"
        disabled={disable || sending}
        className="w-fit py-1 px-4 my-4 gradient rounded-lg shadow-xl bg-gradient-themed"
      >
        Send message
      </button>
    </form>
  );
}
