import Form from "@/components/portfolio/contact/Form";
import CallToAction from "@/components/portfolio/contact/CallToAction";

const styles = {
  container:
    "flex flex-col md:flex-row bg-white bg-white/10 rounded-3xl shadow-xl mx-10 md:p-8 lg:w-2/3 lg:mx-auto",
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
