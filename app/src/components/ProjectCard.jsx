import { Github, ExternalLink } from 'lucide-react';
import { usePhilosophy } from '../context/PhilosophyContext';

export default function ProjectCard({ project }) {
    const { isPhilosophical } = usePhilosophy();

    const content = isPhilosophical ? project.philosophical : project.standard;

    return (
        <article
            className="bg-charcoal-800 rounded-2xl overflow-hidden border border-charcoal-700 hover:border-electric-500/50 transition-all duration-300 group"
        >
            {/* Project Header with gradient */}
            <div className="h-2 bg-gradient-to-r from-electric-500 to-electric-400" aria-hidden="true" />

            <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-400 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className={`text-slate-300 mb-6 leading-relaxed ${isPhilosophical ? 'italic' : ''}`}>
                    {content.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-6" role="list">
                    {content.details.map((detail, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3 text-slate-400 text-sm"
                        >
                            <span className="text-electric-400 mt-1" aria-hidden="true">▹</span>
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-charcoal-700 text-electric-400 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-electric-400 transition-colors text-sm"
                            aria-label={`View ${project.title} source code on GitHub`}
                        >
                            <Github size={18} aria-hidden="true" />
                            <span>Source</span>
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-electric-400 transition-colors text-sm"
                            aria-label={`View ${project.title} live demo`}
                        >
                            <ExternalLink size={18} aria-hidden="true" />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
