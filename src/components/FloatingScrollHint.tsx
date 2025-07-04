// ✅ File 2: src/components/FloatingScrollHint.tsx
import { useEffect, useState } from "react";

const FloatingScrollHint = () => {
    const [showHint, setShowHint] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowHint(window.scrollY < 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showHint) return null;

    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-gray-300 animate-bounce">
            ⬇ Scroll to Begin
        </div>
    );
};

export default FloatingScrollHint;
