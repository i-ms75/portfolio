import { aboutContent, techStackContent } from '../../data/content';

export default function AboutFile() {
    return (
        <div className="p-8 md:p-12 max-w-4xl mx-auto animate-fade-in md-preview">
            {/* Title */}
            <h1>README.md</h1>

            {/* About Me */}
            <h2>## About Me</h2>
            <p>{aboutContent.paragraphs[0]}</p>

            {/* What I Do */}
            <h2>## What I Do</h2>
            <ul>
                {aboutContent.whatIDo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* Experience Highlights */}
            <h2>## Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                {aboutContent.highlights.map((highlight) => (
                    <div
                        key={highlight.label}
                        className="p-4 rounded-lg text-center"
                        style={{
                            backgroundColor: 'var(--color-vscode-sidebar)',
                            border: '1px solid var(--color-vscode-border)',
                        }}
                    >
                        <div
                            className="text-2xl font-bold mb-1"
                            style={{ color: 'var(--color-vscode-accent)' }}
                        >
                            {highlight.value}
                        </div>
                        <div
                            className="text-xs uppercase tracking-wider"
                            style={{ color: 'var(--color-vscode-text-dim)' }}
                        >
                            {highlight.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* More About Me */}
            <h2>## More About Me</h2>
            {aboutContent.paragraphs.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

            {/* Tech Stack */}
            <h2>## Tech Stack</h2>
            <pre>
                <code>
{techStackContent.categories.map((cat) => (
    <div key={cat.name}>
        <span style={{ color: 'var(--color-syntax-type)' }}>{cat.name}</span>
        <span style={{ color: 'var(--color-syntax-operator)' }}>: </span>
        <span style={{ color: 'var(--color-vscode-text)' }}>[{cat.items.join(', ')}]</span>
    </div>
))}
                </code>
            </pre>
        </div>
    );
}
