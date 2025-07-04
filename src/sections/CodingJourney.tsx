import XPBar from "../components/XPBar";

const CodingJourney = () => {
    return (
        <section id="journey" className="space-y-10 py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-up">
            <h2 className="text-3xl text-primary font-bold mb-4 dark:text-primary">📘 My Coding Journey</h2>
            <div className="space-y-6">
                <div id="discovery" className="bg-light dark:bg-dark p-6 rounded-lg shadow" data-aos="fade-up">
                    <h3 className="text-xl font-bold text-primary mb-1 dark:text-primary">📗 HTML & CSS Basics</h3>
                    <p className="text-sm mb-4">
                        Where it all started — learning to structure and style simple pages.
                    </p>
                    <XPBar progress={25} label="XP Gained: 25%" barColor="bg-[#f97316]" />
                </div>
                <div id="webdev" className="bg-light dark:bg-dark p-6 rounded-lg shadow" data-aos="fade-up">
                    <h3 className="text-xl font-bold text-primary mb-1 dark:text-primary">📙 JavaScript & DOM</h3>
                    <p className="text-sm mb-4">
                        Built interactive features and gained control of the browser.
                    </p>
                    <XPBar progress={50} label="XP Gained: 50%" barColor="bg-[#facc15]" />
                </div>
                <div className="bg-light dark:bg-dark p-6 rounded-lg shadow" data-aos="fade-up">
                    <h3 className="text-xl font-bold text-primary mb-1 dark:text-primary">⚙️ PHP & MySQL</h3>
                    <p className="text-sm mb-4">
                        Created full backend-powered web apps and dynamic websites.
                    </p>
                    <XPBar progress={60} label="XP Gained: 60%" barColor="bg-[#6b21a8]" />
                </div>
                <div className="bg-light dark:bg-dark p-6 rounded-lg shadow" data-aos="fade-up">
                    <h3 className="text-xl font-bold text-primary mb-1 dark:text-primary">⚛️ React & Node.js</h3>
                    <p className="text-sm mb-4">
                        Mastered the MERN stack to build full-featured apps with APIs.
                    </p>
                    <XPBar progress={70} label="XP Gained: 70%" barColor="bg-[#38bdf8]" />
                </div>
                <div className="bg-light dark:bg-dark p-6 rounded-lg shadow" data-aos="fade-up">
                    <h3 className="text-xl font-bold text-primary mb-1 dark:text-primary">🧠 TypeScript & Next.js</h3>
                    <p className="text-sm mb-4">
                        Learned scalable frontend architecture and server-side rendering.
                    </p>
                    <XPBar progress={65} label="XP Gained: 65%" barColor="bg-[#000]" />
                </div>
                <div id="fullstack" className="bg-light dark:bg-dark p-6 rounded-lg shadow" data-aos="fade-up">
                    <h3 className="text-xl font-bold text-primary mb-1 dark:text-primary">🧱 Rust & Solana</h3>
                    <p className="text-sm mb-4">
                        Dived deep into smart contract development and Web3 using Anchor.
                    </p>
                    <XPBar progress={75} label="XP Gained: 75%" barColor="bg-[#ea580c]" />
                </div>
            </div>
        </section>
    );
};

export default CodingJourney;