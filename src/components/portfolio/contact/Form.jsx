"use client";

import sendEmail from "@/components/portfolio/contact/sendEmail";
import validateForm from "@/components/portfolio/contact/validateForm";
import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form({ dictionary }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null,
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formIsValid = (inputs, errors) => {
    const error = Object.values(errors).some((error) => error);
    if (error) return false;

    const unfilled = Object.values(inputs).some((input) => !input?.trim());
    if (unfilled) return false;

    return true;
  };

  const handleChange = ({ target: { name, value } }) => {
    const newInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(newInputs);

    if (submitted) {
      const newErrors = validateForm(newInputs, dictionary);
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sending) {
      e.target.reset();

      const newErrors = validateForm(inputs, dictionary);
      const isValid = formIsValid(inputs, newErrors);

      if (isValid) {
        setSending(true);
        try {
          sendEmail(inputs, dictionary);
        } catch (error) {
          setSending(false);
          toast.error("Failed to send email. Please try again later.");
        }
      } else {
        setErrors(newErrors);
      }

      if (!submitted) setSubmitted(true);
    }
  };

  const isFormValid = formIsValid(inputs, errors);
  const checkFormError = !isFormValid && submitted;

  const isSubmitDisabled = checkFormError || sending;

  const nameError = !inputs.name?.trim() || errors.name;
  const emailError = !inputs.email?.trim() || errors.email;
  const messageError = !inputs.message?.trim() || errors.message;

  const checkNameError = nameError && submitted;
  const checkEmailError = emailError && submitted;
  const checkMessageError = messageError && submitted;

  const classNames = {
    form: "flex flex-col w-full p-8 md:p-0",
    header: "text-2xl font-bold",
    name: `py-2 px-4 my-4 rounded-lg shadow-xl !bg-white/20 outline-hidden focus:!bg-white/80 dark:focus:!bg-white/30 transition-colors disabled:bg-blue-500 disabled:cursor-wait ${
      checkNameError ? "bg-red-500 bg-white/50 dark:bg-white/20!" : "bg-white"
    }`,
    email: `py-2 px-4 my-4 rounded-lg shadow-xl !bg-white/20 outline-hidden focus:!bg-white/80 dark:focus:!bg-white/30 transition-colors disabled:bg-blue-500 disabled:cursor-wait ${
      checkEmailError ? "bg-red-500 bg-white/50 dark:bg-white/20!" : "bg-white"
    }`,
    message: `resize-none h-40 py-2 px-4 my-4 rounded-lg shadow-xl !bg-white/20 outline-hidden focus:!bg-white/80 dark:focus:!bg-white/30 transition-colors disabled:bg-blue-500 disabled:cursor-wait ${
      checkMessageError
        ? "bg-red-500 bg-white/50 dark:bg-white/20!"
        : "bg-white"
    }`,
    errorText: "text-red-500",
    submitButton: `w-fit py-1 px-4 my-4 rounded-lg shadow-xl transition-all hover:drop-shadow-xl active:scale-95 cursor-pointer ${
      checkFormError
        ? "bg-red-500 bg-white/30 dark:bg-white/20 cursor-not-allowed! active:scale-100"
        : sending
          ? "bg-blue-500 bg-white/30 dark:bg-white/20 cursor-wait active:scale-100"
          : "gradient bg-gradient-gold dark:bg-gradient-marine"
    }`,
  };

  return (
    <form onSubmit={handleSubmit} className={classNames.form}>
      <ToastContainer />
      <h2 className={classNames.header}>{dictionary.title}</h2>
      <input
        onChange={handleChange}
        placeholder={dictionary.name.placeholder}
        className={classNames.name}
        name="name"
        value={inputs.name}
        disabled={sending}
      />
      {errors.name && <p className={classNames.errorText}>{errors.name}</p>}
      <input
        onChange={handleChange}
        placeholder={dictionary.email.placeholder}
        className={classNames.email}
        name="email"
        value={inputs.email}
        disabled={sending}
      />
      {errors.email && <p className={classNames.errorText}>{errors.email}</p>}
      <textarea
        onChange={handleChange}
        placeholder={dictionary.message.placeholder}
        className={classNames.message}
        name="message"
        value={inputs.message}
        disabled={sending}
      ></textarea>
      {errors.message && (
        <p className={classNames.errorText}>{errors.message}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className={classNames.submitButton}
      >
        {sending ? "Sending..." : dictionary.submit}
      </button>
    </form>
  );
}
