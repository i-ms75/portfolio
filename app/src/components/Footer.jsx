import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { footerContent } from '../data/content';

export default function Footer() {
    return (
        <footer id="contact" className="bg-charcoal-950 border-t border-charcoal-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Branding */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            MK<span className="text-electric-500">.</span>
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            {footerContent.tagline}
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
                        <div className="space-y-3">
                            <a
                                href={`mailto:${footerContent.email}`}
                                className="flex items-center gap-3 text-slate-400 hover:text-electric-400 transition-colors"
                                aria-label={`Send email to ${footerContent.email}`}
                            >
                                <Mail size={18} aria-hidden="true" />
                                <span>{footerContent.email}</span>
                            </a>
                            <a
                                href={`tel:${footerContent.phone}`}
                                className="flex items-center gap-3 text-slate-400 hover:text-electric-400 transition-colors"
                                aria-label={`Call ${footerContent.phone}`}
                            >
                                <Phone size={18} aria-hidden="true" />
                                <span>{footerContent.phone}</span>
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href={footerContent.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-charcoal-800 rounded-lg text-slate-400 hover:text-electric-400 hover:bg-charcoal-700 transition-all"
                                aria-label="Visit GitHub profile"
                            >
                                <Github size={22} aria-hidden="true" />
                            </a>
                            <a
                                href={footerContent.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-charcoal-800 rounded-lg text-slate-400 hover:text-electric-400 hover:bg-charcoal-700 transition-all"
                                aria-label="Visit LinkedIn profile"
                            >
                                <Linkedin size={22} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-charcoal-800 pt-8">
                    <p className="text-slate-500 text-sm text-center">
                        {footerContent.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
