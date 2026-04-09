import { useState } from 'react';
import { ChevronRight, ChevronDown, Sun, Moon } from 'lucide-react';
import { fileTree } from '../data/content';
import { useTheme } from '../context/ThemeContext';

function getFileIcon(name) {
    const ext = name.split('.').pop();
    const iconMap = {
        jsx: { color: 'var(--color-icon-jsx)', symbol: 'JS' },
        tsx: { color: 'var(--color-icon-jsx)', symbol: 'TS' },
        json: { color: 'var(--color-icon-json)', symbol: '{}' },
        md: { color: 'var(--color-icon-md)', symbol: 'M↓' },
        css: { color: 'var(--color-icon-css)', symbol: '#' },
    };
    return iconMap[ext] || { color: 'var(--color-vscode-text-dim)', symbol: '📄' };
}

function FileTreeItem({ item, depth = 0, onFileClick, activeFile }) {
    const [isOpen, setIsOpen] = useState(item.isOpen ?? false);
    const isFolder = item.type === 'folder';
    const isActive = !isFolder && item.fileKey === activeFile;

    const handleClick = () => {
        if (isFolder) {
            setIsOpen(!isOpen);
        } else if (item.fileKey) {
            onFileClick(item.fileKey);
        }
    };

    const fileIcon = !isFolder ? getFileIcon(item.name) : null;

    return (
        <div className="animate-fade-in" style={{ animationDelay: `${depth * 30}ms` }}>
            <button
                onClick={handleClick}
                className="w-full flex items-center gap-1 py-0.5 px-2 text-sm transition-colors cursor-pointer group"
                style={{
                    paddingLeft: `${depth * 16 + 8}px`,
                    backgroundColor: isActive ? 'var(--color-vscode-selection)' : 'transparent',
                    color: isActive ? 'var(--color-icon-active)' : 'var(--color-vscode-text)',
                }}
                onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'var(--color-vscode-hover)';
                }}
                onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                }}
                title={item.name}
            >
                {/* Chevron or Spacer */}
                {isFolder ? (
                    <span style={{ color: 'var(--color-vscode-text-dim)' }} className="shrink-0">
                        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </span>
                ) : (
                    <span className="w-4 shrink-0" />
                )}

                {/* Icon */}
                {isFolder ? (
                    <span className="shrink-0 text-xs" style={{ color: 'var(--color-icon-folder)' }}>
                        {isOpen ? '📂' : '📁'}
                    </span>
                ) : (
                    <span
                        className="shrink-0 text-xs font-bold font-mono w-5 text-center"
                        style={{ color: fileIcon.color, fontSize: '10px' }}
                    >
                        {fileIcon.symbol}
                    </span>
                )}

                {/* Name */}
                <span className="truncate text-left">{item.name}</span>
            </button>

            {/* Children */}
            {isFolder && isOpen && item.children && (
                <div>
                    {item.children.map((child) => (
                        <FileTreeItem
                            key={child.name}
                            item={child}
                            depth={depth + 1}
                            onFileClick={onFileClick}
                            activeFile={activeFile}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Sidebar({ onFileClick, activeFile }) {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div
            id="sidebar"
            className="flex flex-col h-full w-56 shrink-0 overflow-hidden"
            style={{
                backgroundColor: 'var(--color-vscode-sidebar)',
                borderRight: '1px solid var(--color-vscode-border)',
            }}
        >
            {/* Header */}
            <div
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider select-none"
                style={{ color: 'var(--color-vscode-text-dim)' }}
            >
                Explorer
            </div>

            {/* Project Name */}
            <div
                className="px-4 py-1 text-xs font-semibold flex items-center gap-1 select-none"
                style={{ color: 'var(--color-vscode-text)' }}
            >
                <ChevronDown size={14} />
                <span>MK_Portfolio</span>
            </div>

            {/* File Tree */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden py-1">
                {fileTree.map((item) => (
                    <FileTreeItem
                        key={item.name}
                        item={item}
                        depth={0}
                        onFileClick={onFileClick}
                        activeFile={activeFile}
                    />
                ))}
            </div>

            {/* Bottom Settings */}
            <div
                className="border-t px-4 py-3"
                style={{ borderColor: 'var(--color-vscode-border)' }}
            >
                <div
                    className="text-xs font-semibold uppercase tracking-wider mb-2 select-none"
                    style={{ color: 'var(--color-vscode-text-dim)' }}
                >
                    Settings
                </div>
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-sm py-1 px-2 rounded w-full transition-colors cursor-pointer"
                    style={{ color: 'var(--color-vscode-text)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                    <span className="text-sm">Color Theme</span>
                    <span className="ml-auto flex items-center gap-1" style={{ color: 'var(--color-vscode-text-dim)' }}>
                        {isDark ? <Moon size={14} /> : <Sun size={14} />}
                        <span className="text-xs">{isDark ? 'Dark' : 'Light'}</span>
                    </span>
                </button>
            </div>
        </div>
    );
}
