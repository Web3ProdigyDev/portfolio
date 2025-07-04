import XPBar from "../components/XPBar";

const Level3_Fullstack = () => {
    return (
        <section id="fullstack" className="py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary mb-4 dark:text-primary">🧙‍♂️ Level 3: Fullstack Wizardry</h2>
            <p className="mb-6">
                With Rust, Solana, and advanced backend skills, I ventured into blockchain development and scalable systems.
            </p>
            <XPBar progress={75} label="XP Gained: 75%" />
        </section>
    );
};

export default Level3_Fullstack;