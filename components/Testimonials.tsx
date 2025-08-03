
import React from 'react';
import { TESTIMONIALS } from '../constants';

const QuoteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q.386-1.173.758-2.226.346-1.004.346-1.004a.496.496 0 0 0-.12-.364.51.51 0 0 0-.35-.12H8.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1.388q-.386 1.173-.758 2.226-.346 1.004-.346-1.004a.496.496 0 0 0 .12.364.51.51 0 0 0 .35.12h1.5Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q.386-1.173.758-2.226.346-1.004.346-1.004a.496.496 0 0 0-.12-.364.51.51 0 0 0-.35-.12H2.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1.388q-.386 1.173-.758 2.226-.346 1.004-.346-1.004a.496.496 0 0 0 .12.364.51.51 0 0 0 .35.12h1.5Z"/>
    </svg>
);


const Testimonials: React.FC = () => {
    return (
        <section className="bg-gray-100 py-20 sm:py-28 text-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Ce que disent nos <span className="text-brand-blue">Clients</span></h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">La satisfaction de nos partenaires est notre plus grande fierté.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
                            <QuoteIcon className="w-10 h-10 text-brand-yellow mb-4" />
                            <blockquote className="flex-grow">
                                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                            </blockquote>
                            <footer className="mt-auto">
                                <p className="font-bold text-brand-dark font-display text-xl">{testimonial.author}</p>
                                <p className="text-gray-500">{testimonial.company}</p>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
