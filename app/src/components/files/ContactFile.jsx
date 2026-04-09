import { footerContent } from '../../data/content';

function SyntaxLine({ children, indent = 0 }) {
    return (
        <div className="code-line" style={{ paddingLeft: `${indent * 20 + 16}px` }}>
            {children}
        </div>
    );
}

function Selector({ children }) {
    return <span style={{ color: 'var(--color-syntax-tag)' }}>{children}</span>;
}

function Property({ children }) {
    return <span style={{ color: 'var(--color-syntax-variable)' }}>{children}</span>;
}

function Value({ children, href }) {
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-syntax-string)' }}
                className="hover:underline"
            >
                {children}
            </a>
        );
    }
    return <span style={{ color: 'var(--color-syntax-string)' }}>{children}</span>;
}

function Comment({ children }) {
    return <span style={{ color: 'var(--color-syntax-comment)' }}>{children}</span>;
}

function Punct({ children }) {
    return <span style={{ color: 'var(--color-syntax-punctuation)' }}>{children}</span>;
}

function Bracket({ children }) {
    return <span style={{ color: 'var(--color-syntax-bracket)' }}>{children}</span>;
}

export default function ContactFile() {
    return (
        <div className="py-4 animate-fade-in font-mono text-sm">
            {/* Header */}
            <SyntaxLine>
                <Comment>/* ======================</Comment>
            </SyntaxLine>
            <SyntaxLine>
                <Comment>   Contact Information</Comment>
            </SyntaxLine>
            <SyntaxLine>
                <Comment>   Let's connect!</Comment>
            </SyntaxLine>
            <SyntaxLine>
                <Comment>   ====================== */</Comment>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* .contact selector */}
            <SyntaxLine>
                <Selector>.contact</Selector> <Bracket>{'{'}</Bracket>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Property>email</Property><Punct>: </Punct>
                <Value href={`mailto:${footerContent.email}`}>{footerContent.email}</Value>
                <Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Property>phone</Property><Punct>: </Punct>
                <Value href={`tel:${footerContent.phone}`}>{footerContent.phone}</Value>
                <Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine>
                <Bracket>{'}'}</Bracket>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* .social selector */}
            <SyntaxLine>
                <Selector>.social-links</Selector> <Bracket>{'{'}</Bracket>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Property>github</Property><Punct>: </Punct>
                <Value href={footerContent.social.github}>{footerContent.social.github}</Value>
                <Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Property>linkedin</Property><Punct>: </Punct>
                <Value href={footerContent.social.linkedin}>{footerContent.social.linkedin}</Value>
                <Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine>
                <Bracket>{'}'}</Bracket>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* .tagline selector */}
            <SyntaxLine>
                <Selector>.tagline</Selector> <Bracket>{'{'}</Bracket>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Property>content</Property><Punct>: </Punct>
                <Value>"{footerContent.tagline}"</Value>
                <Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine>
                <Bracket>{'}'}</Bracket>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* Visual Contact Cards */}
            <SyntaxLine>
                <Comment>/* --- Rendered Contact Cards --- */</Comment>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            <div className="px-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                    {/* Email Card */}
                    <a
                        href={`mailto:${footerContent.email}`}
                        className="p-4 rounded-lg transition-all hover:scale-[1.02] group"
                        style={{
                            backgroundColor: 'var(--color-vscode-sidebar)',
                            border: '1px solid var(--color-vscode-border)',
                        }}
                    >
                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-vscode-text-dim)' }}>
                            Email
                        </div>
                        <div className="text-sm font-medium group-hover:underline" style={{ color: 'var(--color-vscode-accent)' }}>
                            {footerContent.email}
                        </div>
                    </a>

                    {/* Phone Card */}
                    <a
                        href={`tel:${footerContent.phone}`}
                        className="p-4 rounded-lg transition-all hover:scale-[1.02] group"
                        style={{
                            backgroundColor: 'var(--color-vscode-sidebar)',
                            border: '1px solid var(--color-vscode-border)',
                        }}
                    >
                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-vscode-text-dim)' }}>
                            Phone
                        </div>
                        <div className="text-sm font-medium group-hover:underline" style={{ color: 'var(--color-vscode-accent)' }}>
                            {footerContent.phone}
                        </div>
                    </a>

                    {/* GitHub Card */}
                    <a
                        href={footerContent.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-lg transition-all hover:scale-[1.02] group"
                        style={{
                            backgroundColor: 'var(--color-vscode-sidebar)',
                            border: '1px solid var(--color-vscode-border)',
                        }}
                    >
                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-vscode-text-dim)' }}>
                            GitHub
                        </div>
                        <div className="text-sm font-medium group-hover:underline" style={{ color: 'var(--color-vscode-accent)' }}>
                            github.com/i-ms75
                        </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href={footerContent.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-lg transition-all hover:scale-[1.02] group"
                        style={{
                            backgroundColor: 'var(--color-vscode-sidebar)',
                            border: '1px solid var(--color-vscode-border)',
                        }}
                    >
                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-vscode-text-dim)' }}>
                            LinkedIn
                        </div>
                        <div className="text-sm font-medium group-hover:underline" style={{ color: 'var(--color-vscode-accent)' }}>
                            linkedin.com/in/msingh75
                        </div>
                    </a>
                </div>
            </div>

            <SyntaxLine>&nbsp;</SyntaxLine>
            <SyntaxLine>
                <Comment>/* {footerContent.copyright} */</Comment>
            </SyntaxLine>
        </div>
    );
}
