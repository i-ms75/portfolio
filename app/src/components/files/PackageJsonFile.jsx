import { useMemo } from 'react';
import { heroContent, techStackContent } from '../../data/content';

// Generate stable version numbers from skill name
function stableVersion(name, index) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = ((hash << 5) - hash) + name.charCodeAt(i);
        hash |= 0;
    }
    const major = (Math.abs(hash) % 5) + 1;
    const minor = (Math.abs(hash >> 4) % 10);
    const patch = (Math.abs(hash >> 8) % 10);
    return `^${major}.${minor}.${patch}`;
}

function SyntaxLine({ children, indent = 0 }) {
    return (
        <div className="code-line" style={{ paddingLeft: `${indent * 20 + 16}px` }}>
            {children}
        </div>
    );
}

function Prop({ children }) {
    return <span style={{ color: 'var(--color-syntax-property)' }}>"{children}"</span>;
}

function Str({ children }) {
    return <span style={{ color: 'var(--color-syntax-string)' }}>"{children}"</span>;
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

function Bool({ children }) {
    return <span style={{ color: 'var(--color-syntax-keyword)' }}>{children}</span>;
}

export default function PackageJsonFile() {
    const allSkills = techStackContent.categories.flatMap(c => c.items);

    return (
        <div className="py-4 animate-fade-in font-mono text-sm">
            <SyntaxLine>
                <Bracket>{'{'}</Bracket>
            </SyntaxLine>

            {/* Name */}
            <SyntaxLine indent={1}>
                <Prop>name</Prop><Punct>: </Punct>
                <Str>manmohan-kushwaha-portfolio</Str><Punct>,</Punct>
            </SyntaxLine>

            {/* Version */}
            <SyntaxLine indent={1}>
                <Prop>version</Prop><Punct>: </Punct>
                <Str>3.0.0</Str><Punct>,</Punct>
            </SyntaxLine>

            {/* Description */}
            <SyntaxLine indent={1}>
                <Prop>description</Prop><Punct>: </Punct>
                <Str>{heroContent.subtitle}</Str><Punct>,</Punct>
            </SyntaxLine>

            {/* Main */}
            <SyntaxLine indent={1}>
                <Prop>main</Prop><Punct>: </Punct>
                <Str>brain.js</Str><Punct>,</Punct>
            </SyntaxLine>

            {/* Private */}
            <SyntaxLine indent={1}>
                <Prop>private</Prop><Punct>: </Punct>
                <Bool>true</Bool><Punct>,</Punct>
            </SyntaxLine>

            {/* Author */}
            <SyntaxLine indent={1}>
                <Prop>author</Prop><Punct>: </Punct>
                <Bracket>{'{'}</Bracket>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>name</Prop><Punct>: </Punct>
                <Str>{heroContent.name}</Str><Punct>,</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>email</Prop><Punct>: </Punct>
                <Str>mkush575@gmail.com</Str><Punct>,</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>url</Prop><Punct>: </Punct>
                <Str>https://github.com/i-ms75</Str>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Bracket>{'}'}</Bracket><Punct>,</Punct>
            </SyntaxLine>

            {/* Scripts */}
            <SyntaxLine indent={1}>
                <Prop>scripts</Prop><Punct>: </Punct>
                <Bracket>{'{'}</Bracket>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>start</Prop><Punct>: </Punct>
                <Str>think && code && deploy</Str><Punct>,</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>build</Prop><Punct>: </Punct>
                <Str>caffeine --input=coffee --output=features</Str><Punct>,</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>test</Prop><Punct>: </Punct>
                <Str>hope-for-the-best && check-prod</Str><Punct>,</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>debug</Prop><Punct>: </Punct>
                <Str>stare-at-screen --duration=2h && eureka</Str>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Bracket>{'}'}</Bracket><Punct>,</Punct>
            </SyntaxLine>

            {/* Dependencies */}
            <SyntaxLine indent={1}>
                <Prop>dependencies</Prop><Punct>: </Punct>
                <Bracket>{'{'}</Bracket>
            </SyntaxLine>
            {allSkills.map((skill, i) => (
                <SyntaxLine indent={2} key={skill}>
                    <Prop>{skill.toLowerCase().replace(/\s+/g, '-')}</Prop><Punct>: </Punct>
                    <Str>{stableVersion(skill, i)}</Str>
                    {i < allSkills.length - 1 && <Punct>,</Punct>}
                </SyntaxLine>
            ))}
            <SyntaxLine indent={1}>
                <Bracket>{'}'}</Bracket><Punct>,</Punct>
            </SyntaxLine>

            {/* Dev Dependencies */}
            <SyntaxLine indent={1}>
                <Prop>devDependencies</Prop><Punct>: </Punct>
                <Bracket>{'{'}</Bracket>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>curiosity</Prop><Punct>: </Punct>
                <Str>^∞.0.0</Str><Punct>,</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>coffee</Prop><Punct>: </Punct>
                <Str>^99.9.9</Str><Punct>,</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>quantum-mechanics</Prop><Punct>: </Punct>
                <Str>^superposition</Str><Punct>,</Punct>
            </SyntaxLine>
            <SyntaxLine indent={2}>
                <Prop>motorcycle-therapy</Prop><Punct>: </Punct>
                <Str>^weekend-only</Str>
            </SyntaxLine>
            <SyntaxLine indent={1}>
                <Bracket>{'}'}</Bracket>
            </SyntaxLine>

            <SyntaxLine>
                <Bracket>{'}'}</Bracket>
            </SyntaxLine>
        </div>
    );
}
