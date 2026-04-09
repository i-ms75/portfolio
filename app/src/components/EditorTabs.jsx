import { X } from 'lucide-react';
import { tabDefinitions } from '../data/content';

function getFileIconColor(iconType) {
    const colorMap = {
        jsx: 'var(--color-icon-jsx)',
        json: 'var(--color-icon-json)',
        md: 'var(--color-icon-md)',
        css: 'var(--color-icon-css)',
        ts: 'var(--color-icon-ts)',
    };
    return colorMap[iconType] || 'var(--color-vscode-text-dim)';
}

function getFileIconSymbol(iconType) {
    const symbolMap = {
        jsx: 'JS',
        json: '{}',
        md: 'M↓',
        css: '#',
        ts: 'TS',
    };
    return symbolMap[iconType] || '📄';
}

export default function EditorTabs({ openTabs, activeTab, onTabClick, onTabClose }) {
    if (openTabs.length === 0) return null;

    const activeDef = tabDefinitions[activeTab];

    return (
        <div
            id="editor-tabs"
            style={{ backgroundColor: 'var(--color-vscode-tab-border)' }}
        >
            {/* Tab Bar */}
            <div className="flex items-center overflow-x-auto" style={{ height: '36px' }}>
                {openTabs.map((tabKey) => {
                    const def = tabDefinitions[tabKey];
                    if (!def) return null;
                    const isActive = tabKey === activeTab;

                    return (
                        <div
                            key={tabKey}
                            className="flex items-center gap-2 px-3 h-full cursor-pointer shrink-0 group transition-colors"
                            style={{
                                backgroundColor: isActive
                                    ? 'var(--color-vscode-tab-active)'
                                    : 'var(--color-vscode-tab-inactive)',
                                borderRight: '1px solid var(--color-vscode-border)',
                                borderTop: isActive ? '1px solid var(--color-vscode-accent)' : '1px solid transparent',
                            }}
                            onClick={() => onTabClick(tabKey)}
                        >
                            {/* File Icon */}
                            <span
                                className="font-mono font-bold shrink-0"
                                style={{
                                    color: getFileIconColor(def.icon),
                                    fontSize: '10px',
                                }}
                            >
                                {getFileIconSymbol(def.icon)}
                            </span>

                            {/* File Name */}
                            <span
                                className="text-xs whitespace-nowrap"
                                style={{
                                    color: isActive ? 'var(--color-vscode-text)' : 'var(--color-vscode-text-dim)',
                                }}
                            >
                                {def.name}
                            </span>

                            {/* Close Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onTabClose(tabKey);
                                }}
                                className="ml-1 rounded p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ color: 'var(--color-vscode-text-dim)' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-hover)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                aria-label={`Close ${def.name}`}
                            >
                                <X size={14} />
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Breadcrumbs */}
            {activeDef && (
                <div
                    className="flex items-center px-4 h-6 text-xs"
                    style={{
                        backgroundColor: 'var(--color-vscode-tab-active)',
                        color: 'var(--color-vscode-text-dim)',
                    }}
                >
                    {activeDef.path}
                </div>
            )}
        </div>
    );
}
