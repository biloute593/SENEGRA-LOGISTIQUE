
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-brand-dark opacity-60"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-widest text-shadow-lg">
                    SENEGRA LOGISTIQUE
                </h1>
                <p className="mt-4 text-xl md:text-2xl font-light max-w-3xl mx-auto">
                    Votre partenaire de confiance pour le BTP, le Génie Civil, la Logistique et le Transport au Sénégal.
                </p>
                <div className="mt-8">
                    <a
                        href="#contact"
                        className="bg-brand-yellow text-brand-dark font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wider hover:bg-yellow-400 transition-transform transform hover:scale-105"
                    >
                        Demander un devis
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
