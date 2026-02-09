import { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { navLinks } from '../data/content';
import { usePhilosophy } from '../context/PhilosophyContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isPhilosophical, togglePhilosophy } = usePhilosophy();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-950/80 backdrop-blur-md border-b border-charcoal-700">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-xl font-bold text-white hover:text-electric-400 transition-colors"
                        aria-label="Go to homepage"
                    >
                        MK<span className="text-electric-500">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-400 hover:text-electric-400 transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Philosophy Toggle */}
                        <button
                            onClick={togglePhilosophy}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isPhilosophical
                                    ? 'bg-electric-500 text-white'
                                    : 'bg-charcoal-700 text-slate-400 hover:bg-charcoal-600'
                                }`}
                            aria-label={isPhilosophical ? 'Switch to standard view' : 'Switch to philosophical view'}
                            aria-pressed={isPhilosophical}
                        >
                            <Brain size={16} aria-hidden="true" />
                            <span className="hidden lg:inline">
                                {isPhilosophical ? 'Philosophy Mode' : 'Normal Mode'}
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={togglePhilosophy}
                            className={`p-2 rounded-full transition-all ${isPhilosophical
                                    ? 'bg-electric-500 text-white'
                                    : 'bg-charcoal-700 text-slate-400'
                                }`}
                            aria-label={isPhilosophical ? 'Switch to standard view' : 'Switch to philosophical view'}
                            aria-pressed={isPhilosophical}
                        >
                            <Brain size={18} aria-hidden="true" />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-400 hover:text-white"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-charcoal-700">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-electric-400 transition-colors py-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
