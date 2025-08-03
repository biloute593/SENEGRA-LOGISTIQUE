
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import RentalFleet from './components/RentalFleet';
import ForSale from './components/ForSale';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { RequestItem } from './types';

const App: React.FC = () => {
    const [requestList, setRequestList] = useState<RequestItem[]>([]);

    const addToRequest = useCallback((item: RequestItem) => {
        setRequestList(prevList => {
            if (prevList.find(i => i.id === item.id)) {
                return prevList; // Already in list
            }
            return [...prevList, item];
        });
    }, []);

    const removeFromRequest = useCallback((itemId: string) => {
        setRequestList(prevList => prevList.filter(item => item.id !== itemId));
    }, []);

    const clearRequest = useCallback(() => {
        setRequestList([]);
    }, []);

    return (
        <div className="bg-white scroll-smooth">
            <Header requestCount={requestList.length} />
            <main>
                <Hero />
                <div id="services" className="pt-20">
                    <Services />
                </div>
                <div id="rental" className="pt-20">
                    <RentalFleet onAddToRequest={addToRequest} requestList={requestList} />
                </div>
                <div id="sale" className="pt-20">
                    <ForSale onAddToRequest={addToRequest} requestList={requestList}/>
                </div>
                <div id="projects" className="pt-20">
                    <Projects />
                </div>
                <div id="testimonials" className="pt-20">
                    <Testimonials />
                </div>
                <div id="contact" className="pt-20">
                    <Contact requestList={requestList} onRemoveItem={removeFromRequest} onClearRequest={clearRequest} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
