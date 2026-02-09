import { Brain } from 'lucide-react';
import { projectsContent } from '../data/content';
import { usePhilosophy } from '../context/PhilosophyContext';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const { isPhilosophical } = usePhilosophy();

    return (
        <section id="projects" className="py-24 bg-charcoal-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {projectsContent.title}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        {projectsContent.subtitle}
                    </p>
                    <div className="w-20 h-1 bg-electric-500 mx-auto rounded-full mt-4" aria-hidden="true" />

                    {/* Philosophy Mode Indicator */}
                    {isPhilosophical && (
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/30 rounded-full text-electric-400 text-sm">
                            <Brain size={16} aria-hidden="true" />
                            <span>Philosophy Mode Active — experiencing existential project descriptions</span>
                        </div>
                    )}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projectsContent.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
