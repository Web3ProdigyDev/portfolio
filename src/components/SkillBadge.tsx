type SkillBadgeProps = {
    skill: string
    icon?: React.ReactNode
}

const SkillBadge = ({ skill, icon }: SkillBadgeProps) => {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg shadow-sm text-sm font-semibold bg-dark hover:bg-primary hover:text-dark transition">
            {icon && <span>{icon}</span>}
            {skill}
        </div>
    )
}

export default SkillBadge
