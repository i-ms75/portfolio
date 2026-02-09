import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { heroContent, footerContent } from '../data/content';

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
        >
            {/* Background Gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950"
                aria-hidden="true"
            />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59. 130, 246) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
                aria-hidden="true"
            />

            {/* Glow Effect */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl"
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Greeting */}
                <p className="text-electric-400 text-lg mb-4 font-medium animate-fade-in">
                    {heroContent.greeting}
                </p>

                {/* Name */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
                    {heroContent.name}
                </h1>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl md:text-3xl gradient-text font-semibold mb-6 max-w-3xl mx-auto">
                    {heroContent.tagline}
                </p>

                {/* Subtitle */}
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    {heroContent.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-electric-500 text-white font-semibold rounded-lg hover:bg-electric-600 transition-all duration-300 glow-hover"
                    >
                        {heroContent.cta.primary}
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-charcoal-700 text-white font-semibold rounded-lg border border-charcoal-600 hover:border-electric-500 hover:bg-charcoal-600 transition-all duration-300"
                    >
                        {heroContent.cta.secondary}
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    <a
                        href={footerContent.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-charcoal-800 rounded-full text-slate-400 hover:text-electric-400 hover:bg-charcoal-700 transition-all duration-300"
                        aria-label="Visit GitHub profile"
                    >
                        <Github size={24} aria-hidden="true" />
                    </a>
                    <a
                        href={footerContent.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-charcoal-800 rounded-full text-slate-400 hover:text-electric-400 hover:bg-charcoal-700 transition-all duration-300"
                        aria-label="Visit LinkedIn profile"
                    >
                        <Linkedin size={24} aria-hidden="true" />
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" aria-label="Scroll to About section">
                    <ChevronDown size={32} className="text-slate-500" aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}
