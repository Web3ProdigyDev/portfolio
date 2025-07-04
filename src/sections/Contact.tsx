import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp, FaFacebook, FaDiscord } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="text-center space-y-6 py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-up">
            <h2 className="text-3xl text-primary font-bold mb-4 dark:text-primary">Hit Me Up!</h2>
            <p className="mb-6">
                Whether you’re a fellow dev, recruiter, or curious mage — reach out!
            </p>
            <div className="flex justify-center gap-6 text-2xl text-primary dark:text-primary">
                <a href="https://github.com/web3prodigydev" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://twitter.com/Web3Prodigy_" target="_blank" rel="noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://wa.me/2348142659673" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                <a href="https://facebook.com/web3prodigydev01" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a href="https://discord.com/users/927958299117256764" target="_blank" rel="noreferrer"><FaDiscord /></a>
            </div>
            <p>
                Send me a message{" "}
                <a
                    href="mailto:talktogoddie@gmail.com"
                    className="inline-block bg-primary text-dark font-bold px-6 py-3 rounded-lg hover:opacity-90 transition dark:bg-primary dark:text-dark"
                >
                    Via Email ✉️
                </a>
            </p>
        </section>
    );
};

export default Contact;