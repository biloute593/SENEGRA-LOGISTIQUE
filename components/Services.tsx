
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section className="bg-brand-dark py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">Nos Domaines d'<span className="text-brand-yellow">Expertise</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Des solutions complètes pour tous vos projets de construction et de logistique.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div key={index} className="bg-brand-gray p-8 rounded-lg shadow-xl hover:shadow-brand-yellow/20 transition-shadow duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center mb-6">
                                {service.icon}
                                <h3 className="ml-4 font-display text-2xl font-semibold text-white">{service.title}</h3>
                            </div>
                            <p className="text-gray-300 mb-4">{service.description}</p>
                            <p className="text-gray-400 text-sm">{service.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
