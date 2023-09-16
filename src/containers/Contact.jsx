import ContactForm from "@/components/Contact/ContactForm";

export default function Contact() {
    return (
        <section className="flex flex-col items-center">
            <header className="text-xl md:text-3xl mb-4">Contact me or give feedback</header>
            <ContactForm />
        </section>
    )
}