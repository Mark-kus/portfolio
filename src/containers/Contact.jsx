import Form from "@/components/contact/Form";
import CallToAction from "@/components/contact/CallToAction";

const Contact = ({ lang, dictionary }) => {
  return (
    <div
      id="contact"
      className="mx-10 flex flex-col rounded-3xl bg-white/10 shadow-xl md:flex-row md:p-8 lg:mx-auto lg:w-2/3"
    >
      <CallToAction lang={lang} dictionary={dictionary.callToAction} />
      <div className="Toastify"></div>
      <Form dictionary={dictionary.form} />
    </div>
  );
};

export default Contact;
