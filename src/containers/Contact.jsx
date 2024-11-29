import ContactForm from "@/components/Contact/ContactForm";
import SVGGitHub from "@/components/svgs/SVGGitHub";
import SVGLinkedIn from "@/components/svgs/SVGLinkedIn";
import SVGMail from "@/components/svgs/SVGMail";
import { EMAIL, GITHUB, LINKEDIN } from "@/seeds/socialLinks";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row bg-white bg-opacity-10 lg:w-2/3 md:gap-x-8 lg:mx-auto mx-10 rounded-3xl shadow-xl">
      <div className="flex flex-col lg:w-1/2 md:pl-20 md:pt-8 px-8">
        <h3 className="text-2xl font-bold py-8">Get In Touch</h3>
        <p className="py-4 pb-12">
          I am very approachable and would love to speak to you. Feel free to
          send me an email, follow me in social media or simply complete the
          enquiry form.
        </p>
        <ul className="flex flex-col gap-y-2">
          <li>
            <a
              href={GITHUB.href}
              target="_BLANK"
              className="flex items-center gap-x-2"
            >
              <SVGGitHub />
              {GITHUB.username}
            </a>
          </li>
          <li>
            <a
              href={LINKEDIN.href}
              target="_BLANK"
              className="flex items-center gap-x-2"
            >
              <SVGLinkedIn />
              {LINKEDIN.username}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${EMAIL}`}
              target="_BLANK"
              className="flex items-center gap-x-2"
            >
              <SVGMail />
              {EMAIL}
            </a>
          </li>
        </ul>
      </div>
      <div className="Toastify"></div>
      <ContactForm />
    </div>
  );
};

export default Contact;
