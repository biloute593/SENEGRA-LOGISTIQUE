import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark border-t border-brand-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} SENEGRA LOGISTIQUE. Tous droits réservés.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">Mentions Légales</a>
                        <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">CGU</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
