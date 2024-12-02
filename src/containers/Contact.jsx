import ContactForm from "@/components/Contact/ContactForm";
import SVGGitHub from "@/components/svgs/SVGGitHub";
import SVGLinkedIn from "@/components/svgs/SVGLinkedIn";
import SVGMail from "@/components/svgs/SVGMail";
import { EMAIL, GITHUB, LINKEDIN } from "@/seeds/socialLinks";

const styles = {
  container:
    "flex flex-col md:flex-row bg-white bg-opacity-10 lg:w-2/3 md:gap-x-8 lg:mx-auto mx-10 rounded-3xl shadow-xl",
  leftColumn: "flex flex-col lg:w-1/2 md:pl-20 md:pt-8 px-8",
  title: "text-2xl font-bold py-8",
  subtitle: "py-4 pb-12",
  list: "flex flex-col gap-y-2",
  listItem: "flex items-center gap-x-2 w-fit",
  resumeButton:
    "inline-block px-4 py-1 rounded-3xl border-2 cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-300 active:scale-95 transition-all font-semibold md:text-lg",
};

const Contact = ({ lang, dictionary }) => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.leftColumn}>
        <h2 className={styles.title}>{dictionary.callToAction.title}</h2>
        <p className={styles.subtitle}>{dictionary.callToAction.subtitle}</p>
        <ul className={styles.list}>
          <li>
            <a href={GITHUB.href} target="_BLANK" className={styles.listItem}>
              <SVGGitHub />
              {GITHUB.username}
            </a>
          </li>
          <li>
            <a href={LINKEDIN.href} target="_BLANK" className={styles.listItem}>
              <SVGLinkedIn />
              {LINKEDIN.username}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${EMAIL.username}`}
              target="_BLANK"
              className={styles.listItem}
            >
              <SVGMail />
              {EMAIL.username}
            </a>
          </li>
          <li>
            <a
              href={lang == "es" ? "/curriculum.pdf" : "/resume.pdf"}
              target="_BLANK"
              className={styles.resumeButton}
            >
              {dictionary.callToAction.openResume}
            </a>
          </li>
        </ul>
      </div>
      <div className="Toastify"></div>
      <ContactForm dictionary={dictionary.form} />
    </div>
  );
};

export default Contact;
