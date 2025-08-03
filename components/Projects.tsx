
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
    return (
        <section className="bg-brand-dark py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">Nos <span className="text-brand-yellow">Réalisations</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Quelques exemples de projets menés à bien par nos équipes sur le terrain.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden group shadow-xl">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
                                <p className="text-brand-yellow">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
