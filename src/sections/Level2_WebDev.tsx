import XPBar from "../components/XPBar";

const Level2_WebDev = () => {
    return (
        <section id="webdev" className="py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary mb-4 dark:text-primary">⚔️ Level 2: Web Dev Mastery</h2>
            <p className="mb-6">
                I dove deeper into JavaScript, PHP, React, Node — and built real-world projects. GitHub became my second home.
            </p>
            <XPBar progress={50} label="XP Gained: 50%" />
        </section>
    );
};

export default Level2_WebDev;