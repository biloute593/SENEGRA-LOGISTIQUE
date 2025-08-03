
import React, { useState } from 'react';
import type { RequestItem } from '../types';

interface ContactProps {
    requestList: RequestItem[];
    onRemoveItem: (itemId: string) => void;
    onClearRequest: () => void;
}

const Contact: React.FC<ContactProps> = ({ requestList, onRemoveItem, onClearRequest }) => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: ''});
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        setSubmissionStatus('success');
        setFormState({ name: '', email: '', phone: '', message: ''});
        onClearRequest();
        setTimeout(() => setSubmissionStatus('idle'), 5000);
    };

    return (
        <section className="bg-white text-brand-dark py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Contact & <span className="text-brand-blue">Devis</span></h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Contactez-nous pour toute question ou pour obtenir un devis personnalisé.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form & Request List */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold font-display mb-6">Demande en ligne</h3>
                        {requestList.length > 0 && (
                            <div className="mb-6 p-4 border border-brand-yellow rounded-lg bg-yellow-50">
                                <h4 className="font-bold text-lg mb-2">Votre liste de demande :</h4>
                                <ul>
                                    {requestList.map(item => (
                                        <li key={item.id} className="flex justify-between items-center py-1">
                                            <span>{item.name} ({item.type === 'rental' ? 'Location' : 'Achat'})</span>
                                            <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700 text-xs font-bold" aria-label={`Retirer ${item.name} de la demande`}>X</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="name" placeholder="Votre nom complet" value={formState.name} onChange={handleInputChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                            <input type="email" name="email" placeholder="Votre adresse e-mail" value={formState.email} onChange={handleInputChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                            <input type="tel" name="phone" placeholder="Votre numéro de téléphone" value={formState.phone} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" />
                            <textarea name="message" placeholder="Votre message ou détails supplémentaires..." value={formState.message} onChange={handleInputChange} rows={5} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"></textarea>
                            <button type="submit" className="w-full bg-brand-yellow text-brand-dark font-bold py-3 px-6 rounded-lg text-lg uppercase tracking-wider hover:bg-yellow-400 transition-colors">Envoyer la demande</button>
                        </form>
                        {submissionStatus === 'success' && (
                            <p className="mt-4 text-center text-green-600 font-bold">Votre demande a bien été envoyée. Nous vous contacterons bientôt !</p>
                        )}
                    </div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                         <div>
                            <h3 className="text-2xl font-bold font-display mb-4">Nos Coordonnées</h3>
                            <div className="space-y-3 text-lg text-brand-gray">
                                <p><strong>Adresse :</strong> Cité Keur Gorgui, Lot 42, Dakar, Sénégal</p>
                                <p><strong>Téléphone :</strong> +221 33 824 00 00</p>
                                <p><strong>Email :</strong> contact@senegralogistique.com</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-display mb-4">Notre Localisation</h3>
                            <div className="h-80 rounded-lg shadow-lg overflow-hidden">
                               <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.04374382869!2d-17.478953088737233!3d14.71010197415494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173c3f3b9c069%3A0xe5a3c9a633a6f11c!2sCit%C3%A9%20Keur%20Gorgui%2C%20Dakar!5e0!3m2!1sen!2sfr!4v1678886400000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation de SENEGRA LOGISTIQUE"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
