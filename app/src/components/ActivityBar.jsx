import { Files, Search, GitBranch, Puzzle, Settings } from 'lucide-react';

const topIcons = [
    { id: 'explorer', icon: Files, label: 'Explorer' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'git', icon: GitBranch, label: 'Source Control' },
    { id: 'extensions', icon: Puzzle, label: 'Extensions' },
];

export default function ActivityBar({ activeSidebarSection, onSidebarToggle }) {
    return (
        <div
            id="activity-bar"
            className="flex flex-col items-center justify-between py-2 w-12 shrink-0"
            style={{ backgroundColor: 'var(--color-vscode-activity)' }}
        >
            {/* Top Icons */}
            <div className="flex flex-col items-center gap-0.5">
                {topIcons.map(({ id, icon: Icon, label }) => {
                    const isActive = activeSidebarSection === id;
                    return (
                        <button
                            key={id}
                            onClick={() => onSidebarToggle(id)}
                            className="relative w-12 h-12 flex items-center justify-center transition-colors"
                            style={{
                                color: isActive ? 'var(--color-icon-active)' : 'var(--color-icon-inactive)',
                            }}
                            aria-label={label}
                            title={label}
                        >
                            {isActive && (
                                <div
                                    className="absolute left-0 top-1 bottom-1 w-0.5 rounded-r"
                                    style={{ backgroundColor: 'var(--color-icon-active)' }}
                                />
                            )}
                            <Icon size={24} strokeWidth={1.5} />
                        </button>
                    );
                })}
            </div>

            {/* Bottom Icon */}
            <div className="flex flex-col items-center">
                <button
                    className="w-12 h-12 flex items-center justify-center transition-colors"
                    style={{ color: 'var(--color-icon-inactive)' }}
                    aria-label="Settings"
                    title="Settings"
                >
                    <Settings size={24} strokeWidth={1.5} />
                </button>
            </div>
        </div>
    );
}
