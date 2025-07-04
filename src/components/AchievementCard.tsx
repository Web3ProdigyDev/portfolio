type Props = {
    title: string
    description: string
}

const AchievementCard = ({ title, description }: Props) => {
    return (
        <div className="bg-gray-800 p-6 rounded-xl border border-primary shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl text-primary font-bold mb-2">{title}</h3>
            <p className="text-light text-sm">{description}</p>
        </div>
    )
}

export default AchievementCard
