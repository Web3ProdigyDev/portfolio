import { achievements } from "../data/achievements";
import AchievementCard from "../components/AchievementCard";

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary mb-8 dark:text-primary">🏅 Achievements</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {achievements.map((a, i) => (
                    <AchievementCard key={i} title={a.title} description={a.description} />
                ))}
            </div>
        </section>
    );
};

export default Achievements;