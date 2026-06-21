import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { runTerminalCommand } from '../lib/api';

const terminalTabs = ['TERMINAL', 'OUTPUT', 'DEBUG CONSOLE', 'PROBLEMS'];

// Maps the backend's semantic line `type` to a colour. The payload never carries
// styling itself — this is the one place colours are decided.
const TYPE_STYLE = {
    text: { color: 'var(--color-vscode-text)' },
    muted: { color: 'var(--color-vscode-text-dim)' },
    success: { color: 'var(--color-syntax-comment)' },
    error: { color: '#f14c4c' },
    heading: { color: 'var(--color-syntax-keyword)', fontWeight: 600 },
    link: { color: 'var(--color-syntax-string)' },
};

function Prompt() {
    return (
        <span style={{ whiteSpace: 'pre' }}>
            <span style={{ color: 'var(--color-syntax-type)' }}>manmohan@macbook</span>
            <span style={{ color: 'var(--color-syntax-string)' }}>{' portfolio-ide'}</span>
            <span style={{ color: 'var(--color-vscode-text-dim)' }}>{' % '}</span>
        </span>
    );
}

function OutputLine({ line }) {
    const style = TYPE_STYLE[line.type] ?? TYPE_STYLE.text;
    if (line.type === 'link' && line.href) {
        return (
            <div>
                <a
                    href={line.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={style}
                    className="hover:underline"
                >
                    {line.text}
                </a>
            </div>
        );
    }
    // Render empty lines with a non-breaking space so they keep their height.
    return <div style={style}>{line.text === '' ? ' ' : line.text}</div>;
}

export default function TerminalPanel({ isOpen, onToggle }) {
    const [history, setHistory] = useState([]); // [{ command, lines, exitCode }]
    const [input, setInput] = useState('');
    const [busy, setBusy] = useState(false);
    const [past, setPast] = useState([]); // commands typed, for ↑/↓ recall
    const [histIndex, setHistIndex] = useState(-1);

    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    // Keep the latest output in view.
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
    }, [history, busy]);

    // Focus the input whenever the panel opens.
    useEffect(() => {
        if (isOpen) inputRef.current?.focus();
    }, [isOpen]);

    if (!isOpen) return null;

    async function submit() {
        const cmd = input.trim();
        setInput('');
        setHistIndex(-1);
        if (cmd) setPast((p) => [...p, cmd]);

        if (cmd === 'clear') {
            setHistory([]);
            return;
        }
        if (!cmd) {
            setHistory((h) => [...h, { command: '', lines: [] }]);
            return;
        }

        setBusy(true);
        try {
            const res = await runTerminalCommand(cmd);
            setHistory((h) => [...h, res]);
        } catch (err) {
            setHistory((h) => [
                ...h,
                {
                    command: cmd,
                    lines: [
                        { type: 'error', text: 'Unable to reach the server.' },
                        { type: 'muted', text: String(err?.message ?? err) },
                    ],
                    exitCode: 1,
                },
            ]);
        } finally {
            setBusy(false);
        }
    }

    function recall(dir) {
        if (past.length === 0) return;
        let idx = histIndex === -1 ? past.length : histIndex;
        idx += dir;
        if (idx < 0) idx = 0;
        if (idx >= past.length) {
            setHistIndex(-1);
            setInput('');
            return;
        }
        setHistIndex(idx);
        setInput(past[idx]);
    }

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!busy) submit();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            recall(-1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            recall(1);
        }
    }

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
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-vscode-hover)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        aria-label="Toggle terminal"
                    >
                        <ChevronDown size={16} />
                    </button>
                    <button
                        onClick={onToggle}
                        className="p-1 rounded transition-colors"
                        style={{ color: 'var(--color-vscode-text-dim)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-vscode-hover)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        aria-label="Close terminal"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>

            {/* Terminal Content */}
            <div
                ref={scrollRef}
                onClick={() => inputRef.current?.focus()}
                className="flex-1 overflow-y-auto p-3 terminal-text"
                style={{ color: 'var(--color-vscode-text)' }}
            >
                {/* Banner */}
                <div style={{ color: 'var(--color-syntax-comment)' }}>portfolio-ide — interactive terminal</div>
                <div className="mb-1" style={{ color: 'var(--color-vscode-text-dim)' }}>
                    Type <span style={{ color: 'var(--color-syntax-function)' }}>help</span> to see what I can do.
                </div>

                {/* Command history */}
                {history.map((entry, i) => (
                    <div key={i} className="mt-1">
                        <div>
                            <Prompt />
                            <span style={{ color: 'var(--color-vscode-text)' }}>{entry.command}</span>
                        </div>
                        {entry.lines?.map((line, j) => (
                            <OutputLine key={j} line={line} />
                        ))}
                    </div>
                ))}

                {busy && (
                    <div className="mt-1" style={{ color: 'var(--color-vscode-text-dim)' }}>
                        …
                    </div>
                )}

                {/* Live input line. The real <input> is transparent and overlaid on
                    top; the visible text and a blinking block cursor are rendered
                    manually so it looks like a real terminal — no input box, no native
                    caret. The input is never disabled, so focus (and the cursor) stay
                    ready for the next command after output prints. */}
                <div className="mt-1 flex items-center" style={{ position: 'relative' }}>
                    <Prompt />
                    <span style={{ whiteSpace: 'pre-wrap', color: 'var(--color-vscode-text)' }}>{input}</span>
                    {!busy && (
                        <span
                            className="cursor-blink"
                            style={{
                                display: 'inline-block',
                                width: '8px',
                                height: '15px',
                                marginLeft: '1px',
                                backgroundColor: 'var(--color-vscode-text)',
                            }}
                        />
                    )}
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={onKeyDown}
                        spellCheck={false}
                        autoComplete="off"
                        aria-label="terminal input"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            opacity: 0,
                            border: 'none',
                            outline: 'none',
                            background: 'transparent',
                            caretColor: 'transparent',
                            color: 'transparent',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            cursor: 'text',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
