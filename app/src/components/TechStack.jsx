import { techStackContent } from '../data/content';

export default function TechStack() {
    const categoryColors = {
        'Core': 'from-amber-500 to-orange-600',
        'Integration & Cloud': 'from-electric-500 to-blue-600',
        'Frontend': 'from-emerald-500 to-teal-600'
    };

    return (
        <section id="skills" className="py-24 bg-charcoal-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {techStackContent.title}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        {techStackContent.subtitle}
                    </p>
                    <div className="w-20 h-1 bg-electric-500 mx-auto rounded-full mt-4" aria-hidden="true" />
                </div>

                {/* Tech Categories Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {techStackContent.categories.map((category) => (
                        <div
                            key={category.name}
                            className="bg-charcoal-800 rounded-2xl p-8 border border-charcoal-700 hover:border-electric-500/50 transition-all duration-300 group"
                        >
                            {/* Category Header */}
                            <div className="mb-6">
                                <div
                                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${categoryColors[category.name] || 'from-electric-500 to-blue-600'}`}
                                >
                                    {category.name}
                                </div>
                                <p className="text-slate-500 text-sm mt-3">
                                    {category.description}
                                </p>
                            </div>

                            {/* Tech Items */}
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-charcoal-700 text-slate-300 rounded-lg text-sm font-medium hover:bg-charcoal-600 hover:text-white transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
