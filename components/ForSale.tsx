
import React from 'react';
// TEST MODIFICATION POUR GIT
import { PRODUCTS_FOR_SALE } from '../constants';
import type { Product, RequestItem } from '../types';

interface ForSaleProps {
    onAddToRequest: (item: RequestItem) => void;
    requestList: RequestItem[];
}

const ForSale: React.FC<ForSaleProps> = ({ onAddToRequest, requestList }) => {
    return (
        <section className="bg-gray-100 py-20 sm:py-28 text-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Produits en <span className="text-brand-blue">Vente</span></h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Pièces, moteurs, conteneurs et véhicules d'occasion pour répondre à tous vos besoins.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PRODUCTS_FOR_SALE.map((product) => {
                        const isInRequest = requestList.some(item => item.id === product.id);
                        return (
                             <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-display tracking-wide">{product.name}</h3>
                                    <p className="text-gray-500 mb-4 h-12 overflow-hidden">{product.description}</p>
                                    <button
                                        onClick={() => onAddToRequest({ id: product.id, name: product.name, type: 'purchase' })}
                                        disabled={isInRequest}
                                        className={`w-full font-bold py-2 px-4 rounded transition-colors duration-300 ${
                                            isInRequest
                                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                : 'bg-brand-blue text-white hover:bg-blue-900'
                                        }`}
                                    >
                                        {isInRequest ? 'Ajouté ✓' : 'Ajouter à la demande'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ForSale;
