import XPBar from "../components/XPBar";

const Level1_Discovery = () => {
    return (
        <section id="discovery" className="py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary mb-4 dark:text-primary">🧱 Level 1: Discovery</h2>
            <p className="mb-6">
                This is where it all started — exploring the magic of HTML and CSS, creating my first layout, struggling with divs 😅
            </p>
            <XPBar progress={25} label="XP Gained: 25%" />
        </section>
    );
};

export default Level1_Discovery;