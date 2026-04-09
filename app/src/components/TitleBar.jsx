import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function TitleBar() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div
            id="titlebar"
            className="flex items-center justify-between h-8 px-3 select-none"
            style={{ backgroundColor: 'var(--color-vscode-titlebar)' }}
        >
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all cursor-pointer" title="Close" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-110 transition-all cursor-pointer" title="Minimize" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-110 transition-all cursor-pointer" title="Maximize" />
            </div>

            {/* Title */}
            <span
                className="text-xs font-medium absolute left-1/2 -translate-x-1/2"
                style={{ color: 'var(--color-vscode-text-dim)' }}
            >
                Manmohan Kushwaha — Portfolio
            </span>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-1 rounded hover:opacity-80 transition-opacity"
                style={{ color: 'var(--color-vscode-text-dim)' }}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                title={isDark ? 'Color Theme: Dark' : 'Color Theme: Light'}
            >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
        </div>
    );
}
