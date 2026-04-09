import { ChevronUp, ChevronDown, X } from 'lucide-react';

const terminalTabs = ['TERMINAL', 'OUTPUT', 'DEBUG CONSOLE', 'PROBLEMS'];

export default function TerminalPanel({ isOpen, onToggle }) {
    if (!isOpen) return null;

    return (
        <div
            id="terminal-panel"
            className="flex flex-col shrink-0"
            style={{
                height: '200px',
                borderTop: '1px solid var(--color-vscode-border)',
                backgroundColor: 'var(--color-vscode-panel)',
            }}
        >
            {/* Terminal Header */}
            <div
                className="flex items-center justify-between px-4 h-8 shrink-0"
                style={{ borderBottom: '1px solid var(--color-vscode-border)' }}
            >
                {/* Tab Names */}
                <div className="flex items-center gap-4">
                    {terminalTabs.map((tab, i) => (
                        <span
                            key={tab}
                            className="text-xs font-medium cursor-pointer transition-colors"
                            style={{
                                color: i === 0 ? 'var(--color-vscode-text)' : 'var(--color-vscode-text-dim)',
                                borderBottom: i === 0 ? '1px solid var(--color-vscode-text)' : 'none',
                                paddingBottom: '2px',
                            }}
                        >
                            {tab}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={onToggle}
                        className="p-1 rounded transition-colors"
                        style={{ color: 'var(--color-vscode-text-dim)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        aria-label="Toggle terminal"
                    >
                        <ChevronDown size={16} />
                    </button>
                    <button
                        onClick={onToggle}
                        className="p-1 rounded transition-colors"
                        style={{ color: 'var(--color-vscode-text-dim)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        aria-label="Close terminal"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 overflow-y-auto p-3 terminal-text" style={{ color: 'var(--color-vscode-text)' }}>
                <div style={{ color: 'var(--color-syntax-comment)' }}>
                    Compiled successfully!
                </div>
                <div className="mt-1">
                    You can now view <span style={{ color: 'var(--color-syntax-string)' }}>mk-portfolio</span> in the browser.
                </div>
                <div className="mt-2">
                    <span style={{ color: 'var(--color-vscode-text-dim)' }}>{'  '}Local:{'         '}</span>
                    <span style={{ color: 'var(--color-syntax-variable)' }}>http://localhost:3000</span>
                </div>
                <div>
                    <span style={{ color: 'var(--color-vscode-text-dim)' }}>{'  '}On Your Network: </span>
                    <span style={{ color: 'var(--color-syntax-variable)' }}>http://192.168.1.5:3000</span>
                </div>
                <div className="mt-2" style={{ color: 'var(--color-vscode-text-dim)' }}>
                    Note that the development build is not optimized.
                </div>
                <div style={{ color: 'var(--color-vscode-text-dim)' }}>
                    To create a production build, use <span style={{ color: 'var(--color-syntax-function)' }}>npm run build</span>.
                </div>
                <div className="mt-2">
                    <span style={{ color: 'var(--color-syntax-type)' }}>manmohan@macbook</span>
                    <span style={{ color: 'var(--color-syntax-string)' }}> portfolio-ide</span>
                    <span> % </span>
                    <span style={{ color: 'var(--color-syntax-keyword)' }}>whoami</span>
                </div>
                <div>manmohan</div>
                <div className="mt-1 flex items-center">
                    <span style={{ color: 'var(--color-syntax-type)' }}>manmohan@macbook</span>
                    <span style={{ color: 'var(--color-syntax-string)' }}> portfolio-ide</span>
                    <span> % </span>
                    <span className="cursor-blink ml-0.5 inline-block w-2 h-4" style={{ backgroundColor: 'var(--color-vscode-text)' }} />
                </div>
            </div>
        </div>
    );
}
