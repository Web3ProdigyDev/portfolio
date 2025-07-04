import type { FC } from "react";

interface XPBarProps {
    progress: number;
    label?: string;
    barColor?: string;
}

const XPBar: FC<XPBarProps> = ({ progress, label, barColor = "bg-primary" }) => {
    return (
        <div className="w-full max-w-xl mx-auto">
            {label && <p className="text-sm text-dark dark:text-light mb-1">{label}</p>}
            <div className="w-full bg-gray-700 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                <div
                    className={`h-4 rounded-full transition-all duration-700 ${barColor}`}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default XPBar;