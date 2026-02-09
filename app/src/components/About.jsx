import { Award, Building2, Calendar } from 'lucide-react';
import { aboutContent } from '../data/content';

export default function About() {
    const icons = [Calendar, Building2, Award];

    return (
        <section id="about" className="py-24 bg-charcoal-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {aboutContent.title}
                    </h2>
                    <div className="w-20 h-1 bg-electric-500 mx-auto rounded-full" aria-hidden="true" />
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {aboutContent.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-slate-300 text-lg leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Highlights Card */}
                    <div className="bg-charcoal-800 rounded-2xl p-8 border border-charcoal-700">
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Facts</h3>
                        <div className="space-y-6">
                            {aboutContent.highlights.map((highlight, index) => {
                                const Icon = icons[index];
                                return (
                                    <div key={highlight.label} className="flex items-center gap-4">
                                        <div className="p-3 bg-electric-500/10 rounded-lg">
                                            <Icon size={24} className="text-electric-400" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-sm">{highlight.label}</p>
                                            <p className="text-white font-semibold">{highlight.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
