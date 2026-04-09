import { projectsContent } from '../../data/content';
import { usePhilosophy } from '../../context/PhilosophyContext';

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
    return <span style={{ color: 'var(--color-syntax-string)' }}>"{children}"</span>;
}

function Prop({ children }) {
    return <span style={{ color: 'var(--color-syntax-property)' }}>"{children}"</span>;
}

function Num({ children }) {
    return <span style={{ color: 'var(--color-syntax-number)' }}>{children}</span>;
}

function Bracket({ children }) {
    return <span style={{ color: 'var(--color-syntax-bracket)' }}>{children}</span>;
}

function Punct({ children }) {
    return <span style={{ color: 'var(--color-syntax-punctuation)' }}>{children}</span>;
}

function Comment({ children }) {
    return <span style={{ color: 'var(--color-syntax-comment)' }}>{children}</span>;
}

function Link({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-syntax-string)' }}
            className="underline hover:opacity-80 transition-opacity"
        >
            "{children}"
        </a>
    );
}

export default function ProjectsFile() {
    const { isPhilosophical } = usePhilosophy();

    return (
        <div className="py-4 animate-fade-in font-mono text-sm">
            {/* Header Comment */}
            <SyntaxLine>
                <Comment>// Portfolio Projects</Comment>
            </SyntaxLine>
            <SyntaxLine>
                <Comment>// {isPhilosophical ? '🧠 Philosophy Mode Active — experiencing existential project descriptions' : projectsContent.subtitle}</Comment>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* Declaration */}
            <SyntaxLine>
                <Keyword>const</Keyword>{' '}
                <span style={{ color: 'var(--color-syntax-variable)' }}>projects</span>{' '}
                <Punct>=</Punct>{' '}
                <Bracket>[</Bracket>
            </SyntaxLine>

            {/* Projects Array */}
            {projectsContent.projects.map((project, pIdx) => {
                const content = isPhilosophical ? project.philosophical : project.standard;
                const isLast = pIdx === projectsContent.projects.length - 1;

                return (
                    <div key={project.id}>
                        <SyntaxLine indent={1}>
                            <Bracket>{'{'}</Bracket>
                        </SyntaxLine>

                        {/* ID */}
                        <SyntaxLine indent={2}>
                            <Prop>id</Prop><Punct>: </Punct><Num>{project.id}</Num><Punct>,</Punct>
                        </SyntaxLine>

                        {/* Name */}
                        <SyntaxLine indent={2}>
                            <Prop>name</Prop><Punct>: </Punct><Str>{project.title}</Str><Punct>,</Punct>
                        </SyntaxLine>

                        {/* Description */}
                        <SyntaxLine indent={2}>
                            <Prop>description</Prop><Punct>: </Punct><Str>{content.description}</Str><Punct>,</Punct>
                        </SyntaxLine>

                        {/* Link */}
                        {project.github && (
                            <SyntaxLine indent={2}>
                                <Prop>link</Prop><Punct>: </Punct>
                                <Link href={project.github}>{project.github}</Link>
                                <Punct>,</Punct>
                            </SyntaxLine>
                        )}

                        {/* Tags */}
                        <SyntaxLine indent={2}>
                            <Prop>tags</Prop><Punct>: </Punct>
                            <Bracket>[</Bracket>
                            {project.tech.map((t, i) => (
                                <span key={t}>
                                    <Str>{t}</Str>
                                    {i < project.tech.length - 1 && <Punct>, </Punct>}
                                </span>
                            ))}
                            <Bracket>]</Bracket>
                        </SyntaxLine>

                        {/* Details as comments */}
                        {content.details.map((detail, dIdx) => (
                            <SyntaxLine indent={2} key={dIdx}>
                                <Comment>// {detail}</Comment>
                            </SyntaxLine>
                        ))}

                        <SyntaxLine indent={1}>
                            <Bracket>{'}'}</Bracket>{!isLast && <Punct>,</Punct>}
                        </SyntaxLine>
                    </div>
                );
            })}

            <SyntaxLine>
                <Bracket>]</Bracket><Punct>;</Punct>
            </SyntaxLine>
            <SyntaxLine>&nbsp;</SyntaxLine>

            {/* Export */}
            <SyntaxLine>
                <Keyword>export</Keyword>{' '}
                <Keyword>default</Keyword>{' '}
                <span style={{ color: 'var(--color-syntax-variable)' }}>projects</span>
                <Punct>;</Punct>
            </SyntaxLine>
        </div>
    );
}
