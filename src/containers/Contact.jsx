import Form from "@/components/Contact/Form";
import CallToAction from "@/components/Contact/CallToAction";

const styles = {
  container:
    "flex flex-col md:flex-row bg-white bg-opacity-10 lg:w-2/3 md:gap-x-8 lg:mx-auto mx-10 rounded-3xl shadow-xl md:p-4",
};

const Contact = ({ lang, dictionary }) => {
  return (
    <div id="contact" className={styles.container}>
      <CallToAction lang={lang} dictionary={dictionary.callToAction} />
      <div className="Toastify"></div>
      <Form dictionary={dictionary.form} />
    </div>
  );
};

export default Contact;
