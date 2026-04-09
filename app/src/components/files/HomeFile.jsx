import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { heroContent, footerContent } from '../../data/content';

export default function HomeFile({ onNavigate }) {
    return (
        <div className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in">
            {/* Hero Title */}
            <h1
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                style={{ color: 'var(--color-vscode-text)' }}
            >
                Hello, I'm{' '}
                <span style={{ color: 'var(--color-vscode-accent)' }}>
                    {heroContent.name.split(' ')[0]}
                </span>
                <br />
                <span style={{ color: 'var(--color-vscode-accent)' }}>
                    {heroContent.name.split(' ').slice(1).join(' ')}
                </span>
            </h1>

            {/* Code Block - Developer Object */}
            <div
                className="rounded-lg overflow-hidden mb-8"
                style={{
                    backgroundColor: 'var(--color-vscode-sidebar)',
                    border: '1px solid var(--color-vscode-border)',
                }}
            >
                <div className="p-5 font-mono text-sm md:text-base leading-relaxed">
                    <div>
                        <span style={{ color: 'var(--color-syntax-keyword)' }}>const</span>{' '}
                        <span style={{ color: 'var(--color-syntax-variable)' }}>developer</span>{' '}
                        <span style={{ color: 'var(--color-syntax-operator)' }}>=</span>{' '}
                        <span style={{ color: 'var(--color-syntax-bracket)' }}>{'{'}</span>
                    </div>
                    <div className="pl-6">
                        <span style={{ color: 'var(--color-syntax-property)' }}>name</span>
                        <span style={{ color: 'var(--color-syntax-operator)' }}>:</span>{' '}
                        <span style={{ color: 'var(--color-syntax-string)' }}>'{heroContent.name}'</span>
                        <span style={{ color: 'var(--color-syntax-operator)' }}>,</span>
                    </div>
                    <div className="pl-6">
                        <span style={{ color: 'var(--color-syntax-property)' }}>location</span>
                        <span style={{ color: 'var(--color-syntax-operator)' }}>:</span>{' '}
                        <span style={{ color: 'var(--color-syntax-string)' }}>'Bangalore, India'</span>
                        <span style={{ color: 'var(--color-syntax-operator)' }}>,</span>
                    </div>
                    <div className="pl-6">
                        <span style={{ color: 'var(--color-syntax-property)' }}>bio</span>
                        <span style={{ color: 'var(--color-syntax-operator)' }}>:</span>{' '}
                        <span style={{ color: 'var(--color-syntax-string)' }}>'Engineer by profession, physicist at heart ⚛️'</span>
                        <span style={{ color: 'var(--color-syntax-operator)' }}>,</span>
                    </div>
                    <div className="pl-6">
                        <span style={{ color: 'var(--color-syntax-property)' }}>mission</span>
                        <span style={{ color: 'var(--color-syntax-operator)' }}>:</span>{' '}
                        <span style={{ color: 'var(--color-syntax-string)' }}>'Building bridges between systems, one API at a time'</span>
                    </div>
                    <div>
                        <span style={{ color: 'var(--color-syntax-bracket)' }}>{'}'}</span>
                        <span style={{ color: 'var(--color-syntax-operator)' }}>;</span>
                    </div>
                </div>
            </div>

            {/* Subtitle */}
            <p
                className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl"
                style={{ color: 'var(--color-vscode-text)' }}
            >
                {heroContent.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                    onClick={() => onNavigate('projects')}
                    className="flex items-center justify-center gap-2 px-8 py-3 rounded font-semibold text-sm transition-all hover:brightness-110"
                    style={{
                        backgroundColor: 'var(--color-vscode-button)',
                        color: '#ffffff',
                    }}
                >
                    {heroContent.cta.primary}
                    <ArrowRight size={16} />
                </button>
                <button
                    onClick={() => onNavigate('contact')}
                    className="flex items-center justify-center gap-2 px-8 py-3 rounded font-semibold text-sm transition-all border"
                    style={{
                        backgroundColor: 'var(--color-vscode-button-secondary)',
                        color: 'var(--color-vscode-text)',
                        borderColor: 'var(--color-vscode-border)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-button-secondary-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-button-secondary)'}
                >
                    {heroContent.cta.secondary}
                </button>
            </div>

            {/* Quick Links */}
            <div
                className="pt-8"
                style={{ borderTop: '1px solid var(--color-vscode-border)' }}
            >
                <h3
                    className="text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{ color: 'var(--color-vscode-text-dim)' }}
                >
                    Quick Links
                </h3>
                <div className="flex gap-4">
                    <a
                        href={footerContent.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors"
                        style={{
                            backgroundColor: 'var(--color-vscode-button-secondary)',
                            color: 'var(--color-vscode-text)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-button-secondary-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-button-secondary)'}
                        aria-label="Visit GitHub profile"
                    >
                        <Github size={16} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href={footerContent.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors"
                        style={{
                            backgroundColor: 'var(--color-vscode-button-secondary)',
                            color: 'var(--color-vscode-text)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-button-secondary-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-button-secondary)'}
                        aria-label="Visit LinkedIn profile"
                    >
                        <Linkedin size={16} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href={`mailto:${footerContent.email}`}
                        className="flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors"
                        style={{
                            backgroundColor: 'var(--color-vscode-button-secondary)',
                            color: 'var(--color-vscode-text)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-button-secondary-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-vscode-button-secondary)'}
                        aria-label="Send email"
                    >
                        <Mail size={16} />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
