import { GitBranch, AlertCircle, ChevronUp } from 'lucide-react';
import { tabDefinitions } from '../data/content';

function getLanguageLabel(iconType) {
    const langMap = {
        jsx: 'JavaScript React',
        json: 'JSON',
        md: 'Markdown',
        css: 'CSS',
        ts: 'TypeScript React',
    };
    return langMap[iconType] || 'Plain Text';
}

export default function StatusBar({ activeTab, onTerminalToggle, terminalOpen }) {
    const activeDef = tabDefinitions[activeTab];
    const lang = activeDef ? getLanguageLabel(activeDef.icon) : 'Plain Text';

    return (
        <div
            id="status-bar"
            className="flex items-center justify-between px-3 h-6 text-xs shrink-0 select-none"
            style={{ backgroundColor: 'var(--color-vscode-statusbar)', color: '#ffffff' }}
        >
            {/* Left Side */}
            <div className="flex items-center gap-4">
                {/* Git Branch */}
                <span className="flex items-center gap-1">
                    <GitBranch size={13} />
                    <span>main*</span>
                </span>

                {/* Errors */}
                <span className="flex items-center gap-1">
                    <AlertCircle size={13} />
                    <span>0 Errors</span>
                </span>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                {/* Terminal Toggle */}
                <button
                    onClick={onTerminalToggle}
                    className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer"
                >
                    <ChevronUp size={13} className={`transition-transform ${terminalOpen ? 'rotate-180' : ''}`} />
                    <span>Terminal</span>
                </button>

                <span>Ln 12, Col 42</span>
                <span>UTF-8</span>
                <span>{lang}</span>
                <span className="flex items-center gap-1">
                    <span>✓</span>
                    <span>Prettier</span>
                </span>
            </div>
        </div>
    );
}
