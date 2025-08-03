
import React from 'react';
import { RENTAL_FLEET } from '../constants';
import type { Equipment, RequestItem } from '../types';

interface RentalFleetProps {
    onAddToRequest: (item: RequestItem) => void;
    requestList: RequestItem[];
}

const RentalFleet: React.FC<RentalFleetProps> = ({ onAddToRequest, requestList }) => {
    return (
        <section className="bg-white py-20 sm:py-28 text-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Machines en <span className="text-brand-blue">Location</span></h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Équipements performants et opérateurs qualifiés pour garantir le succès de vos chantiers.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {RENTAL_FLEET.map((equipment) => {
                        const isInRequest = requestList.some(item => item.id === equipment.id);
                        return (
                            <div key={equipment.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden group">
                                <img src={equipment.imageUrl} alt={equipment.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-display tracking-wide">{equipment.name}</h3>
                                    <p className="text-gray-500 mb-4">{equipment.category}</p>
                                    <button
                                        onClick={() => onAddToRequest({ id: equipment.id, name: equipment.name, type: 'rental' })}
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

export default RentalFleet;
