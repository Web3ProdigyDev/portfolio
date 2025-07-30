import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [dark, setDark] = useState(() => {
        // Initialize state from localStorage or default to dark
        return localStorage.getItem("theme") === "light" ? false : true;
    });

    useEffect(() => {
        // Apply theme on mount and state change
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="text-sm px-3 py-1 border border-primary rounded hover:bg-primary hover:text-dark transition"
        >
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default ThemeToggle;