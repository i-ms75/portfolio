import { techStackContent } from '../../data/content';

function SyntaxLine({ children, indent = 0 }) {
    return (
        <div className="code-line" style={{ paddingLeft: `${indent * 20 + 16}px` }}>
            {children}
        </div>
    );
}

function Keyword({ children }) {
    return <span style={{ color: 'var(--color-syntax-keyword)' }}>{children}</span>;
}

function Str({ children }) {
    return <span style={{ color: 'var(--color-syntax-string)' }}>'{children}'</span>;
}

function Func({ children }) {
    return <span style={{ color: 'var(--color-syntax-function)' }}>{children}</span>;
}

function Type({ children }) {
    return <span style={{ color: 'var(--color-syntax-type)' }}>{children}</span>;
}

function Variable({ children }) {
    return <span style={{ color: 'var(--color-syntax-variable)' }}>{children}</span>;
}

function Comment({ children }) {
    return <span style={{ color: 'var(--color-syntax-comment)' }}>{children}</span>;
}

function Bracket({ children }) {
    return <span style={{ color: 'var(--color-syntax-bracket)' }}>{children}</span>;
}

function Punct({ children }) {
    return <span style={{ color: 'var(--color-syntax-punctuation)' }}>{children}</span>;
}

function Tag({ children }) {
    return <span style={{ color: 'var(--color-syntax-tag)' }}>{children}</span>;
}

function Attr({ children }) {
    return <span style={{ color: 'var(--color-syntax-attr)' }}>{children}</span>;
}

export default function SkillsFile() {
    return (
        <div className="py-4 animate-fade-in font-mono text-sm">
            {/* Import */}
            <SyntaxLine>
                <Keyword>import</Keyword>{' '}
                <Bracket>{'{'}</Bracket>{' '}
                <Variable>React</Variable>{' '}
                <Bracket>{'}'}</Bracket>{' '}
                <Keyword>from</Keyword>{' '}
                <Str>react</Str>
                <Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* Comment */}
            <SyntaxLine>
                <Comment>// {techStackContent.subtitle}</Comment>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* Skills Data */}
            <SyntaxLine>
                <Keyword>const</Keyword>{' '}
                <Variable>skills</Variable>{' '}
                <Punct>=</Punct>{' '}
                <Bracket>{'{'}</Bracket>
            </SyntaxLine>

            {techStackContent.categories.map((category, catIdx) => (
                <div key={category.name}>
                    <SyntaxLine indent={1}>
                        <Comment>// {category.description}</Comment>
                    </SyntaxLine>
                    <SyntaxLine indent={1}>
                        <Variable>{category.name.toLowerCase().replace(/[^a-z]/g, '_').replace(/_+/g, '_')}</Variable>
                        <Punct>: </Punct>
                        <Bracket>[</Bracket>
                    </SyntaxLine>
                    {category.items.map((item, itemIdx) => (
                        <SyntaxLine indent={2} key={item}>
                            <Str>{item}</Str>
                            {itemIdx < category.items.length - 1 && <Punct>,</Punct>}
                        </SyntaxLine>
                    ))}
                    <SyntaxLine indent={1}>
                        <Bracket>]</Bracket>
                        {catIdx < techStackContent.categories.length - 1 && <Punct>,</Punct>}
                    </SyntaxLine>
                </div>
            ))}

            <SyntaxLine>
                <Bracket>{'}'}</Bracket>
                <Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* Component */}
            <SyntaxLine>
                <Keyword>export</Keyword>{' '}
                <Keyword>default</Keyword>{' '}
                <Keyword>function</Keyword>{' '}
                <Func>Skills</Func>
                <Bracket>()</Bracket>{' '}
                <Bracket>{'{'}</Bracket>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Keyword>return</Keyword>{' '}
                <Punct>(</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Punct>&lt;</Punct><Tag>div</Tag>{' '}
                <Attr>className</Attr><Punct>=</Punct><Str>skills-container</Str><Punct>&gt;</Punct>
            </SyntaxLine>

            {/* Render each category as JSX */}
            {techStackContent.categories.map((category) => (
                <div key={category.name}>
                    <SyntaxLine indent={3}>
                        <Punct>&lt;</Punct><Tag>section</Tag>{' '}
                        <Attr>id</Attr><Punct>=</Punct><Str>{category.name.toLowerCase().replace(/[^a-z]/g, '-')}</Str><Punct>&gt;</Punct>
                    </SyntaxLine>
                    <SyntaxLine indent={4}>
                        <Punct>&lt;</Punct><Tag>h3</Tag><Punct>&gt;</Punct>
                        <span style={{ color: 'var(--color-vscode-text)' }}>{category.name}</span>
                        <Punct>&lt;/</Punct><Tag>h3</Tag><Punct>&gt;</Punct>
                    </SyntaxLine>

                    {/* Skills as visual tags */}
                    <SyntaxLine indent={4}>
                        <Punct>&lt;</Punct><Tag>div</Tag>{' '}
                        <Attr>className</Attr><Punct>=</Punct><Str>skill-tags</Str><Punct>&gt;</Punct>
                    </SyntaxLine>

                    {/* Render actual visual skill tags */}
                    <div className="pl-20 py-2 flex flex-wrap gap-2">
                        {category.items.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1.5 rounded text-xs font-medium transition-all hover:scale-105"
                                style={{
                                    backgroundColor: 'var(--color-vscode-selection)',
                                    color: 'var(--color-syntax-variable)',
                                    border: '1px solid var(--color-vscode-border)',
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <SyntaxLine indent={4}>
                        <Punct>&lt;/</Punct><Tag>div</Tag><Punct>&gt;</Punct>
                    </SyntaxLine>
                    <SyntaxLine indent={3}>
                        <Punct>&lt;/</Punct><Tag>section</Tag><Punct>&gt;</Punct>
                    </SyntaxLine>
                </div>
            ))}

            <SyntaxLine indent={2}>
                <Punct>&lt;/</Punct><Tag>div</Tag><Punct>&gt;</Punct>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Punct>)</Punct><Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine>
                <Bracket>{'}'}</Bracket>
            </SyntaxLine>
        </div>
    );
}
