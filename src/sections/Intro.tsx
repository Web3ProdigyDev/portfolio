const Intro = () => {
    return (
        <section id="intro" className="text-center space-y-4 mb-20 py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-down">
            <h1 className="text-4xl font-extrabold text-primary tracking-wide dark:text-primary">
                The Journey of Godwin
            </h1>
            <p className="text-sm max-w-xl mx-auto">
                A creative Nigerian developer leveling up in the code realm — from HTML basics to Rust wizardry.
            </p>
            <a
                href="#discovery"
                className="inline-block mt-6 px-6 py-3 border border-primary text-primary rounded hover:bg-primary hover:text-dark transition dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-dark"
            >
                Begin Journey
            </a>
        </section>
    );
};

export default Intro;